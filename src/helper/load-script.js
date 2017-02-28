import browser from './browser'

function loadScript(src, cb) {
    let isIE = browser.isIE()
    let doc = document
    let tag = 'script'
    let el = doc.createElement(tag)

    el.done = false
    el.async = true
    el.charset = 'utf-8'

    if (isIE && isIE < 9) { // IE 9 미반에서는
        el.onreadystatechange = function () { // readyState 값을 사용해 LOAD/FAIL을 처리한다
            if (!el.done && /loaded|complete/.test(this.readyState)) {
                _handleIE()
            }
        }
    }

    el.onload = function () { // ONLOAD를 사용할 수 있는 경우
        _handleOnload()
    }

    el.src = src

    if (!isIE || isIE >= 9) { // 비 IE 계열 및 IE 9 이상 부터는 DOM이 Append 되어야 Script를 Request 한다
        _appendTo(document.head || document.getElementsByTagName('head')[0])
    }

    // IE에서는 readyState와 일부 hack을 사용한다
    // (use code from http://stackoverflow.com/a/18840568)
    function _handleIE() {
        if (el.readyState === 'complete') {
            _appendTo(document.head || document.getElementsByTagName('head')[0])
            el.onreadystatechange = null

            _handleOnload()
            return
        }

        let firstState = el.readyState

        // hack: calling 'children' property changes node's readyState from 'loaded' to complete
        // (if script was loaded normally) or to 'loading' - if error detected
        el.children

        // error detected
        if (el.readyState === 'loading' && firstState === 'loaded') {
            // custom error code
            _handleOnError(new Error('failed load: ' + src))
        }
    }

    function _handleOnload() {
        el.done = true
        cb()
        _destroyTag()
    }

    function _handleOnError(err) {
        cb(err)
        _destroyTag()
    }

    function _destroyTag() {
        // Handle memory leak in IE
        el.onreadystatechange = null
        el.onload = null
        el.onerror = null
        el.parentNode.removeChild(el)
    }

    function _appendTo(base) {
        base.appendChild(el)
    }
}

export default loadScript
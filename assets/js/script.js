// declaraction of document.ready() function.
(function () {
    var ie = !!(window.attachEvent && !window.opera);
    var wk = /webkit\/(\d+)/i.test(navigator.userAgent) && (RegExp.$1 < 525);
    var fn = [];
    var run = function () {
        for (var i = 0; i < fn.length; i++) fn[i]();
    };
    var d = document;
    d.ready = function (f) {
        if (!ie && !wk && d.addEventListener)
            return d.addEventListener('DOMContentLoaded', f, false);
        if (fn.push(f) > 1) return;
        if (ie)
            (function () {
                try {
                    d.documentElement.doScroll('left');
                    run();
                } catch (err) {
                    setTimeout(arguments.callee, 0);
                }
            })();
        else if (wk)
            var t = setInterval(function () {
                if (/^(loaded|complete)$/.test(d.readyState))
                    clearInterval(t), run();
            }, 0);
    };
})();


document.ready(
    // toggleTheme function.
    // this script shouldn't be changed.
    function () {
        var _Blog = window._Blog || {};
        const currentTheme = window.localStorage && window.localStorage.getItem('theme');
        const isDark = currentTheme === 'dark';
        if (isDark) {
            document.getElementById("switch_default").checked = true;
            // mobile
            document.getElementById("mobile-toggle-theme").innerText = "· Dark"
        } else {
            document.getElementById("switch_default").checked = false;
            // mobile
            document.getElementById("mobile-toggle-theme").innerText = "· Dark"
        }
        _Blog.toggleTheme = function () {
            if (isDark) {
                document.getElementsByTagName('body')[0].classList.add('hacker-theme');
                // mobile
                document.getElementById("mobile-toggle-theme").innerText = "· Hacker"
            } else {
                document.getElementsByTagName('body')[0].classList.remove('hacker-theme');
                // mobile
                document.getElementById("mobile-toggle-theme").innerText = "· Light"
            }
            document.getElementsByClassName('toggleBtn')[0].addEventListener('click', () => {
                if (document.getElementsByTagName('body')[0].classList.contains('hacker-theme')) {
                    document.getElementsByTagName('body')[0].classList.remove('hacker-theme');
                } else {
                    document.getElementsByTagName('body')[0].classList.add('hacker-theme');
                }
                window.localStorage &&
                window.localStorage.setItem('theme', document.body.classList.contains('hacker-theme') ? 'hacker' : 'light',)
            })
            // moblie
            document.getElementById('mobile-toggle-theme').addEventListener('click', () => {
                if (document.getElementsByTagName('body')[0].classList.contains('hacker-theme')) {
                    document.getElementsByTagName('body')[0].classList.remove('hacker-theme');
                    // mobile
                    document.getElementById("mobile-toggle-theme").innerText = "· Light"

                } else {
                    document.getElementsByTagName('body')[0].classList.add('hacker-theme');
                    // mobile
                    document.getElementById("mobile-toggle-theme").innerText = "· Hacker"
                }
                window.localStorage &&
                window.localStorage.setItem('theme', document.body.classList.contains('hacker-theme') ? 'hacker' : 'light',)
            })
        };
        _Blog.toggleTheme();

        // ready function.

    }
);
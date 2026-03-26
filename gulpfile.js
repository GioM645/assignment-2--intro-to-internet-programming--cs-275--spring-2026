const {src, dest} = require('gulp'),
    CSSLinter = require('gulp-stylelint'),
    babel = require(gulp-babel),
    javaScriptLinting = require('gulp-eslint'),
    browser = require(browser-sync),
    reload = browser.reload;

    let userBrowser = 'default';

    async function firefox () {
        userBrowser = 'firefox';
    }

    async function brave () {
        userBrowser = 'brave browser';
    }

    async function browserList () {
        userBrowser = [
            'firefox',
            'brave browser'
        ];
    }

    let lintCSS = () => {
        
    }

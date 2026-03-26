const {src, dest, series, watch} = require('gulp'),
    CSSLinter = require('gulp-stylelint'),
    babel = require('gulp-babel'),
    javaScriptUglify = require('gulp-uglify'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

    let userBrowser = 'default';

    async function firefox () {
        userBrowser = 'firefox';
    };

    async function brave () {
        userBrowser = 'brave browser';
    };

    async function chrome () {
        userBrowser = 'google chrome'
    }

    async function browserList () {
        userBrowser = [
            'firefox',
            'brave browser',
            'google chrome'
        ];
    };

    let lintCSS = () => {
        return src('styles/main.css')
        .pipe(CSSLinter())
        .pipe(dest('test'));
    };

    let transpileAndCompressJS = () => {
        return src('js/main.js')
        .pipe(babel())
        .pipe(javaScriptUglify())
        .pipe(dest('temp/scripts'))
    };

    let copyFiles = () => {
        return src([
            'assignment-2--intro-to-internet-programming--cs-275--spring-2026/*.*',
            '!assignment-2--intro-to-internet-programming--cs-275--spring-2026/**',
            '!assignment-2--intro-to-internet-programming--cs-275--spring-2026/index.html',
            '!assignment-2--intro-to-internet-programming--cs-275--spring-2026/img/',
            '!assignment-2--intro-to-internet-programming--cs-275--spring-2026/img/.gitignore',
            '!assignment-2--intro-to-internet-programming--cs-275--spring-2026/**/*.js'
        ], {dot:true})
            .pipe(dest('prod'))
    };

    let serveSite = () => {
        browserSync ({
            notify: true,
            reloadDelay: 25,
            browser: userBrowser,
            server: {
                baseDir: [
                    'temp',
                    'assignment-2--intro-to-internet-programming--cs-275--spring-2026',
                    'assignment-2--intro-to-internet-programming--cs-275--spring-2026/index.html'
                ]
            }
        });
    }

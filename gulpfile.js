/*
~~ Resources Used ~~
Used for formatting and start assistance: https://github.com/code-warrior/gulp-template-for-html-css-sass-js
Build knowledge and understand functions/syntax: https://gulpjs.com/docs/en/api/concepts
*/

const {src, dest, series} = require('gulp'),
    CSSUglify = require('gulp-clean-css'),
    babel = require('gulp-babel'),
    htmlUglify = require('gulp-htmlmin');
    javaScriptUglify = require('gulp-uglify'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    GulpCleanCss = require('gulp-clean-css');

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

    let comrpressHTML = () => {
        return src('index.html')
        .pipe(htmlUglify({collapseWhitespace:true}))
        .pipe(dest(`prod`));
};

    let compressCSS = () => {
        return src('styles/main.css')
        .pipe(GulpCleanCss({compatibility:'es5'}))
        .pipe(dest('prod/styles'));
    };

    let transpileAndCompressJS = () => {
        return src('js/main.js')
        .pipe(babel())
        .pipe(javaScriptUglify())
        .pipe(dest('prod/scripts'))
    };

    let copyFiles = () => {
        return src([
            'assignment-2--intro-to-internet-programming--cs-275--spring-2026/*.*',
            '!assignment-2--intro-to-internet-programming--cs-275--spring-2026/**',
            '!assignment-2--intro-to-internet-programming--cs-275--spring-2026/index.html',
            '!assignment-2--intro-to-internet-programming--cs-275--spring-2026/img',
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
    };

    exports.firefox = series(series, serveSite);
    exports.brave = series(series, serveSite);
    exports.chrome = series(series, serveSite);
    exports.browserList = series(series, serveSite);
    exports.compressCSS = compressCSS;
    exports.comrpressHTML = comrpressHTML;
    exports.javaScriptUglify = transpileAndCompressJS;
    exports.serveSite = series(
        comrpressHTML,
        compressCSS,
        transpileAndCompressJS,
        serveSite
    );
    exports.build = series(
        comrpressHTML,
        compressCSS,
        transpileAndCompressJS,
        copyFiles
    );

// ==UserScript==
// @name         Lifeprint Themes
// @namespace    http://tampermonkey.net/
// @version      0.3.2.2
// @description  Makes the website Lifeprint have a dark mode - and several other themes.
// @author       DanSavageGames
// @match        https://www.lifeprint.com*/*
// @grant        GM_addStyle
// @downloadURL  https://github.com/dansavagegames/Lifeprint-Themes/blob/main/LifeprintThemes.user.js
// @updateURL    https://github.com/dansavagegames/Lifeprint-Themes/blob/main/LifeprintThemes.user.js
// ==/UserScript==

(function() {
    'use strict';

    var colorScheme = "catppuccin-mocha";

    // List of themes (copy+paste; working on it):
    /*
     catppuccin-mocha
     default-dark
     rose-pine
     */

    var background, backgroundHover, backgroundObject, border, borderRadius, color, colorSub, chipActive = "", font;
    var red, orange, yellow, green, blue, purple;

    switch(colorScheme) {
        case("catppuccin-mocha"):
            var accent = "#a6e3a166";
            background = "#181825";
            backgroundHover = "#585b70";
            backgroundObject = "#11111b";
            color = "#cdd6f4";
            colorSub = "#6c7086";
            border = "1px solid #313244";
            borderRadius = "6px";
            font = "-apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, Cantarell, Ubuntu, roboto, noto, helvetica, arial, sans-serif";

            red = "#f38ba8";
            orange = "#fab387";
            yellow = "#f9e2af";
            green = "#a6e3a1";
            blue = "#74c7ec";
            purple = "#cba6f7";

            break;
            /* https://catppuccin.com/palette/
             *       You can change the accent color. Go to Catppuccin's palettes and click+paste the accent color from Mocha.
             */

            case("default-dark"): // Literally just the Lifeprint but dark mode, reversed colors and allat
                accent = "#000000";
                background = "#000000";
                backgroundObject = background;
                color = "#ffffff";
                colorSub = "#3b4a59";
                border = "2px solid " + color;
                borderRadius = "12px";
                font = "Arial, Helvetica, sans-serif";

                red = "#ff0000";
                orange = "#8a4b00";
                yellow = "#ffff00";
                green = "#006b3c";
                blue = "#1a4fb8";
                purple = "#6b3fa0";

                break;
            case("rose-pine"):
                accent = "#c4a7e7";
                background = "#1f1d2e";
                backgroundObject = "#191724";
                color = "#e0def4";
                colorSub = "#6e6a86";
                border = "1px solid #26233a";
                borderRadius = "1.5rem"
                font = "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", \"Noto Sans\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"";

                red = "#eb6f92";
                orange = "#ebbcba";
                yellow = "#f6c177";
                green = "#31748f";
                blue = "#9ccfd8";
                purple = "#c4a7e7";

                break;
    }

    const theme = `
    body {
        color: ${color};
        background: ${background};
        font-family: ${font};
    }

    body.home lesson-nav a {
        color: ${color};
    }

    .lps-wrap {
        color: ${color};
    }

    .lps-head {
        color: ${color};
    }

    .lps-sub {
        color: ${colorSub};
    }

    .lps-input {
        font-family: ${font};
        border: ${border};
        border-radius: ${borderRadius};
        color: ${color};
        background: ${backgroundObject};
    }

    .lps-input:hover {
        border: ${border};
        color: ${color};
        background: ${backgroundHover};
    }

    .lps-block-head {
        border-bottom: ${border};
    }

    .lps-divider {
        border-top: ${border};
    }

    .lps-chip {
        border: ${border};
        border-radius: ${borderRadius};
        color: ${color};
        background: ${backgroundObject};
        font-family: ${font};
    }

    .lps-chip:hover {
        border: ${border};
        color: ${backgroundObject};
        background: ${color};
    }

    .lps-chip.is-active {
        border-color: ${green};
        color: ${backgroundObject};
        background: ${green};
    }

    .lps-chip:hover {
        border-color: ${backgroundObject};
        color: ${backgroundObject};
        background: ${green};
    }

    .lps-btn {
        border-color: ${blue};
        color: ${color};
        background: ${background};
    }

    .lps-btn:hover {
        border-color: ${blue};
        color: ${backgroundObject};
        background: ${colorSub};
    }

    .lps-btn.is-active {
        border-color: ${blue};
        color: ${backgroundObject};
        background: ${blue};
    }

    .lps-btn.lps-btn--primary {
        border-color: ${green};
        color: ${backgroundObject};
        background: ${green};
    }

    #custom-search-input {
    border: ${border};
    color: ${color};
    background: ${backgroundObject};
    }

    #custom-search-input:focus {
    box-shadow: none;
    color: ${color};
    background: ${backgroundObject};
    }

    #custom-search-input:hover {
    outline: 3px solid ${accent};
    color: ${color};
    background: ${backgroundObject};
    }

    .lesson-nav {
        color: ${color};
    }

    .lesson-nav.lesson-nav {
        border: ${border};
        border-radius: ${borderRadius};
        color: ${color};
        background: ${backgroundObject};
    }

    .lesson-nav.lesson-nav a {
        border: ${border};
        background: ${background};
        color: ${color} !important;
        border-radius: ${borderRadius};
        font-family: ${font};
    }

    .lesson-nav.lesson-nav a:hover {
        background: ${yellow} !important;
        color: ${backgroundObject} !important;
        border-radius: ${borderRadius};
        font-family: ${font};
    }

    .lesson-nav.lesson-nav li {
        border: ${border};
        border-radius: ${borderRadius};
        color: ${color};
        background: ${background};
    }

    .lps-page {
        border: ${border};
        border-radius: ${borderRadius};
        color: ${color};
        background: ${backgroundObject};
    }

    .lps-page__copy {
        border: ${border};
        border-radius: ${borderRadius};
        color: ${yellow};
        background: ${background};
    }

    .lps-page__copy:hover {
        border: ${border};
        color: ${background};
        background: ${yellow};
    }

    .lps-result {
        border: ${border};
        border-radius: ${borderRadius};
        background: ${backgroundObject};
    }

    .lps-result:hover {
        border: ${border};
        color: ${backgroundObject};
        background: ${colorSub};
    }

    .lps-result.is-active {
        border: ${border};
        border-radius: ${borderRadius};
        color: ${color};
        background: ${backgroundObject};
    }

    .lps-result__copy {
        border: ${border};
        border-radius: ${borderRadius};
        color: ${yellow};
        background: ${background};
    }

    .lps-result__copy:hover {
        border: ${border};
        color: ${background};
        background: ${yellow};
    }

    .lps-result__tag.tag-variant {
        border: ${border};
        border-radius: ${borderRadius};
        color: ${orange};
        background: ${background};
    }

    .lps-result__tag.tag-sign {
        border: ${border};
        border-radius: ${borderRadius};
        color: ${green};
        background: ${background};
    }

    .lps-result__tag.tag-sentence {
        border: ${border};
        border-radius: ${borderRadius};
        color: ${blue};
        background: ${background};
    }

    .lps-result__tag.tag-fingerspell {
        border: ${border};
        border-radius: ${borderRadius};
        color: ${purple};
        background: ${background};
    }

    .lps-stage {
        border: ${border};
        border-radius: ${borderRadius};
        color: ${color};
        background: ${backgroundObject};
    }

    .lps-stage-title {
        border: ${border};
        border-radius: ${borderRadius};
        background: ${backgroundObject};
    }

    .lps-gif {
        border: ${border};
        border-radius: ${borderRadius};
        background: ${backgroundObject};
    }

    .lps-gif__copy {
        border: ${border};
        border-radius: ${borderRadius};
        color: ${color};
        background: ${background};
    }

    .lps-gif__copy:hover {
        border: ${border};
        color: ${background};
        background: ${color};
    }

    .lps-donate {
        border: ${border};
        border-radius: ${borderRadius};
        color: ${green};
        text-decoration: none;
        background: ${backgroundObject};
    }

    .lps-donate:hover {
        border: ${border};
        color: ${backgroundObject};
        background: ${green};
    }

    h1 {
        color: ${color};
    }

    .donate-address {
        border: ${border};
        border-radius: ${borderRadius};
        background: ${background};
    }

    tr {
        border: ${border};
        color: ${color};
        background: ${backgroundObject};
    }

    .gsc-control-cse {
        border: ${border} !important;
        border-radius: ${borderRadius} !important;
        color: ${color};
        background-color: ${backgroundObject} !important;
    }

    .gsc-control-wrapper-cse {
        border: ${border} !important;
        border-radius: ${borderRadius} !important;
        color: ${color};
        background-color: ${backgroundObject} !important;
    }

    .gcse-search-box {
        border: ${border} !important;
        background: ${backgroundObject} !important;
    }

    #gsc-i-id1 {
    color: ${color} !important;
    background: ${backgroundObject};
    }

    #gsc-i-id1::-webkit-input-placeholder {
    color: ${color} !important;
    }

    #gsc-i-id1::-as-input-placeholder {
    color: ${color} !important;
    }

    #gsc-i-id1::-moz-placeholder {
    color: ${color} !important;
    }

    #gsc-i-id1::-moz-placeholder {
    color: ${color} !important;
    }

    .gsc-search-button -v2 {
        border: ${border} !important;
    }

    .gsc-search-button-v2,gsc-search-button-v2: hover {
        background-color: ${background} !important;
    }

    .gsc-search-button -v2:focus {
        background-color: ${background} !important;
    }

    td.gsib_a::before {
        color: ${color};
        cursor: pointer;
    }

    button {
        border: ${border};
        border-radius: ${borderRadius};
        color: ${color};
        background: ${backgroundObject};
    }

    button:hover {
        color: ${color};
        background: ${backgroundObject};
    }
    Text File.txt
    .video-controls button {
        border: ${border};
        border-radius: ${borderRadius};
        color: ${color};
        background: ${backgroundObject};
    }

    .video-controls button:hover {
        border: ${border};
        color: ${backgroundObject};
        background: ${yellow};
    }

    .video-link, .specific-video-wrap button {
        border: ${border};
        border-radius: ${borderRadius};
        color: ${color} !important;
        background: ${backgroundObject} !important;
    }

    .video-link, .specific-video-wrap button:hover {
        border: ${border};
        color: ${color} !important;
        background: ${red} !important;
    }

    .timecode {
        background: ${backgroundObject};
        border: ${border};
        color: ${color};
        font-family: monospace;
        border-radius: ${borderRadius};
    }

    .btn-fullscreen {
        border: none;
        color: ${color};
        background: ${backgroundObject};
    }

    .btn-fullscreen:hover {
        border: none;
        color: ${red};
        background: ${backgroundObject};
    }

    .btn-random {
        border: ${border};
        border-radius: ${borderRadius};
        color: ${color};
        background: ${backgroundObject};
    }

    .btn-random:hover {
        border: ${border};
        color: ${backgroundObject};
        background: ${red};
    }

    .home-search-row button {
        border: ${border};
        color: ${color};
        background: ${background};
    }

    .home-search-row button:hover {
        color: ${backgroundObject};
        background: ${yellow};
    }

    .home-search-row input {
        border: ${border};
        border-radius: ${borderRadius};
        color: ${color};
        background: ${background};
    }

    .home-action {
        border: ${border};
        border-radius: ${borderRadius};
        color: ${color};
        background: ${backgroundObject};
    }

    .home-action.home-action__more:hover {
        border: ${border};
        color: ${backgroundObject};
        background: ${colorSub};
    }

    .home-btn {
        border: ${border};
        border-radius: ${borderRadius};
        color: ${color};
        background: ${background};
    }

    .home-btn--primary {
        border: ${border};
        border-radius: ${borderRadius};
        color: ${color} !important;
        background: ${background} !important;
    }

    .home-btn--primary:hover {
        border: ${border};
        color: ${backgroundObject} !important;
        background: ${yellow} !important;
    }

    .home-details {
        border: ${border};
        border-radius: ${borderRadius};
        background: ${backgroundObject};
    }

    .home-fact, body.home main a.home-fact {
        border: ${border};
        border-radius: ${borderRadius};
        color: ${color};
        background: ${backgroundObject};
    }

    .home-fact__num {
        color: ${color};
    }

    .home-fact__label {
        color: ${color};
    }

    .home-letters li {
        border: ${border};
        border-radius: ${borderRadius};
        color: ${color};
        background: ${background};
    }

    .home-letters a {
        border: none;
        color: ${color};
        background: ${backgroundObject};
    }

    .lnav-arrow {
        border: ${border};
        color: ${color};
        background: ${background};
    }

    .home-group {
        border: ${border};
        border-radius: ${borderRadius};
        color: ${color};
        background: ${backgroundObject};
    }

    .home-section.home-support {
        border-radius: ${borderRadius};
        border: ${border};
        color: ${color};
        background: ${backgroundObject};
    }

    a {
        color: ${blue};
        text-decoration: none;
    }

    a:hover {
        background: ${colorSub};
        color: ${backgroundObject};
        text-decoration: none;
    }

    a:visited {
        color: ${blue};
        text-decoration: none;
    }

    a:hover,visited {
        background: ${colorSub};
        color: ${backgroundObject};
        text-decoration: none;
    }
    `;

    GM_addStyle(theme);

})();

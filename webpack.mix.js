let mix = require('laravel-mix');

mix.postCss('src/assets/pcss/app.pcss', 'view/assets/css/app.css', [
    require("tailwindcss"),
    require("autoprefixer")
]);
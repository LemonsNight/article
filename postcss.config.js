//postcss.congfig.js
module.exports = {
    plugins: {
        // 兼容浏览器，添加前缀
        'autoprefixer':{
            overrideBrowserslist: [
                "last 5 versions",
            ],
            grid: true
        }
    }
}
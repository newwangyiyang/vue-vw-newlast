module.exports = {
    baseUrl: process.env.NODE_ENV === 'production' ? './' : '/', //设置output.publicPath，区分生产环境和开发环境
    outputDir: 'dist', //生成的生产环境构建文件的目录,默认dist文件名
    assetsDir: 'static', //配置静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
    productionSourceMap: false, //生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
    css: {
        //向所有 less 样式传入共享的全局变量
        loaderOptions: {
            // 给 less-loader 传递选项
            less: {
                // @/ 是 src/ 的别名
                data: `@import "@/assets/less/public.less";`
            }
        }
    }
}
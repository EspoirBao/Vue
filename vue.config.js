module.exports = {
    publicPath: process.env.NODE_ENV == 'development' ? '/' : '',
    devServer: {
        
        proxy: {

            /*
                当你的请求路径是/xiaobu/api/goods/list
                实际的请求路径是target + '/xiaobu/api/goods/list'
                然后使用pathRewrite将/xiaobu/api转换为空
                所以最后的请求路径就是target + '/goods/list'
            */
            '/espoir/api': {
                target: 'http://localhost:8866',
                changeOrigin: true,
                pathRewrite: {
                    '^/espoir/api': ''
                }
            },
            // '/home': {
            //     target: 'http://localhost:8866',
            //     changeOrigin: true,
            // },
            // 其他代理接口
            // '/lihuanhuan/api': {
            //     target: 'http://192.168.58.114:3000',
            //     changeOrigin: true,
            //     pathRewrite: {
            //         '^/lihuanhuan/api': ''
            //     }
            // }
        }
    }
} 
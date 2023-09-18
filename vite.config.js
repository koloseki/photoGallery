import path from 'path';

export default {
    root: path.resolve(__dirname, 'src'),
    base: '/photoGallery/',
    build: {
        outDir: '../dist'
    },
    server: {
        port: 8080
    },

}
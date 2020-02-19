const ENV = process.env.NODE_ENV;

const plugins = [
    require('postcss-import'),
    require('autoprefixer')
]

if (ENV === 'production') {
    plugins.push(require('cssnano'))
}

module.exports = {
    plugins
}
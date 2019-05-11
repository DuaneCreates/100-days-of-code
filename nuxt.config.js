import path from 'path'
import PurgecssPlugin from 'purgecss-webpack-plugin'
import glob from 'glob-all'
import info from './info.js'

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-z0-9-:/]+/g) || []
  }
}

const sitemapRoutes = () =>
  glob
    .sync(['./days/info/**.js'])
    .filter(f => ['ui', 'result'].includes(require(f).default.type))
    .map(f => ({
      url: `/${require(f).default.day}`,
      changefreq: 'weekly',
      priority: 0.9,
      lastmodISO: `${require(f).default.date}`
    }))

const generatedSitemapRoutes = sitemapRoutes()
const trackingId = info.ga_code

export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: '100 Days of Code | Duane Creates',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'My 100 days of code consists of the Daily UI Challenge and JS 30, amongst others. Main technologies used are Javascript with Vue js and styling via Tailwind css.'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */

  css: [
    '@/assets/css/tailwind.css',
    'animate.css',
    'github-markdown-css/github-markdown.css',
    'vue-slider-component/theme/antd.css'
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~plugins/fonts.js',
    '~plugins/vue-awesome.js',
    '~plugins/vue-cleave.js',
    '~plugins/vue-markdown.js',
    { src: '~plugins/vue-slider.js', ssr: false },
    '~plugins/day-components.js'
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
    [
      '@nuxtjs/google-analytics',
      {
        id: trackingId,
        dev: true
      }
    ]
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    transpile: [/^vue-awesome/],
    extractCSS: true,
    postcss: {
      plugins: {
        tailwindcss: path.resolve('./tailwind.js')
      },
      preset: { autoprefixer: { grid: true } }
    },

    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }

      if (!ctx.isDev) {
        config.plugins.push(
          new PurgecssPlugin({
            // purgecss configuration
            // https://github.com/FullHuman/purgecss
            paths: glob.sync([
              path.join(__dirname, './pages/**/*.vue'),
              path.join(__dirname, './layouts/**/*.vue'),
              path.join(__dirname, './components/**/*.vue'),
              path.join(__dirname, './days/results/**/*.vue')
            ]),
            extractors: [
              {
                extractor: TailwindExtractor,
                extensions: ['vue']
              }
            ],
            whitelist: ['html', 'body', 'nuxt-progress'],
            whitelistPatternsChildren: [/^vue-slider/]
          })
        )
      }
    }
  },

  generate: {
    routes: () =>
      glob
        .sync(['./days/info/**.js'])
        .filter(f => ['ui', 'result'].includes(require(f).default.type))
        .map(f => `/${require(f).default.day}`)
  },

  sitemap: {
    hostname: require('./info').default.hostname,
    gzip: true,
    exclude: [],
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date(),
      lastmodrealtime: true
    },
    routes: [
      {
        url: '/',
        changefreq: 'daily',
        priority: 1
      },
      ...generatedSitemapRoutes
    ]
  }
}

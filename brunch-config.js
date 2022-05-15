exports.config = {
  // See http://brunch.io/#documentation for docs.
  files: {
    javascripts: {
      joinTo: "js/app.js"
    },
    stylesheets: {
      joinTo: "css/app.css"
    },
  },

  conventions: {
    // This option sets where we should place non-css and non-js assets in.
    // By default, we set this to '/web/static/assets'. Files in this directory
    // will be copied to `paths.public`, which is "priv/static" by default.
    assets: /^(web\/static\/assets)/
  },

  // Phoenix paths configuration
  paths: {
    // Which directories to watch
    watched: ["web/static"],

    // Where to compile files to
    public: "priv/static"
  },

  // Configure your plugins
  plugins: {
    babel: {
      // Do not use ES6 compiler in vendor code
      ignore: [/^(web\/static\/vendor)/]
    },
    sass: {
      allowCache: true,
      includePaths: []
    },
    uglify: {
      magle: false,
      compress: true
    },
    cleancss: {
      keepSpecialComments: 0,
      removeEmpty: true
    },
    afterBrunch: [
      "mkdir -p priv/static/fonts",
      "rsync -h -v -r -P -t bower_components/font-awesome/fonts/ priv/static/fonts"
    ]
  },
  //modules: {
  //  autoRequire: {
  //    "js/app.js": ["web/static/js/app"]
  //  }
  //},
  npm: {
    enabled: true,
    whitelist: ["phoenix", "phoenix_html"]
  }
};

Package.describe({
  name: 'kriegslustig:cssnext',
  version: '0.0.2',
  summary: 'Use cssnext inside meteor without the @import madness.',
  git: 'https://github.com/Kriegslustig/meteor-cssnext',
  documentation: 'README.md'
})

Package.registerBuildPlugin({
  name: 'compileCssnext',
  use: [],
  sources: [
    'cssnext.js'
  ],
  npmDependencies: {
    'cssnext': '1.8.0'
  }
})

Package.onTest(function (api) {})

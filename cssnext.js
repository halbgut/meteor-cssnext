var cssnext = Npm.require('cssnext')

var state = (function () {
  cssNextCss = ''
  return {
    set: function (compileStep) {
      cssNextCss += extractFileFromStep(compileStep)
    },
    get: function () {
      return cssNextCss
    }
  }
})()

function compileNextCss (compileStep) {
  compileStep.addStylesheet(
    extractStylesheetObject(
      cssnext(
        state.get() + extractFileFromStep(compileStep), {
          from: compileStep.inputPath,
          sourcemap: true,
          map: { inline: false, annotation: false }
        }
      )
    )
  )
}

function extractFileFromStep (compileStep) {
  return '\n' + compileStep.read().toString('utf8')
}

function extractStylesheetObject (postcssObj) {
  return {
    path: postcssObj.result.opts.from,
    data: postcssObj.css,
    sourceMap: JSON.stringify(postcssObj.map)
  }
}

Plugin.registerSourceHandler('import.next.css', {archMatching: 'web'}, state.set)
Plugin.registerSourceHandler('next.css', {archMatching: 'web'}, compileNextCss)

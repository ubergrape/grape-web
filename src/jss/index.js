import injectSheet, { jss, ThemeProvider, JssProvider } from 'react-jss'
import { create } from 'jss'
import isolate from 'jss-plugin-isolate'
import extend from 'jss-plugin-extend'
import defaultUnit from 'jss-preset-default'
import vendorPrefixer from 'jss-plugin-vendor-prefixer'
import propsSort from 'jss-plugin-props-sort'
import expand from 'jss-plugin-expand'
import increaseSpecificity from 'jss-increase-specificity'

import { typographyConstants, palette } from '../mui-theme'

const jssInline = create({
  plugins: [extend(), defaultUnit(), expand(), vendorPrefixer(), propsSort()],
})

export const inlineStyle = style => jssInline.createRule(style).toJSON()

// Used by material-ui
jss.options.insertionPoint = 'grape-jss'

jss.use(increaseSpecificity({ repeat: 1 })).use(
  isolate({
    isolate: false,
    reset: [
      'all',
      {
        display: 'inline-block',
        fontFamily: typographyConstants.fontFamily,
        fontSize: typographyConstants.fontSize,
        boxSizing: 'border-box',
        textRendering: 'optimizeLegibility',
        color: palette.text.primary,
      },
    ],
  }),
)

// export const Styled = createStyled(jss)
// export const styled = Styled()

export { JssProvider, ThemeProvider, jss }

export default (styles, options = {}) =>
  injectSheet(styles, {
    inject: ['classes', 'sheet', 'theme'],
    isolate: true,
    ...options,
  })

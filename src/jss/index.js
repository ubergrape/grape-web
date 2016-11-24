import injectSheet, {jss} from 'react-jss'
import {create as createJss} from 'jss'
import isolate from 'jss-isolate'
import extend from 'jss-extend'
import defaultUnit from 'jss-default-unit'
import vendorPrefixer from 'jss-vendor-prefixer'
import propsSort from 'jss-props-sort'
import expand from 'jss-expand'

const jssInline = createJss({
  plugins: [
    extend(),
    defaultUnit(),
    expand(),
    vendorPrefixer(),
    propsSort()
  ]
})

jss.use(isolate({
  reset: {
    'font-family': '"proxima-nova", "Helvetica Neue", Arial, Helvetica, sans-serif',
    'box-sizing': 'border-box'
  }
}))

export {jss, jssInline}
export default injectSheet

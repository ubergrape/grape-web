import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {ThemeProvider} from '../jss'

const StyleProvider = ({theme, children}) => (
  <ThemeProvider theme={theme}>
    <MuiThemeProvider theme={theme}>
      {children}
    </MuiThemeProvider>
  </ThemeProvider>
)

export default StyleProvider

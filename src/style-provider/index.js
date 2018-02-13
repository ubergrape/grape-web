import React from 'react'
import ThemeProvider from 'react-jss'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const StyleProvider = props => (
  <ThemeProvider theme={props.theme}>
    <MuiThemeProvider theme={props.theme}>
      {props.children}
    </MuiThemeProvider>
  </ThemeProvider>
)

export default StyleProvider

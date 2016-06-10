import React, {Component, PropTypes} from 'react'

import {useSheet} from '../jss'
import style from './style'

@useSheet(style)
export default class Spinner extends Component {
  static propTypes = {
    sheet: PropTypes.object,
    active: PropTypes.bool,
    delay: PropTypes.number,
    image: PropTypes.string,
    overlay: PropTypes.bool,
    size: PropTypes.number
  }

  static defaultProps = {
    active: false,
    delay: 1000,
    image: undefined,
    overlay: false,
    size: 60
  }

  constructor(props) {
    super(props)
    this.state = this.createState(this.props)
  }

  componentDidMount() {
    if (this.state.active) return
    this.timeoutId = setTimeout(() => {
      this.setState({active: true})
    }, this.props.delay)
  }

  componentWillReceiveProps(props) {
    this.setState(this.createState(props))
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutId)
  }

  createState(props) {
    return {...props}
  }

  render() {
    if (!this.state.active) return null
    const {
      sheet,
      size: width,
      size: height,
      image
    } = this.props

    const backgroundImage = `url(${image})`
    const {classes} = sheet
    let className = classes.spinner
    if (this.props.overlay) className += ' ' + classes.overlay
    // TODO use svg.
    return (
      <span className={className}>
        <i
          className={classes.animation}
          style={{backgroundImage, width, height}} />
      </span>
    )
  }
}

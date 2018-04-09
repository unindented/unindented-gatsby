import PropTypes from 'prop-types'
import { Component } from 'react'

export default class Layout extends Component {
  render() {
    const { children } = this.props

    return children()
  }
}

Layout.propTypes = {
  children: PropTypes.func.isRequired,
}

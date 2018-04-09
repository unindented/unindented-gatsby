import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { ContainerMain } from '../utils/Container'

const Header = ContainerMain.withComponent('header')

export default class BlogPostHeader extends Component {
  render() {
    const { postTitle } = this.props

    return (
      <Header>
        <h1>{postTitle}</h1>
      </Header>
    )
  }
}

BlogPostHeader.propTypes = {
  postTitle: PropTypes.string.isRequired,
}

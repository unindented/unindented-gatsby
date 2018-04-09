import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import styled from 'styled-components'

import { ContainerFull, ContainerMain } from '../utils/Container'
import { invertedBackgroundColor, invertedColor } from '../../utils/palette'

const Footer = ContainerFull.withComponent('footer').extend`
  background-color: ${invertedBackgroundColor};
  color: ${invertedColor};
`
const FooterWrapper = ContainerMain.withComponent('p').extend`
  text-align: center;
`
const InvertedElement = styled.span`
  color: ${invertedColor};
`
const FooterAnchor = InvertedElement.withComponent('a')
const FooterLink = InvertedElement.withComponent(Link)

export default class PageFooter extends Component {
  render() {
    const { authorName } = this.props

    return (
      <Footer role="contentinfo">
        <FooterWrapper>
          All content by <FooterLink to="/about">{authorName}</FooterLink>{' '}
          unless otherwise noted.{' '}
          <FooterAnchor href="//creativecommons.org/licenses/by-sa/4.0/">
            Some rights reserved
          </FooterAnchor>.
        </FooterWrapper>
      </Footer>
    )
  }
}

PageFooter.propTypes = {
  authorName: PropTypes.string.isRequired,
}

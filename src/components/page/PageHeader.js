import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import styled from 'styled-components'

import { ContainerFull, ContainerMain } from '../utils/Container'
import { ScreenReaderOnly } from '../utils/ScreenReaderOnly'
import { invertedBackgroundColor, invertedColor } from '../../utils/palette'

const Header = ContainerFull.withComponent('header').extend`
  background-color: ${invertedBackgroundColor};
  color: ${invertedColor};
`
const HeaderWrapper = ContainerMain.withComponent('div').extend`
  align-items: baseline;
  display: flex;
  justify-content: space-between;
`
const HeaderMain = styled.div``
const HeaderNav = styled.nav``
const HeaderNavList = styled.ul`
  list-style: none;
  margin: 0 -0.5em;
`
const HeaderNavListItem = styled.li`
  display: inline-block;
  padding: 0 0.5em;
`
const InvertedElement = styled.span`
  color: ${invertedColor};
`
const HeaderTitle = InvertedElement.withComponent('h1')
const HeaderSubtitle = InvertedElement.withComponent('h2')
const HeaderLink = InvertedElement.withComponent(Link)

export default class PageHeader extends Component {
  render() {
    const { siteTitle, siteDescription } = this.props

    return (
      <Header role="banner">
        <HeaderWrapper>
          <HeaderMain>
            <HeaderTitle>
              <HeaderLink to="/">{siteTitle}</HeaderLink>
            </HeaderTitle>
            <HeaderSubtitle>
              <ScreenReaderOnly>{siteDescription}</ScreenReaderOnly>
            </HeaderSubtitle>
          </HeaderMain>
          <HeaderNav>
            <HeaderNavList>
              <HeaderNavListItem>
                <HeaderLink to="/blog">Blog</HeaderLink>
              </HeaderNavListItem>
              <HeaderNavListItem>
                <HeaderLink to="/games">Games</HeaderLink>
              </HeaderNavListItem>
              <HeaderNavListItem>
                <HeaderLink to="/about">About</HeaderLink>
              </HeaderNavListItem>
            </HeaderNavList>
          </HeaderNav>
        </HeaderWrapper>
      </Header>
    )
  }
}

PageHeader.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  siteDescription: PropTypes.string.isRequired,
}

import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import styled from 'styled-components'

import { ContainerMain } from '../utils/Container'

const NavLinksSection = ContainerMain.withComponent('footer')
const NavLinksList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin: 0;
`
const NavLink = styled.li`
  margin: 0;
`

export default class BlogPostNavLinks extends Component {
  render() {
    const { previousPost, nextPost } = this.props

    return (
      <NavLinksSection>
        <NavLinksList>
          <NavLink>
            {previousPost && (
              <Link to={previousPost.fields.slug} rel="prev">
                ← {previousPost.frontmatter.title}
              </Link>
            )}
          </NavLink>

          <NavLink>
            {nextPost && (
              <Link to={nextPost.fields.slug} rel="next">
                {nextPost.frontmatter.title} →
              </Link>
            )}
          </NavLink>
        </NavLinksList>
      </NavLinksSection>
    )
  }
}

BlogPostNavLinks.propTypes = {
  previousPost: PropTypes.object,
  nextPost: PropTypes.object,
}

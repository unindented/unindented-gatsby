import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { Container } from '../components/utils/Container'
import PageMeta from '../components/page/PageMeta'
import PageHeader from '../components/page/PageHeader'
import PageFooter from '../components/page/PageFooter'
import BlogPostExcerpts from '../components/blog/BlogPostExcerpts'

export default class IndexPage extends Component {
  render() {
    const { data } = this.props
    const { authorName, siteTitle, siteDescription } = data.site.siteMetadata
    const posts = data.posts.edges

    return (
      <Container>
        <PageMeta siteTitle={siteTitle} siteDescription={siteDescription} />
        <PageHeader siteTitle={siteTitle} siteDescription={siteDescription} />

        <BlogPostExcerpts posts={posts} />

        <PageFooter authorName={authorName} />
      </Container>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export const query = graphql`
  query IndexPage {
    site {
      siteMetadata {
        siteTitle: title
        siteDescription: description
        authorName
      }
    }
    posts: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        post: node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM D, YYYY")
          }
        }
      }
    }
  }
`

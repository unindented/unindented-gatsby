import PropTypes from 'prop-types'
import React, { Component } from 'react'

// import 'prismjs/themes/prism.css'

import { Container } from '../components/utils/Container'
import PageMeta from '../components/page/PageMeta'
import PageHeader from '../components/page/PageHeader'
import PageFooter from '../components/page/PageFooter'
import BlogPost from '../components/blog/BlogPost'

import '../utils/prismjs.css'

export default class BlogPostTemplate extends Component {
  render() {
    const { data, pathContext } = this.props
    const {
      authorName,
      authorEmail,
      authorTwitter,
      siteTitle,
      siteDescription,
      siteUrl,
    } = data.site.siteMetadata
    const authorImage = data.authorImage.image
    const post = data.post
    const { previous, next } = pathContext

    return (
      <Container>
        <PageMeta
          title={post.frontmatter.title}
          siteTitle={siteTitle}
          siteDescription={siteDescription}
        />
        <PageHeader siteTitle={siteTitle} siteDescription={siteDescription} />

        <BlogPost
          postUrl={`${siteUrl}${post.fields.slug}`}
          postTitle={post.frontmatter.title}
          postDate={post.frontmatter.date}
          postHtml={post.html}
          authorName={authorName}
          authorEmail={authorEmail}
          authorTwitter={authorTwitter}
          authorImage={authorImage}
          previousPost={previous}
          nextPost={next}
        />

        <PageFooter authorName={authorName} />
      </Container>
    )
  }
}

BlogPostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pathContext: PropTypes.object.isRequired,
}

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        siteTitle: title
        siteDescription: description
        siteUrl
        authorName
        authorEmail
        authorTwitter
      }
    }
    authorImage: file(relativePath: { eq: "me.png" }) {
      image: childImageSharp {
        resolutions(width: 96, height: 96) {
          ...GatsbyImageSharpResolutions_tracedSVG
        }
      }
    }
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      html
    }
  }
`

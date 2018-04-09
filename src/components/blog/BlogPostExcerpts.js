import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { ContainerFull, ContainerMain } from '../utils/Container'
import BlogPostExcerpt from './BlogPostExcerpt'

const ExcerptsMain = ContainerFull.withComponent('main')
const ExcerptsList = ContainerMain.withComponent('ol').extend`
  list-style: none;
  margin: 0;
`

export default class BlogPostExcerpts extends Component {
  render() {
    const { posts } = this.props

    return (
      <ExcerptsMain>
        <ExcerptsList>
          {posts.map(({ post }) => (
            <BlogPostExcerpt
              key={post.fields.slug}
              postSlug={post.fields.slug}
              postTitle={post.frontmatter.title}
              postDate={post.frontmatter.date}
              postExcerpt={post.excerpt}
            />
          ))}
        </ExcerptsList>
      </ExcerptsMain>
    )
  }
}

BlogPostExcerpts.propTypes = {
  posts: PropTypes.array.isRequired,
}

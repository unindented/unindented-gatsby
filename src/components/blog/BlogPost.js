import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { ContainerFull } from '../utils/Container'
import BlogPostHeader from './BlogPostHeader'
import BlogPostFooter from './BlogPostFooter'
import BlogPostNavLinks from './BlogPostNavLinks'

const PostMain = ContainerFull.withComponent('main')
const PostArticle = ContainerFull.withComponent('article')
const PostBody = ContainerFull.withComponent('div').extend`
  & > * {
    grid-column: main;
  }
`

export default class BlogPost extends Component {
  render() {
    const {
      postUrl,
      postTitle,
      postDate,
      postHtml,
      authorName,
      authorEmail,
      authorTwitter,
      authorImage,
      previousPost,
      nextPost,
    } = this.props

    return (
      <PostMain>
        <PostArticle>
          <BlogPostHeader postTitle={postTitle} />
          <PostBody dangerouslySetInnerHTML={{ __html: postHtml }} />
          <BlogPostFooter
            postUrl={postUrl}
            postTitle={postTitle}
            postDate={postDate}
            authorName={authorName}
            authorEmail={authorEmail}
            authorTwitter={authorTwitter}
            authorImage={authorImage}
          />
        </PostArticle>

        <BlogPostNavLinks previousPost={previousPost} nextPost={nextPost} />
      </PostMain>
    )
  }
}

BlogPost.propTypes = {
  postUrl: PropTypes.string.isRequired,
  postTitle: PropTypes.string.isRequired,
  postDate: PropTypes.string.isRequired,
  postHtml: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  authorEmail: PropTypes.string.isRequired,
  authorTwitter: PropTypes.string.isRequired,
  authorImage: PropTypes.object.isRequired,
  previousPost: PropTypes.object,
  nextPost: PropTypes.object,
}

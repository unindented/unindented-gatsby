import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class BlogPostExcerpt extends Component {
  render() {
    const { postSlug, postTitle, postDate, postExcerpt } = this.props

    return (
      <li>
        <h3>
          <Link to={postSlug}>{postTitle}</Link>
        </h3>
        <small>{postDate}</small>
        <p dangerouslySetInnerHTML={{ __html: postExcerpt }} />
      </li>
    )
  }
}

BlogPostExcerpt.propTypes = {
  postSlug: PropTypes.string.isRequired,
  postTitle: PropTypes.string.isRequired,
  postDate: PropTypes.string.isRequired,
  postExcerpt: PropTypes.string.isRequired,
}

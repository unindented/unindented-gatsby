import PropTypes from 'prop-types'
import React, { Component } from 'react'
import styled from 'styled-components'

import { ContainerMain } from '../utils/Container'
import { RoundedImage } from '../utils/Image'
import { EmailLink, TweetLink } from '../utils/Social'

const Footer = ContainerMain.withComponent('footer')
const FooterWrapper = styled.div`
  display: flex;
  margin: 0 -0.5em;
`
const FooterImage = styled.div`
  padding: 0 0.5em;
`
const FooterText = styled.p`
  flex: 1;
  font-style: italic;
  padding: 0 0.5em;
`

export default class BlogPostFooter extends Component {
  render() {
    const {
      postUrl,
      postTitle,
      postDate,
      authorName,
      authorEmail,
      authorTwitter,
      authorImage,
    } = this.props

    return (
      <Footer>
        <FooterWrapper>
          <FooterImage>
            <RoundedImage
              alt={authorName}
              resolutions={authorImage.resolutions}
            />
          </FooterImage>
          <FooterText>
            Posted on {postDate} by {authorName}. Got any comments or
            suggestions? Send me a{' '}
            <TweetLink text={postTitle} url={postUrl} via={authorTwitter}>
              tweet
            </TweetLink>{' '}
            or an{' '}
            <EmailLink subject={postTitle} to={authorEmail}>
              email
            </EmailLink>.
          </FooterText>
        </FooterWrapper>
      </Footer>
    )
  }
}

BlogPostFooter.propTypes = {
  postUrl: PropTypes.string.isRequired,
  postTitle: PropTypes.string.isRequired,
  postDate: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  authorEmail: PropTypes.string.isRequired,
  authorTwitter: PropTypes.string.isRequired,
  authorImage: PropTypes.object.isRequired,
}

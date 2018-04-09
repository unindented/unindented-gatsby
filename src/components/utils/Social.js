import PropTypes from 'prop-types'
import React from 'react'

export const EmailLink = ({ subject, to, children }) => {
  const encodedSubject = encodeURIComponent(subject)
  const href = `mailto:${to}?subject=${encodedSubject}`
  return <a href={href}>{children}</a>
}

EmailLink.propTypes = {
  subject: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export const TweetLink = ({ text, url, via, children }) => {
  const encodedText = encodeURIComponent(text)
  const encodedUrl = encodeURIComponent(url)
  const href = `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}&via=${via}`
  return (
    <a href={href} target="_blank" rel="nofollow noopener noreferrer">
      {children}
    </a>
  )
}

TweetLink.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  via: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Helmet from 'react-helmet'

export default class PageMeta extends Component {
  render() {
    const { title, siteTitle, siteDescription } = this.props

    return (
      <Helmet defaultTitle={siteTitle} titleTemplate={`%s | ${siteTitle}`}>
        <html lang="en" />
        <meta name="description" content={siteDescription} />
        {title && <title>{title}</title>}
      </Helmet>
    )
  }
}

PageMeta.propTypes = {
  title: PropTypes.string,
  siteTitle: PropTypes.string.isRequired,
  siteDescription: PropTypes.string.isRequired,
}

import {
  MOBILE_WIDTH,
  LARGER_DISPLAY_WIDTH,
  MIN_MOBILE_MEDIA_QUERY,
  MIN_LARGER_DISPLAY_MEDIA_QUERY,
} from 'typography-breakpoint-constants'

import {
  bodyColor,
  headerColor,
  blockquoteColor,
  codeBackgroundColor,
  linkColor,
} from './palette'

const minViewWidth = parseInt(MOBILE_WIDTH, 10)
const maxViewWidth = parseInt(LARGER_DISPLAY_WIDTH, 10)
const smallestViewMediaQuery = MIN_MOBILE_MEDIA_QUERY
const largestViewMediaQuery = MIN_LARGER_DISPLAY_MEDIA_QUERY

const minFontSize = 16
const maxFontSize = 24
const baseLineHeight = 1.5

const fluidFontSize = (minViewWidth, maxViewWidth, minFontSize, maxFontSize) =>
  `calc(${minFontSize}px + (${maxFontSize} - ${minFontSize}) * (100vw - ${minViewWidth}px) / (${maxViewWidth} - ${minViewWidth}))`

const bodyFontFamily = ['Roboto', 'serif']
const headerFontFamily = ['Roboto Slab', 'sans-serif']
const codeFontFamily = ['Roboto Mono', 'monospace']

const theme = {
  title: 'Custom',

  baseFontSize: `${minFontSize}px`,
  baseLineHeight,

  googleFonts: [
    {
      name: 'Roboto',
      styles: ['400', '400i', '700'],
    },
    {
      name: 'Roboto Slab',
      styles: ['700'],
    },
    {
      name: 'Roboto Mono',
      styles: ['400', '400i', '700'],
    },
  ],
  bodyFontFamily,
  headerFontFamily,
  bodyWeight: 400,
  boldWeight: 700,
  headerWeight: 700,

  headerColor,
  bodyColor,

  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => {
    return {
      a: {
        color: linkColor,
      },
      blockquote: {
        borderLeft: `${rhythm(6 / 16)} solid ${linkColor}`,
        color: blockquoteColor,
        fontStyle: 'italic',
        marginLeft: 0,
        marginRight: 0,
        paddingLeft: rhythm(10 / 16),
      },
      img: {
        margin: 0,
      },
      'ol, ul': {
        marginBottom: rhythm(1 / 2),
      },
      'code, pre': {
        fontFamily: codeFontFamily.join(','),
        hyphens: 'none',
        tabSize: 2,
        whiteSpace: 'pre',
        wordSpacing: 'normal',
        wordBreak: 'normal',
        wordWrap: 'normal',
      },
      code: {
        ...adjustFontSizeTo('100%'),
      },
      'pre > code': {
        ...adjustFontSizeTo('85%', 0.85),
      },
      // Syntax-highlighted code.
      'pre[class*="language-"]': {
        background: codeBackgroundColor,
        display: 'inherit',
        gridColumn: 'full',
        gridTemplateColumns: 'inherit',
        overflow: 'auto',
        padding: '1em 0',
      },
      'pre[class*="language-"] > code[class*="language-"]': {
        gridColumn: 'main',
      },
      ':not(pre) > code[class*="language-"]': {
        whiteSpace: 'normal',
      },
      '.gatsby-highlight': {
        display: 'inherit',
        gridColumn: 'full !important',
        gridTemplateColumns: 'inherit',
      },
      // Responsive iframes.
      '.gatsby-resp-iframe-wrapper': {
        marginBottom: rhythm(1),
      },
      // Skyrta diagrams.
      '.remark-draw': {
        marginBottom: rhythm(1),
        textAlign: 'center',
      },
      // Fluid typography.
      [smallestViewMediaQuery]: {
        html: {
          fontSize: fluidFontSize(
            minViewWidth,
            maxViewWidth,
            minFontSize,
            maxFontSize
          ),
        },
      },
      [largestViewMediaQuery]: {
        html: {
          fontSize: `${maxFontSize}px`,
        },
      },
    }
  },
}

export default theme

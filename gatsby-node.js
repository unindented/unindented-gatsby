const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

const blogPostTemplate = path.resolve('./src/templates/BlogPost.js')

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators

  if (node.internal.type !== 'MarkdownRemark') {
    return
  }

  const value = createFilePath({ node, getNode })

  createNodeField({
    name: 'slug',
    node,
    value,
  })
}

exports.createPages = async ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw new Error(result.errors)
  }

  const posts = result.data.allMarkdownRemark.edges
  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? false : posts[index + 1].node
    const next = index === 0 ? false : posts[index - 1].node

    createPage({
      path: post.node.fields.slug,
      component: blogPostTemplate,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })
}

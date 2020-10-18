const path = require('path');

//registers the post so we can use the url
exports.createPages = ({actions, graphql}) => {
  const {createPage} = actions

  const postTemplate = path.resolve('src/templates/blog-post.js');

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              path
              title
              author
              date
            }
          }
        }
      }
    }
  `).then(response => {
    if(response.errors) {
      return Promise.reject(response.errors)
    }

    response.data.allMarkdownRemark.edges.forEach(({node}) => {

      createPage({
        path: node.frontmatter.path,
        component: postTemplate
      })

    })
  })
}

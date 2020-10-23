import { graphql } from 'gatsby'
import React from 'react'
import Menu from '../components/menu'
import {Link} from 'gatsby'

const Blog = ({data}) => {


  return (
    <>
    <Menu />
    <h1 className="text-center mb-4">Latest Posts</h1>
    {data.allMarkdownRemark.edges.map(post => (
      <div key={post.node.id}>
        <div className="container">
        <h3 className="text-right">{post.node.frontmatter.title}</h3>
        <div className="text-right">
        <small >Posted by {post.node.frontmatter.author} on {post.node.frontmatter.date}</small>
        </div>
        <br />

        <div className="text-right">
        <Link to={post.node.frontmatter.path} >Read More</Link>
        </div>
        <br />

        <hr />
      </div>
      </div>
    ))}
    </>
  )
}

export const pageQuery = graphql`
  query BlogIndexQuery {

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
`

export default Blog

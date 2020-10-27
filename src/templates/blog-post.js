import React from 'react';
import {graphql, Link} from 'gatsby'
import SEO from '../components/seo'

export default function Template ({data}){
  const post = data.markdownRemark

  return (

    <div>
      <SEO title="blog" />
      <Link to="/blog">Go Back</Link>
      <hr />
      <div className="container">
        <h1 className="text-center mt-5 mx-5">{post.frontmatter.title}</h1>
        <p className="m-4 text-center">Posted by {post.frontmatter.author} on {post.frontmatter.date}</p>

        <div dangerouslySetInnerHTML={{ __html: post.html}} />
      </div>
    </div>
  )
}

export const postQuery = graphql`

  query BlogPostByPath($path : String!){
    markdownRemark(frontmatter: {path: {eq: $path} }){
      html
      frontmatter{
        path
        title
        author
        date
      }

    }
  }
`

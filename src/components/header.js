import { Link, graphql,useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"

const Header = () => {
   const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.jpg" }) {
        childImageSharp {
          fluid( maxWidth: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    `)
  return(
    <>
      <header>
        <div className="container">
          <div className="row">
            <div className="col-4 mr-5 pr-5">
              <Img fluid={data.logo.childImageSharp.fluid} />
            </div>
            <div className="col-6 text-center mt-4">
              <h1>Real People. Real Results.</h1>
            </div>
          </div>
        </div>
      </header>
  </>
  )
}


export default Header

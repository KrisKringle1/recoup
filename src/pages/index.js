import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Layout from "../components/layout"
import Image from "../components/image"
import Img from "gatsby-image"
import SEO from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css'
import Menu from '../components/menu'

const IndexPage = (props) => {

  return(
  <Layout>
    <SEO title="Home" />

    <BackgroundImage
      fluid={props.data.heroBackground.childImageSharp.fluid}
      className='masthead'
    >

      <h1 className="text-center text-light">Real People. Real Results.</h1>
    <p className="text-center text-light">At RECOUP our mission is to help our community feel confident in their bodies, move pain free and change their lives forever.
        As a private exercise studio that specializes in personal training and customized nutrition, we offer time-tested results with
        over a decade of experience. We understand how hard it is to take that first step. Whether it’s picking up the phone or
        walking through the front door, we promise to provide a safe, clean, and non-intimidating environment that’s an extension of our home.
        Let us help you look and feel better than you ever have in your life.</p>
    </BackgroundImage>


    <h2 className="text-center">Private & Semi Private Personal Training in Costa Mesa, CA.</h2>

    <div className="container">
      <div className="row">
        <div className="col-6">
          <h3>Personal Training</h3>
          <Img fluid={props.data.personalTrainingThumbnail.childImageSharp.fluid} />
          <p>Whether it’s day 1, or 1,001, don’t leave your health up to chance.  Find out why thousands of your OC neighbors have entrusted us with their health and wellness.</p>
        </div>
        <div className="col-6">
          <h3>Nutrition Coaching</h3>
           <Img fluid={props.data.nutritionThumbnail.childImageSharp.fluid} />
          <p>Maybe you’ve heard it before.  “Nutrition is 80% of your results.”  Boost your results with our team of food coaches and allow us to take the guess work out of your nutrition.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <h3>Results 100% Guaranteed</h3>
          <Img fluid={props.data.resultsThumbnail.childImageSharp.fluid} />
          <p>Don’t take our word for it.  See what our clients have to say about their success and about the life long relationships we’ve established.</p>
        </div>
        <div className="col-6">
          <h3>Complementary Consultation</h3>
          <Img fluid={props.data.consultThumbnail.childImageSharp.fluid} />
          <p>We’ll take the time to figure out what it is that you want, to give you exactly what you need.</p>
        </div>
      </div>
    </div>
    <h2 className="text-center">BOOK YOUR FREE CONSULTATION</h2>
    <h3 className="text-center">Request More Information</h3>
    <p className="text-center">info@recouppersonaltraining.com</p>
    <p className="text-center">(714) 262-4003</p>
  </Layout>
  )
}


export default IndexPage

export const pageQuery = graphql`
    query {
      heroBackground: file(relativePath: { eq: "recoup-background-image.jpg" }) {
        childImageSharp {
          fluid( maxWidth: 1800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      nutritionThumbnail: file(relativePath: { eq: "nutrition-coaching-thumbnail.jpg" }) {
        childImageSharp {
          fluid( maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      personalTrainingThumbnail: file(relativePath: { eq: "personal-training-thumbnail.jpg" }) {
        childImageSharp {
          fluid( maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      resultsThumbnail: file(relativePath: { eq: "results-thumbnail.jpg" }) {
        childImageSharp {
          fluid( maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      consultThumbnail: file(relativePath: { eq: "consult-thumbnail.jpg" }) {
        childImageSharp {
          fluid( maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `

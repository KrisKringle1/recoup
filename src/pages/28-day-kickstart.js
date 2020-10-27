import React from 'react'
import Menu from '../components/menu'
import Img from "gatsby-image"

const KickStart = (props) => {


  return (
    <>
    <Menu />
    <h1 className="text-center">Our Next BALANCED HABITS 28-Day KICKSTART Starts September 19th!</h1>
    <div className="container my-5">
      <p className='text-center'>We’re super excited that you’re here and ready to commit to a healthier lifestyle in 2020!</p>
      <p className="text-center">You too can get back on track, lose weight, regain your energy and boost your confidence with our 28 Day Nutrition and Fitness Program!</p>
      <p className="text-center">Even better, change your life and get it for free!</p>
    </div>

    <div className="container">
      <div className="row">
        <div className="col-4">
           <Img fluid={props.data.kickstartOne.childImageSharp.fluid}/>
        </div>
        <div className="col-4">
          <Img fluid={props.data.kickstartTwo.childImageSharp.fluid}/>
        </div>
        <div className="col-4">
          <Img fluid={props.data.kickstartThree.childImageSharp.fluid}/>
        </div>
      </div>
    </div>

    <h3 className="text-center m-5"><span className="d-block m-3">It’s Simple.</span> Lose 20 lbs or 5% Body Fat and join us for free* Join the Wait list! </h3>
    <div className="text-center m-5">
      <button>Join Here</button>
    </div>

    <h2 className="text-center m-5"><i>“So if I lose 20lbs or 5% BF, I get it free? Why are you doing this?”</i></h2>

    <h3 className="text-center">3 reasons: </h3>
    <ul className="text-center list mt-5">
      <li>1. We are looking for local men and women to showcase some amazing transformations!</li>
      <li>2. It’s a trade. You get the body and health of your dreams and we get some amazing stories. It’s a win-win!</li>
      <li>3. We know that having a big incentive will hold you accountable.</li>
    </ul>

    <p className="text-center">Our goal within 28 days is to get you on the right track with eating wholesome foods and exercising regularly. You will have the habits,
      strategies and support to keep going for the rest of your life!</p>


       <div className="container">
      <div className="row">
        <div className="col-4">
           <Img fluid={props.data.kickstartFour.childImageSharp.fluid}/>
        </div>
        <div className="col-4">
          <Img fluid={props.data.kickstartSeven.childImageSharp.fluid}/>
        </div>
        <div className="col-4">
          <Img fluid={props.data.kickstartSix.childImageSharp.fluid}/>
        </div>
      </div>
    </div>

    <h3 className="text-center mt-3">We Will Give You the Coaching + Tools to Change Your Body and Your Life.. </h3>
    <h3 className="text-center">…If You Are Ready</h3>

    <h2 className="text-center mt-5"><u>Do YOU:</u></h2>
    <p>Find typical gyms intimidating?</p>
    <p>Need the motivation, accountability, and guidance from a team that can finally make your feel comfortable and “at home” in a fitness facility?</p>
    <p>Want to regain long lost confidence that’s been holding you back since work, kids, or just a general busy life that’s taken over?</p>
    <p>Want to feel comfortable in your clothes again?</p>
    <p>Want to feel strong again and to feel like nothing can hold you back this time around?</p>
    <p>Our 28 Day KICKSTART program provides “done-for-you”, easy to follow, meal plans and family friendly recipes to get you into a healthy routine FAST. Breakfast, lunch, dinner, snacks, we have it covered.</p>
    <h3>Your investment is only $249 for <u><strong>everything</strong></u>. </h3>
    <p>Add personal training sessions for as low as $24.75 a session!</p>
    </>
  )
}

export default KickStart

export const pageQuery = graphql`
    query {
      kickstartOne: file(relativePath: { eq: "kickstart-1.png" }) {
        childImageSharp {
          fluid( maxWidth: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      kickstartTwo: file(relativePath: { eq: "kickstart-2.png" }) {
        childImageSharp {
          fluid( maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
     kickstartThree: file(relativePath: { eq: "kickstart-3.png" }) {
        childImageSharp {
          fluid( maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      kickstartFour: file(relativePath: { eq: "kickstart-4.png" }) {
        childImageSharp {
          fluid( maxWidth: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      kickstartFive: file(relativePath: { eq: "kickstart-5.png" }) {
        childImageSharp {
          fluid( maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
     kickstartSix: file(relativePath: { eq: "kickstart-6.png" }) {
        childImageSharp {
          fluid( maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      kickstartSeven: file(relativePath: { eq: "kickstart-7.png" }) {
        childImageSharp {
          fluid( maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `

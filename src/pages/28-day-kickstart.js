import React from 'react'
import Menu from '../components/menu'
import Img from "gatsby-image"
import {Form, Row, Col, Button} from 'react-bootstrap'

const KickStart = (props) => {


  return (
    <>
    <Menu />
    <h1 className="text-center">Our Next BALANCED HABITS 28-Day KICKSTART Starts September 19th!</h1>
    <div className="container my-5">
      <p className='text-center'>We’re super excited that you are here and ready to commit to a healthier lifestyle in 2020!</p>
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
    <div className="container">
      <p className="text-center">Find typical gyms intimidating?</p>
      <p className="text-center">Need the motivation, accountability, and guidance from a team that can finally make your feel comfortable and “at home” in a fitness facility?</p>
      <p className="text-center">Want to regain long lost confidence that’s been holding you back since work, kids, or just a general busy life that’s taken over?</p>
      <p className="text-center">Want to feel comfortable in your clothes again?</p>
      <p className="text-center">Want to feel strong again and to feel like nothing can hold you back this time around?</p>
      <p className="text-center">Our 28 Day KICKSTART program provides “done-for-you”, easy to follow, meal plans and family friendly recipes to get you into a healthy routine FAST. Breakfast, lunch, dinner, snacks, we have it covered.</p>
    </div>
    <h3 className="text-center">Your investment is only $249 for <u><strong>everything</strong></u>. </h3>
    <p className="text-center">Add personal training sessions for as low as $24.75 a session!</p>

    <h2 className="text-center">What’s included?</h2>
    <div className="container">
      <ul>
        <li>28 Day nutrition plan including 28 days of easy, done-for-you meal plans. Get access to our app and have everything to be successful at your fingertips; from healthy & family friendly recipes and menus, to daily motivation, tips and challenges. We are making it SUPER SIMPLE to follow our plans, know what to eat and see your body change. </li>
        <li>Weigh-ins, measurements, and accountability. We will hold you accountable to completing the program and you will be able to see the progress and changes you have made! </li>
        <li>Unmatched support and guidance! Throughout the program our team and other Kick Start participants will be there to support and motivate you. Through the in-person weekly check ins, boot camps, and our private Kick Start forum you are only seconds away from the support you need to succeed.</li>
        <li><strong>Free Bootcamps and Cardio opportunities.</strong> You will be training 1x week in a group setting with your fellow Kickstart participants for free and you will have every day access to our cardio area. You can add extra semi-private training sessions to your program as well to really accelerate your results! These are an hour long together with one of our trainers only for $24.74 (that’s more than 50% off the regular rate).</li>
        <li>Prizes + Cash Back Rewards: We are giving away over $3000 in prizes. And remember, lose 20lbs or 5% Body Fat and get 100% reimbursed.* </li>
      </ul>
    </div>
    <div className="container mt-4">
      <h3>What if I am gone during the 28 days?</h3>
      <p>
          No problem. We would love to see you commit 100% during the 28 day KICK START and be around for the entirety, but we realize this isn’t always realistic. We can coach you through your travels.
          Regarding the prizes at the finale, you must be in attendance to win. We want to celebrate you!
      </p>
    </div>
    <div className="container mt-4">
      <h3>What are the boot camps and cardio opportunities like?</h3>
      <p>
      For new clients: a typical boot camp class lasts one hour and can burn around 450 calories while building strength and aerobic capacity all at the same time. Plus, with a dedicated trainer and group of fellow participants all sweating together, it’s easy to stay motivated and go for that last crunch. These boot camps are for all fitness levels.
      </p>
      <p>
       If you wish to add extra personal training sessions, there is an option to add sessions for as low as <strong>$24.75!</strong> Our semi-private personal training is focused, comfortable and fun with only 3-5 people per session with your trainer. After years, we have found a combo of private and group to be perfect blend of personal attention, fun, community, support and accountability. These are an hour long sessions.
      </p>
    </div>
    <div className="container mt-4">
    <h3>What are your hours?</h3>
    <p>
      <span className="d-block">5:30am to 6:30pm Mon, Wed &amp; Fri</span>
      <span className="d-block">5:30am to 8:00pm Tues &amp; Thur</span>
      <span className="d-block">7:30am to 10:30am Sat</span>
    </p>
    </div>
    <div className="container mt-4">
      <h3>How can I become a full time client?</h3>
      <p>
        We would love to have you! Many of our 28 Day Kickstarters become full time clients after they go through our proven systems and see great results. During the final event, you will have an exclusive invite and offer to join our studio full time.
      </p>
    </div>
    <div className="container mt-4">
      <h3>What is the nutrition like?</h3>
      <p>
        We focus on eating real food. We will give you a personalized 28 day nutrition plan that is fat burning focused and family friendly. It includes easy to follow recipes, grocery lists, substitutions, and more. Even if you have done the program before, you will be happy to see a brand new nutrition plan, new weekly challenges and new recipes too.
      </p>
    </div>
    <h2 className="text-center mt-5">Your Commitment Is Risk Free</h2>
    <div className="container">
    <p>
      *We 100% guarantee body and life changing results from following the 28 Day KICKSTART program. We meet you in the middle- you need to follow your nutrition, meet with us weekly, and attend the free cardio options and in turn we will ensure you see results in no time. If you follow the program, complete your cardio options and still don’t see awesome results, we will 100% refund your money. Simple as that.
    </p>
    </div>
    <div className="container text-center mb-5">
      <h2>
        <span className="d-block">Join the Waitlist Now!</span>
        <span className="d-block">Start Getting Results</span>
        <span className="d-block">Enter Your Info Here!</span>
      </h2>
      <Form className="mt-5">
        <Row>
          <Col className="m-2">
            <Form.Control placeholder="First name" />
          </Col>
          <Col className="m-2">
            <Form.Control placeholder="Last name" />
          </Col>
        </Row>
        <Row>
        <Col className="m-2">
          <Form.Control placeholder="Email" />
        </Col>
        <Col className="m-2">
          <Form.Control placeholder="Phone Number" />
        </Col>
      </Row>
        <div className="text-center m-2">
          <Button variant="primary" type="submit">Submit</Button>
        </div>

      </Form>
    </div>


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

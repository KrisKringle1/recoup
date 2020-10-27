import React from 'react'
import Menu from '../components/menu'
import 'bootstrap/dist/css/bootstrap.min.css';
import Img from "gatsby-image"

const PersonalTraining = (props) => {


  return (
    <>
    <Menu />
    <h1 className="text-center m-3">Private & Semi Private Personal Training in Costa Mesa, CA</h1>
    <h2 className="text-center m-3">How good would it feel to finally have the body you want? See how our team of experts can help you look, feel and perform at your best.</h2>

    <div className="container mt-5">
      <div className="flex-row d-flex">
        <div className="image-container col-6">
          <Img fluid={props.data.trainingOne.childImageSharp.fluid}/>
        </div>
        <div className='text-container col-6'>
          <h3>You Are The Focus</h3>
          <p className="mt-3">If you are reading this page, you are likely ready to embark on a journey towards setting and reaching health,
            fitness and weight loss goals. Studies have shown that not only do you need accountability, but that you also
            need expert guidance and a support system to ensure that you are successful.

            When you are part of the RECOUP Personal Training program you’ll receive a comprehensive fitness assessment to evaluate your
            movement, posture, and your goals to understand your current situation. Our personal trainers will take into account your workout
            history, your preferences for exercising, your lifestyle, and your overall goals to ensure that you achieve your desired results in
            record time. RECOUP’s personal trainers have over a decade of experience to ensure that the Costa Mesa community is working with the
            best trainers in town.
            </p>
        </div>
      </div>
    </div>

    <div className="container mt-5">
      <div className="flex-row d-flex">
        <div className='text-container col-6'>
          <h3 className="text-center">Orange County Personal Trainers</h3>
          <p className="mt-3">We understand that many people have struggled to lose weight, tone up and get fit in the past,
           and we also understand how daunting it can be to embark on a new challenge by joining us for personal training in Costa Mesa.
          So it’s in the nature of our highly-skilled personal trainers to put you at ease and make you feel encouraged, supported and motivated
          throughout your journey to a better body and a better you.
          We are so confident we can get you the results you want and deserve. That’s why we even guarantee your success!
          Whenever you are ready to discuss everything that is possible for you to achieve, we would love to talk with you.
          To your heath and wellness,
          Mattison, Stevie and Bo
            </p>
        </div>
        <div className="image-container col-6  m-5">
           <Img fluid={props.data.trainingTwo.childImageSharp.fluid}/>
        </div>
      </div>
    </div>

     <div className="container mt-5">
      <div className="flex-row d-flex">
        <div className="image-container col-6">
           <Img fluid={props.data.trainingThree.childImageSharp.fluid}/>
        </div>
        <div className='text-container col-6'>
          <h3>Get Started Today!</h3>
          <p className="mt-3">Ready to get started today? It is very simple - just click the button below
           for a free consultation to discuss your individual goals and how we can help you achieve maximum results in minimum time.
            You can also speak with one of our Costa Mesa personal training experts anytime by calling
                              (714) 262-4003. We look forward to working with you reach and maintain your health and fitness goals.
            </p>
        </div>
      </div>
    </div>


    </>
  )
}

export default PersonalTraining


export const pageQuery = graphql`
    query {
      trainingOne: file(relativePath: { eq: "personal-training-1.jpeg" }) {
        childImageSharp {
          fluid( maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      trainingTwo: file(relativePath: { eq: "personal-training-2.jpeg" }) {
        childImageSharp {
          fluid( maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
     trainingThree: file(relativePath: { eq: "personal-training-3.jpg" }) {
        childImageSharp {
          fluid( maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `

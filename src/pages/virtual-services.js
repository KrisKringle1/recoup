import React from 'react'
import Menu from '../components/menu'

const VirtualServices = () => {


  return (
    <>
    <Menu />
    <h1 className="text-center">The 21 Day At-Home Transformation Program!</h1>
    <h3 className="text-center mt-4">Guaranteed to lose 8-12 lbs or we'll coach you for free for another 21 days.</h3>
    <div className="container">
    <p className="text-center">It's here! Our BEST and most successful transformation program can be done all from the comfort of your home
      for a limited time. Join the hundreds of people before you who torched their fat, dropped inches, and never had
      to leave their living room.</p>
    </div>
    <div className="text-center m-3">
          <strong>100% Remote | Workouts | Nutrition | Accountability & Support | Results</strong>
    </div>

    <div className="container">
      <div className="d-flex">
        <div className="video-container m-4">
          <iframe title="vimeo-player" src="https://player.vimeo.com/video/409062460" width="640" height="360" frameborder="0" allowfullscreen></iframe>
        </div>
        <ul className="mt-5">
          <li>Nutrition coaching that take the guesswork out of healthy eating</li>
          <li>DAILY personal accountability and regular check-ins from a coach 7x week</li>
          <li>Professional led at home workouts programmed and tracked by our team</li>
          <li>Mindset sessions to manage stress and improve sleep</li>
          <li>Recovery & Yoga Sessions</li>

        </ul>
      </div>
    </div>
    <h2 className="text-center">Start Dates Available Every Week! - Let's Do This!</h2>
    <h3 className="text-center my-4"><u>Join today and we'll take 30% off</u></h3>

       <p className="text-center my-2">PLUS, your entire investment acts as a credit and deposit towards a future program when we open back up! <span className="d-block">Super cool, huh?</span></p>

    <h3 className="text-center">Don't be a victim of self-isolation! Make the most of it!</h3>
    <ul className="text-center">
      {/* get rid of the unordered list  */}
      <li>1. Take care of yourself</li>
      <li>2. Take care of your friends and family</li>
      <li>3. Stay healthy, get strong and boost your immune system</li>
      <li>4. Time to focus on you and your health!</li>
    </ul>

    <h2 className="text-center mt-5 mb-3">Let's Answer Your Questions!</h2>
    <h4 className="mx-5 mt-5"><strong>How Long is the program?</strong></h4>
    <p className="mx-5">The program is 21 days long! We provide you with your nutrition plan, workouts, recipes, trackers and more.</p>

    <h4 className="mx-5 mt-5"><strong>When does it start?</strong></h4>
    <p className="mx-5">You can start right away! With the convenience of the online program, you have the entire program at your fingertips. We give you 30 days access to our online membership portal so you have time to learn the ropes, get your meals together and start.</p>

    <h4 className="mx-5 mt-5"><strong>How can I access the program?</strong></h4>
    <p className="mx-5">After you signed up, we will give you a call to give you all the details you need to know. We will schedule a 30-min Nutrition Orientation where we will explain your meal plan and how to be successful on the program.</p>

    <h4 className="mx-5 mt-5"><strong>What is the nutrition like?</strong></h4>
    <p className="mx-5">We focus on eating real, whole food. We have personally designed a fully-done-for-you 21 day nutrition plan that is fitness focused and family friendly. It includes easy to follow recipes, grocery lists, substitutions and more. Remember, this is not a typical diet. We built this for real people with real lives. It's easy, simple and made for busy schedules.</p>

    <h4 className="mx-5 mt-5"><strong>What are the workouts like?</strong></h4>
    <p className="mx-5">We want you to workout at least 3 times per week. Workouts are 30 minutes long and focused on strength, cardio and mobility.</p>

    <div className="text-center">
    <button>Sign Up Now and Save $100</button>
    </div>
    </>
  )
}

export default VirtualServices

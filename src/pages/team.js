import React from 'react'
import Menu from '../components/menu'
import 'bootstrap/dist/css/bootstrap.min.css';

const Team = () => {


  return (
    <>
    <Menu />
    <h1 className="text-center">Our Team</h1>
    <div className="container mt-5">
      <div className="flex-row d-flex">
        <div className="image-container col-6">
          <div className="image-test-box"></div>
        </div>
        <div className='text-container col-6'>
          <h3>Mattison Fetters</h3>
          <strong>Husband, Father, Friend, Athlete, open and collaborative </strong>
          <p>Favorite quote: <i>'Be strong enough to stand alone, smart enough to know when you need help, and brave enough to ask for it.'</i></p>
          <p><i>Some of Mattisons acheivements are: </i></p>
          <ul>
            <li>National Academy of Sports Medicine, CPT</li>
            <li>TRX Suspension Trainer Certification</li>
            <li>Balanced Habits Nutrition Certified</li>
            <li>Pursuing degree in Kinesiology, Adaptive Exercise and a minor in Business Management.</li>
            <li>CPR/AED and First Aid Certified</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="container mt-5">
      <div className="flex-row d-flex">
        <div className='text-container col-6'>
          <h3>Stevie Fetters</h3>
           <strong>Wife, Mother, Health advocate, Trainer,  Adventure Seeker, Music lover,  French bulldog owner, Psychology Major </strong>
          <p>Favorite quote: <i>“If you always put limits on everything you do, physical or anything else, it will spread into your work and into your life. There are no limits. There are only plateaus, and you must not stay there, you must go beyond them.”</i></p>
          <p><i>Some of Stevie's acheivements are: </i></p>
          <ul>
            <li>National Academy of Sports Medicine, CPT</li>
            <li>TRX Suspension Trainer Certification</li>
            <li>Bachelors of Arts in Psychology with an emphasis in behavioral science</li>
            <li>Balanced Habits Nutrition Certified</li>
            <li>CPR/AED and First Aid Certified</li>
          </ul>
        </div>
        <div className="image-container col-6">
          <div className="image-test-box"></div>
        </div>
      </div>
    </div>

    <div className="container mt-5">
      <div className="flex-row d-flex">
        <div className="image-container col-6">
          <div className="image-test-box"></div>
        </div>
        <div className='text-container col-6'>
          <h3>Bo Wind</h3>
          <strong>Fitness competitor, Travel, Family and Friends, Gadgets, Bike rides in the sunshine state, Love for homemade meals and good coffee.</strong>
          <p>Favorite quote: <i>“Surround yourself with people who build you up and inspire you not to give up”.</i></p>
          <p><i>Some of Bo's acheivements are: </i></p>
          <ul>
            <li>National Academy of Sports Medicine, CPT</li>
            <li>Balanced Habits Nutrition Certified</li>
            <li>CPR/AED and First Aid Certified</li>
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default Team

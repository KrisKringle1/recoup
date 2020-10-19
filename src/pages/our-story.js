import React from 'react'
import Menu from '../components/menu'
import 'bootstrap/dist/css/bootstrap.min.css';

const Story = () => {


  return (
    <>
    <Menu />
    <h1 className="text-center">Our Story</h1>
    <div className="container mt-5">
      <div className="flex-row d-flex">
        <div className="image-container col-6">
          <div className="image-test-box"></div>
        </div>
        <div className='text-container col-6'>
          <p>Changing peoples lives forever.  Now THAT gets us out of bed in the morning.
            If you’re reading this page we’d like to thank you for your consideration in
            entrusting us with your health and wellness.
            It’s a consideration we don’t take lightly. After spending over a decade in the
            personal training and nutrition industry, we fell in love with helping people live
            a life they so rightfully deserve.
            With that shared passion, it only made sense to create RECOUP to serve men and women
            like yourself who understand they are looking for expert help, want a plan and the support
            to see it through, and want to see results quickly.
            So, whether it is day 1 for you, or day 1,001, don’t leave your health and wellness to chance.
            We’d be honored to be a part of your journey.</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Story

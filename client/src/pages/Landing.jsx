import React from 'react'
import styled from 'styled-components'
import Wrapper from '../assets/wrappers/LandingPage.js'
import main from '../assets/images/main.svg'
import { Logo } from '../components'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo/>
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>Finding</span> app
            </h1>
            <p>
            Welcome to our modern platform built to seamlessly connect job seekers and employers. Whether you’re a recent graduate stepping into the professional world or an experienced recruiter searching for top talent, our streamlined approach makes it easier than ever to find your perfect match. Employers can post roles in minutes, while job seekers can discover opportunities tailored to their skills and aspirations. Let’s work together to make job hunting and recruitment simpler, faster, and more rewarding for everyone.
            </p>
            <Link to="/register" className='btn register-link'>
              Register
            </Link>
            <Link to="/login" className='btn '>
              Login / Demo User
            </Link>
        </div>
        <img src={main} alt="job hunt" className='img main-img'/>
      </div>
    </Wrapper>
  )
}

export default Landing

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
            Big mood locavore woke, gastropub everyday carry kinfolk chillwave cold-pressed fit plaid la croix man bun. Raw denim stumptown truffaut health goth seitan banh mi, tofu direct trade narwhal solarpunk shaman selfies forage salvia. Readymade VHS lomo cliche swag, tattooed iPhone paleo kinfolk cray church-key live-edge hot chicken everyday carry. 
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

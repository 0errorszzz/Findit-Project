import React from 'react'
import Wrapper from '../assets/wrappers/SmallSidebar'
import { useDashboardContext } from '../pages/DashboardLayout'
import Logo from './Logo'
import { FaTimes } from 'react-icons/fa'
import NavLinks from './NavLinks'

const SmallSideBar = () => {
  const {showSidebar,toggleSidebar} = useDashboardContext()

  return <Wrapper>
    <div className={showSidebar?"sidebar-container show-sidebar":'sidebar-container'}>
      <div className="content">
        <button type="button" className='close-btn' onClick={toggleSidebar}>
          <FaTimes />
        </button>
        <header>
          <Logo />
        </header>
        <NavLinks/>

      </div>
    </div>
    </Wrapper>
}//每次click之后，click项成为active

export default SmallSideBar

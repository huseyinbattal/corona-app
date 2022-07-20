import React from 'react'
import Logo from './Logo'

function Header() {
  return (
      <nav className='bg-gray-800 border-gray-200 px-2'>
          <div className='container flex flex-wrap justify-between items-center mx-auto'>
          <Logo/>
          </div>
      
      
      </nav>
  )
}

export default Header
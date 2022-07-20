import React from 'react'
import Logo from './Logo'

function Header() {
  return (
      <nav className='bg-gray-800 border-gray-200 px-2'>
          <div className='container flex flex-wrap justify-between items-center mx-auto'>
              <Logo />
              <div className="w-full">
                  <ul className='flex flex-row  mt-4 font-medium space-x-8'>
                      <li>
                          <a className='block cursor-pointer border-0 py-2 pr-4 pl-3 text-gray-400 hover:text-blue-700'>
                              Merhaba
                          </a>
                      </li>
                  </ul>
              </div>
          </div>
      
      
      </nav>
  )
}

export default Header
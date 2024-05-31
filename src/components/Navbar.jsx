import { useEffect } from "react"
import Seperator from "./Seperator"
import { useState } from "react"

import "../glass.css"
import ChatIcon from "./ChatIcon"

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0)

  const handleScroll = () => {
    setScrollY(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      {scrollY > 80 ? (
        <header className='flex items-center justify-center fixed top-0 left-0 p-6 w-full z-10 bg-transparent'>
          <div className='p-3 border border-gray-300 border-1 flex items-center justify-between gap-24 glass rounded-md'>
            <span className='font-bold text-xl'>LOGO</span>

            <div className='flex items-center justify-center gap-4'>
              <button className='rounded-full bg-black text-white px-6 py-1 flex items-center justify-center gap-4 border border-2 border-black'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='size-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                  />
                </svg>

                <span className='text-xs'>Menu</span>
              </button>

              <button className='px-6 py-1 flex items-center justify-center gap-4 gradient-border rounded-full'>
                <ChatIcon />

                <span className='text-xs'>Discuss CPT</span>
              </button>
            </div>

            <div className='flex items-center justify-center'>
              <div className='flex items-center justify-center bg-black h-8 w-8 rounded-full'>
                <div className='flex items-center justify-center bg-white rounded-2xl p-1'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='size-4'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
                    />
                  </svg>
                </div>
              </div>
              <div className='px-6 py-2 bg-black text-white rounded-full text-sm'>
                Join Program
              </div>
            </div>
          </div>
        </header>
      ) : (
        <header className='border-b border-gray-200 border-1 px-24 py-6 flex items-center justify-between'>
          <span className='font-bold text-xl'>LOGO</span>

          <nav>
            <ul className=' inline-flex items center justify-center gap-4'>
              <li>Learn</li>

              <li className='flex items-center justify-center'>
                <Seperator />
              </li>

              <li>How do I practice?</li>

              <li className='flex items-center justify-center'>
                <Seperator />
              </li>

              <li>Universities</li>

              <li className='flex items-center justify-center'>
                <Seperator />
              </li>

              <li>Corporate</li>
            </ul>
          </nav>

          <div className='flex items-center justify-center'>
            <div className='flex items-center justify-center bg-black h-10 w-10 rounded-full'>
              <div className='flex items-center justify-center bg-white rounded-2xl p-1'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='size-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
                  />
                </svg>
              </div>
            </div>
            <div className='px-8 py-4 bg-black text-white rounded-full text-sm'>
              Join Program
            </div>
          </div>
        </header>
      )}
    </>
  )
}

export default Navbar

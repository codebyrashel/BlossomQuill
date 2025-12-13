import React from 'react'
import { useState, useEffect } from 'react'
import { useAuth } from '../../context/Authcontext'
import { Menu, X, BookOpen, LogOut } from "lucide-react"

const LandingPage = () => {
  const { user, logout, isAuthenticeted } = useAuth()
  const [isOpen, setIsOpen] = useState(false)
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false)
  const navLinks = [
    { name: 'Features', href: "#features" },
    { name: "Testimonials", href: "#testimonials" }
  ]

  useEffect(() => {
    const handleClickOutside = () => {
      if (profileDropdownOpen) {
        setProfileDropdownOpen(false)
      }

      document.addEventListener('click', handleClickOutside)
      return () => document.removeEventListener("click", handleClickOutside)
    }
  }, [profileDropdownOpen])
  return (
    <header>
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <a href="/" className='flex items-center space-x-2.5 group'>
            <div className='w-9 h-9 bg-gradient-top-br from-violet-400 to-purple-500 rounded-xl flex items-center justify-center shadow-lg shadow-violet-500/20 group-hover:shadow-violet-500/40 transition-all duration-300 group:hover-scale-105'>
              <BookOpen className='w-5 h05 text-white'/>
            </div>
            <span className=''>
              Ai eBook Creator
            </span>
          </a>
           
           {/* Dekstop Navigations */}
           <nav className=''>
              {
                navLinks.map((link) => {
                  <a key={link.name} href={link.href} className=''>
                    {link.name}
                  </a>
                })
              }
           </nav>
           {/* auth butttons $ profile */}
           <div className=''>
              {isAuthenticeted ? (
                <ProfileDropdown isOpen{profileDropdownOpen} onToggle={(e) => {
                  e.stopPropagation();
                  setProfileDropdownOpen(!profileDropdownOpen)
                }}
                 avter={user?.avater || ""}
                 companyName={user?.name || ""}
                 email={user?.email || ""}
                 userRole={user?.role || ""}
                 onLogoout={() => console.log('Logout')}
                />
              ):(
                <>
                  <a href="/login" className=''>
                     login
                  </a>
                  <a href="/signup" className=''>
                    Get Started
                  </a>
                </>
              )
            }
           </div>
           {/* Mobile Menu */}
           <button onClick={() => setIsOpen(!isOpen)} className=''>
               {isOpen ? <X className=""/> : <Menu className=""/>}
           </button>
        </div>
      </div>
    </header>
  )
}

export default LandingPage
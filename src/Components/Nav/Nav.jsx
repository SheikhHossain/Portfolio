import React, { useEffect, useState } from 'react'
import './Nav.css'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiBook, BiMessageSquareDetail, BiCodeAlt} from 'react-icons/bi'
import {RiServiceFill, RiBriefcaseLine} from 'react-icons/ri'

const links = [
  { href: '#',             label: 'Home',       Icon: AiOutlineHome },
  { href: '#about',        label: 'About',      Icon: AiOutlineUser },
  { href: '#portfolio',    label: 'Projects',   Icon: BiCodeAlt },
  { href: '#experience',   label: 'Skills',     Icon: RiServiceFill },
  { href: '#services',     label: 'Courses',    Icon: BiBook },
  { href: '#testimonials', label: 'Work & hobbies', Icon: RiBriefcaseLine },
  { href: '#contacts',     label: 'Contact',    Icon: BiMessageSquareDetail },
]

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')

  // Keep the highlight in sync with whatever section is in the middle of the screen
  useEffect(() => {
    const targets = [document.querySelector('header'), ...links.slice(1).map(l => document.querySelector(l.href))].filter(Boolean)
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveNav(entry.target.tagName === 'HEADER' ? '#' : `#${entry.target.id}`)
        }
      })
    }, { rootMargin: '-50% 0px -50% 0px' })
    targets.forEach(t => observer.observe(t))
    return () => observer.disconnect()
  }, [])

  return (
    <nav aria-label='Sections'>
      {links.map(({ href, label, Icon }) => (
        <a
          key={href}
          href={href}
          aria-label={label}
          title={label}
          aria-current={activeNav === href ? 'location' : undefined}
          onClick={() => setActiveNav(href)}
          className={activeNav === href ? 'active' : ''}
        >
          <Icon aria-hidden='true' />
        </a>
      ))}
    </nav>
  )
}

export default Nav

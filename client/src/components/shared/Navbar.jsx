import './shared-layout.css'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import Logo from './Logo'
import { useDispatch, useSelector } from 'react-redux'
import { toggleNav } from '../../features/generalSlice'
import NaviLink from './NaviLink'

const Navbar = () => {
  const { navIsOpen } = useSelector((store) => store.general)
  const dispatch = useDispatch()

  return (
    <header className='navigation'>
      <div className='nav-center'>
        {/* LOGO */}
        <Logo />

        {/* NAVIGATION LINKS */}
        <nav>
          {!navIsOpen && (
            <span onClick={() => dispatch(toggleNav(true))}>
              <FaBars />
            </span>
          )}
          <aside
            className={`${navIsOpen ? 'open-nav' : ''}`}
            onClick={() => dispatch(toggleNav(false))}
          ></aside>
          <aside className={`${navIsOpen ? 'open-nav' : ''}`}>
            <article>
              <Logo />
              <span onClick={() => dispatch(toggleNav(false))}>
                <FaTimes />
              </span>
            </article>
            <NaviLink path='#' text='Home' />
            <NaviLink path='#' text='About Us' />
            <NaviLink path='#' text='Reviews' />
            <NaviLink path='#' text='Contact Us' />
            <NaviLink path='#' text='Download app' />
          </aside>
        </nav>
      </div>
    </header>
  )
}
export default Navbar

import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { toggleNav } from '../../features/generalSlice'

const NaviLink = ({ path, text }) => {
  const dispatch = useDispatch()

  return (
    <a href={path} onClick={() => dispatch(toggleNav(false))}>
      {text}
    </a>
  )
}
export default NaviLink

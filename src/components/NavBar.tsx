import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="ms-4">
      <NavLink to='/' className="fw-bold text-decoration-none">Home</NavLink>
      <NavLink to='/Cats' className="ms-3 fw-bold text-decoration-none">Gatos</NavLink>
      <NavLink to='/About' className="ms-3 fw-bold text-decoration-none">Sobre Nós</NavLink>
    </nav>
  )
}

export default NavBar

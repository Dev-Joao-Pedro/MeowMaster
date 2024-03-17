import { NavLink } from "react-router-dom"
import NavBar from "./NavBar"
import './Header.css'

const Header = () => {
  return (
    <header className="p-4 d-flex justify-content-beetwen align-items-center">
      <div className="container d-flex align-items-center">
        <h2>MeowMaster</h2>
        <NavBar />
      </div>
      <div className="me-4">
        <NavLink to='/Login' className="ms-2 btn btn-primary">Login</NavLink>
      </div>
    </header>
  )
}

export default Header

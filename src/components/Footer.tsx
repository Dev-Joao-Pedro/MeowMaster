import './Footer.css'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-lg-6 p-4 d-flex flex-column align-items-start'>
            <h5 className='fw-bold text-primary'>MeowMaster</h5>
            <a>Politica de Privacidade</a>
            <a>Termos de serviços</a>
          </div>
          <div className='col-12 col-lg-6 p-4 d-flex flex-column align-items-start'>
            <h5 className='fw-bold text-primary'>Páginas</h5>
            <NavLink to='/' className="text-black text-decoration-none">Home</NavLink>
            <NavLink to='/Cats' className="text-black text-decoration-none">Gatos</NavLink>
            <NavLink to='/About' className="text-black text-decoration-none">Sobre Nós</NavLink>
            <NavLink to='/Login' className="text-black text-decoration-none">Login</NavLink>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

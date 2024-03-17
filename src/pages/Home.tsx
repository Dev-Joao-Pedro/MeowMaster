import './Home.css'
import { NavLink } from 'react-router-dom'
import Banner from '../assets/images/banner-cat.png'

const Home = () => {
  return (
    <main className='container'>
        <div className='row'>
            <div className='col-12 col-lg-5 p-3'>
                <img className='img-fluid' src={Banner} alt="banner" />
            </div>
            <div className='col-12 col-lg-7 p-2 d-flex justify-content-center align-items-center align-items-lg-start flex-column'>
                <h3>Bem Vindo ao MeowMaster</h3>
                <p className='text-center text-lg-start'>Explore o fascinante mundo dos gatos com o MeowMaster - seu guia definitivo para tudo relacionado a felinos! De cuidados a curiosidades, temos tudo o que você precisa para entender, mimar e se encantar com essas criaturas adoráveis. Junte-se a nós e embarque nesta jornada felina agora!</p>
                <NavLink to='/About' className='btn btn-primary'>Sobre nós</NavLink>
            </div>
        </div>
        <div className='p-4'>
            <h1 className='col-12 p-2 text-center text-lg-start'>Descubra o Universo Felino no MeowMaster</h1>
            <p className='p-2 text-center text-lg-start'>Se você é um amante de felinos ou simplesmente se encanta com a elegância e mistério dos gatos, você está no lugar certo! No MeowMaster, mergulhamos no fascinante universo dos gatos para trazer a você as informações mais relevantes, divertidas e inspiradoras sobre esses adoráveis companheiros peludos.</p>
            <p className='p-2 text-center text-lg-start'>Prepare-se para se apaixonar ainda mais por essas criaturas encantadoras enquanto compartilhamos histórias, conselhos e momentos adoráveis. Junte-se à comunidade MeowMaster e embarque nesta jornada felina conosco!</p>
        </div>
    </main>
  )
}

export default Home

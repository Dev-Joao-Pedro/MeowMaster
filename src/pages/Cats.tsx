import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import './Cats.css'

interface Cats {
  id: number
  name: string
  description: string
  color: string
  breed: string
}

const Cats = () => {

  const [cats, setCats] = useState<Cats[]>([]);

  useEffect(() => {
    axios.get<Cats[]>('https://cat-api-mr.onrender.com/api/cat/')
      .then(response => {
        setCats(response.data.results);
      })
      .catch(error => {
        console.error('Erro ao consumir API:', error);
      });
  }, []);


  return (
    <>
      <main className='container'>
        <h1 className='p-3 text-center'>Gatos</h1>
        <div className='row'>
          <div className='col-12'>
            {cats.map(cat => (
              <div className='card p-2 my-4' key={cat.id}>
                <p className='fw-bold'>Nome: {cat.name}</p>
                <p><span className='fw-bold'>Descrição: </span>{cat.description}</p>
                <p><span className='fw-bold'>Cor: </span>{cat.color}</p>
                <p><span className='fw-bold'>Raça: </span>{cat.breed}</p>
                <NavLink className='btn btn-primary w-25' to='/Cats/id/'>Ver Mais</NavLink>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}

export default Cats

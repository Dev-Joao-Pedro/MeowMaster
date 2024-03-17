import React, { useState } from 'react'
import './Login.css'

const Login = () => {

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        console.log(`Email ${email}`)
        console.log(`Senha: ${password}`)
    }

  return (
    <main className='container p-5 d-flex justify-content-center'>
        <form onSubmit={handleSubmit} className='d-flex justify-content-center align-items-center flex-column'>
            <h1 className='p-3'>Login</h1>
            <label className='w-75 p-2'>Email: <br />
                <input className='form-control' type="email" onChange={(event) => setEmail(event.target.value)} />
            </label>
            <label className='w-75 p-2'>Senha: <br />
                <input className='form-control' type="password" onChange={(event) => setPassword(event.target.value)} />
            </label>
            <div className='w-75 p-2 d-flex justify-content-between'>
                <label>
                    <input className='me-1' type="checkbox" />
                      Relembrar
                </label>
                <a href="">Esqueceu a senha?</a>
            </div>
            <button type='submit' className='btn btn-primary w-75 p-2 my-4'>Iniciar</button>
        </form>
    </main>
  )
}

export default Login

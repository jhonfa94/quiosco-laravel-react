import { createRef, useState } from 'react';
import { Link } from 'react-router-dom'
import Alerta from '../components/Alerta';
import { useAuth } from '../hooks/useAuth';

export default function Registro() {

    const { registro } = useAuth({
        middleware: 'guest',
        url: '/'
    })

    const nameRef = createRef();
    const emailRef = createRef();
    const passwordRef = createRef();
    const passwordConfirmationRef = createRef();

    const [errores, setErrores] = useState([])

    const handleSubmit = async e => {
        e.preventDefault();

        const datos = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: passwordConfirmationRef.current.value,
        }
        // console.log("DAtos: ", datos)

        registro(datos, setErrores)

    }

    return (
        <>
            <h1 className='text-4xl font-black'>Crea tu cuenta</h1>
            <p>Crea tu cuenta llenando el formulario</p>


            <div className='bg-white shodow-md rounded-md mt-10 px-5 py-10'>
                <form
                    onSubmit={handleSubmit}
                    noValidate
                >
                    {errores ? errores.map((error, i) => <Alerta key={i}>{error}</Alerta>) : null}

                    <div className='mb-4'>
                        <label
                            htmlFor='nombre'
                            className='text-slate-800'                     >
                            Nombre
                        </label>
                        <input
                            id='nombre'
                            type='text'
                            className='mt-2  w-full p-3 bg-gray-50'
                            name='name'
                            placeholder='Tú nombre'
                            ref={nameRef}
                        />
                    </div>

                    <div className='mb-4'>
                        <label
                            htmlFor='email'
                            className='text-slate-800'                     >
                            Email
                        </label>
                        <input
                            id='email'
                            type='email'
                            className='mt-2  w-full p-3 bg-gray-50'
                            name='email'
                            placeholder='Tú email'
                            ref={emailRef}
                        />
                    </div>

                    <div className='mb-4'>
                        <label
                            htmlFor='password'
                            className='text-slate-800'                     >
                            Password
                        </label>
                        <input
                            id='password'
                            type='password'
                            className='mt-2  w-full p-3 bg-gray-50'
                            name='password'
                            placeholder='Tú password'
                            ref={passwordRef}
                        />
                    </div>

                    <div className='mb-4'>
                        <label
                            htmlFor='password_confirmation'
                            className='text-slate-800'                     >
                            Repetir Password
                        </label>
                        <input
                            id='password_confirmation'
                            type='password'
                            className='mt-2  w-full p-3 bg-gray-50'
                            name='password_confirmation'
                            placeholder='Repetir password'
                            ref={passwordConfirmationRef}
                        />
                    </div>

                    <input
                        type='submit'
                        value='Crear Cuenta'
                        className='bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer
                        '
                    />


                </form>


            </div>

            <nav className="mt-5">
                <Link to="/auth/login">
                    ¿Ya tienes cuenta? Inicia Sesión
                </Link>
            </nav>


        </>
    )
}

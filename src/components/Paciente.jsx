import React from 'react'

const Paciente = ({paciente, setPaciente}) => {
    const {nombre, propietario, email, fecha, sintomas} = paciente;
  return (
    <div className='mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl'>
                    <p className='font-bold uppercase text-gray-700 mb-3'>Nombre: {''}
                        <span className='font-normal normal-case'>{nombre}</span>
                    </p>

                    <p className='font-bold uppercase text-gray-700 mb-3'>Propietario: {''}
                        <span className='font-normal normal-case'>{propietario}</span>
                    </p>

                    <p className='font-bold uppercase text-gray-700 mb-3'>Email: {''}
                        <span className='font-normal normal-case'>{email}</span>
                    </p>

                    <p className='font-bold uppercase text-gray-700 mb-3'>Fecha Alta: {''}
                        <span className='font-normal normal-case'>{fecha}</span>
                    </p>

                    <p className='font-bold uppercase text-gray-700 mb-3'>Sintomas: {''}
                        <span className='font-normal normal-case'>{sintomas}</span>
                    </p>

                        <div className='flex justify-between'>
                        <button
                            type='button'
                            className='py-2 px-10 bg-indigo-600 text-white font-bold  hover:bg-indigo-700 uppercase rounded-lg'
                            onClick={() => setPaciente(paciente)}> Editar
                           
                        </button>
                        <button
                            type='button'
                            className='py-2 px-10 bg-red-600 text-white font-bold  hover:bg-red-700 uppercase rounded-lg'> Eliminar

                        </button>
                    </div>


                </div>
  )
}

export default Paciente

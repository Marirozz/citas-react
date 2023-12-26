import React, { Component } from 'react';
import Paciente from './Paciente';

const ListadoPaciente = ({ pacientes, setPaciente }) => {

    return (
        <div className=' md:w-1/2 lg:w-3/5 ' >

            {pacientes && pacientes.length ? (
                <>
                    <h2 className='font-black text-3xl text-center'>Listado de Pacientes</h2>
                    <p className='mt-5 text-lg text-center'>
                        Administra tus {''}
                        <span className='text-indigo-600 font-bold'>Pacientes y Citas</span>
                    </p>
                    <div className=' md:h-screen overflow-y-scroll'>

                        {pacientes.map(paciente => (
                            <Paciente
                                key={paciente.id}
                                paciente={paciente}
                                setPaciente={setPaciente}
                            />

                        ))}
                    </div>
                </>
            ) : (
                <>
                    <h2 className='font-black text-3xl text-center'>No hay Pacientes</h2>
                    <p className='mt-5 text-lg text-center'>
                        Comienza agregando Pacientes {''}
                        <span className='text-indigo-600 font-bold'>y apareceran en este lugar</span>
                    </p>
                </>
            )};


        </div>
    );
}

export default ListadoPaciente;

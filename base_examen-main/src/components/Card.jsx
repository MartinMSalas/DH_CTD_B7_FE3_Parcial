import React from 'react'

const Card = ({data}) => {
  console.log(data.name)
  console.log(data.name)
  return (
    <div className="w-full rounded overflow-hidden shadow-lg">
  
      <div className="px-6 py-4">
        <div className="font-bold text-xl text-orange-300 mb-2">Los datos ingresados son</div>
        <div className="text-gray-700 text-base">
          <h2 className="font-bold">Nombre: {data.name } </h2>
          <h2 className='font-bold'>Apellido: {data.lastName} </h2>
          <h2 className='font-bold'>DNI: {data.dni} </h2>
          
        </div>
        
      </div>
    </div>
  )
}

export default Card
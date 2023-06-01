import React from 'react'

const Card = ({data}) => {
  console.log(data[0].name)
  console.log(data.name)
  return (
    <div className="w-full rounded overflow-hidden shadow-lg">
  
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Los datos ingresados son</div>
        <div className="text-gray-700 text-base">
          <h2 className="font-bold">Nombre: {data[0].name } </h2>
          <h2 className='font-bold'>Apellido: {data[0].lastName} </h2>
          <h2 className='font-bold'>DNI: {data[0].dni} </h2>
          
        </div>
        
      </div>
    </div>
  )
}

export default Card
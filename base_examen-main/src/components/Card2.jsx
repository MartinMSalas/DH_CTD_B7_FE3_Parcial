
const Card = ({name,lastName,dni,data}) => {
    //console.log(data)
    const [nombre,apellido,dni2] = [...data]
    console.log(nombre)
    return (
      <div className="w-full rounded overflow-hidden shadow-lg">
    
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Los datos ingresados son</div>
          <p className="text-gray-700 text-base">
            <span className="font-bold">Nombre: {name} </span>
            <span className="font-bold">Apellido: {lastName} </span>
            <span className="font-bold">DNI: {dni} </span>
            
          </p>
          
        </div>
      </div>
    )
  }
  
  export default Card
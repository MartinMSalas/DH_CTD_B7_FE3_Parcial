
import { useRef, useState } from "react"
import { checkName,checkLastName,checkDni} from "./validators"
import Button from "./Button";

export function FormBasico3({  formHandler}) {

  const nameRef = useRef()
  const lastNameRef = useRef()
  const dniRef = useRef()
  

  const [nameErrors, setNameErrors] = useState([])
  const [lastNameErrors, setLastNameErrors] = useState([])
  const [dniErrors, setDniErrors] = useState([])
  

  const [isAfterFirstSubmit, setIsAfterFirstSubmit] = useState(false)

  function onSubmit(e) {
    e.preventDefault()
    setIsAfterFirstSubmit(true)

    const nameResults = checkName(nameRef.current.value)
    const lastNameResults = checkLastName(lastNameRef.current.value)
    const dniResults = checkDni(dniRef.current.value)
    

   
    setNameErrors(nameResults)
    setLastNameErrors(lastNameResults)
    setDniErrors(dniResults)
    

    if (nameResults.length === 0 && lastNameResults.length === 0 && dniResults.length === 0  ) {
     
      formHandler({name: nameRef.current.value, lastName: lastNameRef.current.value, dni: dniRef.current.value})
      
      nameRef.current.value = "";
      lastNameRef.current.value = "";
      dniRef.current.value = "";
      
    }
  }

  return (
    <div>
      
      <div className='grid grid-cols-1 pt-8'>
 
        <form onSubmit={onSubmit} className='px-5 pt-8 w-full form'>
          <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                  <div className={`form-group ${nameErrors.length > 0 ? "error" : ""}`}>
                    <input ref={nameRef} onChange={ isAfterFirstSubmit ? e => setNameErrors(checkName(e.target.value)): undefined }  type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:dark:text-red-700 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=""  />
                    <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre</label>
                    {nameErrors.length > 0 && (
                      <div className="msg">{nameErrors.join(", ")}</div>
                    )}
                  </div>
              </div>

              <div className="relative z-0 w-full mb-6 group">
                  <div className={`form-group ${lastNameErrors.length > 0 ? "error" : ""}`}>
                    <input ref={lastNameRef} onChange={ isAfterFirstSubmit ? e => setLastNameErrors(checkLastName(e.target.value)): undefined }  type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:dark:text-red-700 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
                    <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Apellido</label>
                    {lastNameErrors.length > 0 && (
                      <div className="msg">{lastNameErrors.join(", ")}</div>
                    )}
                  </div>
              </div>
          </div>
          <div className="relative z-0 w-full mb-6 group">
                  <div className={`form-group ${dniErrors.length > 0 ? "error" : ""}`}>
                    <input ref={dniRef} onChange={ isAfterFirstSubmit ? e => setDniErrors(checkDni(e.target.value)): undefined }   type="number" name="dniNumber" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:dark:text-red-700 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
                    <label htmlFor="dniNumber" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">DNI</label>
                    {dniErrors.length > 0 && (
                      <div className="msg">{dniErrors.join(", ")}</div>
                    )}
                  </div>
          </div>
         
          

        
          
          <div className="m-16 md:grid-cols-2 md:gap-6">
            <Button className="btn  " type="submit">
              Validar los datos ingresados
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
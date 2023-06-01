
import './App.css'
import {useState} from 'react'
import Card from './components/Card'
import {FormBasico3} from './components/FormBasico3'

function App() {
  const [data, setData] = useState([])
  
  const [isAfterFirstSubmit, setIsAfterFirstSubmit] = useState(false)
  function formHandler(formData) {
    
    //console.log(formData)
    setData([...data, formData])

    setIsAfterFirstSubmit(true)
  }
  return (
    <>
      <div className='justify-end'>
        <h1>Ingrese sus datos por favor</h1>

        <FormBasico3 formHandler={formHandler} />
        {isAfterFirstSubmit && <Card className="" data={data} />}
        
      </div>
    </>
  )
}

export default App

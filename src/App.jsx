import './App.css'
import { TextField } from '@mui/material'
import Button from '@mui/material/Button';
import { useState } from 'react';


function App() {

  const [height, setHeight] = useState(0)
  const [weight, setWeight] = useState(0)
  const [bmi, setBmi] = useState(0)
  const [category,setCategory] = useState(0)
  const [bg,setBg] = useState(0)

  const [isHeigt , setIsHeight] = useState(true)
  const [isWeight ,setIsWeight] = useState(true)


  const validate = (e) => {

    let name = e.target.name
    let value = e.target.value

  if(!!value.match(/^[0-9]*$/)){
    if(name === 'height'){
      setHeight(value)
      setIsHeight(true)
    }
    else{
      setWeight(value)
      setIsWeight(true)
    }
   }
   else{
    if(name == 'height'){
      // setHeight(value)
      setIsHeight(false)
    }
    else{
      // setWeight(value)
      setIsWeight(false)
    }
   }
  }


  const handleReset = () => {
    setHeight(0)
    setWeight(0)
    setIsHeight(true)
    setIsWeight(true)
    setBmi(0)
    setCategory('')
    setBg("white")
  }


  const calculate = () => {
    const bmiValue = (weight/((height/100)**2))
    setBmi(bmiValue.toFixed(2))

    if(bmiValue <18.5){
      setCategory('Under Weight')
      setBg('blue')
    }
    else if(bmiValue >=18.5 && bmiValue <=24.9){
      setCategory('Normal')
      setBg('green')
    }
    else if(bmiValue >=25 && bmiValue <=29.9){
      setCategory('Over Weight')
      setBg('yellow')
    }
    else if(bmiValue >=30 && bmiValue <=34.9){
      setCategory('Obese')
      setBg('Orange')
    }
    else if(bmiValue >=35){
      setCategory('Extremely Overweight')
      setBg('red')
    }
  }


  return (
    <>
      <div className='d-flex justify-content-center align-items-center' style={{ width: '100%', height: '100vh' }}>
        <div className='rounded p-5' style={{ width: '500px', backgroundColor: 'rgba(250, 235, 215, 0.5)' }}>
          <div className='text-center'>
            <h1>BODY MASS INDEX</h1>
            <p className='fs-2'>Calculate your BMI</p>
          </div>
          <form className='mt-3'>
            <div className='mb-3'>
              <TextField id="filled-basic" value={height || ""} name='height'  label="Height in cm" variant="filled" className='w-100' onChange={(e)=> validate(e)} />
              {!isHeigt &&
                <p className='text-danger'>*Invalid input</p>}
            </div>
            <div className='mb-3'>
              <TextField id="filled-basic" value={weight || ""} name='weight' label="Weight in kg" variant="filled" className='w-100' onChange={(e)=> validate(e)}/>
              {!isWeight &&
                <p className='text-danger'>*Invalid input</p>}  
            </div>
            <div className='d-flex justify-content-between w-100'>
              <Button style={{ height: '50px', width: '150px' }} variant="contained" color="success" disabled={isHeigt && isWeight ? false:true} onClick={calculate}>Calculate</Button>
              <Button style={{ height: '50px', width: '150px' }} variant="outlined" color="error" onClick={handleReset}>Reset</Button>
            </div>
            <div className='mt-5 text-center' style={{ backgroundColor: bg , margin: '10px', padding: '80px', borderRadius: '50%' }}>
              <h4>Your BMI Results : </h4>
              <h2 className='fw-bolder'>{bmi}</h2>
              <h4>{category}</h4>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
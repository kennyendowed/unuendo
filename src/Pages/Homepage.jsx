import React , {useState} from 'react'
import Input from '../Components/Input'
import unuendo from "../assets/unuedo.jpg"
import axios from 'axios'
import { PulseLoader } from "react-spinners";
import Swal from 'sweetalert2'


const API_URL = process.env.REACT_APP_BaseURL

const INITIAL_VALUES =
{
  customerName : "",
  phoneNumber : "",
  designation : "",
  class : "" ,
  school: "",
  location: "",
  company: ""

}
function Homepage(){
  
  const [details , setDetails] = useState(INITIAL_VALUES) 
  const [loading , setLoading] = useState(false)


  const handleDetailsChange = (event) => {
    const { name, value } = event.target;
    setDetails({ ...details, [name]: value });
  };

  const Submit = async (event) =>{
    event.preventDefault()
    if(details.class === "" || 
    details.company === "" || 
    details.customerName === "" ||
    details.designation ==="" ||
    details.location === "" ||
    details.phoneNumber === ""||
    details.school === "" 
    
    ){
     Swal.fire({
       title: 'Error!',
       text: 'Complete the form',
       icon: 'error',
      
     })
     return

    }
    const payload = { ...details }
    console.log(payload)
    setLoading(true);
    try{
      const response = await axios.post(API_URL + "LogUserIN", payload)
      console.log(response)
    }
    catch(error){
         console.log(error)
    }finally{
      setLoading(false)
    }
  }
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 h-screen border border-red-100  mx-auto'>
    <img
      src= {unuendo} 
      alt ="unuendo"
      className='h-[100px] w-[100%] md:h-screen'
    />
      <form onSubmit={Submit}>
       <div className=' w-[80%] md:w-[60%] mx-auto pt-[10%]'>
       <h1 className='text-4xl text-[#9370db] '>Register</h1>
        <Input
          value = {details.customerName}
          type = "text"
          placeholder='Name'
         label = "Name"
         name = "customerName"
         onChange = {handleDetailsChange}
       />
        <Input
          value = {details.company}
          type = "text"
          placeholder='Company Name'
         label = "Company Name"
         name = "company"
         onChange = {handleDetailsChange}
       />
         <Input
          value = {details.phoneNumber}
          type = "text"
          placeholder='Phone Number'
         label = "Phone Number"
         name = "phoneNumber"
         onChange = {handleDetailsChange}
       />
        <Input
          value = {details.location}
          type = "text"
          placeholder='Location'
         label = "Location"
         name = "location"
         onChange = {handleDetailsChange}
       />
        <Input
        value = {details.school}
          type = "text"
          placeholder='School'
         label = "School"
         name = "school"
         onChange = {handleDetailsChange}
       />
       <Input
          value = {details.class}
          type = "text"
          placeholder='Class'
         label = "Class"
         name = "class"
         onChange = {handleDetailsChange}
       />
        <Input
          value = {details.designation}
          type = "text"
          placeholder='Designation'
         label = "Designation"
         name = "designation"
         onChange = {handleDetailsChange}
       />
       
       
        <button 
        // type ="submit"
        className='bg-[#9370db] w-[100%] h-[50px] mt-[10%]'
        
        >
        {loading ? <PulseLoader color = "#9370db"/> :"Submit"}
        </button>
       
       </div>
       
    
    
      </form>
      
    </div>
  )
}

export default Homepage

import React from 'react'

function Input({ placeholder , type , value , name , onChange}) {
  return (
    <div>
    <input
    name = {name}     
    placeholder={placeholder}
    type={type}
    value = {value}
    className=' border-2  border-gray-300 mt-[5%] w-[100%] p-3 outline-none  hover:border-[#9370db] focus:border-[#9370db]'
    onChange = {onChange}
   />
      
    </div>
  )
}

export default Input

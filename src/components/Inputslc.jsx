import React from 'react';  

const Inputslc = ({ texto, placeholder, type, id, onChange, value, name, required }) => {  
  const base = 'px-2 py-2 w-full h-8 rounded-2xl font-normal text-black bg-gray-300 placeholder-gray-500 pl-4';  
  const label = 'text-black';  

  return (  
    <div className='space-y-2'>  
      <label htmlFor={id} className={label}>{texto}</label>  
      <input  
        className={base}  
        type={type}  
        id={id}  
        name={name}  
        placeholder={placeholder}  
        value={value}  
        onChange={onChange}  
        required={required} 
      />  
    </div>  
  );  
};  

export default Inputslc;
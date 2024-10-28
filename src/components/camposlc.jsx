import React from 'react';

const camposlc = ({texto, pleaceholder, type, id}) => {
    const base = 'px-2 py-2 w-full h-8 rounded font-normal text-black bg-gray-300 '
    const label = 'text-black'
    
    return (
        <>
        <label for={id} className='label'>{texto}</label>
        <input className={`${base}`}
        type={type}
        id={id}
        pleaceholder={pleaceholder}/>
        </>
    );
}

export default camposlc;
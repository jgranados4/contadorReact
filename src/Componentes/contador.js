import React from 'react';
import  '../hoja-estilo/contador.css';

const contador =({numeroclick})=>{
    return (
    <div className="contador">
        {numeroclick}
    </div>
    );
}


export default contador;
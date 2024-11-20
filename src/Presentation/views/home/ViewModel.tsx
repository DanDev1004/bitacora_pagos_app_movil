import React, { useState } from 'react'

const HomeViewModel = () => {

    //ya no aplicaremos un useState por cada input, sino que vamos a utilizar un objeto para recorrer cada estado
    const [values, setValues] = useState({
        email: '',
        password: '',
    });

    const onChange = (property: string, value: any) =>{
        setValues({ ...values, [property]: value }); //desestructurando: ...values = values.email, values.password
    }

    return { //retornando un objeto
        ...values,
        onChange 
    }
}

export default HomeViewModel
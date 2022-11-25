import { useState, useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import Card from './Card';

function Formulario() {
    const [data, setData] = useState({
        nombre: '',
        apellido: '',
        correo: '',
        telefono: ''
    });
    const { register, handleSubmit } = useForm();
    const [errorMessage, setErrorMessage] = useState("");

    const onSubmit = useCallback(
        (data) => {  
            setData({
                nombre: data['nombre'],
                apellido: data['apellido'],
                correo: data['correo'],
                telefono: data['telefono']
            });
        },
        [setData]
    );
    
    useEffect(() => {
        if (data['nombre'] === '' || data['apellido'] === '' || data['correo'] === '' || data['telefono'] === '') {
            setErrorMessage('Por favor, rellena todos los campos');
        }
        else {
            setErrorMessage("");
        }
    }, [data, setErrorMessage]);
    
    return (
        <div className = 'container'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Nombre</label>
                <input {...register("nombre", { required: "Por favor ingrese su nombre" })} />
                <label>Apellido</label>
                <input {...register("apellido", { required: "Por favor ingrese su apellido" })} />
                <label>Teléfono</label>
                <input {...register("telefono", { required: "Por favor ingrese su número de teléfono" })} />
                <label>Correo</label>
                <input {...register("correo", { required: "Por favor ingrese su correo electrónico" })} />
                <input type = "submit" value = "Enviar" />
            </form>
            <p>{errorMessage}</p>
            <Card nombre = {data.nombre} correo = {data.correo}
                apellido = {data.apellido} telefono = {data.telefono} />
        </div>
    )
}

export default Formulario
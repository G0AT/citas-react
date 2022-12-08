import { useState, useEffect } from 'react'
import Error from './Error'

const Formulario = ({ pacientes, paciente, setPacientes }) => {

    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [alta, setAlta] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false)

    const generarId = () => {
        // Generamos un ID con random
        const random = Math.random().toString(36).substring(2)
        const fecha = Date.now().toString(36)

        return random + fecha
    }

    useEffect(() => {
        if(Object.keys(paciente).length > 0){
          setNombre(paciente.nombre)
          setPropietario(paciente.propietario)
          setEmail(paciente.email)
          setAlta(paciente.alta)
          setSintomas(paciente.sintomas)
        }
      }, [paciente])

    const handleSubmit = (e) => {
        e.preventDefault();
        if([nombre, propietario, email, alta, sintomas].includes('')){
            setError(true)

            setTimeout(() => {
                setError(false)
            }, 5000);
            return
        } 
        setError(false)

        const objetoPacientes = {
            nombre,
            propietario,
            email,
            alta,
            sintomas,
            id: generarId()
        }

        setPacientes([...pacientes, objetoPacientes])
        setNombre('')
        setPropietario('')
        setEmail('')
        setAlta('')
        setSintomas('')
    }

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>

            <p className="text-lg mt-5 text-center mb-10">Añade pacientes y {''}
                <span className="text-indigo-600 font-bold text-lg">Administralos</span>
            </p>

            <form className="bg-white shadow-md rounded-lg py-10 px-5" onSubmit={handleSubmit}>
                {error && <Error mensaje="Todos los campos son obligatorios"/> }
                <div className="block text-gray-700 uppercase font-bold mb-5">
                    <label htmlFor="mascota">Nombre Mascota</label>
                    <input 
                        type="text" 
                        placeholder="Nombre de la mascota" 
                        value={nombre} 
                        onChange={ (e) => setNombre(e.target.value)} 
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                        name="mascota" 
                        id="mascota"
                    />
                </div>
                <div className="block text-gray-700 uppercase font-bold mb-5">
                    <label htmlFor="propietario">Nombre del Propietario</label>
                    <input 
                        type="text" 
                        placeholder="Nombre del propietario" 
                        value={propietario} 
                        onChange={ (e) => setPropietario(e.target.value)} 
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                        name="propietario" 
                        id="propietario"
                    />
                </div>
                <div className="block text-gray-700 uppercase font-bold mb-5">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        placeholder="Email contacto" 
                        value={email} 
                        onChange={ (e) => setEmail(e.target.value)} 
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                        name="email" 
                        id="email"
                    />
                </div>
                <div className="block text-gray-700 uppercase font-bold mb-5">
                    <label htmlFor="alta">Alta</label>
                    <input 
                        type="date" 
                        placeholder="Fecha de alta" 
                        value={alta} 
                        onChange={ (e) => setAlta(e.target.value)} 
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                        name="alta" 
                        id="alta" 
                    />
                </div>
                <div className="block text-gray-700 uppercase font-bold mb-5">
                    <label htmlFor="sintomas">Descripción de Sintomas</label>
                    <textarea 
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                        value={sintomas} 
                        onChange={ (e) => setSintomas(e.target.value)} 
                        name="sintomas" 
                        id="sintomas" 
                    />
                </div>
                <input type="submit" className="border-2 p-2 mt-2 w-full text-white rounded-md bg-indigo-700 uppercase font-bold hover:bg-indigo-500 cursor-pointer transition-opacity mb-10" value="Agregar paciente"/>
            </form>
        </div>
    )
}

export default Formulario
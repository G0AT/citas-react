const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
    
    const {id, nombre, propietario, email, alta, sintomas} = paciente
    
    const handleEliminar = () => {
        const respuesta = confirm('Deseas eliminar al paciente')

        if(respuesta) {
            eliminarPaciente(id)
        }
    }
    return (
        <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="uppercase text-gray-700 font-bold mb-3">Nombre: {''}
                <span className="font-normal normal-case"> {nombre}</span>
            </p>

            <p className="uppercase text-gray-700 font-bold mb-3">Propietario: {''}
                <span className="font-normal normal-case"> {propietario}</span>
            </p>
            <p className="uppercase text-gray-700 font-bold mb-3">Email: {''}
                <span className="font-normal normal-case"> {email}</span>
            </p>
            <p className="uppercase text-gray-700 font-bold mb-3">Fecha Alta: {''}
                <span className="font-normal normal-case"> {alta}</span>
            </p>
                <p className="uppercase text-gray-700 font-bold mb-3">Sintomas: {''}
                <span className="font-normal normal-case"> {sintomas}</span>
            </p>

            <div className="text-white flex justify-between mt-10">
                <button type="button" onClick={() => setPaciente(paciente)} className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 font-bold uppercase rounded-lg">Editar</button>
                <button type="button" className="py-2 px-10 bg-red-600 hover:bg-red-700 font-bold uppercase rounded-lg" onClick={handleEliminar}>Eliminar</button>
            </div>
        </div>
    )
}

export default Paciente
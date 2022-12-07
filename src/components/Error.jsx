const Error = ({mensaje}) => {
    return (
        <div className='bg-red-800 text-center p-3 text-white mb-3 rounded-xl'>
            <p>{mensaje}</p>
        </div>
    )
}

export default Error
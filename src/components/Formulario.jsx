function Formulario () {

    return (
        <div className="md:w-1/2 lg:w2/5 mb-10">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

            <p className="text-lg mt-5 text-center">Añade Pacientes y {''}
                <span className="text-indigo-800 font-bold">Administralos</span>
            </p>

            <form className="mt-5 bg-white shadow-md rounded-lg py-10 px-5">
                <div className="mb-5">
                    <label htmlFor="nombreMascota" className="block text-gray-700 uppercase">Nombre Mascota</label>
                    <input id="nombreMascota" type="text" placeholder="Nombre Mascota" 
                    className="border-2 w-full mt-2 placeholder-gray-400 rounded-md"/>
                </div>

                <div className="mb-5">
                    <label htmlFor="nombrePropietario" className="block text-gray-700 uppercase">Nombre Propietario</label>
                    <input id="nombrePropietario" type="text" placeholder="Nombre Propietario" 
                    className="border-2 w-full mt-2 placeholder-gray-400 rounded-md"/>
                </div>

                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 uppercase">Email</label>
                    <input id="email" type="email" placeholder="Email contacto propietario" 
                    className="border-2 w-full mt-2 placeholder-gray-400 rounded-md"/>
                </div>

                <div className="mb-5">
                    <label htmlFor="alta" className="block text-gray-700 uppercase">Alta</label>
                    <input id="alta" type="date" 
                    className="border-2 w-full mt-2 placeholder-gray-400 rounded-md"/>
                </div>

                <div className="mb-5">
                    <label htmlFor="nombreMascota" className="block text-gray-700 uppercase">Nombre Mascota</label>
                   <textarea id="síntomas"
                    className="border-2 w-full mt-2 placeholder-gray-400 rounded-md"
                    placeholder="Describe los síntomas."
                   />
                </div>
                
                <input type="submit" className="bg-indigo-800 w-full p-3 text-white uppercase font-bold hover:bg-indigo-600
                cursor-pointer transition-colors rounded-md"
                value="Agregar Paciente"/>

            </form>

        </div>
    )

   
}

export default Formulario
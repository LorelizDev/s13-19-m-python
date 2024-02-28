import React from 'react'

function page() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-cover bg-center w-full h-full" style={{ backgroundImage: "url('/imagen/service.webp')" }}>
                
                <div className="flex flex-col justify-center items-center mt-64 ml-30">
                    <button className="text-sm mb-3 w-32 md:w-48 h-10 bg-[#616161] text-white text-center rounded-lg py-2 flex items-center justify-center hover:bg-gray-400 transition duration-500 ">
                        <h2>Desayuno</h2>
                    </button>

                    <button className="text-sm mb-3 w-32 md:w-48 h-10 bg-[#616161] text-white text-center rounded-lg py-2 flex items-center justify-center hover:bg-gray-400 transition duration-500 ">
                        <h2>Almuerzo</h2>
                    </button>

                    <button className="text-sm mb-3 w-32 md:w-48 h-10 bg-[#616161] text-white text-center rounded-lg py-2 flex items-center justify-center hover:bg-gray-400 transition duration-500 ">
                        <h2>Merienda</h2>
                    </button>

                    <button className="text-sm mb-3 w-32 md:w-48 h-10 bg-[#616161] text-white text-center rounded-lg py-2 flex items-center justify-center hover:bg-gray-400 transition duration-500 ">
                        <h2>Cena</h2>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default page
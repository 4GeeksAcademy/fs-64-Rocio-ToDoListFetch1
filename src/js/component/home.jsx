import React, { useState, useEffect } from "react";
import CreateUser from "../../utills/createUser";
const Home = () => {
    const [userInput, setUserInput] = useState("");
    const [tareas, setTareas] = useState([]);
    useEffect(() => {
		CreateUser()
        
    }, []);
    const handleClick = (index) => {
        setTareas((prevTareas) => prevTareas.filter((_, i) => i !== index));
    };
    return (
        <div className=" w-2/5 bg-slate-200 rounded-xl p-5 fixed top-100 left-100 ">
            <div className="text-center">
                <h1>Lista de tareas</h1>
                <input
                    type="text"
                    name="tarea"
                    id="texto"
                    value={userInput}
                    onChange={(e) => {
                        setUserInput(e.target.value);
                    }}
                />
                <button onClick={() => { setTareas((prevTareas) => [...prevTareas, userInput]); setUserInput(""); }}>
                    Añadir
                </button>
                {tareas.map((tarea, index) => (
                    <li key={index}>
                        {tarea}
                        <button onClick={() => handleClick(index)}>Borrar tarea</button>
                    </li>
                ))}
            </div>
        </div>
    );
};
export default Home;
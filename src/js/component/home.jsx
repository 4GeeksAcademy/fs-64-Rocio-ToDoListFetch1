import React from "react";
import { useEffect, useState } from 'react';

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [userInput, setUserInput] = useState("");
	const [tareas, setTareas] = useState([]);
	useEffect(() => {
	console.log(tareas)	
	},[tareas])
	const handleClick = () => {
		setTareas (previo=> [...previo, userInput])
		
		 setUserInput("");

	};
	

	return  (
		<div className=" w-2/5 bg-slate-200 rounded-xl p-5 fixed top-100 left-100 ">
			<div className="text-center">
			<h1>Lista de tareas</h1>
			<input type="text" name="tarea" id="texto" value={userInput} onChange={(e)=> {setUserInput(e.target.value)}}/>
			<button onClick={() => {handleClick()}}>Añadir</button>
			
			{tareas.map((tarea,index) => <li key={index}>{tarea}<button onClick={() =>{setTareas(tareas.filter((task, i)=> {index !== i}))}}>Borrar tarea </button></li>)}
		</div>
		</div>
		
	);
};

export default Home;

import React, { useState } from "react";

const Semaforo = () => {
	let [redClass, setRedClass] = useState("rojo");
	let [yellowClass, setYellowClass] = useState("amarillo");
	let [greenClass, setGreenClass] = useState("verde");

	const activarRojo = () => {
		reset();
		setRedClass((redClass += " seleccionado"));
	};
	const activarAmarillo = () => {
		reset();
		setYellowClass((yellowClass += " seleccionado"));
	};
	const activarVerde = () => {
		reset();
		setGreenClass((greenClass += " seleccionado"));
	};

	const reset = () => {
		setRedClass("rojo");
		setYellowClass("amarillo");
		setGreenClass("verde");
	};

	return (
		<div>
			<div className="cable"></div>
			<div className="rectangulo">
				<div className={redClass} onClick={activarRojo}></div>
				<div className={yellowClass} onClick={activarAmarillo}></div>
				<div className={greenClass} onClick={activarVerde}></div>
			</div>
		</div>
	);
};

export default Semaforo;

// frontend/src/App.js

import React, { useState, useEffect } from "react"
import "./App.css"

function App() {
	const [message, setMessage] = useState("")

	useEffect(() => {
		// This function will run once when the component loads
		fetch("http://localhost:8000/api/test") // Our FastAPI backend URL
			.then((response) => response.json())
			.then((data) => {
				setMessage(data.message)
			})
			.catch((error) => {
				console.error("There was an error fetching the data!", error)
				setMessage("Could not connect to backend.")
			})
	}, []) // The empty array [] means this effect runs only once

	return (
		<div className="App">
			<header className="App-header">
				<h1>Project AURA</h1>
				<p>
					Status: <strong>{message}</strong>
				</p>
			</header>
		</div>
	)
}

export default App

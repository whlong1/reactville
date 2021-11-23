import React, { useState } from "react"
import { Route, Routes } from "react-router"
import './mail.css'

//Components
import Box from "./Box"
import BoxList from "./BoxList"
// import NewBox from "./NewBox"
import NewLetter from "./NewLetter"

//Data
import { initialPOBoxes } from "./modules/data"


const PostOffice = (props) => {
	const [boxes, setBoxes] = useState(initialPOBoxes)
	const [letters, setLetters] = useState({})
	const nextBoxNumber = Object.keys(boxes).length

	console.log(boxes, typeof setBoxes)
	console.log(typeof letters, typeof setLetters)

	console.log('Post Office Render')
	return (
		<div className="post-office">
			<nav>
				<h1>Post Office</h1>
			</nav>

			<Routes>
				<Route path="/"
					element={<BoxList boxes={boxes} />}
				/>
				<Route path="/:boxNo"
					element={<Box boxes={boxes} letters={letters} />}
				/>
			</Routes>
		</div>
	)
}

export default PostOffice
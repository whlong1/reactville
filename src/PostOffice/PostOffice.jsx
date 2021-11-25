import React, { useState } from "react"
import { Route, Routes, NavLink } from "react-router-dom"
import './mail.css'

//Components
import Box from "./Box"
import BoxList from "./BoxList"
import NewBox from "./NewBox/NewBox"
import NewLetter from "./NewLetter/NewLetter"

//Data
import { initialPOBoxes } from "./modules/data"

const PostOffice = (props) => {
	const [boxes, setBoxes] = useState(initialPOBoxes)
	const [letters, setLetters] = useState({})
	const nextBoxNumber = Object.keys(boxes).length
	const nextLetterId = Object.keys(letters).length

	console.log('Post Office Render')

	const sendLetter = (boxNum, formData) => {
		// Touch on nextLetterId, value does not change until next render
		setLetters({ ...letters, [nextLetterId]: formData })
		const updatedLetters = [...boxes[boxNum].letters, nextLetterId]
		setBoxes({ ...boxes, [boxNum]: { ...boxes[boxNum], letters: updatedLetters } })
	}

	const createBox = (boxHolders) => {
		//bring in handle charge here and for send letter
		console.log(nextBoxNumber)
		console.log('holders', boxHolders)
	}

	console.log('Boxes', boxes)
	console.log('Letters', letters)

	return (
		<div className="post-office">
			<nav>
				<h1>Post Office</h1>
				<NavLink to="/postoffice">Home</NavLink>
				<NavLink to="/postoffice/letters/new">New Letter</NavLink>
				<NavLink to="/postoffice/boxes/new">New PO Box</NavLink>
			</nav>

			<Routes>
				<Route path="/"
					element={<BoxList boxes={boxes} />}
				/>
				<Route path="/:boxNo"
					element={<Box boxes={boxes} letters={letters} />}
				/>
				<Route path="/letters/new"
					element={<NewLetter boxes={boxes} letters={letters} sendLetter={sendLetter} />}
				/>
				<Route path="/boxes/new"
					element={<NewBox boxes={boxes} createBox={createBox} />}
				/>
			</Routes>
		</div>
	)
}

export default PostOffice
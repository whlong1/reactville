import React, { useState } from "react"
import { Route, Routes, NavLink } from "react-router-dom"
import './mail.css'

//Components
import BoxDetails from "./BoxDetails"
import BoxList from "./BoxList"
import NewBox from "./NewBox/NewBox"
import NewLetter from "./NewLetter/NewLetter"

import poImg from './assets/post-office-lobby.png'

//Data
import { initialPOBoxes, initialLetters } from "./modules/data"

const PostOffice = (props) => {
	const [boxes, setBoxes] = useState(initialPOBoxes)
	const [letters, setLetters] = useState(initialLetters)

	const nextBoxNumber = Object.keys(boxes).length
	const nextLetterId = Object.keys(letters).length

	const sendLetter = (boxNum, formData) => {
		if (props.handleExchange(.99)) {
			setLetters({ ...letters, [nextLetterId]: formData })
			const updatedLetters = [...boxes[boxNum].letters, nextLetterId]
			setBoxes({ ...boxes, [boxNum]: { ...boxes[boxNum], letters: updatedLetters } })
			return true
		}
	}

	const createBox = (nameArr, cost) => {
		if (props.handleExchange(cost)) {
			setBoxes({ ...boxes, [nextBoxNumber]: { boxHolders: nameArr, letters: [] } })
			return true
		}
	}

	const markAsRead = (id, status) => {
		setLetters({ ...letters, [id]: { ...letters[id], read: status } })
	}

	return (
		<div className="post-office">
			<nav>
				<h1>Post Office</h1>
				<NavLink to="/postoffice">Lobby</NavLink>
				<NavLink to="/postoffice/letters/new">New Letter</NavLink>
				<NavLink to="/postoffice/boxes/new">New PO Box</NavLink>
			</nav>

			<div className="postoffice-layout">
				<section className="img-container"><img src={poImg} /></section>
				<Routes>
					<Route path="/"
						element={<BoxList boxes={boxes} />}
					/>
					<Route path="/:boxNo"
						element={<BoxDetails boxes={boxes} letters={letters} markAsRead={markAsRead} />}
					/>
					<Route path="/letters/new"
						element={<NewLetter boxes={boxes} letters={letters} sendLetter={sendLetter} />}
					/>
					<Route path="/boxes/new"
						element={<NewBox boxes={boxes} createBox={createBox} />}
					/>
				</Routes>
			</div>
		</div>
	)
}

export default PostOffice
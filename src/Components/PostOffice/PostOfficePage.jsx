import { useState } from "react"
import { Route, Routes, NavLink } from "react-router-dom"
import '../../styles/mail.css'

//Components
import BoxList from "./BoxList"
import BoxDetails from "./BoxDetails"
import NewBox from "./NewBoxComponents/NewBox"
import NewLetter from "./NewLetterComponents/NewLetter"

//Data + Assets
import LobbyImg from '../../assets/post-office-lobby.png'
import { initialPOBoxes, initialLetters } from "../../data/post-data"

const PostOfficePage = (props) => {
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
				<NavLink id="new-letter" to="/postoffice/letters/new">New Letter</NavLink>
				<NavLink id="new-box" to="/postoffice/boxes/new">New PO Box</NavLink>
			</nav>

			<div className="postoffice-layout">
				<section className="img-container"><img src={LobbyImg} alt="post office illustration" /></section>
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

export default PostOfficePage
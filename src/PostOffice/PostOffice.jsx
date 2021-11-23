import React, { useState } from "react"
import './mail.css'

//Components
import Boxes from "./Boxes"
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

	return (
		<div className="post-office">
			<nav>
				<h1>Post Office</h1>
			</nav>
			<Boxes boxes={boxes} />
		</div>
	)
}

export default PostOffice
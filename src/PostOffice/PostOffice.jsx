import React, { useState } from "react"
import './mail.css'

import Boxes from "./Boxes"
import Letters from "./Letters"
import NewBox from "./NewBox"
import NewLetter from "./NewLetter"

import { initialPOBoxes } from "./modules/data"

const PostOffice = (props) => {
	const [boxes, setBoxes] = useState(initialPOBoxes)
	const [letters, setLetters] = useState({})




	return (
		<div className="post-office">
			<nav>
				<h1>Post Office</h1>
			</nav>
			<NewLetter />
			<Boxes />
		</div>
	)
}

export default PostOffice
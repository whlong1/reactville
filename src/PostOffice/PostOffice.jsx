import React, { useState } from "react"
import './mail.css'

import LetterForm from "./LetterForm"

const PostOffice = (props) => {
	// create po box
	// submit letter form
	// add po box
	// view letters from a specific po box
	// select all po boxes from drop down menu
	// select stamps from drop down
	// charge user when sending letter
	// mark letters as read
	// array of letters, array of poboxes
	// keeping state flat
	// navigation, nested routes
	// add a letter
	// delete a letter
	// update a letter
	// multiple owners? => nested state

	const [boxes, setBoxes] = useState([])


	return (
		<div className="post-office">
			<nav>
				<h1>Post Office</h1>
			</nav>
			<LetterForm />
		</div>
	)
}

export default PostOffice
import React from 'react'
import "./letter.css"

const Letter = () => {
  return (
    <div className="cards">
		<div className="imgBox">
			<div className="bark"></div>
			{/* <img src="https://image.ibb.co/fYzTrb/lastofus.jpg" /> */}
			<img src="https://res.cloudinary.com/dgxoj05dn/image/upload/v1673532284/cat3_lsmkqn.png" />
		</div>
		<div className="details">
			<h2 className="color1 h4">You're not OLD! (YET)</h2>
			<br />
			<h3 className="color2 h4 margin">(HAPPY BIRTHDAY)</h3>
			<br />
			<p>Mi amor,</p>
			<br />
			<p>today is special for me.</p>
			<br />
			<p>I am grateful that you exist</p>
			<br />
			<p>and that you illuminate my days</p>
			<br />
			<p>even though you are impure,</p>
			<br />
			<p>I like you very much. I would like </p>
			<br />
			<p>you to be happy today and always.</p>
			<br />
			<p>hope you have a nice day :)</p>
			<br />
			<p className="text-right">Happy Birthday, amor!</p>
			<br />
			<p className="text-right">♥Diego</p>
		</div>
	</div>
  )
}

export default Letter
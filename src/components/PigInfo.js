import React from 'react'

const PigInfo = (props) => {
	return (
		<div>
		Specialty: {props.hogObj.specialty} <br/>
		{props.hogObj.greased ? 'Greased!!' : 'Not Greased'} <br/>
		Weight: {props.hogObj['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']} <br/>
		Medal: {props.hogObj['highest medal achieved']}
		</div>
	)
}
export default PigInfo

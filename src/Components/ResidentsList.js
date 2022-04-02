import React from 'react';


function ResidentsList({card}) {



console.log(card)


	return (
		<div className="pa-10 mt-10 w-75">
			<div className="font-weight-bold text-center">Residents List</div>

			<ul className="mt-10 styled w-50 mx-auto" data-testid="residentsNameList">

			{card.map((student,i)=>{
			return(
			<li className="slide-up-fade-in" key={i}>
				{student}
				</li>)})}
			
			</ul>
		</div>
	);
}

export default ResidentsList;

import React from 'react'

import './progress_bar.css'

const Progress_bar = ({bgcolor,progress,value,labelname,border}) => {
	
	const Parentdiv = {
		height:'27px',
		width: '180px',
		background: '#050505',
        borderRadius: 40,
		margin:10,
		border:border

	}
	

	
	
	const Childdiv = {
		height: '27px',
		width: `${progress}%`,
		backgroundColor: bgcolor,
	    borderRadius:40,
		textAlign: 'right'
	
	}
	
	const progresstext = {
		fontWeight: 450
        
	}
		
	return (
	<div className="label-container">
	    <div className="label-storage">
	        <p>{labelname}</p>
	    </div>
	    <div style={Parentdiv}>
		    <div className="child">
                <div style={Childdiv}></div>
                <span className="digit"style={progresstext}>{value}</span>
            </div>
        </div>
	</div>
	)
}

export default Progress_bar;

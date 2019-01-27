import React from 'react';


const ApproveCard =(props)=>{
	console.log("props in ApproveCard: ",props);
	console.log("props.children in ApproveCard: ",props.children);
    return(
        <div className="ui cards">
			<div className="card">
            <div className="content">{props.children}</div>
				<div className="extra content">
					<div className="ui two buttons">
						<div className="ui basic green button">Approve</div>
						<div className="ui basic red button">Decline</div>
					</div>
				</div>
			
    		</div>
		</div>

    );
}

export default ApproveCard;
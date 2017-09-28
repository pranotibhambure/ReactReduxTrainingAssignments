import React from 'react';

const IssueForm = (props) => {
    return(
        <div>
            <form>
                <input 
                    type="text" 
                    name="issue" 
                    className='Add-issue' 
                    value={props.currentIssue}
                    onChange={props.addNewIssueName}
                />
                <button onClick={props.addIssue}>Add</button> 
            </form>
        </div>
    );    
}

export default IssueForm;
import React from 'react';

const ContentDetails = (props) =>{
    return(
        <div>
            { props.match.params.contentName ? 
                <img src={'http://lorempixel.com/400/200/'+props.match.params.contentName+'/2/'}/>
                : null
            }
        </div>
    );
}

export default ContentDetails;
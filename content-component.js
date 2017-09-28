import React from 'react';
import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom';

import ContentDetails from './content-details';

const ContentComponent = () =>{
    return(
        <div>
            <h2>Content</h2>
            <div>
                <NavLink className='list-group-item' exact activeClassName='active' to='/content/city'>City</NavLink>
                <NavLink className='list-group-item' exact activeClassName='active' to='/content/sports'>Sports</NavLink>
                <Route path="/content/:contentName" component={ContentDetails}/>
            </div>
        </div>
    );
}

export default ContentComponent;
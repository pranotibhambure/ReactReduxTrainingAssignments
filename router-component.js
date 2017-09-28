import React from 'react';
import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom';

import HomeComponent from './home-component';
import AboutComponent from './about-component';
import ContentComponent from './content-component';

const Links = () => (
    // <ul>
    //     <li><Link to='/'>Home</Link></li>
    //     <li><Link to='/about'>About</Link></li>
    // </ul>
    <div className='list-group'>
        <NavLink className='list-group-item' exact activeClassName='active' to='/'>Home</NavLink>
        <NavLink className='list-group-item' exact activeClassName='active' to='/about'>About</NavLink>
        <NavLink className='list-group-item' exact activeClassName='active' to='/content'>Content</NavLink>
    </div>
);

const RouterComponent = () =>{
    return(
        <div>
            <Router>
                 <div className='row'>
                    <section className='col-sm-4'>
                        <Links/>
                    </section>
                    <section className='col-sm-8'>
                        <Route exact path='/' component={HomeComponent}/>
                        <Route path='/about' component={AboutComponent}/>
                        <Route path='/content' component={ContentComponent}/>
                    </section>
                </div>
            </Router>
        </div>
    );
}

export default RouterComponent;
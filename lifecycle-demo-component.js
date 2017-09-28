import React from 'react';

import MethodName from './method-name-component';

export default class LifecycleDemo extends React.Component{
    constructor(){
        super();
        this.state = {
            methods: ['constructor()', 'componentWillMount()', 'render()', 'componentDidMount()']
        }

        console.log('---------------Constructor called----------------');
    }

    componentWillMount(){
        console.log('---------------componentWillMount called----------------');
    }

    componentDidMount(){
        console.log('---------------componentDidMount called----------------');
    }

    render(){
        console.log('---------------render called----------------');
       return(
           <div>
               <h1>Learn React Lifecycle Methods</h1>
               <hr/>
               <h2>Open the console to check the output</h2>
               <hr/>
               <h3>Mounting</h3>
               <p>These methods are called when an instance of a component is being created and inserted into the DOM.</p>
               <ul>
                   {this.state.methods.map((method, index)=>{
                       return <MethodName key={index} method={method}/>;
                   })}
               </ul>
           </div>  
        ); 
    }
}
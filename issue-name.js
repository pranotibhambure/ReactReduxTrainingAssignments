import React from 'react';

export default class IssueName extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isEditing : false
        }

        this.renderForm = this.renderForm.bind(this);
        this.renderIssue = this.renderIssue.bind(this);
        this.editIssue = this.editIssue.bind(this);
        this.updateIssue = this.updateIssue.bind(this);
    }

    renderForm(){
        return(
            <form>
                <input type="text" 
                defaultValue={this.props.issue.name} 
                size='15'
                ref={(value) => {this.input = value;}}
                />
                <button onClick={this.updateIssue}>Update</button>
            </form>
        );
    }

    editIssue(){
        this.setState({
            isEditing: !this.state.isEditing
        }) 
    } 

    updateIssue(event){
        event.preventDefault();
        this.props.editIssue(this.props.index, this.input.value);
        this.setState({
            isEditing: false
        })
    }

    renderIssue(){
        return(
            <li className={this.props.issue.completed ? 'completed' : ''} 
                onClick={()=>{this.props.clickHandler(this.props.index)}}>
                {this.props.issue.name}
                <button onClick={(event)=>{event.stopPropagation(),this.props.deleteIssue(this.props.index)}}>Delete</button>
                <button onClick={(event)=>{event.stopPropagation(),this.editIssue()}}>Edit</button>
            </li>
        );
    }

   render(){
       const isEditing = this.state.isEditing;

       return(
           <section>
               { isEditing ? this.renderForm() : this.renderIssue()}
            </section>
        );
   }
}


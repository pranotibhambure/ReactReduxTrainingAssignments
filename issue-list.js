import React from 'react';
import IssueName from './issue-name';
import IssueForm from './issue-form';

export default class IssueList extends React.Component{
    constructor(){
        super();
        this.state = {
            issues: [
                    {name: 'Issue1', completed: false},
                    {name: 'Issue2', completed: false},
                    {name: 'Issue3', completed: false},
                    {name: 'Issue4', completed: false},
                    {name: 'Issue5', completed: false}
                ],
            currentIssue: ''
        }

        this.changeStatus = this.changeStatus.bind(this);
        this.addNewIssueName = this.addNewIssueName.bind(this);
        this.addIssue = this.addIssue.bind(this);
        this.deleteIssue = this.deleteIssue.bind(this);
        this.editIssue = this.editIssue.bind(this);
    }

    changeStatus(index){
        var issues = this.state.issues;
        var issue = issues[index];
        issue.completed = !issue.completed;
        this.setState({
        //   issues: issues 
            issues
        });
    }

    addNewIssueName(newIssue){
        this.setState({
            currentIssue: newIssue.target.value
        });
    }

    addIssue(event){
        event.preventDefault();
        var issues = this.state.issues;
        var issue = {name: this.state.currentIssue,
        completed: false};
        issues.push(issue);
        this.setState({
            issues: issues,
            currentIssue: ''
        });
    }

    deleteIssue(index){
        var issues = this.state.issues;
        issues.splice(index,1);
        this.setState({
            issues
        });
    } 

    editIssue(index, updatedIssueName){
        console.log(updatedIssueName)
        var issues = this.state.issues;
        issues[index].name = updatedIssueName;
        this.setState({
            issues
        });
    }

    render(){
        return(
            <div>
                <IssueForm 
                    currentIssue={this.state.currentIssue}
                    addNewIssueName={this.addNewIssueName}
                    addIssue={this.addIssue}
                    />
                <ul>
                    {
                       this.state.issues.map((issue, index)=>{
                           return <IssueName key={index} issue={issue} 
                                    clickHandler={this.changeStatus} 
                                    index={index}
                                    deleteIssue={this.deleteIssue}
                                    editIssue={this.editIssue}/>;
                       })
                    }
                    
                </ul>
            </div>
        );
    }

}
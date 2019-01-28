import React from 'react';
import User from './user'
import Form from './form'

export default class Users extends React.Component {
    state = {
        users: [{ username: 'angelica', email: 'blah', admin: true }]
    }

    add = (user) => {
        this.setState(prev => ({
            users: prev.users.concat(user)
        }))
    }

    delete = (e) => {
        let nusers = this.state.users.filter(old => old.username !== e.target.innerText)
        this.setState({
            users: nusers
        })
    }

    logstate = (e) => {
        e.preventDefault()
        console.log(this.state.users)

    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.users.map((person, i) => <User toDelete={this.delete} key={i} number={i} user={person} />)}
                </ul>
                <br></br>
                <button onClick={this.logstate}>Log State</button>
                <Form addUser={this.add} />
            </div>

        )
    }


} 

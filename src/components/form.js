import React from 'react';

export default class Form extends React.Component {
    state = {
        username: '',
        email: '',
        admin: false
    }

    onSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
        this.props.addUser(this.state)
        this.setState({
            username: '',
            email: '',
            admin: false
        })
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value })

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <p>
                        <label>
                            Username: <input type="text" value={this.state.username} onChange={this.onChange} name="username" />
                        </label>
                    </p>
                    <p>
                        <label>
                            Email: <input type="text" value={this.state.email} onChange={this.onChange} name="email" />
                        </label>
                    </p>
                    <p>
                        <label>
                            <input type="checkbox" checked={this.state.admin} onChange={(e) => this.setState({ [e.target.name]: e.target.checked })} name="admin" />
                            Admin
                    </label>
                    </p>
                    <p>
                        <input type="submit" value="create user" />

                    </p>
                </form>
            </div>
        )
    }
}
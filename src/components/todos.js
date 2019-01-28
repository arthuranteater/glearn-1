import React from 'react';
import Item from './item'


export default class Todos extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todoData: props.list,
            value: ''
        }
    }
    remove = (e) => {
        let nlist = this.state.todoData.filter(item => item !== e.target.innerText)
        this.setState({
            todoData: nlist
        })
    }
    inputChange = (e) => {
        // this.value = e.target.value
        this.setState({
            value: e.target.value
        })
    }

    add = (e) => {
        e.preventDefault()
        this.setState(prev => ({
            todoData: prev.todoData.concat(this.state.value),
            value: ''
        }))


    }
    logState = (e) => {
        e.preventDefault()
        console.log(this.state, this.state.todoData)
    }
    render() {
        return (
            <div>
                <ul>
                    {this.state.todoData.map((thing, i) => <Item key={i} item={thing} OnDelete={this.remove} />)}
                </ul>
                <input placeholder={"type stuff here"} value={this.state.value} onChange={this.inputChange}></input>
                <button onClick={this.add}>Add</button>
                <button onClick={this.logState}>Log State</button>
            </div>
        )
    }

}


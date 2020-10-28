import React from 'react';

class Form extends React.Component {
    state = {
        name: '',
        age: null
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if(this.props.createContact) {
            this.props.createContact({
                name: this.state.name,
                age: parseInt(this.state.age)
            })
        } else {
            this.props.updateContact({
                name: this.state.name,
                age: parseInt(this.state.age)
            }, this.state.id)
        }
    }

    handleChange = (e) => {
       this.setState({
           [e.target.id]: e.target.value
       })
    }

    componentDidMount = () => {
        if(this.props.contact) {
            this.setState(this.props.contact)
        }
    }

    render() {
        return (
            <>
                <form onSubmit ={this.handleSubmit}>
                    <input type="text" id="name" placeholder="name" onChange={this.handleChange} defaultValue={this.state.name}></input>
                    <input type="number" id="age" placeholder="age" onChange={this.handleChange} defaultValue={this.state.age}></input>
                    <input type="submit" value="Submit"/>
                </form>
            </>
        )
    }
}

export default Form;
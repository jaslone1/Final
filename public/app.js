class App extends React.Component {
    state = {
        bikes:[]
    }

    componentDidMount = () => {
        axios.get('/api/bikes').then(
            (response) => {
                this.setState({
                    bikes:response.data
                })
            }
        )
    }

    createPerson = (event) => {
        event.preventDefault();
        axios.post(
            '/api/bikes',
            {
                name:this.state.newPersonName,
                age:this.state.newPersonAge,
            }
        ).then(
            (response) => {
                this.setState({
                    bikes:response.data
                })
            }
        )
    }

    changeNewPersonAge = (event) => {
        this.setState({
            newPersonAge:event.target.value
        });
    }

    changeNewPersonName = (event) => {
        this.setState({
            newPersonName:event.target.value
        });
    }

    deletePerson = (event) => {
        axios.delete('/api/bikes/' + event.target.value).then(
            (response) => {
                this.setState({
                    bikes:response.data
                })
            }
        )

    }

    updatePerson = (event) => {
        event.preventDefault();
        const id = event.target.getAttribute('id');
        axios.put(
            '/api/bikes/' + id,
            {
                name:this.state.updatePersonName,
                age:this.state.updatePersonAge,
            }
        ).then(
            (response) => {
                this.setState({
                    bikes:response.data,
                    name:'',
                    age:null,
                })
            }
        )
    }

    changeUpdatePersonName = (event) => {
        this.setState(
            {
                updatePersonName:event.target.value
            }
        )
    }

    changeUpdatePersonAge = (event) => {
        this.setState(
            {
                updatePersonAge:event.target.value
            }
        )
    }

    render = () => {
        return <div>
            <h2>Create Person</h2>
            <form onSubmit={this.createPerson}>
                <input onKeyUp={this.changeNewPersonName} type="text" placeholder="name" /><br/>
                <input onKeyUp={this.changeNewPersonAge} type="number" placeholder="age" /><br/>
                <input type="submit" value="Create Person" />
            </form>
            <h2>List of bikes</h2>
            <ul>
                {
                    this.state.bikes.map(
                        (person, index) => {
                            return <li key={index}>

                                {person.name}: {person.age}

                                <button value={person.id} onClick={this.deletePerson}>DELETE</button>

                                <form id={person.id} onSubmit={this.updatePerson}>
                                    <input onKeyUp={this.changeUpdatePersonName} type="text" placeholder="name"/><br/>
                                    <input onKeyUp={this.changeUpdatePersonAge} type="number" placeholder="age"/><br/>
                                    <input type="submit" value="Update Person"/>
                                </form>
                            </li>
                        }
                    )
                }
            </ul>
        </div>
    }
}

ReactDOM.render(
    <App></App>,
    document.querySelector('main')
)

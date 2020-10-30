class Form extends React.Component {
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

    createBike = (event) => {
        event.preventDefault();
        axios.post(
            '/api/bikes',
            {
                brand:this.state.newBikeBrand,
                model:this.state.newBikeModel,
                maintenance:this.state.newBikeMaintenance,
            }
        ).then(
            (response) => {
                this.setState({
                    bikes:response.data
                })
            }
        )
    }

    changeNewBikeModel = (event) => {
        this.setState({
            newBikeModel:event.target.value
        });
    }

    changeNewBikeBrand = (event) => {
        this.setState({
            newBikeBrand:event.target.value
        });
    }
    changeNewBikeMaintenance = (event) => {
        this.setState({
            newBikeMaintenance:event.target.value
        });
    }

    deleteBike = (event) => {
        axios.delete('/api/bikes/' + event.target.value).then(
            (response) => {
                this.setState({
                    bikes:response.data
                })
            }
        )

    }

    updateBike = (event) => {
        event.preventDefault();
        const id = event.target.getAttribute('id');
        axios.put(
            '/api/bikes/' + id,
            {
                brand:this.state.updateBikeBrand,
                model:this.state.updateBikeModel,
                maintenance:this.state.updateBikeMaintenance,
            }
        ).then(
            (response) => {
                this.setState({
                    bikes:response.data,
                    brand:'',
                    model:'',
                    maintenance:'',
                })
            }
        )
    }

    changeUpdateBikeBrand = (event) => {
        this.setState(
            {
                updateBikeBrand:event.target.value
            }
        )
    }

    changeUpdateBikeModel = (event) => {
        this.setState(
            {
                updateBikeModel:event.target.value
            }
        )
    }
    changeUpdateBikeMaintenance = (event) => {
        this.setState(
            {
                updateBikeMaintenance:event.target.value
            }
        )
    }

    render = () => {
        return <div>
            <h2>Add a new Bike</h2>
            <form onSubmit={this.createBike}>
                <input onKeyUp={this.changeNewBikeBrand} type="text" placeholder="brand" /><br/>
                <input onKeyUp={this.changeNewBikeModel} type="text" placeholder="models" /><br/>
                <input onKeyUp={this.changeNewBikeMaintenance} type="textarea" placeholder="models" /><br/>
                <input type="submit" value="Create Bike" />
            </form>
            <h2>List of Bikes</h2>
            <ul>
                {
                    this.state.bikes.map(
                        (bike, index) => {
                            return <li key={index}>

                                {bike.brand}: {bike.model}

                                <button value={bike.id} onClick={this.deleteBike}>DELETE</button>

                                <form id={bike.id} onSubmit={this.updateBike}>
                                    <input onKeyUp={this.changeUpdateBikeBrand} type="text" placeholder="brand"/><br/>
                                    <input onKeyUp={this.changeUpdateBikeModel} type="text" placeholder="models"/><br/>
                                      <input onKeyUp={this.changeUpdateBikeMaintenance} type="text" placeholder="maintenance"/><br/>
                                    <input type="submit" value="Update Bike"/>
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
    <Form></Form>,
    document.querySelector('form')
)

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
                owner:this.state.newBikeOwner,
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
    changeNewBikeOwner = (event) => {
        this.setState({
            newBikeOwner:event.target.value
        });
    }

    render = () => {
        return <div>
            <h2>Add a new Bike</h2>
            <form onSubmit={this.createBike}>
                <input onKeyUp={this.changeNewBikeBrand} type="text" placeholder="brand" /><br/>
                <input onKeyUp={this.changeNewBikeModel} type="text" placeholder="models" /><br/>
                <input onKeyUp={this.changeNewBikeMaintenance} type="textarea" placeholder="maintenance notes" /><br/>
                <input onKeyUp={this.changeNewBikeOwner} type="text" placeholder="owner" /><br/>
                <input type="submit" value="Create Bike" />
            </form>
        </div>
    }
}

ReactDOM.render(
    <Form></Form>,
    document.querySelector('form')
)

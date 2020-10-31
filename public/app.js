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

    createBike = (event) => {
        event.preventDefault();
        axios.post(
            '/api/bikes',
            {
                brand:this.state.newBikeBrand,
                model:this.state.newBikeModel,
                owner:this.state.newBikeOwner,
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
    changeNewBikeOwner = (event) => {
        this.setState({
            newBikeOwner:event.target.value
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
                owner:this.state.updateBikeOwner,
            }
        ).then(
            (response) => {
                this.setState({
                    bikes:response.data,
                    brand:'',
                    model:'',
                    maintenance:'',
                    owner:'',
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

    changeUpdateBikeOwner = (event) => {
        this.setState(
            {
                updateBikeOwner:event.target.value
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
            {
                this.state.bikes.map(
                    (bike, index) => {
                        return  <div key={index}>
                          <Card>
                              Owner: {bike.owner}<br />
                              Brand: {bike.brand}<br />
                              Model: {bike.model}<br />
                              Maintenance notes: {bike.maintenance}<br />
                              <button value={bike.id} onClick={this.deleteBike}>DELETE</button>
                          </Card>
                        </div>
                    }
                )
            }
        </div>
    }
}

ReactDOM.render(
    <App></App>,
    document.querySelector('main')
)

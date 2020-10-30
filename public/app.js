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
                models:this.state.newBikeModel,
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
                models:this.state.updateBikeModel,
            }
        ).then(
            (response) => {
                this.setState({
                    bikes:response.data,
                    brand:'',
                    models:'',
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

    render = () => {
        return <div>
        <h2>List of Bikes</h2>
        <ul class="thumbnails">
            {
                this.state.bikes.map(
                    (bike, index) => {
                        return <li class="span4" key={index}>

                            {bike.brand}<br />
                            {bike.model}<br />
                            {bike.maintenance}<br />
                            {bike.owner}<br />

                            <button value={bike.id} onClick={this.deleteBike}>DELETE</button>
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

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

    createNote = (event) => {
        event.preventDefault();
        axios.post(
            '/api/bikes',
            {
              maintenance:this.state.newBikeMaintenance,
            }
        ).then(
            (response) => {
                this.setState({
                    bikes:response.data
                }
              )
            }
        )
    }
    changeNewBikeMaintenance = (event) => {
      this.setState({
          newBikeMaintenance:event.target.value
      });
  }

    render = () => {
        return <div class="container">
            {
                this.state.bikes.map(
                    (bike, index) => {
                        return  <div class="card" key={index}>
                          <div class="card-body">
                            <h4 class="card-title"> Owner: {bike.owner}</h4>
                              <p class="card-text">
                              Brand: {bike.brand}<br />
                              Model: {bike.model}<br />
                              Maintenance notes: {bike.maintenance}<br />
                              </p>
                              <form id={bike.id} onSubmit={this.createNote}>
                                  <textarea onKeyUp={this.changeNewBikeMaintenance} type="text" placeholder="notes" /><br/>
                                  <input type="submit" value="Create Note" />
                              </form>
                              <form id={bike.id} onSubmit={this.updateBike}>
                                    <input onKeyUp={this.changeUpdateBikeMaintenance} type="text" placeholder="edit notes"/><br/>
                                    <input type="submit" value="Update Notes"/>
                                </form>
                              <button value={bike.id} onClick={this.deleteBike}>DELETE</button>
                          </div>
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

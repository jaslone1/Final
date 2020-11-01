class Add extends React.Component {
    state = {
        bikes:[],
        hidden: true
    }

    showForm = () => {
      this.setState({
        hidden:false
      })
    }

    componentDidMount = () => {
        axios.get('/api/bikes').then(
            (response) => {
                this.setState({
                    bikes:response.data
                }) .then (
                  this.forceUpdate();
                )
            }
        )
    }

    createBike = (event) => {
        event.preventDefault();
        this.setState({
          hidden:true
        })
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
                }
              )
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
        {!this.state.hidden ?
          <form onSubmit={this.createBike}>
              <input onKeyUp={this.changeNewBikeBrand} type="text" placeholder="brand" /><br/>
              <input onKeyUp={this.changeNewBikeModel} type="text" placeholder="model" /><br/>
              <textarea onKeyUp={this.changeNewBikeMaintenance} placeholder="maintenance notes" /><br/>
              <input onKeyUp={this.changeNewBikeOwner} type="text" placeholder="owner" /><br/>
              <input type="submit" value="Create Bike" />
          </form>
          :
          <button onClick={this.showForm}>hello</button>
        }
      </div>
    }
}

ReactDOM.render(
    <Add></Add>,
    document.querySelector('add')
)

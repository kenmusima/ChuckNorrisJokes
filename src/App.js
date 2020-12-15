import React, { Component } from 'react';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      subdata: [],
      isLoaded: false,
    }
  }
  componentDidMount() {
    fetch('https://api.chucknorris.io/jokes/categories')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          data : json,

        })
      });

  }
  handleClick(param) {
    fetch('https://api.chucknorris.io/jokes/random?categories?=' + param)
      .then(rest => rest.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          subdata : json,
        })
      });
    
  }
  render() {
    var { isLoaded, data , subdata} = this.state;
    //console.log(data)
    if(!isLoaded){
      return <div>Loading...</div>;
    }
    else {
      return (
        <div className="App">
          <div className="container">
            { data.map(dat => (
                <button onClick={() => this.handleClick(dat)}>
                  {dat} {console.log(dat)}
                </button>
              ))}
            <p>
            {subdata.value}
            </p>
          </div>
        </div>
      );
    }
  }
}

export default App;

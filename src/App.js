import React, { Component } from 'react';
import './App.css';
import TextInput from './Components/TextInput';
import Output from './Components/Output';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      distance: 100.0,
      efficiency: 7.0,
      price_per_lt: 1.5,
      total_price: 10.5
    }
  }

  distanceChange(distance){
    this.setState({distance:distance}, this.setTotalPrice);
  }

  efficiencyChange(efficiency){
    this.setState({efficiency:efficiency}, this.setTotalPrice);
  }

  pricePerLtChange(price_per_lt){
    this.setState({price_per_lt:price_per_lt}, this.setTotalPrice);
  }

  setTotalPrice(){
    let total_price = ((this.state.price_per_lt * this.state.efficiency * this.state.distance) / 100).toFixed(2);
    this.setState({total_price: total_price},);
  }

  render() {
    return (
      <div className="App">
        <h1>Fuel Calculator</h1>
        <form autoComplete="off">
          <div>
            <legend><span className="number">1</span> Travel Distance (km)</legend>
            <div className="distance">
              <TextInput value={this.state.distance} onChange={this.distanceChange.bind(this)} />
            </div>
          </div>
          <div>
            <legend><span className="number">2</span> Fuel Efficiency (lt/100km)</legend>
            <div className="efficiency">
              <TextInput value={this.state.efficiency} onChange={this.efficiencyChange.bind(this)}/>
            </div>
          </div>
          <div>
            <legend><span className="number">3</span> Price per litre (€/lt)</legend>
            <div className="price_per_lt">
              <TextInput value={this.state.price_per_lt} onChange={this.pricePerLtChange.bind(this)}/>
            </div>
          </div>

            <legend><span className="number">-</span> <strong>Total Cost (€)</strong></legend>
            <div className="output">
              <Output data={this.state}/>
            </div>
        </form>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Form from './Form';
import Result from './Result';
import './App.scss';

// Klucz do API
const APIKey = 'efa2ef11f117f7485b2fca8e87a3a2f5';
class App extends Component {

  state = {
    value: '',
    date: '',
    city: '',
    sunrise: '',
    sunset: '',
    temp: '',
    pressure: '',
    wind: '',
    err: false,
  }

  handleInputChange = e => {
    this.setState({
      value: e.target.value
    })
  }

  componentDidUpdate(prevProps, prevState) {

    if (prevState.value !== this.state.value) {
      const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${APIKey}&units=metric`;

      fetch(API)
        .then(response => {
          if (response.ok) {
            return response
          }
          throw Error("Nie udało się pobrać danych")
        })
        .then(response => response.json())
        .then(data => {
          const time = new Date().toLocaleString()
          this.setState(state => ({
            err: false,
            date: time,
            sunrise: data.sys.sunrise,
            sunset: data.sys.sunset,
            temp: data.main.temp,
            pressure: data.main.pressure,
            wind: data.wind.speed,
            city: state.value,
          }))
        })
        .catch(err => {
          this.setState(prevState => ({
            err: true,
            city: prevState.value
          }))
        })
    }
  }

  render() {
    return (
      <div className="wrapper">
        <Form
          value={this.state.value}
          change={this.handleInputChange}
        />
        <h1 className="headline">Aplikacja pogodowa</h1>
        <Result weather={this.state} />
      </div>
    );
  }
}

export default App;

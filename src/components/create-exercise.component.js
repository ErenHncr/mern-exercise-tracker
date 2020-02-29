import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

require('dotenv').config();

export default class CreateExercise extends Component {
    constructor(props){
        super(props);

        this.state = {
            username: '',
            description: '',
            duration: 0,
            date: new Date(),
            users: []
        }
    }

    componentDidMount(){
      axios.get(process.env.REACT_APP_BASE_URL+'/users/')
      .then(res => {
        if(res.data.length > 0){
          this.setState({
            users: res.data.map(user => user.username),
            username: res.data[0].username
          });
        }
      });    
    }

    onChangeUsername = (e) => {
        this.setState({
           username: e.target.value
        });
    }

    onChangeDescription = (e) => {
        this.setState({
           description: e.target.value 
        });
    }

    onChangeDuration = (e) => {
        this.setState({
           duration: e.target.value 
        });
    }

    onChangeDate = (selectedDate) => {
        this.setState({
           date: selectedDate 
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        
        const exercise = this.state;

        console.log(exercise);

        axios.post(process.env.REACT_APP_BASE_URL+'/exercises/add',exercise)
          .then(res => console.log(res.data));

        window.location='/';
    }
    render() {
        return (
        <div className='createExercise'>
        <h3><b>Create New Exercise Log</b></h3>
        <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Username: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}>
              {
                this.state.users.map(function(user) {
                  return <option 
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              }
          </select>
        </div>
        <div className="form-group"> 
          <label>Description: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
              />
        </div>
        <div className="form-group">
          <label>Duration (in minutes): </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.duration}
              onChange={this.onChangeDuration}
              />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
        </div>

        <div className="form-group createExBtn">
          <input type="submit" value="Create Exercise Log" className="btn btn-primary " />
        </div>
        </form>
    </div>
    )
    }
}
                  
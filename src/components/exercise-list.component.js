import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

require('dotenv').config();

const Exercise = props => (
  <tr>
    <td>{props.exercise.username}</td>
    <td>{props.exercise.description}</td>
    <td>{props.exercise.duration}</td>
    <td>{props.exercise.date.substring(0,10)}</td>
    <td>
      <Link to={"/edit/"+props.exercise._id}>
        <button type="button" className="btn btn-outline-primary btn-sm">
          <i className="far fa-edit"></i>
          &nbsp;edit
        </button>
        </Link> | <button type='button' className="btn btn-outline-danger btn-sm" href="/" onClick={() => { props.deleteExercise(props.exercise._id) }}>
          <i className="far fa-trash-alt"></i>  
          &nbsp;delete 
        </button>
    </td>
  </tr>
)

export default class ExerciseList extends Component {
  
  constructor(props){
    super(props); 
    this.state = { exercises:[]};
  }

  componentDidMount(){
    axios.get(process.env.REACT_APP_BASE_URL+'/exercises/')
      .then(res => {
          this.setState({ exercises: res.data });
      });
  }

  deleteExercise = (id) => {
    axios.delete(process.env.REACT_APP_BASE_URL+'/exercises/'+id)
      .then(res => { console.log(res.data)});

    this.setState({
      exercises: this.state.exercises.filter(el => el._id !== id)
    });
  }

  exerciseList = () => {
    return this.state.exercises.map(currentexercise => {
      return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id}/>;
    });
  }


  render() {
 
    return (
      
      <div className='exerciseList'>
        <h3>Logged Exercises</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
            </thead>
          <tbody>
            { this.exerciseList()}
          </tbody>
          </table>
      </div>
        )
    }
}
                  
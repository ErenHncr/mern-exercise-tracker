import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import '../src/style.css';



import Navbar from './components/navbar.component';
import ExerciseList from './components/exercise-list.component';
import EditExercise from './components/edit-exercise.component';
import CreateExercise from './components/create-exercise.component';
import CreateUser from './components/create-user.component';

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <section className="bubble">
          {/* <CreateExercise/> */}
          <Route path='/' exact component={CreateExercise}></Route>
          <Route path='/' exact>
          <article>
            <h1>WHATEVER</h1>
            <h1>IT TAKES!</h1>
            <p>Here we keep your <u>exercises</u> <b>accessible</b>, make training <b>accountable</b> and make a healthy lifestyle <b>easier to start</b> and <b>maintain</b>.</p>
            <button type="button">Start Here</button>
          </article>
          </Route>
          <Route path='/user' exact component={CreateUser}></Route>
          
          
        </section>;
        
        <Route path='/exerciseList' exact component={ExerciseList}></Route>
        <Route path='/edit/:id' exact component={EditExercise}></Route>
        {/* <Route path='/create' exact component={CreateExercise}></Route> */}
      </div>
    </Router>
    
  );
}


export default App;


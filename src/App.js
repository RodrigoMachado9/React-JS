import React, { Component } from 'react';
import Course from './components/Course';
import NewCourseForm from "./components/NewCourseForm";
import './App.css';
/* eslint-disable */

class App extends Component {
  static defaultProps = {
    onsubmit: () => {}
  }

  constructor(props){
    super(props);
    this.state = {
      // lista de objetos ....... contendo determinadas propriedas de um curso.
      courses:[
        {
          id:1,
          name: 'React-js',
          category: 'Javascript',
          image :'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png'
        },
        {
          id:2,
          name: 'Python-bottle',
          category: 'Bottle',
          image :'data:image/png;base64,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'
        }

      ]

    }
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);

  }

  add(course){
    const { courses } =  this.state,
        newCourse = Object.assign({},  course, {id: (Date.now())});
    course.push(newCourse);
    this.setState({courses});
  }

  remove(courseId){
    const { courses } = this.state,
        courseIndex = courses.findIndex(course => course.id == courseId);

    courses.splice(courseIndex, 1);
    this.setState({courses});

  }

  render() {
    const {state} = this;

    return (
      <div className={"App"}>
        <NewCourseForm  onSubmit={this.add}/>
        <ul className={"courses-list"}>
          {

            state.courses.map(course => <Course  course={course} onRemove={this.remove}/>)


          }

        </ul>
      </div>
    );
  }
}

export default App;
import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => <h1>{props.course.name}</h1>;

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part} {props.exercises}
      </p>
    </div>
  );
};

const Content = ({parts}) => {
  return (
    <div>
      {parts.map((part) => {
        return <Part part={part.name} exercise={part.exercises} />;
      })}
    </div>
  );
};

const Total = (props) => {
  const total = props.parts.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.exercises;
  }, 0);
  return (
    <div>
      <p>Number of exercises {total}</p>
    </div>
  );
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

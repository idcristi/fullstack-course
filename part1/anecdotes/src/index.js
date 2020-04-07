import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Button = ({text, onClick}) => <button onClick={onClick}>{text}</button>;

const Heading = ({text}) => <h1>{text}</h1>;

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
];

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0]);

  const random = (number) => {
    return Math.floor(Math.random() * Math.floor(number));
  };

  const setVote = () => {
    const newVotes = [...votes];
    newVotes[selected]++;
    setVotes(newVotes);
  };

  return (
    <div>
      <Heading text="Anecdote of the day" />
      {props.anecdotes[selected]} <br />
      has {votes[selected]} votes <br />
      <Button
        onClick={() => setSelected(random(anecdotes.length))}
        text="next anecdote"
      />
      <Button onClick={() => setVote(selected, votes)} text="vote" />
      <Heading text="Anecdote with the most votes" />
      {anecdotes[votes.indexOf(Math.max.apply(window, votes))]} <br />
      has {Math.max(...votes)} votes
    </div>
  );
};

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'));

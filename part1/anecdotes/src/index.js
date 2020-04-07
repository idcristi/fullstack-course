import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Button = ({text, onClick}) => <button onClick={onClick}>{text}</button>;

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
      {props.anecdotes[selected]} <br />
      has {votes[selected]} votes <br />
      <Button
        onClick={() => setSelected(random(anecdotes.length))}
        text="next anecdote"
      />
      <Button onClick={() => setVote(selected, votes)} text="vote" />
    </div>
  );
};

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'));

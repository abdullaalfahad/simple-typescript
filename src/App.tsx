import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';

let student: string = 'jolly';
let age: number = 75;
let isSmart: boolean = true;
let students: string[] = ['Joe', 'Biden', 'lorem'];
let fees: number[] = [373, 54, 33, 34, 234];

const person: { name: string, job: string, age: number } = {
  name: 'Bill',
  job: 'Bekar',
  age: 85
}

interface Man {
  name: string,
  job?: string,
  age: number
}

const man: Man = {
  name: 'amir',
  age: 83
}

console.log(student, age, isSmart);

function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}

export default App;

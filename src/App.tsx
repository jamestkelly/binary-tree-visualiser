import React from 'react';
import logo from './logo.svg';
import './App.css';
import BinaryTree from './utils/BinaryTree';

const binaryTree = new BinaryTree();
let values = [10, 20, 30, 40, 5, 8, 3, 9];

for (let i = 0; i < values.length; i++) {
  binaryTree.insert(values[i]);
}

console.log("Test - 'Tree Contains':");
console.log(binaryTree.contains(30));

console.log("Test - 'findMin()':");
console.log(binaryTree.findMin());

console.log("Test - 'findMax()'");
console.log(binaryTree.findMax());

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
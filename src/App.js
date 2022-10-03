import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Amplify, API, graphqlOperation } from 'aws-amplify';
import { createTodo, updateTodo, deleteTodo } from './graphql/mutations';
import { listTodos } from './graphql/queries';

import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

/*
*/

function App() {

  const result = API.graphql(graphqlOperation(listTodos));
  console.log(result);

  /*
  const result = API.graphql(graphqlOperation(updateTodo, {
    input: {
      id: "AAA",
      name: "My first updated todo!"
    }
  }));
  const result1 = API.graphql(graphqlOperation(listTodos));
  const result = API.graphql(graphqlOperation(updateTodo, {
    input: {
      id: "AAA",
      name: "My first updated todo!"
    }
  }))


  console.log(result1);
*/

    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello from V2 </h1>
      </header>
    </div>
  );
}

export default App;
import { render } from '@testing-library/react';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import ItemModal from './components/ItemModal';
import ArrayList from './components/ArrayList';
import ArrayModal from './components/ArrayModal';
import HashTableModal from './components/HashTableModal';
import HashTable from './components/HashTable';
import LinkedList from './components/LinkedList';
import LinkedListModal from './components/LinkedListModal';
import { Container } from 'reactstrap';
import Dnd from './components/Dnd'
import DndModal from './components/DndModal';
import Dp from './components/Dp'
import DpModal from './components/DpModal';
import Backtracking from './components/Backtracking'
import BacktrackingModal from './components/BacktrackingModal';
import Snq from './components/Snq'
import SnqModal from './components/SnqModal';
import Heap from './components/Heap'
import HeapModal from './components/HeapModal';
import Greedy from './components/Greedy'
import GreedyModal from './components/GreedyModal';
import Sort from './components/Sort'
import SortModal from './components/SortModal';
import Tree from './components/Tree'
import TreeModal from './components/TreeModal';
import Graph from './components/Graph'
import GraphModal from './components/GraphModal';
import Recursion from './components/Recursion'
import RecursionModal from './components/RecursionModal';

import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/authActions';



class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Container style={{marginTop: '2rem'}}>

            <div className="mb-3">String</div>
            <ItemModal />
            <ShoppingList className="string"/>

            <div className="mt-5">Array</div>
            <ArrayModal/>
            <ArrayList/>

            <div className="mt-5">Hash Table</div>
            <HashTableModal/>
            <HashTable/>

            <div className="mt-5">Linked List</div>
            <LinkedListModal/>
            <LinkedList/>

            <div className="mt-5">Divide and Conquer</div>
            <DndModal/>
            <Dnd/>

            <div className="mt-5">Dynamic Programming</div>
            <DpModal/>
            <Dp/>

            <div className="mt-5">Backtracking</div>
            <BacktrackingModal/>
            <Backtracking/>

            <div className="mt-5">Stack and Queue</div>
            <SnqModal/>
            <Snq/>

            <div className="mt-5">Heap</div>
            <HeapModal/>
            <Heap/>

            <div className="mt-5">Greedy Algorithm</div>
            <GreedyModal/>
            <Greedy/>

            <div className="mt-5">Sort</div>
            <SortModal/>
            <Sort/>
            <div className="mt-5">Tree</div>
            <TreeModal/>
            <Tree/>
            <div className="mt-5">Graph</div>
            <GraphModal/>
            <Graph/>
            <div className="mt-5">Recursion</div>
            <RecursionModal/>
            <Recursion/>

          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;

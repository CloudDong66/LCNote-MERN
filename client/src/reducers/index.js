//rootreducer

import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import ArrayReducer from './ArrayReducer';
import HashtableReducer from './HashtableReducer';
import LinkedlistReducer from './LinkedlistReducer';
import DndReducer from './DndReducer';
import DpReducer from './DpReducer';
import BacktrackingReducer from './BacktrackingReducer';
import SnqReducer from './SnqReducer';
import HeapReducer from './HeapReducer';
import GreedyReducer from './GreedyReducer';
import SortReducer from './SortReducer';
import TreeReducer from './TreeReducer';
import GraphReducer from './GraphReducer';
import RecursionReducer from './RecursionReducer';


export default combineReducers({
    item: itemReducer,
    array: ArrayReducer,
    hashtable: HashtableReducer,
    linkedlist: LinkedlistReducer,
    dnd: DndReducer,
    dp: DpReducer,
    backtracking: BacktrackingReducer,
    snq:SnqReducer,
    heap: HeapReducer,
    greedy: GreedyReducer,
    sort: SortReducer,
    tree: TreeReducer,
    graph: GraphReducer,
    recursion: RecursionReducer,
    error: errorReducer,
    auth: authReducer,
});
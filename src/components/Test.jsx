import { combineReducers, createStore } from 'redux'
import React,{Component} from "react";
let reducer = combineReducers({ visibilityFilter, todos })
let store = createStore(reducer)


function visibilityFilter(state = 'SHOW_ALL', action) {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case 'COMPLETE_TODO':
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: true
          })
        }
        return todo
      })
    default:
      return state
  }
}

export default class Test extends Component{
    render(){
        return (
            <div>
                2222222222222222
            </div>
            )
    }
}


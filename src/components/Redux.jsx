import React,{Component} from "react";
import {createStore} from "redux";
import counter from "../store/reducers";

// import $ from "jquery";

// 创建 Redux store 来存放应用的状态。
// API 是 { subscribe, dispatch, getState }。

// 可以手动订阅更新，也可以事件绑定到视图层。
let store = createStore(counter);

// 改变内部 state 惟一方法是 dispatch 一个 action。
// action 可以被序列化，用日记记录和储存下来，后期还可以以回放的方式执行

export default class Redux extends Component{
    constructor(props){
        super(props);
        this.state={
          name:store.getState()
        };
        this.change = this.change.bind(this);
    }
    change(event){
        store.subscribe(() =>
          console.log(store.getState())
        );
        console.log(event.target.value)
        store.dispatch({ type:event.target.value });
        this.setState({name:store.getState()});
    }
    render(){
        return (
            <div>
                <input type="text" onChange={this.change}/>
                {this.state.name}
            </div>
            )
    }
}
Redux.defaultProps={
  name:"panhuajian"
}
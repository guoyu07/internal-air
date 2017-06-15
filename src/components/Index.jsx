import React,{Component} from 'react';
import {Link} from "react-router";
import Top from "./Top";

export default class Index extends Component{
	render(){
		return (
			<div className="index">
				<Top/>
					{/*<Link to="/cont?id=123&name=hhh" activeStyle={{"color":"red"}}>这是第一个路由</Link>*/}
					{/*<Link to="/two" activeStyle={{"color":"blue"}}>这是第二个路由</Link>*/}
				{this.props.children}
			</div>
			)
			
	}
}
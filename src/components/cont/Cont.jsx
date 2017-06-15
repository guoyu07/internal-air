import React,{Component} from "react";
import Search from "./Search";
import Datee from "./Date";
import Info from "./Info";
// import DatePicker from "react-datepicker";

export default class Cont extends Component{
	render(){
		return (
    		<div className="home-cont main-cont">
				<Search/>
                <Datee/>
                <Info/>
			</div>
			)
	}
}
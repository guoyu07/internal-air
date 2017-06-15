import React,{Component} from "react";
import Filter from "./Filter";
import Flight from "./Flight";
import Sort from "./Sort";

export default class Info extends Component{
    render(){
        return (
            <div className="home-info">
                <Filter/>
                <Sort/>
                <Flight/>
            </div>
            )
    }
}
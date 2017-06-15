import React,{Component} from "react";
import Booking from "./Booking";
import {Menu} from "antd";
import $ from "jquery";
const SubMenu = Menu.SubMenu;

export default class Flight extends Component{
  constructor(props){
    super(props);
    this.state={
      name:"预订"
    }
    this.booking=this.booking.bind(this)
  }
  booking(event){
    if(this.state.name=="预订"){
      this.setState({name:"收起"})
      $(".home-booking").slideToggle();
    }else{
      this.setState({name:"预订"})
      $(".home-booking").slideToggle();
    }
  }
  render(){
    return (
      <div className="home-flight">
        <table className="flight-table">
            <tbody>
                <tr>
                 <th>
                      <p>东方航空 MU5468</p>
                      <p>机型： 320</p>
                  </th>
                  <th>
                      <p>09:50</p>
                      <p>首都国际机场T2</p>
                  </th>
                  <th>起飞时间起飞时间</th>
                  <th>
                      <p>22:00</p>
                      <p>白云国际机场</p>
                  </th>
                  <th>
                      <p>准点率</p>
                      <p>89%</p>
                  </th>
                  <th>
                      <p>
                          <i>￥</i>
                          <span>1890</span>起
                      </p>
                      <p>儿童¥620  婴儿¥120</p>
                  </th>
                  <th>
                      <button onClick={this.booking}>{this.state.name}</button>
                  </th>
                </tr>
                <Booking/>
            </tbody>
        </table>
      </div>
      )
  }
}
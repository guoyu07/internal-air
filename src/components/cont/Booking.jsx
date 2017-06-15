import React,{Component} from "react";

export default class Booking extends Component{
    render(){
        return (
            <tr className="home-booking">
                <th>
                    <p>特惠</p>
                    <p>会员专属</p>
                </th>
                <th>
                    <span>&nbsp;发票&nbsp;|</span>
                    <span>&nbsp;行李额&nbsp;|</span>
                    <span>&nbsp;退改￥12起</span>
                </th>
                <th></th>
                <th></th>
                <th>60折[Q]</th>
                <th>
                    <p><i>￥</i>1200</p>
                    <p>儿童￥620婴儿不可定</p>
                </th>
                <th>
                    <button>预订</button>
                </th>
            </tr>
            )
    }
}
import React,{Component} from "react";

export default class Sort extends Component{
	render(){
		return (
			<div className="home-sort">
				<table>
					<tbody>
						<tr>
			                <th>航班信息</th>
			                <th>起飞时间</th>
			                <th></th>
			                <th>到达时间</th>
			                <th>准点率</th>
			                <th>价格</th>
		                	<th></th>
		                </tr>
					</tbody>
				</table>
			</div>
			)
	}
}
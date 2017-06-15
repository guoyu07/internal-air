import React,{Component} from "react";
import CitySuggest from "../city-suggest";
import {DatePicker} from 'antd';  // 加载 JS
// import DatePicker from "react-datepicker";

export default class Search extends Component{
    render(){
        return (
            <div className="home-search">
                <form className="query">
                    <label><input type="radio" name="travel" defaultChecked/>单程</label>
                    <label><input type="radio" name="travel"/>往返</label>
                    <CitySuggest/>
                    <CitySuggest/>
                    <DatePicker>
                        <span className="icon1"></span>
                        <span className="date1">出发日期</span>
                    </DatePicker>
                    <DatePicker>
                        <span className="icon1"></span>
                        <span className="date1">返程日期</span>
                    </DatePicker>
                    <input type="button" className="search" value="查询"/>
                    <label><input type="radio" defaultChecked/>成人</label>
                    <div className="children">
                        带儿童（2-12岁）
                        <span className="children-icon"></span>
                        <input type="checkbox"/>
                    </div>
                    <div className="children">
                        带婴儿（14天-2岁）
                        <span className="children-icon"></span>
                        <input type="checkbox"/>
                    </div>
                    <select className="sel">
                        <option>航空公司</option>
                        <option>3U 四川航空</option>
                        <option>8C 东星航空</option>
                        <option>8L 祥鹏航空</option>
                        <option>3U 春秋航空</option>
                        <option>3U 长安航空</option>
                        <option>3U 红土航空</option>
                    </select>
                </form>
            </div>
            )
    }
}
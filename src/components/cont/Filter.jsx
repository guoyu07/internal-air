import React,{Component} from "react";
import {Menu} from "antd";
const SubMenu = Menu.SubMenu;
export default class Filter extends Component{
    state = {
        current: '1',
        openKeys: [],
    }
    handleClick = (e) => {
        this.setState({ current: e.key });
    }
    onOpenChange = (openKeys) => {
        const state = this.state;
        const latestOpenKey = openKeys.find(key => !(state.openKeys.indexOf(key) > -1));
        const latestCloseKey = state.openKeys.find(key => !(openKeys.indexOf(key) > -1));

        let nextOpenKeys = [];
        if (latestOpenKey) {
            nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
        }
        if (latestCloseKey) {
            nextOpenKeys = this.getAncestorKeys(latestCloseKey);
        }
        this.setState({ openKeys: nextOpenKeys });
    }
    getAncestorKeys = (key) => {
        const map = {
        sub3: ['sub2'],
    };
    return map[key] || [];
    }
    render(){
        return (
            <ul className="home-filter">
                <li className="filter-top">
                    筛选（共<i>3</i>条航班信息）
                    <input type="button" defaultValue="清除全部"/>
                </li>
                <Menu
                    mode="inline"
                    openKeys={this.state.openKeys}
                    selectedKeys={[this.state.current]}
                    style={{ width: 239 }}
                    onOpenChange={this.onOpenChange}
                    onClick={this.handleClick}>
                    <SubMenu title={<span>起飞时段</span>}>
                      <Menu.Item ><label><input type="checkbox"/>上午：0点-12点</label></Menu.Item>
                      <Menu.Item ><label><input type="checkbox"/>下午：12点-18点</label></Menu.Item>
                      <Menu.Item ><label><input type="checkbox"/>晚上：18点-24点</label></Menu.Item>
                    </SubMenu>
                    <SubMenu title={<span>到达时段</span>}>
                      <Menu.Item ><label><input type="checkbox"/>上午：0点-12点</label></Menu.Item>
                      <Menu.Item ><label><input type="checkbox"/>下午：12点-18点</label></Menu.Item>
                      <Menu.Item ><label><input type="checkbox"/>晚上：18点-24点</label></Menu.Item>
                    </SubMenu>
                    <SubMenu title={<span>舱位</span>}>
                      <Menu.Item ><label><input type="checkbox"/>经济舱</label></Menu.Item>
                      <Menu.Item ><label><input type="checkbox"/>公务/头等舱</label></Menu.Item>
                    </SubMenu>
                    <SubMenu title={<span>起飞机场</span>}>
                      <Menu.Item ><label><input type="checkbox"/>北京</label></Menu.Item>
                      <Menu.Item ><label><input type="checkbox"/>北京南苑</label></Menu.Item>
                    </SubMenu>
                    <SubMenu title={<span>到达机场</span>}>
                      <Menu.Item ><label><input type="checkbox"/>上海虹桥</label></Menu.Item>
                      <Menu.Item ><label><input type="checkbox"/>上海浦东</label></Menu.Item>
                    </SubMenu>
                    <SubMenu title={<span>机型</span>}>
                      <Menu.Item ><label><input type="checkbox"/>大型机</label></Menu.Item>
                      <Menu.Item ><label><input type="checkbox"/>中型机</label></Menu.Item>
                    </SubMenu>
                    <SubMenu title={<span>报销凭证</span>}>
                      <Menu.Item ><label><input type="checkbox"/>全额行程单</label></Menu.Item>
                      <Menu.Item ><label><input type="checkbox"/>行程单+发票</label></Menu.Item>
                    </SubMenu>
                </Menu>
            </ul>
            )
    }
}
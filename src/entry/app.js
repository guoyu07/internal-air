import "../styles/app.less";
import React from 'react';
import ReactDom from "react-dom";
import {Router,Route,hashHistory,IndexRedirect} from 'react-router';
import Index from "../components/Index";
import Cont from '../components/cont/Cont';
import Two from '../components/Two';
// import Redux from "../components/Redux";
// import Test from "../components/Test";
// import Test2 from "../components/Test2";

ReactDom.render(
	<Router history={hashHistory}>
		<Route path="/" component={Index}>
			<IndexRedirect to="/cont"/>
			<Route path="cont" component={Cont}/>
			<Route path="two" component={Two}/>
		</Route>
	</Router>,
	document.getElementById("root"))
// ReactDom.render(<Redux/>,document.getElementById("root")) 
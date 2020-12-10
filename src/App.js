import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import LeftMenu from './component/LeftMenu';
import Topics from "./view/Topics";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
import ArticleListView from "./view/ArticleListView";

import { Layout, Menu, Breadcrumb } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

function App() {
    const classes = useStyles();

    return (
        <Router>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/topics">Topics</Link></li>
                </ul>
                <Switch>
                    <Route path="/blog">
                        <ArticleListView/>
                    </Route>
                    <Route path="/about">
                        <LeftMenu/>
                    </Route>
                    <Route path="/topics">
                        <Topics/>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

export default App;

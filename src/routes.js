import React from 'react';
import {
    Router,
    Route,
    Switch
} from 'react-router-dom';

import Index from './components/zhuye/index'
import Tui from './components/liebiao/tui'
import Neiye1 from './components/neiye/neiye1'
import Neiye2 from './components/neiye/neiye2'
import history from './components/public/history';



class App extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <Router  history={history}>
                <div>
                    {/**
                     * 这里可以公共的样式,比如 头部, 尾部, 等.
                     */
                    }
                    <Switch>
                        <Route path="/tui" component={Tui}/>
                        <Index>
                            <Route exact path="/" component={Neiye1}/>
                            <Route path="/neiye_1" component={Neiye1}/>
                            <Route path="/neiye_2" component={Neiye2}/>
                        </Index>
                    </Switch>
                </div>
            </Router>
        );
    }
}
export default App;
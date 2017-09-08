import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import Index from './components/zhuye/index'
import Tui from './components/neiye/tui'

class App extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <Router>
                <div>
                    {/**
                     * 这里可以公共的样式,比如 头部, 尾部, 等.
                     */}
                    <Switch>
                        <Route exact path="/" component={Index}/>
                        <Route path="/tui" component={Tui}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}
export default App;
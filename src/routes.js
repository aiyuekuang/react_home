import React, {Fragment} from 'react';
import {baseRoutes, urlCompEnum} from './work/router/data';
import {inject, observer} from 'mobx-react';
import NotFound from '@components/public/404/404'
import {RouterPro} from 'react-router-pro'


@inject('userStore')
@observer
class App extends React.Component {
    constructor(props, context) {
        super(props, context);

    }


    render() {
        const {userStore} = this.props;

        return (
            <RouterPro data={[...baseRoutes]} compEnum={urlCompEnum} NotFound={NotFound}/>
        );
    }
}

export default App;

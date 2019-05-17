/**
 * Created by zengtao on 2017/5/19.
 */
import React from 'react';
import {Button, Input, Alert} from 'antd/lib/index';
import {Link} from 'react-router-dom';
import {cuns} from 'esn';
import tu from '@images/y.jpg';
import {pro} from '@config';
import {inject, observer} from 'mobx-react';


@inject( 'userStore', 'test')
@observer
class Index extends React.Component {
    constructor(arg) {
        super(arg);

    }

  componentWillMount = () => {

  };


  render() {
      const {userStore, test} = this.props;
      return (
          <div className="zhuye">
            我是首页{pro}<br/>
              {userStore.user.name}<br/>
              {test.shishi}
          </div>
      );
  }
}


export default Index;

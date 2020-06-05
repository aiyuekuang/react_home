/**
 * Created by zengtao on 2017/5/19.
 */
import React, {useEffect} from 'react';
import {baseRoutes, urlCompEnum} from './work/router/data';
import {inject, observer} from 'mobx-react';
import NotFound from '@components/public/404/404'
import {RouterPro} from 'react-router-pro'
//本项目的模板页面


let defaultProps = {}

function index(prop) {

    let props = {
        ...defaultProps, ...prop
    }

    const {userStore} = props;


    useEffect(() => {
        // Update the document title using the browser API

        return () => {
        }
    }, []);


    return (
        <RouterPro data={[...baseRoutes]} compEnum={urlCompEnum} NotFound={NotFound}/>
    )
}

export default inject('userStore')(observer(index));

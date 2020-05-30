/**
 * Created by zengtao on 2017/5/19.
 */
import React, {Fragment, useEffect, useState, useContext} from 'react';
import {Router,history,KeepRouter,mg} from "margaret"
import {baseRoutes} from "./work/router/data"

//本项目的模板页面


let defaultProps = {}

export default function Index(prop) {


    let props = {
        ...defaultProps, ...prop
    }

    const {} = props;


    useEffect(() => {
        // Update the document title using the browser API

        return () => {
        }
    }, []);



    return (
        <Router data={baseRoutes}/>
    )
}

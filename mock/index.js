/**
 * Created by zengtao on 2018/12/13.
 */
//mock是代表无参数的请求,mock_p是有参数的请求
import {mock, mock_p} from "./mock_common";
import Mock, {Random} from "mockjs";

Random.id();
Random.title();
Mock.setup({
    timeout: "200 - 400"
});
//账号登录{loginName,loginPasswd}
mock_p(
    "/login/vertifylogin",
    null,
    {loginName: "", loginPasswd: ""},
    "tokenzzzzzzzzzzzzzzzzzzzzz"
);
mock_p("/login/logout", null, {accessToken: ""}, "成功");

//微信登录轮询
mock("/login/wxlogin", null, "tokenzzzzzzzzzzzzzzzzzzzzz");

//获取用户信息
mock_p(
    "/user/getuserbytoken",
    {
        id: 1,
        tel: "13805153134",
        password: "123456",
        account: "13805153134",
        name: "13805153134",
        nickName: "13805153134",
        type: 1,
        openId: "aaaaa",
        status: 1,
        sign: "320106198808132814",
        teachSubject: 1,
        mainSubject: 1,
        policalOutlook: 0,
        duty: 1,
        professionLevel: 0,
        dutyLevel: 1,
        teacherTitle: 1,
        qualification: 1,
        degree: 1,
        workTime: 1454291743000,
        birthTime: 442547696000,
        birthTimeString: "1984-01-10 09:54:56",
        workTimeString: "2016-02-01 09:55:43",
        credit: 10
    },
    {accessToken: ""}
);

//获取用户菜单树
mock("/common/getuserfunction", [{
    "id": 10001,
    "name": "首页",
    "parentId": 0,
    "url": "/",
    "icon": "icon-jichuxinxi",
    "type": 1,
    "functionType": 1,
    "children": [{
        "id": 10011,
        "name": "我的记录",
        "parentId": 10010,
        "url": "/my_record",
        "icon": "icon-wodejilu",
        "type": 2,
        "functionType": 1,
        "children": null,
        "isCheck": 0,
        "totalUrl": "/preson_zoom/my_record"
    }, {
        "id": 10013,
        "name": "基础信息",
        "parentId": 10012,
        "url": "/base_info",
        "icon": "icon-jichuxinxi",
        "type": 2,
        "functionType": 1,
        "children": null,
        "isCheck": 0,
        "totalUrl": "/teacher_dev/base_info"
    }, {
        "id": 10044,
        "name": "友情链接",
        "parentId": 10018,
        "url": "/friendlink",
        "icon": "icon-jiaoyanhuodong",
        "type": 2,
        "functionType": 1,
        "children": null,
        "isCheck": 0,
        "totalUrl": "/school_contribute/school_setting/friendlink"
    }],
    "isCheck": 0,
    "totalUrl": null
}, {
    "id": 10010,
    "name": "个人空间",
    "parentId": 0,
    "url": "/preson_zoom",
    "icon": "icon-ziyuandaohang",
    "type": 1,
    "functionType": 1,
    "children": [{
        "id": 10011,
        "name": "我的记录",
        "parentId": 10010,
        "url": "/my_record",
        "icon": "icon-wodejilu",
        "type": 1,
        "functionType": 1,
        "children": null,
        "isCheck": 0,
        "totalUrl": null
    }],
    "isCheck": 0,
    "totalUrl": null
}, {
    "id": 10012,
    "name": "教师发展",
    "parentId": 0,
    "url": "/teacher_dev",
    "icon": "icon-zhibanfankui",
    "type": 1,
    "functionType": 1,
    "children": [{
        "id": 10013,
        "name": "基础信息",
        "parentId": 10012,
        "url": "/base_info",
        "icon": "icon-jichuxinxi",
        "type": 1,
        "functionType": 1,
        "children": null,
        "isCheck": 0,
        "totalUrl": null
    }, {
        "id": 10014,
        "name": "教科研成果",
        "parentId": 10012,
        "url": "/ach_edu_res",
        "icon": "icon-jiaoyanhuodong",
        "type": 1,
        "functionType": 1,
        "children": null,
        "isCheck": 0,
        "totalUrl": null
    }],
    "isCheck": 0,
    "totalUrl": null
}, {
    "id": 10015,
    "name": "校园投稿",
    "parentId": 0,
    "url": "/school_contribute",
    "icon": "icon-kechengzhongxin",
    "type": 1,
    "functionType": 1,
    "children": [{
        "id": 10016,
        "name": "文章系统",
        "parentId": 10015,
        "url": "/article_sys",
        "icon": "icon-wenzhangxitong",
        "type": 1,
        "functionType": 1,
        "children": [{
            "id": 10036,
            "name": "投稿",
            "parentId": 10016,
            "url": "/submitword",
            "icon": "icon-jiaoyanhuodong",
            "type": 1,
            "functionType": 1,
            "children": null,
            "isCheck": 0,
            "totalUrl": null
        }, {
            "id": 10037,
            "name": "文章类型",
            "parentId": 10016,
            "url": "/wordkind",
            "icon": "icon-jiaoyanhuodong",
            "type": 1,
            "functionType": 1,
            "children": null,
            "isCheck": 0,
            "totalUrl": null
        }],
        "isCheck": 0,
        "totalUrl": null
    }, {
        "id": 10017,
        "name": "图片模块",
        "parentId": 10015,
        "url": "/img_manger",
        "icon": "icon-tupianmokuai",
        "type": 1,
        "functionType": 1,
        "children": [{
            "id": 10038,
            "name": "图片管理",
            "parentId": 10017,
            "url": "/picmanage",
            "icon": "icon-jiaoyanhuodong",
            "type": 1,
            "functionType": 1,
            "children": null,
            "isCheck": 0,
            "totalUrl": null
        }, {
            "id": 10039,
            "name": "图片类别",
            "parentId": 10017,
            "url": "/pickind",
            "icon": "icon-jiaoyanhuodong",
            "type": 1,
            "functionType": 1,
            "children": null,
            "isCheck": 0,
            "totalUrl": null
        }],
        "isCheck": 0,
        "totalUrl": null
    }, {
        "id": 10018,
        "name": "系统设置",
        "parentId": 10015,
        "url": "/school_setting",
        "icon": "icon-xitongshezhi",
        "type": 1,
        "functionType": 1,
        "children": [{
            "id": 10040,
            "name": "参数设置",
            "parentId": 10018,
            "url": "/paramset",
            "icon": "icon-jiaoyanhuodong",
            "type": 1,
            "functionType": 1,
            "children": null,
            "isCheck": 0,
            "totalUrl": null
        }, {
            "id": 10041,
            "name": "底部栏目",
            "parentId": 10018,
            "url": "/footcol",
            "icon": "icon-jiaoyanhuodong",
            "type": 1,
            "functionType": 1,
            "children": null,
            "isCheck": 0,
            "totalUrl": null
        }, {
            "id": 10042,
            "name": "帮助分类",
            "parentId": 10018,
            "url": "/helpkind",
            "icon": "icon-jiaoyanhuodong",
            "type": 1,
            "functionType": 1,
            "children": null,
            "isCheck": 0,
            "totalUrl": null
        }, {
            "id": 10043,
            "name": "帮助管理",
            "parentId": 10018,
            "url": "/helpmanage",
            "icon": "icon-jiaoyanhuodong",
            "type": 1,
            "functionType": 1,
            "children": null,
            "isCheck": 0,
            "totalUrl": null
        }, {
            "id": 10044,
            "name": "友情链接",
            "parentId": 10018,
            "url": "/friendlink",
            "icon": "icon-jiaoyanhuodong",
            "type": 1,
            "functionType": 1,
            "children": null,
            "isCheck": 0,
            "totalUrl": null
        }],
        "isCheck": 0,
        "totalUrl": null
    }],
    "isCheck": 0,
    "totalUrl": null
}, {
    "id": 10019,
    "name": "基础工作",
    "parentId": 0,
    "url": "/base_job",
    "icon": "icon-jichuxinxi",
    "type": 1,
    "functionType": 1,
    "children": [{
        "id": 10020,
        "name": "值班反馈",
        "parentId": 10019,
        "url": "/duty_feedback",
        "icon": "icon-zhibanfankui",
        "type": 1,
        "functionType": 1,
        "children": null,
        "isCheck": 0,
        "totalUrl": null
    }, {
        "id": 10021,
        "name": "大事记",
        "parentId": 10019,
        "url": "/event",
        "icon": "icon-dashiji",
        "type": 1,
        "functionType": 1,
        "children": null,
        "isCheck": 0,
        "totalUrl": null
    }],
    "isCheck": 0,
    "totalUrl": null
}, {
    "id": 10022,
    "name": "教学科研",
    "parentId": 0,
    "url": "/research",
    "icon": "icon-jiaoyanhuodong",
    "type": 1,
    "functionType": 1,
    "children": [{
        "id": 10023,
        "name": "课程中心",
        "parentId": 10022,
        "url": "/curriculum_center",
        "icon": "icon-kechengzhongxin",
        "type": 1,
        "functionType": 1,
        "children": null,
        "isCheck": 0,
        "totalUrl": null
    }, {
        "id": 10024,
        "name": "我的班网",
        "parentId": 10022,
        "url": "/my_class_net",
        "icon": "icon-wodebanwang",
        "type": 1,
        "functionType": 1,
        "children": null,
        "isCheck": 0,
        "totalUrl": null
    }, {
        "id": 10025,
        "name": "课题研究",
        "parentId": 10022,
        "url": "/pro_research",
        "icon": "icon-ketiyanjiu",
        "type": 1,
        "functionType": 1,
        "children": null,
        "isCheck": 0,
        "totalUrl": null
    }],
    "isCheck": 0,
    "totalUrl": null
}, {
    "id": 10026,
    "name": "系统设置",
    "parentId": 0,
    "url": "/setting",
    "icon": "icon-xitongshezhi",
    "type": 1,
    "functionType": 1,
    "children": [{
        "id": 10027,
        "name": "角色权限",
        "parentId": 10026,
        "url": "/role",
        "icon": "icon-jiaosequanxian",
        "type": 1,
        "functionType": 1,
        "children": null,
        "isCheck": 0,
        "totalUrl": null
    }, {
        "id": 10028,
        "name": "组织架构",
        "parentId": 10026,
        "url": "/org_structure",
        "icon": "icon-zuzhijiagou",
        "type": 1,
        "functionType": 1,
        "children": null,
        "isCheck": 0,
        "totalUrl": null
    }, {
        "id": 10029,
        "name": "品质积分",
        "parentId": 10026,
        "url": "/score",
        "icon": "icon-pinzhijifen",
        "type": 1,
        "functionType": 1,
        "children": null,
        "isCheck": 0,
        "totalUrl": null
    }, {
        "id": 10030,
        "name": "统计表",
        "parentId": 10026,
        "url": "/chart",
        "icon": "icon-tongjibiao",
        "type": 1,
        "functionType": 1,
        "children": null,
        "isCheck": 0,
        "totalUrl": null
    }, {
        "id": 10031,
        "name": "资源管理",
        "parentId": 10026,
        "url": "/res_manger",
        "icon": "icon-ziyuanguanli",
        "type": 1,
        "functionType": 1,
        "children": null,
        "isCheck": 0,
        "totalUrl": null
    }],
    "isCheck": 0,
    "totalUrl": null
}]);

//基础工作,值班反馈获取反馈列表
mock("/common/getduty", {
    pageItems: [
        {
            date: 2019,
            stepList: [
                {
                    time: "@date",
                    title: "dsdsds",
                    content: "dwdw"
                }
            ]
        }
    ]
});

//获取首页资讯列表信息
mock("/news/indexnewslist", {
    schoolnews: [
        {
            id: 111,
            title: "传心灵飘香,递师生祝福",
            date: "2018-11-27 16:25:30.513"
        },
        {
            id: 111,
            title: "传心灵飘香,递师生祝福",
            date: "2018-11-27 16:25:30.513"
        },
        {
            id: 111,
            title: "传心灵飘香,递师生祝福",
            date: "2018-11-27 16:25:30.513"
        },
        {
            id: 111,
            title: "传心灵飘香,递师生祝福",
            date: "2018-11-27 16:25:30.513"
        },
        {
            id: 111,
            title: "传心灵飘香,递师生祝福",
            date: "2018-11-27 16:25:30.513"
        }
    ],
    notice: [
        {
            id: 111,
            title: "传心灵飘香,递师生祝福",
            date: "2018-11-27 16:25:30.513"
        }
    ],
    workweekly: null,
    website: [
        {
            weburl: "XXXXX",
            webimage: "XXXX",
            webname: "智慧网"
        }
    ]
});

//校园新闻和内部通知详情
mock_p(
    "/news/newsdetail",
    {
        id: 111,
        title: "传心灵飘香,递师生祝福",
        content: "传心灵飘香,递师生祝福",
        auther: "校长室"
    },
    {articleId: ""}
);

//新增值班反馈
mock_p("/common/addduty", {title: "d", content: ""});

//获取大事记
mock("/common/getevents", {
    pageItems: [
        {
            date: 2019,
            stepList: [
                {
                    time: "@date",
                    title: "dsdsds",
                    content: "dwdw"
                }
            ]
        }
    ]
});

//教师发展基础信息,获取左侧树
mock("/common/getdeptree", {
    pageItems: [
        {
            value: "zhejiang",
            label: "Zhejiang",
            children: [
                {
                    value: "hangzhou",
                    label: "Hangzhou",
                    children: [{value: "xihu", label: "West Lake"}]
                }
            ]
        },
        {
            value: "jiangsu",
            label: "Jiangsu",
            children: [
                {
                    value: "nanjing",
                    label: "Nanjing",
                    children: [{value: "zhonghuamen", label: "Zhong Hua Men"}]
                }
            ]
        }
    ]
});

//获取教师列表
mock_p(
    "/common/teacherlist",
    {
        pageItems: [
            {
                id: "@id",
                name: "dd",
                male: 1,
                subject: "语文",
                post: "dwd",
                department: "DSDS",
                phone: "dsds",
                status: 1
            }
        ],
        totalCount: 20
    },
    {pageIndex: 1, pageSize: 10}
);

//

//我的班网主界面
mock("/classnet/getlist", {
    menu: [
        {
            id: "@id",
            title: "班级公告",
            secondList: [
                {
                    title: "语文",
                    list: [
                        {
                            id: "@id",
                            title: "的撒旦撒旦",
                            time: "@date",
                            content: "dfsfdsf"
                        }
                    ]
                }
            ]
        }
    ]
});

//我的班网新增数据
mock_p("/classnet/add", {}, {menuId: 1, title: "dsds", content: "dsdsd"});

//我的班网,修改数据
mock_p("/classnet/eidt", {}, {listId: 1, title: "dsds", content: "dsdsd"});

//获取组别列表
mock("/research/getgrouplist", [
    {
        id: 111,
        groupname: "学科组"
    }
]);

//获取教研成果分类列表
mock("/research/getassortlist", [
    {
        id: 111,
        assortname: "论著"
    }
]);

//根据教研成果分类、用户、时间、教师姓名、部门获取教研成果列表
mock_p(
    "/research/getresearchlist",
    {
        pageItems: [
            {
                id: 1,
                papername: "wewe",
                author: "4343",
                press: "erer",
                pressdate: "fere",
                booknumber: "ewre",
                remark: "erer",
                certificate:
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550052313587&di=fe7ec7bf697ebeb809eef8de08f97e15&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201808%2F29%2F20180829023124_hqyni.jpg",
                annex:
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550052273118&di=4ee803ba9cf6abfd4eb7dc8553e61b90&imgtype=0&src=http%3A%2F%2Fi1.hdslb.com%2Fbfs%2Farchive%2F21d2e4f893f4d345ce27471aafad31af8ebc2fff.jpg,https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550052333755&di=694fc3f0ac69dad1b80f0928f83eb784&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F19d2bc2edbb755a66f5990c9c29077fc68a1bd25bca5-QTMA3d_fw658"
            },
            {
                id: 2,
                papername: "qqqqqqqqq",
                author: "4343",
                press: "erer",
                pressdate: "fere",
                booknumber: "ewre",
                remark: "erer",
                certificate:
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550052313587&di=fe7ec7bf697ebeb809eef8de08f97e15&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201808%2F29%2F20180829023124_hqyni.jpg",
                annex:
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550052273118&di=4ee803ba9cf6abfd4eb7dc8553e61b90&imgtype=0&src=http%3A%2F%2Fi1.hdslb.com%2Fbfs%2Farchive%2F21d2e4f893f4d345ce27471aafad31af8ebc2fff.jpg,https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550052333755&di=694fc3f0ac69dad1b80f0928f83eb784&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F19d2bc2edbb755a66f5990c9c29077fc68a1bd25bca5-QTMA3d_fw658"
            }
        ],
        totalCount: 100
    },
    {
        teachername: "",
        assortlid: "",
        date: "",
        groupid: "",
        pageIndex: "",
        pageSize: ""
    }
);

//批量删除教研成果
mock_p("/research/deleteresearch", null, {id: ""});

//获取教研成果详情
mock_p("/research/getresearchdetail", {}, {id: ""});

//修改教研信息
mock_p("/research/updateresearch", {}, {});

//获取角色列表
mock("/syssetting/getallrole", [{id: 10006, name: "ttt", discription: "ggg"}]
);

//获取所有菜单树
mock("/common/getallfunction", [
    {
        id: 10000,
        name: "aaa",
        parentId: 0,
        url: "aaa",
        icon: "aaa",
        type: 1,
        functionType: 1,
        ischeck: 1,
        children: [
            {
                id: 10002,
                name: "ccc",
                parentId: 10000,
                url: "ccc",
                icon: "ccc",
                type: 1,
                functionType: 1,
                ischeck: 1,
                children: [
                    {
                        id: 10004,
                        name: "eee",
                        parentId: 10002,
                        url: "eee",
                        icon: "eee",
                        type: 1,
                        functionType: 1,
                        ischeck: 1,
                        children: [
                            {
                                id: 10007,
                                name: "hh",
                                parentId: 10004,
                                url: "hh",
                                icon: "hh",
                                type: 1,
                                functionType: 1,
                                ischeck: 1,
                                children: null
                            }
                        ]
                    },
                    {
                        id: 10009,
                        name: "jjj",
                        parentId: 10002,
                        url: "jjj",
                        icon: "jjj",
                        type: 1,
                        functionType: 1,
                        ischeck: 1,
                        children: null
                    }
                ]
            },
            {
                id: 10003,
                name: "ddd",
                parentId: 10000,
                url: "ddd",
                icon: "ddd",
                type: 1,
                functionType: 1,
                ischeck: 1,
                children: null
            },
            {
                id: 10008,
                name: "iii",
                parentId: 10000,
                url: "iii",
                icon: "iii",
                type: 1,
                functionType: 1,
                ischeck: 1,
                children: null
            }
        ]
    },
    {
        id: 10001,
        name: "bbb",
        parentId: 0,
        url: "bbb",
        icon: "bbb",
        type: 1,
        functionType: 1,
        ischeck: 1,
        children: [
            {
                id: 10005,
                name: "fff",
                parentId: 10001,
                url: "fff",
                icon: "fff",
                type: 1,
                functionType: 1,
                ischeck: 1,
                children: null
            }
        ]
    },
    {
        id: 10006,
        name: "ggg",
        parentId: 0,
        url: "ggg",
        icon: "ggg",
        type: 1,
        functionType: 1,
        ischeck: 1,
        children: null
    }
]);

//获取当前角色的权限数组
mock_p("/common/getfunctionbyroleandtype", [10005], {roleId: "", type: ""});

//添加角色
mock_p("/syssetting/saverole", null, {name: "", discription: ""});

//角色功能权限树更改
mock_p("/syssetting/changeroletofunction", null, {
    roleId: "",
    functionIds: "",
    type: ""
});

//获取部门列表树状图
mock("/syssetting/deptlist", [
    {
        id: 10006,
        name: "ggg",
        summary: "ggg",
        parentId: "ggg",
        schoolId: "ggg",
        createUserId: "ggg",
        deptOrder: "ggg",
        createTime: "ggg",
        children: []
    }
]);

//新建修改部门
mock_p("/syssetting/savedept", null, {
    name: "",
    parentId: "",
    id: ""
});

//删除部门
mock_p("/syssetting/deldept", null, {id: ""});

//修改部门排序
mock_p("/syssetting/changeorder", null, {deptId: "", orderForward: ""});

//获取用户各资源数量及积分
mock("/user/getuserrecordnum", {
    teachPlanNum: 1,
    prepareLessonNum: 1,
    workRecordingNum: 1,
    lessonExamNum: 1,
    microLessonNum: 1,
    coursewareNum: 1,
    otherResourceNum: 1,
    points: 1
});

//获取用户某类资源总数及当前页资源
mock_p(
    "/user/getresourcepage",
    {
        totalCount: 10,
        pageItems: [
            {
                id: 1,
                name: "aaa",
                type: 1,
                level: 1,
                point: 5,
                createTime: 12331123123,
                createTimeString: "2018-01-02 12:08:09"
            }
        ]
    },
    {pageIndex: "", type: ""}
);

//根据用户Id获取学校部门树状列表
mock("/usermanage/depttree", {
    id: 10006,
    name: "ggg",
    summary: "ggg",
    parentId: "ggg",
    schoolId: "ggg",
    createUserId: "ggg",
    deptOrder: "ggg",
    createTime: "ggg",
    children: [
        {
            id: 10007,
            name: "ggg",
            summary: "ggg",
            parentId: "ggg",
            schoolId: "ggg",
            createUserId: "ggg",
            deptOrder: "ggg",
            createTime: "ggg",
            children: []
        },
        {
            id: 10008,
            name: "yyy",
            summary: "ggg",
            parentId: "ggg",
            schoolId: "ggg",
            createUserId: "ggg",
            deptOrder: "ggg",
            createTime: "ggg",
            children: []
        }
    ]
});

//根据学校或者部门获取教师列表分页
mock_p("/usermanage/teacherlist", {
    totalCount: 16,
    pageItems: [
        {
            id: 1,
            name: "13805153134",
            sex: 1,
            teachSubject: 1,
            duty: 1,
            deptIds: [10007],
            roleIds: [10006]
        },
        {
            id: 2,
            name: "13601405601",
            sex: 2,
            teachSubject: 1,
            duty: 1
        },
        {id: 3, name: "13805153134", sex: 1, teachSubject: 1, duty: 1},
        {
            id: 4,
            name: "13601405601",
            sex: 1,
            teachSubject: 1,
            duty: 1
        },
        {id: 5, name: "13805153134", sex: 1, teachSubject: 1, duty: 1}
    ]
});

//教师详情
mock_p(
    "/usermanage/teacherdetail",
    {
        roleList: [1, 2, 3, 4, 5],
        deptList: [10000, 10002, 10004, 10003, 10005, 10006],
        teacher: {
            id: 1,
            tel: "13805153134",
            password: "123456",
            sex: 1,
            account: "13805153134",
            name: "13805153134",
            nickName: "13805153134",
            type: 1,
            openId: "oUCdy5wCthhsFaqwsgAuMXEWLKPY",
            status: 1,
            sign: "320106198808132814",
            teachSubject: 1,
            mainSubject: 1,
            policalOutlook: 0,
            duty: 1,
            professionLevel: 0,
            dutyLevel: 1,
            teacherTitle: 1,
            qualification: 1,
            degree: 1,
            workTime: "200701",
            birthTime: "200701",
            credit: 0
        }
    },
    {id: 1}
);

//教师详情
mock_p(
    "/usermanage/teacherinfo",
    {},
    {
        roleList: [1, 2, 3, 4, 5],
        deptList: [10000, 10002, 10004, 10003, 10005, 10006],
        id: 1,
        tel: "13805153134",
        password: "123456",
        account: "13805153134",
        name: "13805153134",
        nickName: "13805153134",
        type: 1,
        openId: "oUCdy5wCthhsFaqwsgAuMXEWLKPY",
        status: 1,
        sign: "320106198808132814",
        teachSubject: 1,
        mainSubject: 1,
        policalOutlook: 0,
        duty: 1,
        professionLevel: 0,
        dutyLevel: 1,
        teacherTitle: 1,
        qualification: 1,
        degree: 1,
        workTime: "200701",
        birthTime: "200701",
        credit: 0
    }
);

//根据教师编号批量删除教师信息
mock_p(
    "/usermanage/delteacher",
    {},
    {
        teacherIds: ""
    }
);

//批量上传教师资料
mock_p(
    "/usermanage/uploadexcel",
    {},
    {
        file: ""
    }
);

//上传成功后,提交教师资料
mock_p(
    "/usermanage/importteacherexcel",
    {},
    {
        filename: ""
    }
);

//获取用户各资源数量及积分
mock("/user/getuserrecordnum", {
    teachPlanNum: 1,
    prepareLessonNum: 1,
    workRecordingNum: 5,
    lessonExamNum: 1,
    microLessonNum: 1,
    coursewareNum: 1,
    otherResourceNum: 1,
    points: 1
});

//获取用户某类资源总数及当前页资源
mock_p(
    "/user/getresourcepage",
    {
        totalCount: 10,
        pageItems: [
            {
                id: 1,
                name: "aaa",
                type: 1,
                level: 1,
                point: 5,
                createTime: 12331123123,
                createTimeString: "2018-01-02 12:08:09"
            }
        ]
    },
    {type: "", pageSize: "", pageIndex: ""}
);

//按职称,类型,年龄和科目统计教师
mock("/statistics/genrelist", {
    "tongjobtitleagecou": [{
        "complete": 2,
        "age": "30~40岁",
        "secondary": 0,
        "advanced": 1,
        "firstlevel": 0,
        "thirdlevel": 0,
        "positive": 1
    },
        {
            "complete": 3,
            "age": "30岁以下",
            "secondary": 0,
            "advanced": 1,
            "firstlevel": 1,
            "thirdlevel": 0,
            "positive": 1
        },
        {
            "complete": 2,
            "age": "40~50岁",
            "secondary": 0,
            "advanced": 0,
            "firstlevel": 1,
            "thirdlevel": 0,
            "positive": 1
        },
        {
            "complete": 3,
            "age": "50~60岁",
            "secondary": 0,
            "advanced": 0,
            "firstlevel": 1,
            "thirdlevel": 0,
            "positive": 2
        },
        {
            "complete": 6,
            "age": "60岁以上",
            "secondary": 0,
            "advanced": 2,
            "firstlevel": 0,
            "thirdlevel": 0,
            "positive": 4
        }
    ],
    "paramlist": [{
        "id": 1000,
        "category": "professionallevel",
        "codeKey": "1",
        "codeName": "正高级",
        "codeName2": "positive"
    },
        {
            "id": 1003,
            "category": "professionallevel",
            "codeKey": "2",
            "codeName": "高级",
            "codeName2": "advanced"
        },
        {
            "id": 1004,
            "category": "professionallevel",
            "codeKey": "3",
            "codeName": "一级",
            "codeName2": "firstlevel"
        },
        {
            "id": 1005,
            "category": "professionallevel",
            "codeKey": "4",
            "codeName": "二级",
            "codeName2": "secondary"
        },
        {
            "id": 1010,
            "category": "professionallevel",
            "codeKey": "5",
            "codeName": "三级",
            "codeName2": "thirdlevel"
        },
        {
            "id": 0,
            "category": null,
            "codeKey": null,
            "codeName": "全部",
            "codeName2": "complete"
        }
    ],
    "tongjobtitlecou": [{
        "percentage": "56.25%",
        "count": 9,
        "teacherTitle": null,
        "professionalLevel": "正高级",
        "teachSubject": null
    },
        {
            "percentage": "25.00%",
            "count": 4,
            "teacherTitle": null,
            "professionalLevel": "高级",
            "teachSubject": null
        },
        {
            "percentage": "18.75%",
            "count": 3,
            "teacherTitle": null,
            "professionalLevel": "一级",
            "teachSubject": null
        },
        {
            "percentage": null,
            "count": 0,
            "teacherTitle": null,
            "professionalLevel": "二级",
            "teachSubject": null
        },
        {
            "percentage": null,
            "count": 0,
            "teacherTitle": null,
            "professionalLevel": "三级",
            "teachSubject": null
        }
    ],
    "tonggenre": [{
        "percentage": "100.00%",
        "count": 16,
        "teacherTitle": "区优青",
        "professionalLevel": null,
        "teachSubject": null
    },
        {
            "percentage": null,
            "count": 0,
            "teacherTitle": "市级骨干教师",
            "professionalLevel": null,
            "teachSubject": null
        },
        {
            "percentage": null,
            "count": 0,
            "teacherTitle": "市级优秀教师",
            "professionalLevel": null,
            "teachSubject": null
        },
        {
            "percentage": null,
            "count": 0,
            "teacherTitle": "省级骨干教师",
            "professionalLevel": null,
            "teachSubject": null
        }
    ],

    "tongsubjectcou": [{
        "percentage": null,
        "count": 0,
        "teacherTitle": null,
        "professionalLevel": null,
        "teachSubject": "语文"
    },
        {
            "percentage": null,
            "count": 0,
            "teacherTitle": null,
            "professionalLevel": null,
            "teachSubject": "数学"
        },
        {
            "percentage": null,
            "count": 0,
            "teacherTitle": null,
            "professionalLevel": null,
            "teachSubject": "英语"
        },
        {
            "percentage": null,
            "count": 0,
            "teacherTitle": null,
            "professionalLevel": null,
            "teachSubject": "物理"
        },
        {
            "percentage": null,
            "count": 0,
            "teacherTitle": null,
            "professionalLevel": null,
            "teachSubject": "化学"
        },
        {
            "percentage": null,
            "count": 0,
            "teacherTitle": null,
            "professionalLevel": null,
            "teachSubject": "历史"
        },
        {
            "percentage": null,
            "count": 0,
            "teacherTitle": null,
            "professionalLevel": null,
            "teachSubject": "地理"
        },
        {
            "percentage": null,
            "count": 0,
            "teacherTitle": null,
            "professionalLevel": null,
            "teachSubject": "生物"
        },
        {
            "percentage": null,
            "count": 0,
            "teacherTitle": null,
            "professionalLevel": null,
            "teachSubject": "音乐"
        },
        {
            "percentage": null,
            "count": 0,
            "teacherTitle": null,
            "professionalLevel": null,
            "teachSubject": "美术"
        },
        {
            "percentage": null,
            "count": 0,
            "teacherTitle": null,
            "professionalLevel": null,
            "teachSubject": "思想品德"
        },
        {
            "percentage": null,
            "count": 0,
            "teacherTitle": null,
            "professionalLevel": null,
            "teachSubject": "信息技术"
        },
        {
            "percentage": null,
            "count": 0,
            "teacherTitle": null,
            "professionalLevel": null,
            "teachSubject": "历史与社会"
        },
        {
            "percentage": null,
            "count": 0,
            "teacherTitle": null,
            "professionalLevel": null,
            "teachSubject": "科学"
        },
        {
            "percentage": null,
            "count": 0,
            "teacherTitle": null,
            "professionalLevel": null,
            "teachSubject": "体育与健康"
        }
    ],
    "tongjobtitlesexcou": [{
        "complete": 15,
        "SEX": "男",
        "secondary": 0,
        "advanced": 3,
        "firstlevel": 3,
        "thirdlevel": 0,
        "positive": 9
    },
        {
            "complete": 1,
            "SEX": "女",
            "secondary": 0,
            "advanced": 1,
            "firstlevel": 0,
            "thirdlevel": 0,
            "positive": 0
        }
    ]
});

//统计各科资源总量，学期上传资源，按学科组和用户对按键统计等
mock_p(
    "/statistics/resourcelist",
    {

        "tonggenre": [
            {
                "music": 0,
                "information": 0,
                "physical": 0,
                "moral": 0,
                "society": 0,
                "art": 0,
                "IsSpecial": "普通",
                "sport": 0,
                "mathematics": 0,
                "science": 0,
                "history": 0,
                "biological": 0,
                "geography": 0,
                "complete": 0,
                "chemistry": 0,
                "language": 2,
                "english": 0
            }
        ],
        "sysparamlist": [
            {
                "id": 1011,
                "category": "subject",
                "codeKey": "10866",
                "codeName": "语文",
                "codeName2": "language"
            },
            {
                "id": 1012,
                "category": "subject",
                "codeKey": "12426",
                "codeName": "数学",
                "codeName2": "mathematics"
            }
        ],
        "tongallsubthemecount": {
            "ordinary": 3,
            "resources": 0,
            "teaching": 0,
            "complete": 1,
            "courseware": 0,
            "ChapterName": "总量",
            "exercise": 0,
            "prepare": 1,
            "boutique": 0,
            "schoolcase": 0,
            "microlesson": 0

        },
        "tongsubthemecount": [

            {
                "chaptername": "数学",
                "exercise": "0",
                "microlesson": "0",
                "courseware": "0",
                "resources": "0",
                "teaching": "0",
                "schoolcase": "0",
                "boutique": 0,
                ordinary: 3,
                "prepare": "3",
                "subjectid": "10866",
                "complete": "3"
            }

        ],
        "tongallsemesterlist": [
            {
                "chapterName": "2019-2020上",
                "prolist": null,
                "allProlist": [
                    {
                        "percentage": "100.00%",
                        "count": 2,
                        "mark": 1
                    }
                ]
            },
            {
                "chapterName": "2019-2020下",
                "prolist": null,
                "allProlist": [
                    {
                        "percentage": "100.00%",
                        "count": 2,
                        "mark": 1
                    }
                ]
            }
        ]

    },
    {
        semesterid: ""
    }
);

//获取学期数组数据
mock("/statistics/semesterlist", [{
    "year": "2019-2020",
    "id": 1,
    "semester": "上",
    "startTime": "2018-09-29 18:52:14.453",
    "endTime": "2018-09-29 19:53:14.453"
},
    {
        "year": "2019-2020",
        "id": 2,
        "semester": "下",
        "startTime": "2018-09-29 18:52:14.453",
        "endTime": "2018-09-29 19:53:14.453"
    }]);

//2.48.分页教师资源统计
mock_p("/statistics/resourceofuserlist", {
    "tongtearesthemecount": {},
    "totalCount": 1,
    "pageItems": [
        {
            "chaptername": "13805153134",
            "exercise": "0.00",
            "microlesson": "0.00",
            "courseware": "0.00",
            "resources": "0.00",
            "teaching": "0.00",
            "schoolcase": "0.00",
            "prepare": "1.00",
            "complete": "1.00"
        }
    ]
}, {subjectid: "", semesterid: "", pageSize: "", pageIndex: ""});


//获取全部积分列表信息
mock("/score/getscorelist", [
    {id: 1, lxmc: "品质", lxdj: 1, xzjf: 3, scjf: 4},
    {id: 2, lxmc: "品质", lxdj: 2, xzjf: 2, scjf: 3},
    {id: 3, lxmc: "品质", lxdj: 3, xzjf: 1, scjf: 2},
    {id: 4, lxmc: "教案", lxdj: 0, xzjf: 4, scjf: 5},
    {id: 5, lxmc: "备课", lxdj: 0, xzjf: 4, scjf: 5},
    {id: 6, lxmc: "学案", lxdj: 0, xzjf: 4, scjf: 5}
]);

//根据积分编号修改上传积分
mock_p("/score/updatescore", null, {scoreId: "", scjf: ""});

//获取基础工作某类公告总数及当前页资源
mock_p("/basework/getbaseworkpage", {
    "totalCount": 10,
    "pageItems": [{
        "id": 1,
        "title": "aaa",
        "type": 1,
        "content": "",
        "year": 2019,
        "createTime": 12331123123,
        "createDateString": "01.02"
    }]
}, {pageSize: "", pageIndex: "", type: "", year: ""});

//新建基础工作资讯
mock_p("/basework/savecontent", null, {title: "", content: "", type: ""});

//获取基础工作资讯详情
mock_p("/basework/getcontent", null, {id: ""});

//上传基础工作图片
mock_p("/basework/uploadimg", "aa-bb-dd.jpg", {file: ""});

export default Mock;

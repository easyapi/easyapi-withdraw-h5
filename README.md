# EasyAPI快速提现 https://withdraw.easyapi.com


## 项目介绍

本模块主要是EasyAPI快速提现移动端，用来嵌入到小程序、App、H5项目，作为提现独立模块。
如下图


## 如何嵌入

集成EasyAPI快速提现的项目，部署成功后，调用需要传入accessToken参数，该参数的值需要从业务系统获取

|  参数名称   | 参数说明  |
|  ----  | ----  |
| accessToken  | EasyAPI快速提现访问令牌 |
| username  | 用户标识 |

## 项目目录结构

``` bash
├── README.md
├── build                   #webpack配置
├── config                  #webpack配置
├── dist                    #打包后输出文件夹
├── index.html              #入口index
├── node_modules            #依赖模块
├── package.json
├── src                     #源码文件夹
  ├── App.vue              
  ├── assets                #静态资源
  │   ├── icons             #自定义图标
  │   ├── images            #图片
  │   └── styles            #样式表
  ├── components            #公用组件
  │   ├── header.vue          #头部组件
  │   └── common            #公用组件
  ├── libs                  #依赖工具函数
  ├── locale                #多语言文件
  ├── utils                 #全局公用方法  
  ├── main.js              
  ├── pages                 #页面文件夹
  │   ├── TeamNew.vue       #新建团队
  │   ├── TeamNewSuccess    #新建团队成功
  │   ├── Teams.vue         #团队列表
  │   └── info              #账号信息         
  │      ├── account        #账户
  │      ├── bill           #订单
  │      └── members        #成员
  ├── router             
  │   └── index.js          #路由
  ├── service
  │   ├── apiList.js        #api列表
  │   └── request.js        #ajax封装
  └── store                 #vuex相关
  ├── actions.js
  ├── getters.js
  ├── index.js
  ├── mutation-types.js
  ├── mutations.js
└── static                  #静态资源文件
  └── images                #图片

```

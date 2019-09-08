import React, { Component } from 'react';

import './Table.scss';

export default class Table extends Component {
    state = {
        columns: [
            {
                title: '名称'
            },
            {
                title: '年龄'
            },
            {
                title: '地址'
            }
        ],
        tableData: [
            {
                name: '张三',
                age: '20',
                address: '某某园区'
            },
            {
                name: '李四',
                age: '20',
                address: '某某园区'
            },
            {
                name: '王五',
                age: '20',
                address: '某某园区'
            },
            {
                name: '谷谷力',
                age: '20',
                address: '某某园区'
            },
            {
                name: '嘎嘎嘎',
                age: '20',
                address: '某某园区'
            },
            {
                name: '李芳芳',
                age: '20',
                address: '某某园区'
            },
            {
                name: '服服服',
                age: '20',
                address: '某某园区'
            },
            {
                name: '张三',
                age: '20',
                address: '某某园区'
            },
            {
                name: '李四',
                age: '20',
                address: '某某园区'
            },
            {
                name: '王五',
                age: '20',
                address: '某某园区'
            },
            {
                name: '谷谷力',
                age: '20',
                address: '某某园区'
            },
            {
                name: '嘎嘎嘎',
                age: '20',
                address: '某某园区'
            },
            {
                name: '李芳芳',
                age: '20',
                address: '某某园区'
            },
            {
                name: '服服服',
                age: '20',
                address: '某某园区'
            }
        ]
    };

    render() {
        return (
            <div className="code-box-demo">
                <div className="ant-table-wrapper">
                    <div className="ant-spin-nested-loading">
                        <div className="ant-spin-container">
                            <div className="ant-table">
                                <div className="ant-table-content">
                                    <div className="ant-table-scroll">
                                        <div className="ant-table-header">
                                            <table>
                                                <colgroup>
                                                    {
                                                        this.state.columns.map((c, index) => {
                                                            return <col key={index}/>
                                                        })
                                                    }
                                                </colgroup>
                                                <thead className="ant-table-thead">
                                                    <tr>
                                                        {
                                                            this.state.columns.map((col, index) => {
                                                                return (
                                                                    <th key={index}>
                                                                        <span className="ant-table-header-column">{col.title}</span>
                                                                    </th>
                                                                )
                                                            })
                                                        }
                                                    </tr>
                                                </thead>
                                            </table>
                                        </div>
                                        <div className="ant-table-body" style={{
                                            maxHeight: '240px',
                                            overflowY: 'scroll'
                                        }}>
                                            <table>
                                                <colgroup>
                                                    {
                                                        this.state.columns.map((c, i) => {
                                                            return <col key={i}/>
                                                        })
                                                    }
                                                </colgroup>
                                                <tbody className="ant-table-tbody">
                                                {
                                                    this.state.tableData.map((d, index) => {
                                                        return (
                                                            <tr key={index}>
                                                                <td>{d.name}</td>
                                                                <td>{d.age}</td>
                                                                <td>{d.address}</td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
/**
 * Created by summer on 2019/3/31.
 */
import React, { Component } from 'react';

import demoStore from '../../stores/Demo';
import demoAction from '../../actions/Demo';

import './Demo.scss'

export default class DemoComponent extends Component {
    state = demoStore.getState();

    componentWillMount() {
        demoStore.addChangeListener(this._handleDataChange);

        const params = {
            listData: [
                {
                    label: 'data 1',
                    value: 1
                },
                {
                    label: 'data 2',
                    value: 2
                },
                {
                    label: 'data 3',
                    value: 3
                },
                {
                    label: 'data 4',
                    value: 4
                },
                {
                    label: 'data 5',
                    value: 5
                }
            ],
            totalCount: 5,
            whatever: '随便写点'
        }
        demoAction.loadDemoDataAsync(params);
    }

    _handleDataChange = () => {
        this.setState(demoStore.getState());
    };

    componentWillUnmount() {
        demoStore.removeChangeListener(this._handleDataChange);
    }

    render() {
        if (this.state && this.state.listData.length <= 0) return null;
        const { listData, totalCount, whatever } = this.state;
        return (
            <div className="demo-wrapper">
                <p className="demo-wrapper__title">这是一个flux数据流的demo</p>
                <ul>
                    {
                        listData.map((item, index) => {
                            return (
                                <li key={item.value}>{item.label}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
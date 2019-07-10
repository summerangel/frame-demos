import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Demo extends Component {

    componentDidMount() {
        this.props.fetchAsyncData({asyncData: '传过去的数据！'});
        console.log('this.props.example==>', this.props.example);
        console.log('this.props.addition==>', this.props.addition);
    }

  handleDataChange = () => {
      this.props.notifyStateChange({addition: '设置数据'});
  }

  render() {
    return (
        <div className="demo-wrapper">
          <p>这是个react-redux数据流的例子</p>
          <div>
            <ul>
              <li onClick={this.handleDataChange}>数据一：{this.props.example}</li>
              <li>{this.props.addition}</li>
            </ul>
          </div>
        </div>
    )
  }
}

export default connect(state => state, actions)(Demo);

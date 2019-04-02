import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Demo extends Component {
  render() {
    return (
        <div className="demo-wrapper">
          <p>这是个react-redux数据流的例子</p>
          <div>
            <ul>
              <li>数据一：123</li>
            </ul>
          </div>
        </div>
    )
  }
}

export default connect(state => state, actions)(Demo);
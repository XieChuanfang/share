import React, { Component } from 'react';

class App extends Component {

  render() {
      return  (
          <ul>
              <FragmentComponent  />
              <StringComponent />
          </ul>
      )
  }
}


/**
 * fragment
 */
class FragmentComponent extends Component {
    render() {
        return (
            <React.Fragment >
                <li >A</li>
                <li >B</li>
                <li >C</li>
            </React.Fragment>
        );
    }
}


/**
 * 返回字符串
 */
class StringComponent extends Component {
  render() {
    return "I am a String";
  }
}

export default App;

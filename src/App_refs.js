import {StrictMode} from 'react';
import React, { Component } from 'react';

class App_refs extends Component {
  render() {
      return <StrictMode><MyComponent /></StrictMode>
  }
}

/**
 * string refs
 */

class MyComponent extends React.Component {
    constructor(props) {
        super(props);

        this.focusTextInput = () => {
           this.refs.textInput.focus();
        };
    }


    render() {
        return (
            <div>
                <input type="text" ref="textInput"/>
                <input type="button" value="Focus the text input" onClick={this.focusTextInput}/>
            </div>
        )
    }
}

/**
 * createRef API（DOM reference)
 */
// class MyComponent extends React.Component {
//     constructor(props) {
//       super(props);
//
//       this.inputRef = React.createRef();
//
//       this.focusTextInput = () => {
//           this.inputRef.current.focus();
//       };
//     }
//
//     render() {
//       return (
//           <div>
//               <input type="text" ref={this.inputRef}/>
//               <input type="button" value="Focus the text input" onClick={this.focusTextInput}/>
//           </div>
//       )
//     }
// }


/**
 * createRef API（React component reference)
 */
// class MyComponent extends React.Component {
//     constructor(props) {
//         super(props);
//         this.customTextInput = React.createRef();
//     }
//
//     componentDidMount() {
//         this.customTextInput.current.focusTextInput();
//     }
//
//     render() {
//         return (
//             <CustomTextInput ref={this.customTextInput} />
//         );
//     }
// }
//
// class CustomTextInput extends React.Component {
//     constructor(props) {
//         super(props);
//         this.textInput = React.createRef();
//     }
//
//     focusTextInput() {
//         this.textInput.current.focus();
//     }
//
//
//     render() {
//         return (
//             <div>
//                 <input type="text" ref={this.textInput} />
//             </div>
//         );
//     }
// }


/**
 * callback
 */
// class MyComponent extends React.Component {
//     constructor(props) {
//       super(props);
//
//         this.focusTextInput = () => {
//             this.textInput.focus();
//         };
//     }
//
//     render() {
//       return (
//           <div>
//               <input type="text" ref={(element) => this.textInput = element}/>
//               <input type="button" value="Focus the text input" onClick={this.focusTextInput}/>
//           </div>
//       )
//     }
// }

/**
 * refs forwarding --- (react 16.3 before)
 */

// class MyComponent extends React.Component {
//     constructor(props) {
//         super(props);
//         this.inputElement = React.createRef();
//     }
//
//     componentDidMount() {
//         this.inputElement.current.focus();
//     }
//
//     render() {
//         return (
//             <CustomTextInput inputRef={this.inputElement} />
//         );
//     }
// }
//
// function CustomTextInput(props) {
//     return (
//         <div>
//             <input ref={props.inputRef} />
//         </div>
//     );
// }

/**
 * refs forwarding --- (react 16.3 after)
 */

// class MyComponent extends React.Component {
//     constructor(props) {
//         super(props);
//         this.inputElement = React.createRef();
//     }
//
//     componentDidMount() {
//         this.inputElement.current.focus();
//     }
//
//     render() {
//         return (
//             <CustomTextInput ref={this.inputElement} />
//         );
//     }
// }
//
// const CustomTextInput = React.forwardRef((props, ref) => {
//     return (
//         <div>
//             <input ref={ref} />
//         </div>
//     );
// });

export default App_refs;
const React = require('react');
export default function DumberComponent(props) {
    // super(props);
    // this.handleClick  = this.handleClick.bind(this)
  // }

  // handleClick(event) {
  //   console.log("Woohoo!")
  // }

  // render() {
    return (
      <div onClick={props.handleClick}>I am just happy</div>
    );
  }
// }
module.exports = DumberComponent;

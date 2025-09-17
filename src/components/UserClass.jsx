// just like functional Component is Js function in the end ,
// same WAY => Class based component is JS class

// class -nameOfComp- extends(for to make it component) React.Component {}
// React.Component is Class in react package of UserClass is inheriting props
// it has explicit render() which returns JSX

// we pass a prop to class based component ,
// <UserClass name={"Satyam rathore (Class)"} />
//  how do we recieve it => using Constructor(){
// super(props) at top => to recieve props from parent constructor , if not then this will be undefined
// }

// create state variales in here  =>
// when the instance of class is created constructor() is called || best place to recieve PROPS && best place to create state vars (this.state which is big whole obj)

import React from "react";

class UserClass extends React.Component {
  // to recieve the Props
  constructor(props) {
    super(props);

    // it will contain all state variables
    this.state = {
      count: 1,
      count2: -1,
      value: 0,
    };
  }
  render() {
    const { name, location } = this.props;
    const { count, count2, value } = this.state;
    return (
      <div className="user-card">
        <button>Count : {count}</button>
        <h1>{value} class</h1>
        <button>Count2 : {count2}</button>
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h4>Contact : priyasatyam@1806</h4>
      </div>
    );
  }
}

export default UserClass;

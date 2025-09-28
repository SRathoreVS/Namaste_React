import React from "react";

class ClassCardExample extends React.Component {
  constructor(props) {
    super(props);

    //create a state || a big whole obj || not like usestate (define new newstate for different state but bts react put it in one OBJECT)
    // this will hold all states in a comp
    this.state = {
     count : 0,
     count2: 2,
    }
  }
  render() {
    const { role, company, phone } = this.props;
    const {count,count2} = this.state
    return (
      <div className="user-card">
        <h1>Job Role : {role} (Class)</h1>
        <h2>Count : {count}</h2>
        <h2>Count : {count2}</h2>
        <h2>Company : {company}</h2>
        <h3>Conatct : {phone}</h3>
        <h4>experience : 3.8 years</h4>
      </div>
    );
  }
}

export default ClassCardExample;

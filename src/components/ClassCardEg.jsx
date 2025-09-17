import React from "react";

class ClassCardExample extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { role, company, phone } = this.props;
    return (
      <div className="user-card">
        <h1>Job Role : {role} (Class)</h1>
        <h2>Company : {company}</h2>
        <h3>Conatct : {phone}</h3>
        <h4>experience : 3.8 years</h4>
      </div>
    );
  }
}

export default ClassCardExample;

import { Component } from "react";
import ClassCardExample from "../components/ClassCardEg";
import User from "../components/User";
import UserClass from "../components/UserClass";

class AboutUs extends Component {
  constructor(props) {
    super(props);

    console.log("instance created :Parent constructor called");
  }

  // componentDidMount() - called unless everything is rendered
  componentDidMount() {
    // * API
  }
  render() {
    return (
      <div className="w-full min-h-screen bg-gray-50 text-gray-800">
        <User name={"Satyam rathore (function)"} />
        <UserClass name={"Satyam rathore (Class)"} location={"mumbai(class)"} />
        {/* child class */}
        <ClassCardExample
          role={"Frontend developer"}
          company={"Accenture"}
          phone={"+91-6394614898"}
        />
      </div>
    );
  }
}

export default AboutUs;

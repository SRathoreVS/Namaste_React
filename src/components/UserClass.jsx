import React from "react";

class UserClass extends React.Component {
  // to recieve the Props
  // constructor - (1)
  constructor(props) {
    super(props);

    // *NOTE : create a state || a big whole obj || not like usestate (define new newstate for different state but bts react put it in one OBJECT)
    // this will hold all states in a comp
    this.state = {
      count: 1,
      userInfo: {
        name: "dummyName",
        avatar_url: "default",
      },
    };
    // update your state
    // TODO :
    // never update state directly
  }

  //? REVIEW:  componentDidMount() - (3)
  // used to make API calls [because : we quickly render the comp then call the API same as useEffect || reacts update the DOM || it batches all the render and constructor and updates]
  async componentDidMount() {
    // API call
    const data = await fetch("https://api.github.com/users/SRathoreVS");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  componentDidUpdate() {
    console.log("component did update is called ");
  }

  componentWillUnmount() {
    console.log("component will unmount is called ");
  }

  // render - (2)
  render() {
    const { count } = this.state;
    const { name, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <button
          onClick={() =>
            this.setState({
              count: this.state.count + 1,
            })
          }
        >
          Count +
        </button>
        <h1>{count} class</h1>
        <button
          onClick={() =>
            this.setState({
              count: this.state.count - 1,
            })
          }
        >
          Count -
        </button>
        <h2>Name : {name}</h2>
        <img src={avatar_url} alt="avatar" />
        <h4>Contact : priyasatyam@1806</h4>
      </div>
    );
  }
}

export default UserClass;

import React from "react";

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            name: "Ayush",
        };
        console.log(this.props.name + " Constructor");
    }
    async componentDidMount() {
        //  This function will call after render of this component.
        //  This is the best place to write api call logic.
        const apiCall = await fetch("https://api.github.com/users/ayush2209");
        const data = await apiCall.json();
        console.log(data);
        this.setState({
            userInfo: data,
        });
        console.log(this.props.name + " ComponentDidMount");
    }
    render() {
        console.log(this.props.name + " render");
        //Render is a function which is mendatory in calss based component and it returs JSX.
        return (
            <div className='container mt-5'>
                <div className='card'>
                    <h2 className='mb-2'>
                        {" "}
                        User: {this.state?.userInfo?.name}
                    </h2>
                    <img src={this.state?.userInfo?.avatar_url} />
                    <div className='mt-2'>{this.state?.userInfo?.location}</div>
                    <div>GitHub Repo: {this.state?.userInfo?.public_repos}</div>
                    {/* <div>Count: {this.state.count}</div> */}
                    {/* <button
                        className='btn btn-info'
                        onClick={() => {
                            //We do not mutate state directly.
                            // this.state.count = 1; Never ever do this, this is bad exercise.
                            this.setState({
                                count: 1,
                            });
                        }}
                    >
                        Increase Count
                    </button> */}
                </div>
            </div>
        );
    }
}

export default Profile;

/*** This will be order of DOM render and commit sequence if multiple chidler present.
Console was cleared
  Parent Constructor
  Parent Render
    First Child Constructor
    First Child render
    Second Child Constructor
    Second Child render
      First Child ComponentDidMount
      Second Child ComponentDidMount
Parent ComponentDidMount
***/

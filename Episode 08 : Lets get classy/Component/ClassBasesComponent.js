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
            <div className='container inline-item padding-20'>
                <div>
                    <img src={this.state?.userInfo?.avatar_url} />
                </div>
                <div className="border-left">
                    <h5 className='mb-2'> {" "}
                        User: {this.state?.userInfo?.name}
                    </h5>
                    <div className='mt-2'>{this.state?.userInfo?.location}</div>
                    <div>GitHub Repo: {this.state?.userInfo?.public_repos}</div>
                </div>
            </div >
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

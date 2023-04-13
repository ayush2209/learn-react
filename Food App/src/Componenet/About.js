// import {Outlet} from "react-router-dom";
import Profile from "../../../Episode 08 : Lets get classy/Component/ClassBasesComponent";

import React from "react";

// const About = () => {
//     return (
//         <div>
//             {/* <Outlet /> */}
//             This is About Page.
//             <Profile name={"Ayush"} />
//         </div>
//     );
// };

class AboutClassBasedComponent extends React.Component {
    constructor(props) {
        super(props);
        console.log("Parent Constructor");
    }
    componentDidMount() {
        console.log("Parent ComponentDidMount");
    }
    render() {
        console.log("Parent Render");
        return (
            <div>
                <div></div>
                <Profile name={"Child"} />
                {/* <Profile name={"Second Child"} /> */}
            </div>
        );
    }
}

export default AboutClassBasedComponent;

import Breadcrumb from "react-bootstrap/Breadcrumb";
import {Link} from "react-router-dom";

const BreadcrumbComponent = () => {
    return (
        <Breadcrumb>
            <Breadcrumb.Item linkAs={Link} linkProps={{to: "/"}}>
                Home
            </Breadcrumb.Item>
            <Breadcrumb.Item href='https://getbootstrap.com/docs/4.0/components/breadcrumb/'>
                Library
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Data</Breadcrumb.Item>
        </Breadcrumb>
    );
};

export default BreadcrumbComponent;

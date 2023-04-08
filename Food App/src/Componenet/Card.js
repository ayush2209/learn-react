import Card from "react-bootstrap/Card";
const BootstrapCard = ({content}) => {
    return (
        <>
            <Card>
                <Card.Body> {content}</Card.Body>
            </Card>
        </>
    );
};

export default BootstrapCard;

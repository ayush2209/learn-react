import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const RestaurantDetails = () => {
    const {id} = useParams();
    const [restaurantDetails, setRestaurantDetails] = useState([]);

    useEffect(() => {
        getRestaurantsDetails();
    }, []);

    async function getRestaurantsDetails() {
        const resApiDetails = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.958484499063424&lng=77.69974518567324&restaurantId=221738"
        );
        const jsonData = await resApiDetails.json();
        const restaurant_Details = jsonData.data.cards[0].card.card.info;
        setRestaurantDetails(restaurant_Details);
        console.log(restaurant_Details);
    }

    return (
        <>
            <Container>
                <Row className='color mt-3'>
                    <Col>
                        <h4>BreadCrum under construction</h4>
                    </Col>
                </Row>
                <Row className=''>
                    <Col sm={8}>
                        <h5>{restaurantDetails?.name}</h5>
                        <p className='restaurant-Name-Add'>
                            {restaurantDetails?.cuisines?.join(" , ")}{" "}
                        </p>
                        <div className='restaurant-Name-Add'>KM</div>
                    </Col>
                    <Col sm={4} className='rating-card'>
                        <div></div>
                    </Col>
                </Row>
                <Row className='color mt-3'>
                    <Col>1 of 1</Col>
                </Row>
                <hr />
                <Row className='color' xs={2} md={4} lg={6}>
                    <Col>Bike Logo</Col>
                    <Col>Cost for 2</Col>
                </Row>
                <Row>
                    <Col sm>Offer 1 will be card</Col>
                    <Col sm>Offer 2</Col>
                    <Col sm>Offer 3</Col>
                </Row>
            </Container>
            {/* <div className='conatiner'>Restaurants Name: 'Food Wala' {id}</div> */}
        </>
    );
};
export default RestaurantDetails;

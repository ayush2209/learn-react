import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import Container from "react-bootstrap/Container";
import {RESTAURANT_DETAILS_API, RES_IMG_URL} from "../utils/constant";

import BreadcrumbComponent from "./BreadCrum";
import BootstrapCard from "./Card";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";

const Ratingcard = ({eachObj}) => {
    return (
        <Card className='res_details_rating'>
            <div
                className={
                    eachObj?.avgRating >= 4 ? "avg_icon_good" : "avg_icon_bad"
                }
            >
                <span className='item-center'>
                    <span>
                        <i className='fa fa-solid fa-star'></i>
                    </span>
                    <span className='ms-3'> {eachObj?.avgRating}</span>
                </span>
                <hr style={{margin: "5px"}} />
                <div
                    className='item-center restaurantRatings_totalRatings'
                >
                    {eachObj?.totalRatingsString}
                </div>
            </div>
        </Card>
    );
};

const RestaurantDetails = () => {
    const {id} = useParams();
    const [restaurantDetails, setRestaurantDetails] = useState([]);
    const [restaurantMenu, setRestaurantMenu] = useState([]);

    useEffect(() => {
        getRestaurantsDetails();
    }, []);

    async function getRestaurantsDetails() {
        const resApiDetails = await fetch(RESTAURANT_DETAILS_API);
        const jsonData = await resApiDetails.json();
        const restaurant_Details = jsonData?.data?.cards[0]?.card?.card?.info;
        const restaurant_Menu =
            jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
        setRestaurantDetails(restaurant_Details);
        setRestaurantMenu(restaurant_Menu);
    }

    return (
        <div>
            <Container>
                <Row className='mt-3 mb-3'>
                    <Col>
                        <BreadcrumbComponent />
                    </Col>
                </Row>
                <Row className=''>
                    <Col className=''>
                        <div className='restaurantNameStyle'>
                            {restaurantDetails?.name}
                        </div>
                        <p className='restaurant-Name-Add'>
                            {restaurantDetails?.cuisines?.join(" , ")}{" "}
                        </p>
                        <div className='restaurant-Name-Add'>
                            {restaurantDetails?.areaName}
                        </div>
                    </Col>
                    <Col
                        className=''
                        style={{justifyContent: "end", display: "flex"}}
                    >
                        <Ratingcard eachObj={restaurantDetails} />
                    </Col>
                </Row>
                <Row className='mt-3'>
                    <Col>
                        {" "}
                        <p>{restaurantDetails?.feeDetails?.message}</p>{" "}
                    </Col>
                </Row>
                <hr />
                <div className='inline-item RestaurantTimeCost'>
                    <p> 26 Minutes</p>
                    <p style={{marginLeft: "5px"}}>
                        {"   |  "}
                        {restaurantDetails.costForTwoMessage}
                    </p>
                </div>
                <div className='inline-item'>
                    <div>
                        <BootstrapCard content={"Card 1"} />
                    </div>
                    <div>
                        {" "}
                        <BootstrapCard content={"Card 2"} />
                    </div>
                    <div>
                        {" "}
                        <BootstrapCard content={"Card 3"} />
                    </div>
                    <div>
                        {" "}
                        <BootstrapCard content={"Card 4"} />
                    </div>
                </div>
                <div>
                    <Form className='inline-item vegOnly'>
                        <span>Veg Only</span>{" "}
                        <span className='ms-3'>
                            {" "}
                            <Form.Check type='switch' id='custom-switch' />
                        </span>
                    </Form>
                </div>
                <hr />
                <div className='menu-items-list'>
                    {restaurantMenu?.map((item, index) =>
                        item?.card?.card?.title?.length > 0 ? (
                            <div key={index}>
                                <div className='recommended'>
                                    {item?.card?.card?.title}({" "}
                                    {item?.card?.card?.itemCards.length} )
                                </div>

                                {item?.card?.card?.itemCards.map((eachItem) => (
                                    <BootstrapCard
                                        key={eachItem?.card?.info?.id}
                                        content={
                                            <div className='menu_Reataurant_Align'>
                                                <span>
                                                    <span>
                                                        {eachItem?.card?.info
                                                            ?.isVeg ? (
                                                            <span className='vej_Item'>
                                                                Vej
                                                            </span>
                                                        ) : (
                                                            <span className='nonVej_Item'>
                                                                Nonvej
                                                            </span>
                                                        )}
                                                    </span>
                                                    <h3 className='mt-2 styles_itemNameText'>
                                                        {" "}
                                                        {
                                                            eachItem?.card?.info
                                                                ?.name
                                                        }
                                                    </h3>
                                                    <span>
                                                        {eachItem?.card?.info
                                                            ?.price > 0
                                                            ? new Intl.NumberFormat(
                                                                  "en-IN",
                                                                  {
                                                                      style: "currency",
                                                                      currency:
                                                                          "INR",
                                                                  }
                                                              ).format(
                                                                  eachItem?.card
                                                                      ?.info
                                                                      ?.price /
                                                                      100
                                                              )
                                                            : " "}
                                                    </span>
                                                </span>
                                                <div className='menu-img-wrapper'>
                                                    {(
                                                        <img
                                                            className='menu-Img'
                                                            src={
                                                                RES_IMG_URL +
                                                                eachItem?.card
                                                                    ?.info
                                                                    ?.imageId
                                                            }
                                                            alt={
                                                                eachItem?.card
                                                                    ?.info?.name
                                                            }
                                                        />
                                                    )}
                                                    <button className='add-btn'>
                                                        {" "}
                                                        ADD +
                                                    </button>
                                                </div>
                                            </div>
                                        }
                                    />
                                ))}

                                <hr />
                            </div>
                        ) : (
                            " "
                        )
                    )}
                </div>
            </Container>
        </div>
    );
};
export default RestaurantDetails;

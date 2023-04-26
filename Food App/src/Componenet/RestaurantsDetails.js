import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import Container from "react-bootstrap/Container";
import {RESTAURANT_DETAILS_API, RES_IMG_URL} from "../utils/constant";

import BreadcrumbComponent from "./BreadCrum";
import BootstrapCard from "./Card";
import Accordion from "react-bootstrap/Accordion";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";

const Ratingcard = ({eachObj}) => {
  return (
    <Card className='res_details_rating'>
      <div
        className={eachObj?.avgRating >= 4 ? "avg_icon_good" : "avg_icon_bad"}
      >
        <div className='item-center'>
          <div>
            <i className='fa fa-solid fa-star'></i>
          </div>
          <div className='ms-3'> {eachObj?.avgRating}</div>
        </div>
        <hr style={{margin: "5px"}} />
        <div className='item-center restaurantRatings_totalRatings'>
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
    const resApiDetails = await fetch(RESTAURANT_DETAILS_API + id);
    const jsonData = await resApiDetails?.json();
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
            <div className='restaurantNameStyle'>{restaurantDetails?.name}</div>
            <p className='restaurant-Name-Add'>
              {restaurantDetails?.cuisines?.join(" , ")}{" "}
            </p>
            <div className='restaurant-Name-Add'>
              {restaurantDetails?.areaName}
            </div>
          </Col>
          <Col className='' style={{justifyContent: "end", display: "flex"}}>
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
            {restaurantDetails?.costForTwoMessage}
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
            <div>Veg Only</div>{" "}
            <div className='ms-3'>
              {" "}
              <Form.Check type='switch' id='custom-switch' />
            </div>
          </Form>
        </div>
        <hr />
        <div className='menu-items-list'>
          {restaurantMenu?.map((item, index) =>
            item?.card?.card?.title?.length > 0 ? (
              <>
                <Accordion defaultActiveKey={["0"]} alwaysOpen>
                  <Accordion.Item eventKey='0' key={index}>
                    <Accordion.Header>
                      <div className='recommended'>
                        {item?.card?.card?.title}{" "}
                        {item?.card?.card?.itemCards
                          ? item?.card?.card?.itemCards?.length
                          : ""}
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      {item?.card?.card?.itemCards
                        ? item?.card?.card?.itemCards?.map((eachItem) => (
                            <BootstrapCard
                              key={eachItem?.card?.info?.id}
                              content={
                                <div className='menu_Reataurant_Align'>
                                  <div>
                                    <div>
                                      {eachItem?.card?.info?.isVeg ? (
                                        <div className='vej_Item'>Vej</div>
                                      ) : (
                                        <div className='nonVej_Item'>
                                          Nonvej
                                        </div>
                                      )}
                                    </div>
                                    <h3 className='mt-2 styles_itemNameText'>
                                      {" "}
                                      {eachItem?.card?.info?.name}
                                    </h3>
                                    <div>
                                      {eachItem?.card?.info?.price > 0
                                        ? new Intl.NumberFormat("en-IN", {
                                            style: "currency",
                                            currency: "INR",
                                          }).format(
                                            eachItem?.card?.info?.price / 100
                                          )
                                        : " "}
                                    </div>
                                    <div className='menu-description'>
                                      {eachItem?.card?.info?.description}
                                    </div>
                                  </div>
                                  <div className='menu-img-wrapper'>
                                    {
                                      <img
                                        className='menu-Img'
                                        src={
                                          RES_IMG_URL +
                                          eachItem?.card?.info?.imageId
                                        }
                                        alt={eachItem?.card?.info?.name}
                                      />
                                    }
                                    <button className='add-btn'> ADD +</button>
                                  </div>
                                </div>
                              }
                            />
                          ))
                        : item?.card?.card?.categories?.map(
                            (eachItem, index) =>
                              console.log("ayush", eachItem) || (
                                <div key={index}>
                                  <div className='submenu'>
                                    {eachItem.title} ({" "}
                                    {eachItem?.itemCards?.length} )
                                  </div>
                                  <div className='categoriesListCard'>
                                    {eachItem?.itemCards?.map(
                                      (catogaryMenuList) => (
                                        <BootstrapCard
                                          key={catogaryMenuList?.card?.info?.id}
                                          content={
                                            <div className='menu_Reataurant_Align'>
                                              <div>
                                                <div>
                                                  {catogaryMenuList?.card?.info
                                                    ?.isVeg ? (
                                                    <div className='vej_Item'>
                                                      {" "}
                                                      Vej{" "}
                                                    </div>
                                                  ) : (
                                                    <div className='nonVej_Item'>
                                                      Nonvej
                                                    </div>
                                                  )}
                                                </div>
                                                <h3 className='mt-2 styles_itemNameText'>
                                                  {" "}
                                                  {
                                                    catogaryMenuList?.card?.info
                                                      ?.name
                                                  }
                                                </h3>
                                                <div>
                                                  {catogaryMenuList?.card?.info
                                                    ?.price > 0
                                                    ? new Intl.NumberFormat(
                                                        "en-IN",
                                                        {
                                                          style: "currency",
                                                          currency: "INR",
                                                        }
                                                      ).format(
                                                        catogaryMenuList?.card
                                                          ?.info?.price / 100
                                                      )
                                                    : " "}
                                                </div>
                                                <div className='menu-description'>
                                                  { catogaryMenuList?.card?.info?.description }
                                                </div>
                                              </div>
                                              <div className='menu-img-wrapper'>
                                                {
                                                  <img
                                                    className='menu-Img'
                                                    src={
                                                      RES_IMG_URL +
                                                      catogaryMenuList?.card
                                                        ?.info?.imageId
                                                    }
                                                    alt={
                                                      catogaryMenuList?.card
                                                        ?.info?.name
                                                    }
                                                  />
                                                }
                                                <button className='add-btn'>
                                                  {" "}
                                                  ADD +
                                                </button>
                                              </div>
                                            </div>
                                          }
                                        />
                                      )
                                    )}
                                  </div>
                                </div>
                              )
                          )}
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <hr />
              </>
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

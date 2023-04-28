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
      <span className={eachObj?.avgRating >= 4 ? "avg_icon_good" : "avg_icon_bad"} >
        <span className='item-center'>
          <div>
            <i className='fa fa-solid fa-star'></i>
          </div>
          <div className='ms-2'>{eachObj?.avgRating}</div>
        </span>
      </span>
      <div className='item-center restaurantRatings_totalRatings'>
          {eachObj?.totalRatingsString}
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
    console.log(restaurantDetails);
    setRestaurantMenu(restaurant_Menu);
  }

  return (
    <Container>
      <Row className='mt-3 mb-3'>
        <Col>
          <BreadcrumbComponent />
        </Col>
      </Row>
      <Row className=''>
        <Col className=''>
          <div className='restaurantNameStyle'>{restaurantDetails?.name} </div>
          <p className='restaurant-Name-Add'> {restaurantDetails?.cuisines?.join(" , ")} </p>
          <div className='restaurant-Name-Add'>{restaurantDetails?.areaName} </div>
        </Col>
        <Col className='' style={{justifyContent: "end", display: "flex"}}>
          <Ratingcard eachObj={restaurantDetails} />
        </Col>
      </Row>
      <Row className='mt-3'>
        <Col>
          <p className='restaurant-Name-Add'> {restaurantDetails?.feeDetails?.message} </p>
        </Col>
      </Row>
      <hr className='new' />
      <div className='inline-item RestaurantTimeCost'>
        <p> 26 Minutes</p>
        {"  | "}
        <p style={{marginLeft: "5px"}}> {restaurantDetails?.costForTwoMessage} </p>
      </div>
      <div className='inline-item'>
        <div>
          <BootstrapCard content={"Card 1"} />
        </div>
        <div>
          <BootstrapCard content={"Card 2"} />
        </div>
        <div>
          <BootstrapCard content={"Card 3"} />
        </div>
        <div>
          <BootstrapCard content={"Card 4"} />
        </div>
      </div>
      <div>
        {restaurantDetails?.veg ? (
          <div className='pureVeg' style={{gap:'5px'}}>
            <span>
              <i class="fa fa-sharp fa-light fa-leaf" style={{color:'#65931f'}}></i>
            </span>
            <span>Pure Veg</span>
          </div>
        ) : (
          <Form className='inline-item vegOnly' style={{gap:'0px'}}>
            <div>Veg Only</div>{" "}
            <div className='ms-3'>
              <Form.Check type='switch' id='custom-switch' />
            </div>
          </Form>
        )}
      </div>
      <hr className='new' />
      <div className='menu-items-list'>
        {restaurantMenu?.map((item, index) =>
          item?.card?.card?.title?.length > 0 ? (
            <>
              <Accordion defaultActiveKey={["0"]} alwaysOpen>
                <Accordion.Item eventKey='0' key={index}>
                  <Accordion.Header>
                    <div className='recommended'>
                      {item?.card?.card?.title}{" "}
                      {item?.card?.card?.itemCards ? item?.card?.card?.itemCards?.length : ""}
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    {item?.card?.card?.itemCards ? item?.card?.card?.itemCards?.map((eachItem) => (
                      <BootstrapCard key={eachItem?.card?.info?.id} content={
                        <div className='menu_Reataurant_Align'>
                            <div>
                              <div> {eachItem?.card?.info?.isVeg ?
                                  ( <div className='vej_Item'>Vej</div> ) :
                                  ( <div className='nonVej_Item'>Nonvej</div> )
                              }
                              </div>
                              <h3 className='mt-2 styles_itemNameText'>  {eachItem?.card?.info?.name} </h3>
                              <div className="price-Font"> {eachItem?.card?.info?.price > 0 ?
                                new Intl.NumberFormat("en-IN", {style: "currency",currency: "INR", }).format( eachItem?.card?.info?.price / 100 ) : " "}
                              </div>
                            </div>
                            <div className='menu-img-wrapper'>
                              { <img className='menu-Img' src={ RES_IMG_URL + eachItem?.card?.info?.imageId } alt={eachItem?.card?.info?.name} /> }
                                <div className="item-center">
                                  <button className="btn btn-sm btn-outline-primary"> Add to cart </button>
                                </div>
                            </div>
                        </div>
                      } />
                      )) : item?.card?.card?.categories?.map((eachItem, index) => (
                        <div key={index}>
                          <div className='submenu'> {eachItem.title} ( {eachItem?.itemCards?.length} ) </div>
                            <div className='categoriesListCard'> {eachItem?.itemCards?.map((catogaryMenuList) => (
                              <BootstrapCard key={catogaryMenuList?.card?.info?.id} content= {
                                <div className='menu_Reataurant_Align'>
                                  <div>
                                    <div> {catogaryMenuList?.card?.info ?.isVeg ? (
                                      <div className='vej_Item'> Vej </div>
                                        ) : (
                                          <div className='nonVej_Item'> Nonvej </div>
                                        )}
                                      </div>
                                      <h3 className='mt-2 styles_itemNameText'> {catogaryMenuList?.card?.info?.name} </h3>
                                      <div> {catogaryMenuList?.card?.info?.price > 0 ? new Intl.NumberFormat("en-IN", {style: "currency", currency: "INR",
                                              }).format(catogaryMenuList?.card?.info?.price / 100) : " "}
                                      </div>
                                      </div>
                                      <div className='menu-img-wrapper'>
                                        {
                                          <img
                                            className='menu-Img'
                                            src={
                                              RES_IMG_URL +
                                              catogaryMenuList?.card?.info
                                                ?.imageId
                                            }
                                            alt={
                                              catogaryMenuList?.card?.info?.name
                                            }
                                          />
                                        }
                                        <button >
                                          {" "}
                                        Add to cart
                                        </button>
                                      </div>
                                    </div>
                                  }
                                />
                              ))}
                            </div>
                        </div>
                        ))}
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
  );
};
export default RestaurantDetails;

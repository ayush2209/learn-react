import {useEffect, useState} from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import RestaurantCardComponent from "./RestaurantComponent";
import Shimmer from "./ShimmerUI";

import restaurantList from "../utils/mockData";
import {RESTAURANT_LIST_API} from "../utils/constant";
import {Link} from "react-router-dom";

// const SearchInput = ({ resList }) => {
//     return (
//         <div className='searchBar'>
//             <div></div>
//             <div>
//                 <input type='text' placeholder='Search Item ' />
//                 <button
//                     onClick={() => {
//                         const filtered_Res_list = restaurant_List.filter(
//                             (eachItem) => eachItem.data.avgRating > 4
//                         );
//                         set_res_list(filtered_Res_list);
//                     }}
//                 >
//                     <i className='fa fa-duotone fa-magnifying-glass'></i>
//                 </button>
//             </div>
//         </div>
//     );
// };

function filterRestaurant(textToFilter, resList) {
    return resList.filter((eachItem) =>
        eachItem.data.name.toLowerCase().includes(textToFilter)
    );
}

export const Body = () => {
    const [searchText, setSearch] = useState("");
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    {
        /*
        useEffect is a react Hook
        we need to call this and it taked one function as an argumenet, which is a callback function.
        [] -> Is known a dependency array for useEffect.
        If we provide any veribale in this array,
        it means this useEffect is dependent on that variable state and will on every state chabge for the variable.
        There are two condition when useEffect calls,
            1> On Load
            2> On State chnages
        There are two thing where useEffect call based on Dependency Array.
            1>If array is empty => Once after render
            2>If dependency array has any variable like [searchText] , then
                it'll call Once after render + each time when searchText updates.

    */
    }

    useEffect(() => {
        // console.log("Use Effect called");
        // API Call.
        fetchRestaurantsList();
    }, []);

    console.log(useState()); // Will throw an error.
    console.log("render()"); // It'll render when the State will change.

    async function fetchRestaurantsList() {
        const data = await fetch(RESTAURANT_LIST_API);
        const json = await data.json();
        console.log("Fetch Res: ", json);
        setFilteredRestaurants(json?.data?.cards[2]?.data.data.cards);
        setAllRestaurants(json?.data?.cards[2]?.data.data.cards);
    }

    return allRestaurants.length === 0 ? (
        <Shimmer />
    ) : (
        <>
            {/* <SearchInput resList={restaurant_List} />{" "} */}
            {/* Passing the value from here to search component to filter the data. */}

            <div className='searchBar'>
                <div>List Will Come</div>
                <div>
                    <Form className='d-flex'>
                        <Form.Control
                            type='search'
                            placeholder='Search Restaurant'
                            className='me-2'
                            aria-label='Search'
                            value={searchText}
                            onChange={(e) => {
                                setSearch(e.target.value);
                            }}
                        />
                        <Button
                            variant='outline-success'
                            onClick={() => {
                                // const filtered_Res_list = res_List.filter(
                                //     (eachItem) => eachItem.data.avgRating >= 4
                                // );
                                // set_res_list(filtered_Res_list);
                                // Update the UI based on Search.
                                // Pass Two arguement one what to search and seconf from where we need to search.
                                const data = filterRestaurant(
                                    searchText.toLowerCase(),
                                    allRestaurants
                                );
                                // Update the list.
                                setFilteredRestaurants(data);
                            }}
                        >
                            <i className='fa fa-duotone fa-magnifying-glass'></i>
                        </Button>
                    </Form>
                </div>
            </div>

            <div className='restaurant-list'>
                {filteredRestaurants?.map((eachRes) => {
                    return (
                        <Link
                            style={{textDecoration: "none", color: "#282c3f"}}
                            to={"/restaurant/" + eachRes.data.id}
                            key={eachRes.data.id}
                        >
                            <RestaurantCardComponent resObj={eachRes} />
                        </Link>
                    );
                })}
            </div>
        </>
    );
};

export default Body;

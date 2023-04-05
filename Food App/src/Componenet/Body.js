import { useEffect, useState } from "react";

import RestaurantCardComponent from "./RestaurantComponent";
import Shimmer from "./ShimmerUI";

import restaurantList from "../utils/mockData";

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
        eachItem.data.name.includes(textToFilter)
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

    console.log("render()"); // It'll render when the State will change.

    async function fetchRestaurantsList() {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&page_type=DESKTOP_WEB_LISTING"
        );
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
                <div></div>
                <div>
                    <input
                        type='text'
                        placeholder='Search Restaurant'
                        value={searchText}
                        onChange={(e) => {
                            setSearch(e.target.value);
                        }}
                    />
                    <button
                        onClick={() => {
                            // const filtered_Res_list = res_List.filter(
                            //     (eachItem) => eachItem.data.avgRating >= 4
                            // );
                            // set_res_list(filtered_Res_list);
                            // Update the UI based on Search.
                            // Pass Two arguement one what to search and seconf from where we need to search.
                            const data = filterRestaurant(
                                searchText,
                                allRestaurants
                            );
                            // Update the list.
                            setFilteredRestaurants(data);
                        }}
                    >
                        <i className='fa fa-duotone fa-magnifying-glass'></i>
                    </button>
                </div>
            </div>

            <div className='restaurant-list'>
                {filteredRestaurants?.map((eachRes) => {
                    return (
                        <RestaurantCardComponent
                            key={eachRes.data.id}
                            resObj={eachRes}
                        />
                    );
                })}
            </div>
        </>
    );
};

export default Body;

import { useState } from "react";

import RestaurantCardComponent from "./RestaurantComponent";
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
    return restaurantList.filter((eachItem) =>
        eachItem.data.name.includes(textToFilter)
    );
}

export const Body = () => {
    const [searchText, setSearch] = useState("");
    const [res_List, set_res_list] = useState(restaurantList);

    return (
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
                            // Update the UI based on Search
                            const data = filterRestaurant(searchText, res_List); // Pass Two arguement one what to search and seconf from where we need to search.
                            // Update the list.
                            set_res_list(data);
                        }}
                    >
                        <i className='fa fa-duotone fa-magnifying-glass'></i>
                    </button>
                </div>
            </div>

            <div className='restaurant-list'>
                {res_List.map((eachRes) => {
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

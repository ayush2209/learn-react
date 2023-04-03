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

export const Body = () => {
    const [res_List, set_res_list] = useState(restaurantList);

    return (
        <>
            {/* <SearchInput resList={restaurant_List} />{" "} */}
            {/* Passing the value from here to search component to filter the data. */}

            <div className='searchBar'>
                <div></div>
                <div>
                    <input type='text' placeholder='Search Item ' />
                    <button
                        onClick={() => {
                            const filtered_Res_list = res_List.filter(
                                (eachItem) => eachItem.data.avgRating >= 4
                            );
                            set_res_list(filtered_Res_list);
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

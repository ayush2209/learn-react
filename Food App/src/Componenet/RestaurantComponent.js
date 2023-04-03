import { RES_IMG_URL } from "../utils/constant";

const color = {
    color: "#db7c38",
};

const RestaurantCardComponent = ({ resObj }) => {
    const {
        cloudinaryImageId,
        name,
        cuisines,
        area,
        avgRating,
        lastMileTravelString,
        costForTwoString,
    } = resObj.data;
    return (
        <div className='card'>
            <img src={RES_IMG_URL + cloudinaryImageId} />
            <h4>{name}</h4>
            <p>{cuisines.join(", ")}</p>
            <p>{area}</p>
            <hr />
            <span>
                <p style={color}>
                    <i className='fa-solid fa-star'></i> {avgRating}
                </p>
                <p>| </p>
                <p>{lastMileTravelString}</p>
                <p>| </p>
                <p>{costForTwoString}</p>
            </span>
        </div>
    );
};

export default RestaurantCardComponent;

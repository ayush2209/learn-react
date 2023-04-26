import {RES_IMG_URL} from "../utils/constant";

const color = {
    color: "#db7c38",
};

const customStyle = {
    justifyContent: "space-between",
    marginTop: "10px",
};

const fontSize = {
    fontSize: "13px",
    fontWeight: "550",
    wordBreak: "break-word",
};

const RestaurantCardComponent = ({resObj}) => {
    const {
        cloudinaryImageId,
        name,
        cuisines,
        area,
        avgRating,
        lastMileTravelString,
        costForTwoString,
        promoted,
    } = resObj.data;
    return (
        <div className='card flex-fill'>
            <img src={RES_IMG_URL + cloudinaryImageId} />
            {promoted ? (
                <div className='res-type-conatiner'>
                    <div className='restype-txt'>Promoted</div>
                </div>
            ) : (
                <div></div>
            )}
            <span style={customStyle}>
                <div style={fontSize}>{name}</div>
                <div>
                    {resObj.data.veg ? (
                        <span className='vej_Item'>Vej</span>
                    ) : (
                        <span className='nonVej_Item'>Nonvej</span>
                    )}
                </div>
            </span>
            <div className='cuisinedStyle'>{cuisines.join(", ")}</div>
            {/* <p>{area}</p> */}
            <hr />
            <span>
                <p style={color}>
                    <i className='fa-solid fa-star'></i>
                    {avgRating}
                </p>
                <p> | </p>
                <p>{lastMileTravelString}</p>
                <p>| </p>
                <p>{costForTwoString}</p>
            </span>
        </div>
    );
};

export default RestaurantCardComponent;

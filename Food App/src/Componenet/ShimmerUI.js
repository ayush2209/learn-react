// import {shimmer_card_unit} from "../constants";
const shimmer_Count = 30;
const customStyle = {
    justifyContent: "space-between",
};
// Shimmer card to display with animation
const ShimmerCardToDisplay = () => {
    return (
        <div className="externalCard">
            <div className='card'>
                <img className='shimmer-img stroke animate' />
                <span className='mt-3' style={customStyle}>
                    <h5 className='shimmer-title stroke animate'></h5>
                    <p className='shimmer-verg-nonvej stroke animate'></p>
                </span>
                <p className='shimmer-area stroke animate'></p>
                <p className='shimmer-area stroke animate'></p>
                <hr />
                <span>
                    <p className='shimmer-card-bottom stroke animate'></p> |
                    <p className='shimmer-card-bottom stroke animate'></p> |
                    <p className='shimmer-card-bottom stroke animate'></p>
                </span>
            </div>
        </div>
    );
};

const Shimmer = () => {
    return (
        <div className='shimmer-container'>
            {new Array(shimmer_Count).fill(0).map((element, index) => {
                return <ShimmerCardToDisplay key={index} />;
            })}
        </div>
    );
};
export default Shimmer;

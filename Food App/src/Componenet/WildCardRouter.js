import {useRouteError} from "react-router-dom";

const WildCardRouter = () => {
    const useErrorDetails = useRouteError();
    console.log(useErrorDetails);
    return (
        <>
            <div> Status Code: {useErrorDetails.status}</div>
            <div>
                Error Message:{" "}
                <span className='not-rendered'> {useErrorDetails.data}</span>{" "}
            </div>
        </>
    );
};

export default WildCardRouter;

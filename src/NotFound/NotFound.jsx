import { Link } from "react-router-dom";


const NotFound = () => {
    return (
        <div className="text-center mt-5">
            <h1>This page is Blank.</h1>
            <p>You want to go home <span className="btn btn-link"><Link to="/">click here</Link></span></p>

        </div>
    );
};

export default NotFound;
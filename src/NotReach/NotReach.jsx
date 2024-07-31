import { Link } from "react-router-dom";


const NotReach = () => {
    return (
        <div>
            <h1>You can not enter this page <br/> without <span className="btn btn-link"> <Link to="/register"> register</Link></span>  or <span className="btn btn-link"> <Link to="/logIn">sign in</Link></span> </h1>
            <p>you want to go back  <span className="btn btn-link"><Link to="/">click here</Link></span></p>
        </div>
    );
};

export default NotReach;
import Banner from "../Page/Banner";
import Footer from "../Share/Footer";
import Navber from "../Share/Navber";


const Root = () => {
    return (
        <div className="mx-3">
            <Navber></Navber>
            <Banner></Banner>
            <Footer></Footer>
        </div>
    );
};

export default Root;
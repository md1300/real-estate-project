import { useState } from "react";
import Card from "../Card/Card";
import EstateData from "../estateData/EstateData";
import Banner from "../Page/Banner";
import Footer from "../Share/Footer";
import Navber from "../Share/Navber";


const Root = () => {

    return (
        <div className="mx-3">
            
            <Navber></Navber>
            <Banner ></Banner>
            <Card></Card>
            <EstateData></EstateData>
            <Footer></Footer>    
        </div>
    );
};

export default Root;
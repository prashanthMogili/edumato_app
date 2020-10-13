import React from "react";
import Search from "./Search";
import QuickSearchApi from "./QuickSearchApi";
import Footer from "../Footer";


const Home = (props) => {

    const handleRest = (data) => {
        props.history.push(`/rest/${data}`)
    }

    return (
        <div>
            <Search restId={(data) => {handleRest(data)}}/>
            <QuickSearchApi />
            <Footer/>
        </div>
    )
}


export default Home;
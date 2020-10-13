import React from "react";
import "./QuickSearch.css";
import {Link} from "react-router-dom";

const QuickSearch = (props) => {

    const listMeals = ({mealData}) => {
        if(mealData){
            return mealData.map((item) => {
                return(
                    <Link to = {`/list/${item.mealtype}`}>
                        <div className="container quicksearch-container ml-lg">
                            <div className="col-12 col-sm-5 ml-sm-5 col-md-5 ml-md-5 col-lg-3 ml-lg-0 pl-sm-0 col-xl-3 ml-xl-5 product">
                                <div className="row">
                                <div className="col-sm-7 img-box">
                                <img src={`${item.url}`} alt="breakfast" border="0"/>
                                </div>
                                    <div className="col-sm-5 pl-0">
                                        <h3 className="componentHeading">
                                            {item.name}
                                        </h3>
                                        <p className="componentSubHeading">
                                            {item.message}
                                            <p>Start your day with exclusive  options</p>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                )
            })
        }
    }

    return (
        <React.Fragment>
        <div className="container search-box">
            <div className="row">
                <div className="col-md-12">
                    <h2 className="componentHeading">Quick Searches</h2>
                    <p className="componentSubHeading1">Discover restaurants by type of meal</p>
                </div>
            </div>
        </div> 
        {/* <div className="container quicksearch-container ml-lg">              */}
        {/* <div className="row"> */}
            {listMeals(props)}
        {/* </div> */}
        {/* </div> */}
        
        <div className="empty-container">
        </div>
        </React.Fragment> 
    );
}

export default QuickSearch;

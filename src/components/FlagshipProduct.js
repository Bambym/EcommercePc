import React from "react";
import react from "react";
import { Fragment } from "react/cjs/react.production.min";
import pc from'../img/pc.jpg' 



class FlagshipProduct extends React.Component{


    render(){

        return(
            <Fragment >
                <div className="card" style={{width: '40rem',}}>
                    <img src={pc} className="card-img-top" alt="image pc"/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </Fragment>    
                
            
        )
    }
    
    
}
export default FlagshipProduct
import { data } from "jquery";
import React from "react";
import pc from'../img/pc.jpg';
import {productsData} from './ecommerceData'
import PageBoutique from "./PageBoutique";
class Product extends React.Component{

    constructor(props){
        super(props)
        
       
    }
    
   
    render(){
        console.log(this.props.data)
        return(
            <div>
                <div className="card" style={{width: '18rem',}}>
                    <img src={pc} className="card-img-top" alt="image pc"/>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.data.ProductName}</h5>
                        <p className="card-text">Note : {this.props.data.productNote}/10</p>
                        <a href="#" className="btn btn-primary">Add To Panier</a>
                        
                    </div>
                </div>
                
                
            </div>
              
        )
    }
}
export default Product
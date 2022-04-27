import React from "react";
import {productsData} from './ecommerceData'
import MenuHeader from "./header/MenuHeader";
import '../css/page.css'
import pc from '../img/pc.jpg'
import Footer from "./Footer";
import sortAsc from '../img/caretUp.svg'
import sortDesc from '../img/caretDown.svg' 

class PageBoutique extends React.Component{

    constructor(props){
        super(props)
        this.state={
            listOfProducts: productsData,
            sortedBy:'productNote',
            orderedBy:'desc'

        }
        this.handleClick=this.handleClick.bind(this)
        // this.sortProductsBy=this.sortProductsBy.bind(this)
    }
     
    handleClick (event){
        console.log(event.target.id)

        let sortedBy=event.target.id
        console.log(sortedBy)
        let orderedBy = this.state.orderedBy=== 'desc' ? 'asc':'desc'
        // let newList=this.sortProductsBy(sortedBy,orderedBy)
        this.setState( 
            {
                sortedBy,
                orderedBy,
               
            } 
        ) 
        
        this.sortProductsBy(sortedBy,orderedBy)
    }
    sortProductsBy(key='productNote',order='desc'){

        let copyState = [...this.state.listOfProducts]
        copyState.sort((a, b)=>{
             if (a[key] < b[key]){
                 return order === 'desc' ? 1 : -1 
             } 
             if ( a[key] > b[key]){
                 return order ==="desc" ? -1: 1
             }
             return " 0"
             
 
        })
        this.setState ((prevState)=>({...prevState,listOfProducts:copyState})) 
    }
  
    
        
        
 
    
  
    
    render(){
        const setImageSort=(id)=>{
            let imageSRC= this.state.orderedBy==='desc' ? sortDesc : sortAsc
            return this.state.sortedBy === id && <img src= {imageSRC} alt='image sort'/> 
        }
        
      
        return(

            <div>
                 <MenuHeader />
               <table className='page'>
                    <thead>
                        <tr>
                            <th >
                               
                                
                            </th>
                            <th id='productName'>
                                Name
                                
                            </th>
                            <th id='productDescription'>Description</th>
                            <th id='productNote' onClick={this.handleClick}>
                                Note
                                <span>
                                    {
                                        setImageSort('productNote')
                                    }
                                      
                                </span>
                            </th>
                            <th id='productPrice' onClick={this.handleClick}>
                               Prix
                               <span>
                                    {
                                        setImageSort('productPrice')
                                    }
                                      
                                </span> 
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {   
                            this.state.listOfProducts.length > 0 &&  
                                
                         this.state.listOfProducts.map((produit,index)=>(
                             
                                <tr key={index}>
                                    <td><img src={pc} alt='pc'/></td>
                                    <td>
                                        {
                                           produit.ProductName
                                        }
                                    </td>
                                    <td >{produit.productDescription}</td>
                                     <td>
                                         {
                                             produit.productNote
                                         }
                                         </td>
                                     <td>{produit.productPrice}</td>
                                     <td>
                                         
                                    </td>

                                   
                                </tr>
                            ))
                        }
                    </tbody>

                </table>

            
                <Footer/>
                
            </div>

        )
    }
}

export default PageBoutique
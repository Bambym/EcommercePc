import React from "react";
import {productsData} from './ecommerceData'
import Product from './Product'
import FlagshipProduct from './FlagshipProduct'
import MenuHeader from "./header/MenuHeader";
import Footer from "./Footer"
import"../css/page.css"

class PageAccueil extends React.Component{

    constructor(props){
        super(props)

        // productsData.sort((prevNote, nextNote)=>(nextNote['productNote']-prevNote['productNote'] ))
        // productsData.slice(0,3)
        this.sortProductByNote=this.sortProductByNote.bind(this)
        this.state={
            listOfProducts:productsData,
            index:'',
            

        }
        


    }

        sortProductByNote=(Array)=>{
        let newArray = [...this.state.listOfProducts]
        newArray.sort((a, b)=>(b.productNote-a.productNote )) 
        
        return newArray
        console.log(newArray)
        }
        //this.setState ((prevState)=>({...prevState,listOfProducts:newArray}))

    // sortProductByNote(array){
    //     array.sort( (a,b) => b.productNote - a.productNote )
    // }
        // newArraySort = this.sortProductByNote(this.state.listOfProducts)
        
     
    render() {

       let arraySort=this.sortProductByNote(this.state.listOfProducts).slice(0,3)
     
       console.log(arraySort)
    
        return(
            <div className='page'>
                <MenuHeader/>
               
                <div id='product'>
                    <Product data={arraySort[0]}/>
                    <Product data={arraySort[1]}/>
                    <Product data={arraySort[2]}/>

                </div>
               
               <Footer/>
              
              



            </div>
        )
    }
       
    

}
export default PageAccueil
import'../css/styleFooterHeader.css';
import React, { Component } from "react"
import {Link} from 'react-router-dom'

class Footer extends Component{

    constructor(props) {
        super(props)

    }

    render(){

        return(
            <div>
                 {/* <img classNam="logo" src='../img/'/> */}
                <ul className='footer'>
                <li><Link to='/'> Accueil</Link></li>
                <li><Link to='/PageBoutique'> Boutique</Link></li>
                <li><Link to='/PagePanier'> Panier</Link></li>
                </ul>
        
            </div>
        )
    }
}

export default Footer
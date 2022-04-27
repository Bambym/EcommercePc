import Banner from '../../img/banner.png';
import'../../css/styleFooterHeader.css';
import LogoFuma from '../../img/logoFuma.svg'
import React, { Component } from "react"
import {Link} from 'react-router-dom'

class MenuHeader extends Component{

    constructor(props) {
        super(props)

    }

    render(){

        return(
            <div>
                 {/* <img classNam="logo" src='../img/'/> */}
                <ul className='menu-ul'>
                 <img classNam="logo-fuma" src={LogoFuma} width="25%"/>
                <li><Link to='/'> Accueil</Link></li>
                <li><Link to='/PageBoutique'> Boutique</Link></li>
                <li><Link to='/PagePanier'> Panier</Link></li>
                </ul>
            {/* <img classNam="banner" src={Banner} width="100%"/>  */}
        
            </div>
        )
    }
}

export default MenuHeader


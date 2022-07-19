import React, { Component } from 'react'
import {Home} from '../../../../Assets/Icon'
import {Down} from '../../../../Assets/Icon'
import {NaveBarstyled} from '../../../../styles/NaveBar.styled'

export default class Navbar extends Component {
  render() {
    return (
      <NaveBarstyled>
        
            <div><Home/></div>
            <div>Home page</div> /
            <div> ... </div> /
            <div>Dashboard<Down/></div> /
            <div>Products<Down/></div> /
            <div>Orders</div>
       
      </NaveBarstyled>
    ) 
  }
}

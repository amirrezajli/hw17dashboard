import React, { Component } from 'react'
import {OrdersStyled} from '../../../../styles/Orders.styled'



export default class Orders extends Component {
  render() {
    return (
      <OrdersStyled>
        <div>All orders <span>88</span></div>
        <div>Pickups<span>61</span></div>
        <div>Returns<span>27</span></div>
      </OrdersStyled>
    )
  }
}

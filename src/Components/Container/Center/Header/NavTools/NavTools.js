import React, { Component } from 'react'
import {NavToolsStyled} from '../../../../styles/NavTools.styled'
import {Plus} from '../../../../Assets/Icon'
import {Print} from '../../../../Assets/Icon'
import {Export} from '../../../../Assets/Icon'


export default class Navtools extends Component {
  render() {
    return (
      <NavToolsStyled>
        <div style={{fontSize:"40px",fontWeight:"bold"}}>Orders</div>
        <div>
          <div>Export<Export/></div>
          <div><Print/>Print</div>
          <div><Plus/>Create order</div>
        </div>
      </NavToolsStyled>
    )
  }
}

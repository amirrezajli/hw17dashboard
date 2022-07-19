import React, { Component } from 'react'
import Header from './Header/Header'
import Main from './Main/Main'
import {CentersStyled} from '../../styles/Center.styled'


export default class Center extends Component {
  render() {
    return (
      <CentersStyled>
        <Header />
        <Main />
      </CentersStyled>
    )
  }
}

import React, { Component } from 'react'
import SideBar from './SideBar/SideBar'
import Center from './Center/Center'
import {ContainerStyled} from '../styles/Container.styled'


export default class Container extends Component {
    render() {
        return (
            <ContainerStyled>
            <SideBar/>
            <Center/>
            </ContainerStyled>
            )
    }
}

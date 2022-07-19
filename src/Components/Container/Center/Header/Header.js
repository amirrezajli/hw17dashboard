import React, { Component } from 'react'
import NavBar from './NavBar/NavBar'
import NavTools from './NavTools/NavTools'
import Orders from './Orders/Orders'
import SearchBar from './SearchBar/SearchBar'

export default class Header extends Component {
    render() {
        return (
            <>
            <NavBar/>
            <NavTools/>
            <SearchBar/>
            <Orders/>
            </>

        )
    }
}

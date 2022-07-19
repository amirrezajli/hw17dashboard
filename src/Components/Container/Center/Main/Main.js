import React, { Component } from 'react'
import Table from './table/Table'
import PageInation from './PageInation/PageInation'

export default class Main extends Component {
  render() {
    return (
      <>
      <PageInation/>
      <Table/>
      <PageInation/>
      </>
    )
  }
}

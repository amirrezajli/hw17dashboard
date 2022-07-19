import React, { Component } from 'react'
import {ArrowBar} from '../../Assets/Icon'
import {Search} from '../../Assets/Icon'
import {Home} from '../../Assets/Icon'
import {Piechart} from '../../Assets/Icon'
import {Tag} from '../../Assets/Icon'
import {Flag} from '../../Assets/Icon'
import {User} from '../../Assets/Icon'
import {Bag} from '../../Assets/Icon'
import {Offer} from '../../Assets/Icon'
import {Card} from '../../Assets/Icon'
import {CommentNode} from '../../Assets/Icon'
import {VerticalSlider} from '../../Assets/Icon'
import {SidebarStyled} from '../../styles/Sidebar.styled'

export default class sidebar extends Component {

  render() {
    return (
      <SidebarStyled>
        <div ><ArrowBar /></div>
        <div><Search/></div>
        <div><Home/></div>
        <div><Piechart/></div>
        <div><Tag/></div>
        <div><Flag/></div>
        <div><User/></div>
        <div><Bag/></div>
        <div><Offer/></div>
        <div><Card/></div>
        <div><CommentNode/></div>
        <div><VerticalSlider/></div>
      </SidebarStyled>
    )
  }
}

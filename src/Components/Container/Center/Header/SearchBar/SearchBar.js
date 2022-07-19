import React, { Component } from 'react'
import {NavSearchStyled} from '../../../../styles/SearchBar.styled'
import {VerticalSlider} from '../../../../Assets/Icon'
import {HorizontalSlider} from '../../../../Assets/Icon'
import {Saved} from '../../../../Assets/Icon'
import {Location} from '../../../../Assets/Icon'
import {Tag} from '../../../../Assets/Icon'
import {Calender} from '../../../../Assets/Icon'
import {Down} from '../../../../Assets/Icon'
import {Search} from '../../../../Assets/Icon'


export default class SearchBar extends Component {
  render() {
    return (
      <NavSearchStyled>
         <div style={{display:"flex", alignItems:"center", justifyContent:"space-evenly" , width:"300px",height:"50px",borderRadius:"15px",border:"1px solid silver", backgroundColor:"white"}}>
          <div><Search/></div>
          <div><input style={{border:"none", outline:"none"}} type="text" placeholder='search anything...' /></div>
          <div><HorizontalSlider/></div>
         </div>
        <div>
          <div><Calender/>Data range <Down/></div>
          <div><Tag/>Status <Down/></div>
          <div><Location/>Address <Down/></div>
          <div><Saved/>Saved filters (15) <Down/></div>
          <div><VerticalSlider/>More filters <Down/></div>
        </div>
      </NavSearchStyled>
    )
  }
}

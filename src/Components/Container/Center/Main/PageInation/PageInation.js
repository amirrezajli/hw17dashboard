import React, { Component } from 'react'
import { PageInationStyled } from '../../../../styles/PageInation.styled'
import { Button } from '../../../../styles/PageInation.styled'
import { Pgin } from '../../../../styles/PageInation.styled'
import {Down} from '../../../../Assets/Icon'


export default class PageInation extends Component {
  render() {
    return (
      <PageInationStyled>
        <div><p>showing 21-30 of88results</p></div>
        <Pgin>
          <div>
            <span>&laquo;</span>
            <span>1</span>
            <span>2</span>
            <span style={{color:"blue"}}>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>&raquo;</span>
          </div>
        </Pgin>
        <div style={{display:"flex",alignItems:"center"}}><p>Items per page</p>
        <Button>10<Down/>
        </Button>
        </div>
      </PageInationStyled>
    )
  }
}

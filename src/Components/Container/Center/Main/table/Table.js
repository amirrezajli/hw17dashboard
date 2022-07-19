import React, { Component } from 'react'
import { TableStyled } from '../../../../styles/Table.styled'
import { BtnStyled } from '../../../../styles/Table.styled'
import { BoldStyled } from '../../../../styles/Table.styled'
import { MutedStyled } from '../../../../styles/Table.styled'
import { Down } from '../../../../Assets/Icon'
import { UpDown } from '../../../../Assets/Icon'


export default class Contain extends Component {
  constructor(props) {
    super(props)

    this.state = {
      users: [
        {
          id: "998-5878",
          Product: "Brand new bike,local buyer only",
          Customer: "oludayo Ayomide",
          Status: "Rejected",
          Deliverystatus: ". recived",
          Created: "Mar 13,2021 08:05 AM",
          Deadline: "jan 1,2021",
          Price: "$17.84"
        },
        {
          id: "623-4534",
          Product: "Macbook pro 16 inch (2021) For sale",
          Customer: "Edwin martins",
          Status: "Compeleted",
          Deliverystatus: ".  recived",
          Created: "sep 4,2021 12:14 AM",
          Deadline: "Aug 18,2021",
          Price: "$6.48"
        },
        {
          id: "998-5878",
          Product: "Lego Starwar edition",
          Customer: "Hellen jummy",
          Status: "Pending",
          Deliverystatus: ".Draft",
          Created: "Jan 11,2021 01:49 PM",
          Deadline: "jan 1,2021",
          Price: "$11.70"
        },
        {
          id: "395-9823",
          Product: "Dji Mavic Pro 2",
          Customer: "Adekunle Fisayo",
          Status: "To ship",
          Deliverystatus: "Received",
          Created: "Aug 3,2021 12:10 AM",
          Deadline: "aug 5,2021",
          Price: "$5.22"
        },
         {
          id: "398-5783",
          Product: "Heimer Miller sofa (Mint Condition)",
          Customer: "Mbah jacob",
          Status: "Compeleted",
          Deliverystatus: "",
          Created: "Mar 13,2021 08:05 AM",
          Deadline: "sep 1,2021",
          Price: "8.99"
        },
        {
          id: "395-9823",
          Product: "Gaming chair,local pickup only",
          Customer: "hellena john",
          Status: "Shipping",
          Deliverystatus: "Rejected",
          Created: "Mar 13,2021 08:05 AM",
          Deadline: "jan 1,2021",
          Price: "$14.81"
        },
        {
          id: "998-5878",
          Product: "Playstation 5 Limited Edition (+ games)",
          Customer: "James friday",
          Status: "Unpaid",
          Deliverystatus: "Draft",
          Created: "Mar 13,2021 08:05 AM",
          Deadline: "jun 12,2021",
          Price: "$8.99"
        },
        {
          id: "623-4534",
          Product: "Coach Tabby 26 for sale",
          Customer: "David oshodi",
          Status: "Reject",
          Deliverystatus: "Compeleted",
          Created: "Mar 13,2021 08:05 AM",
          Deadline: "jul 24,2021",
          Price: "$11.70"
        },
        {
          id: "398-5783",
          Product: "Gopro hero 7 (width receipt)",
          Customer: "Hellen jummy",
          Status: "Unpaid",
          Deliverystatus: "in Query",
          Created: "Aug 3,2021 12:10 AM",
          Deadline: "aug 24,2021",
          Price: "$10.54"
        },
        {
          id: "398-5783",
          Product: "Air jordan 1 Top 3 Sneaker (DS)",
          Customer: "Adeleke Peter",
          Status: "Paid",
          Deliverystatus: "Rejected",
          Created: "Aug 3,2021 12:10 AM",
          Deadline: "jan 1,2021",
          Price: "$25.70"
        }
      ]

    };
  }
  render() {
    return (

      <TableStyled>
        <thead>
          <tr>
            <th><input type="checkbox" /></th>
            <th>ID NO.</th>
            <th>Product</th>
            <th>Customer</th>
            <th>Status</th>
            <th>Deliverystatus</th>
            <th><UpDown />Created date</th>
            <th><UpDown />Deadline</th>
            <th><Down />Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {this.state.users.map((item) => {
            return (
              <tr key={item.id}>
                <td><input type="checkbox" /></td>
                <MutedStyled>{item.id}</MutedStyled>
                <BoldStyled>{item.Product}</BoldStyled>
                <MutedStyled>{item.Customer}</MutedStyled>
                <td><span>{item.Status}</span></td>
                <td><p>{item.Deliverystatus}</p></td>
                <MutedStyled>{item.Created.substring(0,11)} <br /> {item.Created.substring(12)}</MutedStyled>
                <MutedStyled>{item.Deadline}</MutedStyled>
                <BoldStyled>{item.Price}</BoldStyled>
                <td>
                  <BtnStyled>
                    Manage
                  </BtnStyled>
                  <BtnStyled>
                    Actions
                    <Down />
                  </BtnStyled>
                </td>
              </tr>
            );
          })}
        </tbody>
      </TableStyled>

    )
  }
}

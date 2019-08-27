import _ from 'lodash'
import React from 'react'
import { Dropdown } from 'semantic-ui-react'


const DropDownList = (props) => (
  <Dropdown id={props.id} class="dropdown" placeholder={props.Placeholder} 
  search selection options={props.options}  onChange={(props.Change)} />
)


export default DropDownList
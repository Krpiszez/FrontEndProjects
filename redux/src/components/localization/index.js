import React from 'react'
import { Dropdown } from 'react-bootstrap'


const Localization = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Choose Language
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item></Dropdown.Item>
        <Dropdown.Item></Dropdown.Item>
        <Dropdown.Item></Dropdown.Item>
        <Dropdown.Item></Dropdown.Item>
        <Dropdown.Item></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default Localization
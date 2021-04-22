import React from 'react'
import './Menu.css'
import MenuItem from './MenuItem'

const Menu = () => {
  return (
    <div className="menu">
      <MenuItem title="Existing Inventory"></MenuItem>
      <MenuItem title="Used Inventory"></MenuItem>
      <MenuItem title="Trade-in"></MenuItem>
      <MenuItem title="Cybertruck"></MenuItem>
      <MenuItem title="Roadster"></MenuItem>
      <MenuItem title="Semi"></MenuItem>
      <MenuItem title="Charging"></MenuItem>
      <MenuItem title="Powerwall"></MenuItem>
      <MenuItem title="Commerical Energy"></MenuItem>
      <MenuItem title="Utilities"></MenuItem>
      <MenuItem title="Test Drive"></MenuItem>
      <MenuItem title="Find Us"></MenuItem>
      <MenuItem title="Support"></MenuItem>
      <MenuItem title="United States"></MenuItem>
    </div>
  )
}

export default Menu

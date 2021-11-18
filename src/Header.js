import React from 'react';
import "./Header.css";
import { Avatar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import {useDataLayerValue} from "./DataLayer"
function Header ( { spotify } ) {
  const [ { user }, dispatch ] = useDataLayerValue();
  return (
    <div className="header">
      <div className="header_left">
        <SearchIcon />
        <input  placeholder="Search for Artists, Songs, and More..." type="text" />
      </div>
      <div className="header_right">
        <Avatar src={user?.images[0]?.url} alt={user?.diaplay_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  )
}

export default Header;

import React from 'react'
import "./Footer.css";
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import { Grid, Slider } from "@material-ui/core";
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';

function Footer() {
  return (
    <div className="footer">
      <div className="footer_left">
<img className="footer_albumLogo" src="https://image.shutterstock.com/image-illustration/3d-illustration-musical-notes-signs-260nw-761313844.jpg" alt="" />
        <div className="footer_songInfo">
          <h4>Yeah!</h4>
          <p>Bushes</p>
</div>
      </div>
      <div className="footer_center">
        <ShuffleIcon className="footer_green"/>
        <SkipPreviousIcon className="footer_icon" />
        <PlayCircleOutlineIcon fontSize="large" className="footer_icon" />
        <SkipNextIcon className="footer_icon" />
        <RepeatIcon className="footer_green" />
      </div>
      <div className="footer_right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon/>
          </Grid>
          <Grid item>
            <VolumeUpIcon/>
          </Grid>
          <Grid item xs>
            <Slider/>
          </Grid>
</Grid>
      </div>
    </div>
  )
}

export default Footer

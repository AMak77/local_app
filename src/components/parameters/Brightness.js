import React from 'react';
import Slider from '@material-ui/core/Slider';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import BrightnessLowIcon from '@material-ui/icons/BrightnessLow';
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';

const useStyles = makeStyles({
    root: {
        paddingTop: 30,
        flexGrow: 1
    },
    slider:{
        width: 150
    }
  });

export default function Brightness(props) {
    const socket = props.socket;
    const classes = useStyles();
    

    function valuetext(value) {
        return `${value}%`;
      }


    return (
        <Grid container className={classes.root}>
                <Grid item xs>
                    <Grid container justify="center"  spacing={2}>
                        <Grid item>
                            <BrightnessLowIcon />
                        </Grid>
                        <Grid item>
                            <Slider
                                    className={classes.slider}
                                    defaultValue={50}
                                    getAriaValueText={valuetext}
                                    aria-labelledby="discrete-slider"
                                    valueLabelDisplay="auto"
                                    step={25}
                                    marks
                                    min={0}
                                    max={100}
                                    onChangeCommitted={(e,val) => socket.emit("brightness", {device_id: props.id, brightness: parseInt(val*254/100)})}
                                />
                        </Grid>
                        <Grid item>
                            <BrightnessHighIcon/>
                        </Grid>
                    </Grid>
               </Grid>
        </Grid>
    )
}

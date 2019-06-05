import React from "react";

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import withStyles from "@material-ui/core/styles/withStyles";
import {connect} from "react-redux";
const lockerPicture= require("assets/img/digitallocker.jpg");


// const useStyles = theme => ({
//     root: {
//       display: 'flex',
//       flexWrap: 'wrap',
//       justifyContent: 'space-around',
//       overflow: 'hidden',
//       backgroundColor: theme.palette.background.paper,
//     },
//     gridList: {
//       width: 500,
//       height: 450,
//     },
//     icon: {
//       color: 'rgba(255, 255, 255, 0.54)',
//     },
//   });



class LockerList extends React.Component{
  
constructor(props){
    super(props);
}

    render(){
     
        return (
            <div >
                <GridList cellHeight={180}  >

                    {this.props.lockers && this.props.lockers.map(tile => (
                    <GridListTile key={tile.lockerName} style={{width:200, height:200}}>
                        <img src={lockerPicture} alt={tile.lockerName} />
                        <GridListTileBar
                        title={tile.lockerName}
                        subtitle={<span>by: {tile.lockerName}</span>}
                        actionIcon={
                            <IconButton aria-label={`info about ${tile.lockerName}`} >
                            <InfoIcon />
                            </IconButton>
                        }
                        />
                    </GridListTile>
                    ))}
                </GridList>
    </div>
 
        )
    }

}


function mapStateToProps({lockers}){
    return {lockers}
}
export default connect(mapStateToProps,null)(LockerList);
import Button from "@mui/material/Button";
import {ButtonGroup, Grid, Paper} from "@mui/material";
import * as PropTypes from "prop-types";
import {KeyboardArrowDown} from "@mui/icons-material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Item(props) {
    return null;
}

Item.propTypes = {children: PropTypes.node};
const TestResponsive = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>

                <Paper elevation={10} square={true} sx={{textAlign:'center',backgroundColor:'#6f6e6e',color:'#fff'}} >
                    <div style={{}}>
                    <Typography variant='h5'>Avery King</Typography>
                    <ButtonGroup  sx={{float:'right',paddingLeft:'10rem'}}variant="contained" aria-label="outlined primary button group">
                        <Button variant='contained' size='small'  color='secondary'>Add friend</Button>
                        <Button variant='contained' size='small' color='secondary'>Message</Button>
                        <Button size='small' color='secondary'><KeyboardArrowDown /></Button>
                    </ButtonGroup>
                    </div>
                </Paper>
            </Grid>
            <Grid item xs={4}>
                <Item>xs=4</Item>
            </Grid>
            <Grid item xs={4}>
                <Item>xs=4</Item>
            </Grid>
            <Grid item xs={8}>
                <Item>xs=8</Item>
            </Grid>
        </Grid>
    )
}

export default TestResponsive
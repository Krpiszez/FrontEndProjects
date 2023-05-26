import React from 'react'
import { config } from '../../../../config';
import { BrunchDining, LocalGasStation, DoorFront, AirlineSeatReclineNormal } from "@mui/icons-material";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./style.scss";

const { API_URL, routes: { habit }, endpoints: { files: { display } } } = config;

const HabitCard = (props) => {
    const { name, id } = props;
    return (
        <div className='vehicle-card'>
            
            <h4>{name}</h4>
            
            <Button
                variant='primary'
                as={Link}
                to={`/${habit}/${id}`}
            >
                Check Out
            </Button>
        </div>
    )
}

export default HabitCard
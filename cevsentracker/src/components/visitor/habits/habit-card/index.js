import React from 'react'
import { PersonAddAlt1 } from "@mui/icons-material";
import { Button } from 'react-bootstrap';
import "./style.scss";
import { addHabitToUserByHabitName } from '../../../../api/user-services';
import { swalToast } from '../../../../utils';

const HabitCard = (props) => {

    const addHabitToUser = async (name) => {
        try {
            await addHabitToUserByHabitName(name);
            swalToast("Habit successfully added!", "success");
        } catch (error) {
            swalToast(error.response.data.message, 'error');
        }
    }

    const { name } = props;
    return (
        <div className='vehicle-card'>
            
            <h4>{name}</h4>
            
            <Button
                variant='primary'
                onClick={()=>addHabitToUser(name)}
            >
                <PersonAddAlt1/> Start This Habit
            </Button>
        </div>
    )
}

export default HabitCard
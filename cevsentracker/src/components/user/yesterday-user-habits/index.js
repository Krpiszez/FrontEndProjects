import React, { useState, useEffect } from 'react';
import { Container, Card, CardContent, Typography, Switch } from '@mui/material';
import { getHabitById, getUser, getYesterdaysRecord, deleteYesterdaysHabit, trackYesterdaysHabit } from '../../../api';
import { getYesterdayDate, swalToast } from '../../../utils';
import './style.scss'
import { useSelector } from 'react-redux';

const YesterdayUserHabits = () => {
  const [loading, setLoading] = useState(true);
  const [habits, setHabits] = useState([]);
  const [completion, setCompletion] = useState([]);
  const yesterdaysDate = getYesterdayDate();
  const { user } = useSelector(state => state.auth);
const loadData = async () => {
    try {
      const data = await getUser();
      const habitIds = data.habits;

      const habitData = await Promise.all(
        habitIds.map(async (habitId) => {
          try {
            const habit = await getHabitById(habitId);
            return habit;
          } catch (error) {
            swalToast(error.response.data.message, 'error');
            console.log(`Error fetching habit with ID ${habitId}:`, error);
            return null;
          }
        })
      );
      const filteredHabits = habitData.filter((habit) => habit !== null);
      setHabits(filteredHabits);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    loadData();
    fetchCompletionRecords(); // eslint-disable-next-line
  }, []);
  const handleSwitchChange = async (habitId, completed) => {
    try {
      const response = await getYesterdaysRecord();
      console.log(response)
      const arr = response.filter((r) => r.date===yesterdaysDate && r.habit.id===habitId && r.user.userName === user.userName);
      let habitIds = [];
      arr.forEach(r=> habitIds.push(r.habit.id))
      if(!habitIds.includes(habitId)){
      await trackYesterdaysHabit(habitId, completed);
      }else {
        await deleteYesterdaysHabit(habitId);
      }
      fetchCompletionRecords();
    } catch (error) {
      console.log(`Error updating habit with ID ${habitId}:`, error);
    }
  };
  const fetchCompletionRecords = async () => {
    try {
      const response = await getYesterdaysRecord();
      const arr = response.filter(r => r.date === yesterdaysDate)
      setCompletion(arr);
    } catch (error) {
      console.error('Error fetching habit completion records:', error);
    }
  };
  const isChecked = (habitId) => {
  const matchingEntries = completion.filter((r) => r.habit.id === habitId && r.user.userName === user.userName);
  return matchingEntries.length > 0;
  }
  return (
    <Container>
      <h1 className='date-header'>{yesterdaysDate}</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="user-habits-container">
          {habits.map((habit) => (
            <Card key={habit.id} className="user-habits-card">
              <CardContent>
                <Typography variant="h6" component="div" className="user-habits-heading">
                  {habit.name}
                </Typography>
                <Typography variant="body2" className="user-habits-description">{habit.description}</Typography>
                <Switch
                  checked={isChecked(habit.id)}
                  onChange={(event) =>
                  handleSwitchChange(habit.id, event.target.checked)
                  }
                />
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </Container>
  );
};

export default YesterdayUserHabits;
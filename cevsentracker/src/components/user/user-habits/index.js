import React, { useState, useEffect } from 'react';
import { Container, Card, CardContent, Typography, Switch } from '@mui/material';
import { getHabitById, deleteHabit, getRecord, trackHabit, getUser } from '../../../api';
import { getCurrentDate } from '../../../utils';
import './style.scss'

const UserHabits = () => {
  const [loading, setLoading] = useState(true);
  const [habits, setHabits] = useState([]);
  const [completion, setCompletion] = useState([]);

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
    fetchCompletionRecords();
  }, []);
  const handleSwitchChange = async (habitId, completed) => {
    try {
      const response = await getRecord();
      console.log(response)
      const arr = response.map((r) => r.habit.id);
      console.log(!arr.includes(habitId))
      if(!arr.includes(habitId) || arr.length === 0){
      await trackHabit(habitId, completed);
      }else {
        await deleteHabit(habitId);
      }
      fetchCompletionRecords();
    } catch (error) {
      console.log(`Error updating habit with ID ${habitId}:`, error);
    }
  };
  const fetchCompletionRecords = async () => {
    try {
      const response = await getRecord();
      setCompletion(response);
    } catch (error) {
      console.error('Error fetching habit completion records:', error);
    }
  };
  const isChecked = (habitId) => {
  const currentDate = getCurrentDate();
  const matchingEntries = completion.filter((r) => r.habit.id === habitId && r.date === currentDate);
  return matchingEntries.length > 0;
  }
  console.log(completion)
  return (
    <Container>
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

export default UserHabits;
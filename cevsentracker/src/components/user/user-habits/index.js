import React, { useState, useEffect } from 'react';
import { Container, Card, CardContent, Typography, Switch } from '@mui/material';
import { getUser, getHabitById, trackHabit } from '../../../api';

const UserHabits = () => {
  const [loading, setLoading] = useState(true);
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const data = await getUser();
      console.log(data)
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
    }finally{
        setLoading(false);
    }
  };

  const handleSwitchChange = async (habitId, completed) => {
    try {
        console.log(habitId)
        console.log(completed)
      // Send API request to update habit completion
      await trackHabit(habitId, completed);
    } catch (error) {
      console.log(`Error updating habit with ID ${habitId}:`, error);
    }
  };
  return (
    <Container>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {habits.map((habit) => (
            <Card key={habit.id} sx={{ mb: 2 }}>
              <CardContent>
                <Typography variant="h6" component="div">
                  {habit.name}
                </Typography>
                <Typography variant="body2">{habit.description}</Typography>
                <Switch
                  checked={habit.completed}
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

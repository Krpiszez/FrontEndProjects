import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { getAllRecords } from '../../../api';

const GeneralTrackHabits = () => {
  const [trackedHabits, setTrackedHabits] = useState([]);

  useEffect(() => {
    fetchTrackedHabits();
  }, []);

  const fetchTrackedHabits = async () => {
    try {
      const habits = await getAllRecords(); // Fetch all tracked habits from the API
      setTrackedHabits(habits);
    } catch (error) {
      console.error('Error fetching tracked habits:', error);
      // Handle error
    }
  };

  // Group habits by date
  const groupedHabits = trackedHabits.reduce((grouped, habit) => {
    const date = habit.date;
    if (!grouped[date]) {
      grouped[date] = [];
    }
    grouped[date].push(habit);
    return grouped;
  }, {});

  return (
    <Table striped bordered>
      <thead>
        <tr>
          <th style={{textAlign:"center"}}>Date</th>
          <th style={{textAlign:"center"}}>User</th>
          <th style={{textAlign:"center"}}>Habit</th>
          <th style={{textAlign:"center"}}>Completed</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(groupedHabits).map(([date, habits]) => (
          <React.Fragment key={date}>
            <tr>
              <td rowSpan={habits.length} style={{textAlign:"center", verticalAlign: 'middle'}}>{date}</td>
              <td>{habits[0].user.userName}</td>
              <td>{habits[0].habit.name}</td>
              <td>{habits[0].completed ? 'Yes' : 'No'}</td>
            </tr>
            {habits.slice(1).map((habit) => (
              <tr key={habit.id}>
                <td>{habit.user.userName}</td>
                <td>{habit.habit.name}</td>
                <td>{habit.completed ? 'Yes' : 'No'}</td>
              </tr>
            ))}
          </React.Fragment>
        ))}
      </tbody>
    </Table>
  );
};

export default GeneralTrackHabits;
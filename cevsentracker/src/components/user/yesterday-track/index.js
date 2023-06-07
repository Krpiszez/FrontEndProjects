import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { getYesterdaysRecord } from '../../../api';
import { getYesterdayDate } from '../../../utils';

const YesterdayTrack = () => {
  const [yesterdaysHabits, setYesterdaysHabits] = useState([]);

  const users = ["Mehmet", "Enes", "Ahmet", "Mehmet", "Faruk", "Omer"];
  const toTrack = ["Cevsen Okuma", "Kuran Okuma"];

  const yesterday = getYesterdayDate();

  useEffect(() => {
    fetchTrackedHabits();// eslint-disable-next-line
  }, []);

  const fetchTrackedHabits = async () => {
    try {
      const habits = await getYesterdaysRecord(); // Fetch all tracked habits from the API
      const yesterdaysRecords = habits.filter(r => r.date === yesterday);
  
      const yesterdaysHabitsData = users.map(user => ({
        user,
        habits: toTrack.map(habit => ({
          habit,
          completed: yesterdaysRecords.some(record => record.user.userName === user && record.habit.name === habit)
        }))
      }));
  
      // Update completed value for non-existing records
    
      setYesterdaysHabits(yesterdaysHabitsData);
    } catch (error) {
      console.error('Error fetching tracked habits:', error);
      // Handle error
    }
  };

  return (
    <Container>
      <h1 className='date-header'>YESTERDAYS RECORDS</h1>
      <Table striped bordered>
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>Date</th>
            <th style={{ textAlign: "center" }}>User</th>
            <th style={{ textAlign: "center" }}>Habit</th>
            <th style={{ textAlign: "center" }}>Completed</th>
          </tr>
        </thead>
        <tbody>
          {yesterdaysHabits.map(({ user, habits }, userIndex) => {
            const isBothCompleted = habits.every(({ completed }) => completed);
            const isAnyCompleted = habits.some(({ completed }) => completed);
            return habits.map(({ habit, completed }, habitIndex) => (
              <tr key={`${user}-${habit}`}>
                {(userIndex === 0 && habitIndex === 0) && (
                  <td rowSpan={12} style={{ textAlign: "center", verticalAlign: 'middle' }}>{yesterday}</td>
                )}
                {habitIndex === 0 && (
                  <td rowSpan={2} style={{
                    textAlign: "center",
                    verticalAlign: 'middle',
                    backgroundColor:
                      isBothCompleted ? 'green' : (isAnyCompleted ? 'yellow' : 'red')
                  }}>{user}</td>
                )}
                <td style={{ backgroundColor: completed ? 'green' : 'red' }}>{habit}</td>
                <td style={{ backgroundColor: completed ? 'green' : 'red' }}>{completed ? 'Yes' : 'No'}</td>
              </tr>
            ));
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default YesterdayTrack;

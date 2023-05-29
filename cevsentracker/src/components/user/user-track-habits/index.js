import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { getRecord } from '../../../api/track-services';

const UserTrackHabits = () => {
  const [completionRecords, setCompletionRecords] = useState([]);

  useEffect(() => {
    fetchCompletionRecords();
  }, []);

  const fetchCompletionRecords = async () => {
    try {
      const records = await getRecord(); // Fetch habit completion records from the API
      console.log(records)
      setCompletionRecords(records);
    } catch (error) {
      console.error('Error fetching habit completion records:', error);
      // Handle error
    }
  };

  return (
    <Table striped bordered>
      <thead>
        <tr>
          <th>Habit</th>
          <th>User</th>
          <th>Date</th>
          <th>Completed</th>
        </tr>
      </thead>
      <tbody>
        {completionRecords.map((record) => (
          <tr key={record.id}>
            <td>{record.habit.name}</td>
            <td>{record.user.userName}</td>
            <td>{record.date}</td>
            <td>{record.completed ? 'Yes' : 'No'}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default UserTrackHabits;

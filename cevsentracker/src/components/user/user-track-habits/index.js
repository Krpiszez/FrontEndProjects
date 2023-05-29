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

  // Group completion records by date
  const groupedRecords = {};
  completionRecords.forEach(record => {
    const date = record.date;
    if (!groupedRecords[date]) {
      groupedRecords[date] = [];
    }
    groupedRecords[date].push(record);
  });

  return (
    <Table striped bordered>
      <thead>
        <tr>
          <th>Date</th>
          <th>Habit</th>
          <th>Completed</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(groupedRecords).map(date => (
          <React.Fragment key={date}>
            <tr>
              <td rowSpan={groupedRecords[date].length}>{date}</td>
              <td>{groupedRecords[date][0].habit.name}</td>
              <td>{groupedRecords[date][0].completed ? 'Yes' : 'No'}</td>
            </tr>
            {groupedRecords[date].slice(1).map(record => (
              <tr key={record.id}>
                <td>{record.habit.name}</td>
                <td>{record.completed ? 'Yes' : 'No'}</td>
              </tr>
            ))}
          </React.Fragment>
        ))}
      </tbody>
    </Table>
  );
};

export default UserTrackHabits;

import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { getAllRecords } from '../../../api';

const TrialTrack = () => {
  const [trackedHabits, setTrackedHabits] = useState([]);

  const users = ["Mehmet", "Enes", "Ahmet", "Mehmet", "Faruk", "Omer"];
  const toTrack = ["Cevsen Okuma", "Kuran Okuma"]

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
          <th style={{ textAlign: "center" }}>Date</th>
          <th style={{ textAlign: "center" }}>User</th>
          <th style={{ textAlign: "center" }}>Habit</th>
          <th style={{ textAlign: "center" }}>Completed</th>
        </tr>
      </thead>
      <tbody>
        <tr>
            <td rowSpan={12} style={{ textAlign: "center", verticalAlign: 'middle' }}>date</td>
            <td rowSpan={2} style={{ textAlign: "center", verticalAlign: 'middle' }}>Mehmet</td>
            <td>Kuran Okuma</td>
        </tr>
        <tr>
            <td>Cevsen Okuma</td>
        </tr>
        <tr>
            <td rowSpan={2} style={{ textAlign: "center", verticalAlign: 'middle' }}>Enes</td>
            <td>Kuran Okuma</td>
        </tr>
        <tr>
            <td>Cevsen Okuma</td>
        </tr>
        <tr>
            <td rowSpan={2} style={{ textAlign: "center", verticalAlign: 'middle' }}>Mustafa</td>
            <td>Kuran Okuma</td>
        </tr>
        <tr>
            <td>Cevsen Okuma</td>
        </tr>
        <tr>
            <td rowSpan={2} style={{ textAlign: "center", verticalAlign: 'middle' }}>Ahmet</td>
            <td>Kuran Okuma</td>
        </tr>
        <tr>
            <td>Cevsen Okuma</td>
        </tr>
        <tr>
            <td rowSpan={2} style={{ textAlign: "center", verticalAlign: 'middle' }}>Faruk</td>
            <td>Kuran Okuma</td>
        </tr>
        <tr>
            <td>Cevsen Okuma</td>
        </tr>
        <tr>
            <td rowSpan={2} style={{ textAlign: "center", verticalAlign: 'middle' }}>Omer</td>
            <td>Kuran Okuma</td>
        </tr>
        <tr>
            <td>Cevsen Okuma</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default TrialTrack;

// {Object.entries(groupedHabits).map(([date, habits]) => (
//     <React.Fragment key={date}>
//       {habits.map((habit, index) => (
//         <tr key={`${date}-${index}`}>
//           {index === 0 && (
//             <td rowSpan={habits.length} style={{ textAlign: "center", verticalAlign: 'middle' }}>{date}</td>
//           )}
//           <td>{users[index]}</td>
//           <td>{toTrack[index]}</td>
//           <td style={{ textAlign: "center" }}>
//             {habit.completed ? 'Yes' : 'No'}
//           </td>
//         </tr>
//       ))}
//     </React.Fragment>
//   ))}

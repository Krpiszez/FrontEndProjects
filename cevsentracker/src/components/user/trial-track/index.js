import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { getYesterdaysRecord } from '../../../api';
import { getCurrentDate, getYesterdayDate } from '../../../utils';

const TrialTrack = () => {
  const [todaysHabits, setTodaysHabits] = useState([]);
  const [yesterdaysHabits, setYesterdaysHabits] = useState([]);

  const users = ["Mehmet", "Enes", "Ahmet", "Mehmet", "Faruk", "Omer"];
  const toTrack = ["Cevsen Okuma", "Kuran Okuma"]

  const today = getCurrentDate();
  const yesterday = getYesterdayDate();

  useEffect(() => {
    fetchTrackedHabits();// eslint-disable-next-line
  }, []);

  const fetchTrackedHabits = async () => {
    try {
      const habits = await getYesterdaysRecord(); // Fetch all tracked habits from the API
      const todaysRecords = habits.filter(r => r.date === today);
      const yesterdaysRecords = habits.filter(r => r.date === yesterday);
      console.log(todaysRecords)
      console.log(yesterdaysRecords)
      setTodaysHabits(todaysRecords);
      setYesterdaysHabits(yesterdaysRecords);
    } catch (error) {
      console.error('Error fetching tracked habits:', error);
      // Handle error
    }
  };

  // Group habits by date
  const todaysGroupedHabits = todaysHabits.reduce((grouped, habit) => {
    const date = habit.date;
    if (!grouped[date]) {
      grouped[date] = [];
    }
    grouped[date].push(habit);
    return grouped;
  }, {});
  console.log(todaysGroupedHabits)

  const yesterdaysGroupedHabits = yesterdaysHabits.reduce((grouped, habit) => {
    const date = habit.date;
    if (!grouped[date]) {
      grouped[date] = [];
    }
    grouped[date].push(habit);
    return grouped;
  }, {});
  console.log(yesterdaysGroupedHabits)

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

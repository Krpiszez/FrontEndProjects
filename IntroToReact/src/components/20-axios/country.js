import React from 'react';

const Country = ({ index, flags, name, population, capital }) => {
    return (
        <tr>
            <td>{index + 1}</td>
            <td>
                <img src={flags?.svg} alt={name?.official} width={100} />
            </td>
            <td>{name?.official}</td>
            <td>{population}</td>
            <td>{capital}</td>
        </tr>
    )
};

export default Country;
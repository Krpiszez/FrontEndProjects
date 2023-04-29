import React, { useEffect, useState } from 'react';
import Country from './country';
import { Container, Table } from 'react-bootstrap';
import axios from 'axios';

const Countries = () => {
    const [countries, setCountries] = useState([1, 2]);

    /*
    
    axios.delete(`dfgdfgdfg`, {body: {id:1}})
    fetch(`sasdasdasda', {method: 'DELETE', body: {id:1}}})
    
    */

    const loadData = async () => {
        try {
            const response = await axios.get('https://restcountries.com/v3.1/all');
            console.log(response.data);
            setCountries(response.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        loadData();
    }, [])

    return (
        <Container>
            <h2>Axios — Countries</h2>
            <Table striped bordered hover style={{backgroundColor:'white', width:'10rem', fontSize: '1rem'}}>
                <thead >
                    <tr>
                        <th>#</th>
                        <th>Flag</th>
                        <th>Country Name</th>
                        <th>Population</th>
                        <th>Capital</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        countries.map((country, index) => {
                            return (
                                <Country key={country.ccn3} index={index} {...country} />
                            )
                        })
                    }
                </tbody>
            </Table>
        </Container>
    )
};

export default Countries;
import React, { useEffect, useState } from 'react';
import { getAllHabits } from "../../../../api";
import { SectionHeader, Spacer, HabitCard } from "../../..";
import { Col, Container, Row } from 'react-bootstrap';
import "./style.scss";

const PopularHabits = () => {
    const [loading, setLoading] = useState(true);
    const [habits, setHabits] = useState([]);

    

    const loadData = async () => {
        try {
            const habitData = await getAllHabits();
            setHabits(habitData);
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div className='popular-vehicles'>
            <SectionHeader
                title1="Popular"
                title2="Habits"
                desc="To contribute to positive change and achieve our sustainability goals with many extraordinary"
            />
            <Spacer />
            <Container>
                <Row className='gy-5'>
                    {
                        loading
                            ? "...Loading"
                            : habits.length > 0
                            && habits.map((habit, index) => (
                                <Col md={6} lg={4} key={habit.id || index}>
                                    <HabitCard {...habit} />
                                </Col>
                            ))
                    }
                </Row>
            </Container>
        </div>
    )
}

export default PopularHabits
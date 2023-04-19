import React, { useState } from 'react';
import { Container, ButtonGroup, Button } from "react-bootstrap";

const State2 = () => {
    const [mode, setMode] = useState("light");

    let className = "bg-light text-dark p-5";

    if (mode === "dark") {
        className = "bg-dark text-light p-5";
    }

    return (
        <Container className={className}>
            <h1>DARK/LIGHT MODE SWITCHER</h1>
            <ButtonGroup>
                <Button variant='secondary' onClick={() => setMode("dark")}>Dark Mode</Button>
                <Button variant='primary' onClick={() => setMode("light")}>Light Mode</Button>
            </ButtonGroup>
        </Container>
    )
};

export default State2;
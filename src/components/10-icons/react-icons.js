import React from 'react';
import { Container } from 'react-bootstrap';
import { IoIosApps } from "react-icons/io";
import { HiHome } from "react-icons/hi";

const ReactIcons = () => {
    return (
        <Container>
            <h2>React Icons</h2>
            <IoIosApps style={{ fontSize: "50px", color: "red" }} />
            <HiHome style={{ fontSize: "50px", color: "red" }} />
            <IoIosApps style={{ fontSize: "50px", color: "red" }} />
        </Container>
    )
};

export default ReactIcons;
import React from 'react';
import { Button, Container } from 'react-bootstrap';
// import { Component } from "react";

export default class ClassTypeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Techpro Education",
            message: "Hello Developers",
            hour: new Date().getHours(),
            minute: new Date().getMinutes(),
            carName: this.props.carName
        }
    }

    componentDidMount() {
        console.log("Works on first render CTC");
    };

    componentDidUpdate(prevProps, prevState) {
        console.log("Works on re-render");

        if (prevState.hour !== this.state.hour) {
            console.log("Hour has changed");
        }

        if (prevProps.carName !== this.props.carName) {
            console.log("Car has changed");
            this.setState({ carName: this.props.carName })
        }
    };

    componentWillUnmount() {
        console.log("Works on unmount CTC")
    };

    render() {

        const welcome = "Hello World";

        return (
            <Container>
                <h1>Class Type Component</h1>
                <h2>{welcome}</h2>
                <h3>{this.state.name} — {this.state.message}</h3>
                <p className='fs-2'>{this.state.hour}:{this.state.minute}</p>
                <Button className='me-2' onClick={() => this.setState({ hour: 20 })}>Set Hour</Button>
                <Button>Set Minute</Button>
                <p className='fw-bold'>{this.state.carName}</p>
            </Container>
        )
    }
};
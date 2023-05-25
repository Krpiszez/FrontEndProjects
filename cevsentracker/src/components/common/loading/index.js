import React from 'react';
import { Spinner } from "react-bootstrap";
import "./style.scss";

const Loading = ({ width, height }) => {
    const styles = {
        width,
        height
    }

    return (
        <div className='loading' style={styles}>
            <Spinner animation='border' />
        </div>
    )
}

export default Loading
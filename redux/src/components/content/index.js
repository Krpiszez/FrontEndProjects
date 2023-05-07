import React from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const Content = () => {
    const { localization: { language }, theme: { theme } } = useSelector(state => state);
    // const states = useSelector(state => state);
    // const {localization, theme} = states;
    // const {language} = localization;
    // const {theme} = theme;


    const { trivialInfo: { welcome, aboutUs, contact } } = require(`../../utils/languages/${language}.json`);

    return (
        <Container
            className={`mt-5 text-center text-${theme === "light" ? "dark" : "light"}`}
        >
            <h1>{welcome}</h1>
            <h2>{aboutUs}</h2>
            <h3>{contact}</h3>
        </Container>
    )
}

export default Content;
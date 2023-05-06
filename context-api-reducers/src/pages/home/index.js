import React from 'react';
import { Button, ButtonGroup, Container } from 'react-bootstrap';
import { Header } from '../../components';
import { useStore } from '../../store';
import { counterDecrement, counterIncrement, counterReset } from '../../store/count/actions';


const Home = () => {
    const { countState: { count }, dispatchCount } = useStore();
    console.log('count', count);

    return (
        <Container fluid className='p-0'>
            <Header />
            <Container className='mt-5 d-flex flex-column align-items-center'>
                <h1 className='text-center'>HOME</h1>
                <ButtonGroup>
                    <Button
                        variant='warning'
                        onClick={() => dispatchCount(counterDecrement())}
                    >
                        -
                    </Button>
                    <Button variant='secondary' disabled>
                        {count}
                    </Button>
                    <Button
                        variant='info'
                        onClick={() => dispatchCount(counterIncrement())}
                    >
                        +
                    </Button>
                    <Button variant='dark'
                        onClick={() => dispatchCount(counterReset())}
                    >
                        Reset
                    </Button>
                </ButtonGroup>
            </Container>
        </Container>
    )
}

export default Home
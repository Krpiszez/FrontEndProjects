import React, { useContext, useEffect, useState } from 'react'
import { Form, InputGroup } from 'react-bootstrap'
import StoreContext from '../store';

const Content = () => {

  const store = useContext(StoreContext);

  const {currencies} = store;

  const [result, setResult] = useState(0);
  const [currency, setCurrency] = useState("USD");
  const [amount, setAmount] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    if(name === 'amount'){
      setAmount(value);
    }

    if(name === "currency"){
      setCurrency(value);
    }
  }

  useEffect(()=>{
    const newResult = (amount / currencies[currency]).toFixed(2);
    setResult(newResult);
  },[currency, amount])


  return (
    <div>
      <Form>
        <InputGroup>
          <Form.Control
          type='text'
          name='amount'
          placeholder='Enter amount'
          value={amount}
          onChange={handleChange}/>
          <Form.Select 
          name='currency'
          value={currency}
          onChange={handleChange}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
          </Form.Select>
          <InputGroup.Text>{result} TL</InputGroup.Text>
        </InputGroup>
      </Form>
    </div>
  )
}

export default Content
import React, { useEffect, useState } from 'react'
import { Button, Carousel, Container, Form, Table } from 'react-bootstrap'
import './home.scss';
import fazilet from '../assets/data/fazilet.json'
import oku from '../assets/image/oku.jpg'

const Home = (id) => {
  const headers = ['1-20', '21-40', '41-60', '61-80', '81-100']; // Başlık verileri
  const names = ['Faruk', 'Enes', 'Mustafa', 'Mehmet', 'Ömer']; // İsim verileri
  const dates = ['20-05', '21-05', '22-05', '23-05', '24-05']; // Tarih verileri

  const [checkboxStates, setCheckboxStates] = useState({});

  const handleCheckboxChange = (date, name) => {
    setCheckboxStates((prevState) => ({
      ...prevState,
      [`${date}-${name}`]: !prevState[`${date}-${name}`]
    }));
  };
  

  const renderCarouselItems = (data) => {
    return data.map((item) => (
      <Carousel.Item key={item.id}>
        <h3>{item.text}</h3>
      </Carousel.Item>
    ));
  };

  const cb = (date, name) => (
    <Form.Check
      type="checkbox"
      id={`${date}-${name}`}
      checked={checkboxStates[`${date}-${name}`]}
      onChange={() => handleCheckboxChange(date, name)}
      label="20 Sayfa"
    />
  );

  useEffect(() => {
    // Sayfa yüklendiğinde yerel depolamadan checkbox durumlarını al
    const storedCheckboxStates = localStorage.getItem('checkboxStates');
    if (storedCheckboxStates) {
      setCheckboxStates(JSON.parse(storedCheckboxStates));
    }
  }, []);

  useEffect(() => {
    // Checkbox durumları değiştiğinde yerel depolamaya kaydet
    localStorage.setItem('checkboxStates', JSON.stringify(checkboxStates));
  }, [checkboxStates]);

  return (
    <Container style={{marginTop:'200px'}}>
      <h5 className='text'>Risale-i Nur talebelerinin en esaslı virdi Cevşenü’l-Kebirdir. Üstadlarının tavsiyesi ile devamlı okuma gayreti içindedirler.
         Hatta Bediüzzaman “Cevşenü’l-Kebiri, Hizb-i Nuriyeyi Salavât ile neşri, nurculara ve ehl-i imana büyük bir hizmettir” buyurarak
         hem okunmasını hem neşrini tavsiye etmişlerdir.</h5>
      <Carousel interval={10000}>
        {renderCarouselItems(fazilet)}
      </Carousel>
      
      <Table striped bordered className="custom-table">
        <thead>
          <tr>
            <th className="table-header">Hafta 1</th>
            {names.map((name, index) => (
              <th className="table-header" key={index}>{name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dates.map((date, dateIndex) => (
            <tr key={dateIndex}>
              <th className="table-date">{date}</th>
              {names.map((name, nameIndex) => (
                <td key={nameIndex}>{cb(date, name)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
      
      <Container className='table-cell'>
        <a href="https://www.ortakhatim.com/cevsen/32_33.htm"><img src={oku} alt=""/></a>
      </Container>
      
    </Container>
  )
}

export default Home;
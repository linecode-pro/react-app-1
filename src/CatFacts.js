import React, { useState } from 'react';
import axios from 'axios';
import ErrorDisplay from './ErrorDisplay';

const CatFacts = () => {
    const [facts, setFacts] = useState([]);
    const [error, setError] = useState(null);
  
    const fetchCatFacts = async () => {
      try {
        // const response = await axios.get('https://catfact.ninja/facts');
        const response = await axios.get('https://cat-fact.herokuapp.com/facts/');
        //setFacts(response.data.data); // Данные из API находятся в response.data.data

        // Из полученного ответа - создать массив строк (фактов о котах)
        const facts = new Array();

        for (const element of response.data) {
          facts.push(element.text);
        }

        //setFacts(response.data.data); // Данные из API находятся в response.data.data
        setFacts(facts);

        setError(null); // Сбрасываем ошибку, если запрос успешен
      } catch (err) {
        setError(err.message); // Устанавливаем сообщение об ошибке
        setFacts([]); // Сбрасываем факты, если произошла ошибка
      }
    };
  
    return (
      <div>
        <button onClick={fetchCatFacts}>Получить факты о котах</button>
        <ErrorDisplay error={error} />
        {facts.length > 0 && (
          <div style={{ backgroundColor: 'green', color: 'white', padding: '10px', margin: '10px 0' }}>
            <h3>Факты о котах:</h3>
            <ul>
              {facts.map((fact, index) => (
                //<li key={index}>{fact.fact}</li>
                <li key={index}>{fact}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };
  
  export default CatFacts;
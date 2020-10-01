import React, {useState, useEffect} from 'react';
import List from '../list/List';
import './Thank.css';
import GetAnswer from '../../services/GetAnswersService';

function Thank(props) {
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    async function getAnswers() {
      try {
        const answersList = await GetAnswer.get();        
        setAnswers(answersList);
      } catch (error) {
        console.log(error);
      }
    }

    getAnswers();
  },[]);

  return (
    <>
      <main>
        <div className="container-fluid text-center">
          <div className="row">
            <div className="col-12">
              <h1 className="title">Agradecimentos feitos</h1>
              <h2 className="subtitle">Orai sem cessar. 1° Ts 5:17</h2> 
            </div>
          </div>
        </div>
        <List list={answers}></List>
      </main>
    </>
  );
}

export default Thank;
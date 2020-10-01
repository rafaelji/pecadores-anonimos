import React from 'react';
import Card from './card/Card';
import './List.css';

function List(props) {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            {props.list && props.list.map((item, key) => {
              return (
                <Card author={item.name} content={item.description} key={key}/>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default List;
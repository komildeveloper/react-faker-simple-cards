import React from 'react';
import ReatcDOM from 'react-dom';
import faker from 'faker';
import CardTemplate from './CardTemplate';
import './Style.css';

const App = () => {
  return (
    <div>
      <CardTemplate
        avatar={faker.image.avatar()}
        name={faker.name.firstName()}
        friends={`Friends of ${faker.name.firstName()}`}
        desc={faker.lorem.sentence()}
      />
      <CardTemplate
        avatar={faker.image.avatar()}
        name={faker.name.firstName()}
        friends={`Friends of ${faker.name.firstName()}`}
        desc={faker.lorem.sentence()}
      />
      <CardTemplate
        avatar={faker.image.avatar()}
        name={faker.name.firstName()}
        friends={`Friends of ${faker.name.firstName()}`}
        desc={faker.lorem.sentence()}
      />
    </div>
  );
};

ReatcDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

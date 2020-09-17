import React from 'react';

const CardTemplate = props => {
  return (
    <div className='ui card'>
      <div className='content'>
        <img src={props.avatar} class='right floated mini ui image' alt='' />
        <div class='header'>{props.name}</div>
        <div class='meta'>{props.friends}</div>
        <div class='description'>{props.desc}</div>
      </div>
      <div class='extra content'>
        <div class='ui two buttons'>
          <div class='ui basic green button'>Approve</div>
          <div class='ui basic red button'>Decline</div>
        </div>
      </div>
    </div>
  );
};

export default CardTemplate;

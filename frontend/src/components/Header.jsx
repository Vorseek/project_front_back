import React from 'react';

// глупый компанент
export default function Header(props) {
  console.log('in header', props);
  return (
    <div className="header">
      <h2>Заголовок сайта</h2>
      <h5>Пользователь не залогинен</h5>
    </div>
  )
}
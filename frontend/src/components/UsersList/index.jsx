import React from "react";

export default class UsersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: false,
    };
  }

  render() {
    return (
      <ListGroup variant='flush'>
        <ListGroup.Item variant='dark'>Список пользователей</ListGroup.Item>
        <ul>
            {
                this.state.users.length > 0
                ?
                <span>Здесь будут пользователи</span>
                :
                <p>На сайте пока никого нет</p>
            }
        </ul>
        
      </ListGroup>
    );
  }
}

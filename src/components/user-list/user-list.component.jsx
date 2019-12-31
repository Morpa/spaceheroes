import React from 'react';
import { Query } from 'react-apollo';
import { GET_USERS } from '../../utils';

import User from '../user-item/user.component';

import { Container } from './user-list.styles';

const List = ({ users, editUser, removeUser }) => (
  <Container>
    {users.map(user => (
      <User
        key={user.id}
        firstName={user.first_name}
        lastName={user.last_name}
        avatar={user.avatar}
        id={user.id}
        edit={() => editUser(user)}
        remove={() => removeUser(user.id)}
      />
    ))}
  </Container>
);

const UsersList = () => (
  <Query query={GET_USERS}>
    {({ loading, error, data }) => {
      if (loading) return 'Loading...';
      if (error) return `Error! ${error.message}`;
      if (data) {
        return <List users={data.users.data} />;
      }
    }}
  </Query>
);

export default UsersList;

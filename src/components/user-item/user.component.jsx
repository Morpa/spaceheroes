import React from 'react';
import RemoveUser from '../user-crud/user-remove.component';
import EditUser from '../user-crud/user-edit.component';

import { Container, Avatar } from './user.styles';

const User = ({ firstName, lastName, id, avatar }) => (
  <Container>
    <Avatar src={avatar} alt={`avatar of ${firstName} ${lastName}.`} />
    <div style={{ textAlign: 'left' }}>
      <h4>
        {firstName} {lastName}
      </h4>
      <EditUser userId={id} />
      <RemoveUser userId={id} />
    </div>
  </Container>
);

export default User;

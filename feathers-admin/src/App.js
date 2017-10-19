import React from 'react';
import { Admin, Resource } from 'admin-on-rest';
import { authClient, restClient } from 'aor-feathers-client';
import feathersClient from './feathersClient';
import { UsersList } from './services/users';

const authClientOptions = {
  storageKey: 'feathers-jwt',
  authenticate: { strategy: 'local' }
};

// to rename id field for *all* resources use this syntax:
const options = { id: '_id' };

const App = () => (
  <Admin
    authClient={authClient(feathersClient, authClientOptions)}
    restClient={restClient(feathersClient, options)}
  >
    <Resource name="users" list={UsersList} />
  </Admin>
);

export default App;
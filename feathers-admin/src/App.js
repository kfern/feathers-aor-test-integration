import 'babel-polyfill';
import React from 'react';
import { Admin, Resource } from 'admin-on-rest';
import { authClient, restClient } from 'aor-feathers-client';
import feathersClient from './feathersClient';
import { UsersList } from './services/users';
import { TeamsList, TeamsEdit, TeamsCreate } from './services/teams';
import { Delete } from 'admin-on-rest/lib/mui';

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
    {permissions => [
      permissions === 'admin' ? <Resource name="users" list={UsersList} /> : null,
      <Resource
        name="teams"
        list={TeamsList}
        create={permissions === 'admin' ? TeamsCreate : null}
        edit={permissions === 'admin' ? TeamsEdit : null}
        remove={permissions === 'admin' ? Delete : null}
      />
    ]}
  </Admin>
);

export default App;

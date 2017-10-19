import React from 'react';
import { List, Datagrid, TextField } from 'admin-on-rest';

export const UsersList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="_id" />
        </Datagrid>
    </List>
);
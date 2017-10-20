import React from 'react';
import { Filter, DisabledInput, ReferenceInput, List, Edit, Create, SimpleForm, Datagrid, TextField, SelectInput, TextInput, EditButton } from 'admin-on-rest/lib/mui';

export const TeamsFilter = (props) => (
   <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
    <ReferenceInput label="Team" source="_id" reference="teams" allowEmpty>
      <SelectInput optionText="name" />
    </ReferenceInput>
   </Filter>
);

export const TeamsList = (props) => (
    <List {...props} filters={<TeamsFilter />}>
        <Datagrid>
            <TextField source="_id" />
            <TextField source="name" />
            <EditButton />
        </Datagrid>
    </List>
);

const TeamsName = ({ record }) => {
    return <span>Team {record ? `"${record.name}"` : ''}</span>;
};

export const TeamsEdit = (props) => (
    <Edit name={<TeamsName />} {...props}>
        <SimpleForm>
            <DisabledInput source="_id" />
            <TextInput source="name" />
        </SimpleForm>
    </Edit>
);

export const TeamsCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
        </SimpleForm>
    </Create>
);

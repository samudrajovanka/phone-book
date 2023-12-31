import { gql } from '@apollo/client';

export const GET_CONTACT_LIST_DEFAULT_VARIABLES = {
  order_by: {
    created_at: 'desc',
  }
};

export const GET_CONTACT_LIST_QUERY = gql`
query GetContactList (
  $distinct_on: [contact_select_column!], 
  $limit: Int, 
  $offset: Int,  
  $order_by: [contact_order_by!], 
  $where: contact_bool_exp
) {
  contact(
    distinct_on: $distinct_on, 
    limit: $limit, 
    offset: $offset, 
    order_by: $order_by, 
    where: $where
  ){
    created_at
    id
    first_name
    last_name
    phones {
      number
    }
  }
}`;

export const CREATE_CONTACT_QUERY = gql`
mutation AddContactWithPhones(
  $first_name: String!, 
  $last_name: String!, 
  $phones: [phone_insert_input!]!
) {
  insert_contact(
    objects: {
        first_name: $first_name, 
        last_name: 
        $last_name, phones: { 
            data: $phones
          }
      }
  ) {
    returning {
      first_name
      last_name
      id
      phones {
        number
      }
    }
  }
}
`;

export const DELETE_CONTACT_BY_PK_QUERY = gql`
mutation MyMutation($id: Int!) {
  delete_contact_by_pk(id: $id) {
    first_name
    last_name
    id
  }
}
`;

export const EDIT_CONTACT_BY_ID_QUERY = gql`
mutation EditContactById($id: Int!, $_set: contact_set_input) {
  update_contact_by_pk(pk_columns: {id: $id}, _set: $_set) {
    id
    first_name
    last_name
    phones {
      number
    }
  }
}
`;

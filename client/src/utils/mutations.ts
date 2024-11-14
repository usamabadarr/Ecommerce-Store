import { gql } from '@apollo/client';

export const ADD_CARTITEM = gql`
  mutation addCartItem($id: ID!, $img: String!, $quantity: 1, $price: Float!, $subtotal: Float!) {
    addCartItem(id: $id) {
      _id
      img
      quantity
      price
      subtotal
    }
  }
`;


export const UPDATE_CARTITEM = gql`
  mutation updateCartItem($id: ID!, $quantity: Number!) {
    updateCartItem(id: $id) {
      _id
      img
      quantity
      price
      subtotal
    }
  }
`;


export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;
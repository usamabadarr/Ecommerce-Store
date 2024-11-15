import { gql } from '@apollo/client';

export const QUERY_SINGLE_PROFILE = gql`
  query singleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
      profileImg
      username
      email
      password
      cartID
    }
  }
`;

export const QUERY_SINGLE_CART = gql`
  query singleCart($cartId: ID!) {
    cart(cartId: $cartId) {
      _id
      total
      addedItems {
        _id
        itemName
        img
        quantity
        price
        subtotal
      }
    }
  }
`;
export const QUERY_FEATURED_ITEMS = gql`
  query featuredItems {
    featuredItems {
      _id
      name
      description
      price
      quantity
      department
    }
  }
`;

export const QUERY_DEPARTMENT_NAME = gql`
  query departments {
    departments {
      _id
      name
    }
  }
`;

export const QUERY_DEPARTMENT = gql`
  query department($departmentId: ID!) {
    department(departmentId: $departmentId) {
      _id
      name
      items {
        _id
        name
        description
        price
        quantity
        department
      }
    }
  }
`;
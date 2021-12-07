export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Driver License',
    description: '......',
    attribute: ['lname', 'fname', 'expirationDate', 'DOB'],
  },
  {
    id: 2,
    name: 'RTW',
    description: '......',
    attribute: ['lname', 'fname', 'expirationDate', 'DOB'],
  },
  {
    id: 3,
    name: 'Insurance',
    description: '......',
    attribute: ['lname', 'fname', 'expirationDate', 'DOB'],
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/

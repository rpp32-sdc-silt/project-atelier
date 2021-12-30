/*
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';

import RR from '../../src/Components/RatingsAndReviews/RatingsAndReviews';

// ================================
// Example from React website
// ================================
// import { render, unmountComponentAtNode } from 'react-dom';
// import { act } from 'react-dom/test-utils';

// let container = null;
// beforeEach(() => {
//   container = document.createElement("div");
//   document.body.appendChild(container);
// })

// afterEach(() => {
//   unmountComponentAtNode(container);
//   container.remove();
//   container = null;
// })

// it('renders the Ratings and Reviews component', () => {
//   act(() => {
//     render(<RR />, container);
//   })
//   expect(container.textContent).toBe("Ratings and Reviews");
// });

describe('RR', () => {
  test('renders RR component', () => {
    render(<RR />);
    screen.debug();
  });
});
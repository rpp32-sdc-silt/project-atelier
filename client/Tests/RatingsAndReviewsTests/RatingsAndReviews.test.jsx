/*
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';

import RatingsAndReviews from '../../src/Components/RatingsAndReviews/RatingsAndReviews';
import IndividualReviewTile from '../../src/Components/RatingsAndReviews/IndividualReviewTile';
import NewReview from '../../src/Components/RatingsAndReviews/NewReview';
import ProductBreakdown from '../../src/Components/RatingsAndReviews/ProductBreakdown';
import RatingBreakdown from '../../src/Components/RatingsAndReviews/RatingBreakdown';

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

describe('RatingsAndReviews', () => {
  test('renders RatingsAndReviews component', () => {
    render(<RatingsAndReviews />);
    // screen.debug();
  });
});

describe('IndividualReviewTile', () => {
  test('renders IndividualReviewTile', () => {
    render(<IndividualReviewTile />);
  })
})

describe('NewReview', () => {
  test('renders NewReview', () => {
    render(<NewReview />);
  })
})

describe('ProductBreakDown', () => {
  test('renders ProductBreakDown', () => {
    render(<ProductBreakDown />);
  })
})

describe('RatingBreakdown', () => {
  test('renders RatingBreakdown', () => {
    render(<RatingBreakdown />);
  })
})
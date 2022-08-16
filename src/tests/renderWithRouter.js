import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';

function renderWithRouter(componentRender) {
  const history = createMemoryHistory();
  return ({
    ...render(
      <Router history={ history }>
        { componentRender }
      </Router>,
    ),
    history,
  });
}

export default renderWithRouter;

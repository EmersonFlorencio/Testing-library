import React from 'react';
import { screen } from '@testing-library/react';
import NotFound from '../pages/NotFound';
import renderWithRouter from './renderWithRouter';

describe('Testando o Componete NotFound', () => {
  test('Se a pagina contem um H2 com o texto Page requested not found', () => {
    renderWithRouter(<NotFound />);

    const title = screen.getByRole('heading', { name: /Page requested not found/i,
      level: 2 });

    expect(title).toBeInTheDocument();
  });

  test('Se mostra a imagem https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif', () => {
    renderWithRouter(<NotFound />);

    const imgUrl = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
    const altImg = screen
      .getByAltText(/Pikachu crying because the page requested was not found/i);

    expect(altImg).toHaveAttribute('src', imgUrl);
  });
});

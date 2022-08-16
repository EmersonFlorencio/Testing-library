import React from 'react';
import { screen } from '@testing-library/react';
import About from '../pages/About';
import renderWithRouter from './renderWithRouter';

describe('Testando o componente About', () => {
  test('Se a página contém um heading h2 com o texto About Pokédex:',
    () => {
      renderWithRouter(<About />);

      const title = screen.getByRole('heading', { name: /About Pokédex/i, level: 2 });

      expect(title).toBeInTheDocument();
    });

  test('Se a página contém dois parágrafos com texto sobre a Pokédex:',
    () => {
      renderWithRouter(<About />);
      const firstP = screen.getByText(/This application simulates a Pokédex,/i);
      const secondP = screen.getByText(/One can filter Pokémons by type,/i);

      expect(firstP).toBeInTheDocument();
      expect(secondP).toBeInTheDocument();
    });

  test('Se a página contém a seguinte imagem de uma Pokédex:',
    () => {
      renderWithRouter(<About />);
      const image = screen.getByRole('img');
      const src = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';

      expect(image).toHaveAttribute('src', src);
    });
});

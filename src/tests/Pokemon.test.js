import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Teste o componente Pokemon', () => {
  test('Teste se existe um ícone de estrela nos pokémons favoritados:', () => {
    renderWithRouter(<App />);
    const moreDetails = screen.getByRole('link', { name: /more details/i });
    expect(moreDetails).toBeInTheDocument();

    userEvent.click(moreDetails);

    const pokemonFavorito = screen.getByLabelText(/Pokémon favoritado?/i);
    expect(pokemonFavorito).toBeInTheDocument();

    userEvent.click(pokemonFavorito);

    const imgFavorita = screen.getByAltText(/pikachu is marked as favorite/i);
    expect(imgFavorita.src).toContain('/star-icon.svg');
  });

  test('A imagem do pokémon deve ser exibida.', () => {
    renderWithRouter(<App />);
    const pikachuImg = screen.getByAltText(/pikachu sprite/i);
    expect(pikachuImg.src).toContain('https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
  });

  test('O tipo correto do pokémon deve ser mostrado na tela;', () => {
    renderWithRouter(<App />);
    const type = screen.getByTestId('pokemon-type');
    expect(type).toHaveTextContent(/Electric/i);
  });
});

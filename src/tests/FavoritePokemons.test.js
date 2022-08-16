import React from 'react';
import { screen } from '@testing-library/react';
import FavoritePkemons from '../pages/FavoritePokemons';
import renderWithRouter from './renderWithRouter';

describe('Testando o Componente Favorite Pokemons', () => {
  test('Se a mensagem "no favorite pokemons found" aparece na tela', () => {
    renderWithRouter(<FavoritePkemons />);

    const favoriteFound = screen.getByText(/no favorite pokemon found/i);

    expect(favoriteFound).toBeInTheDocument();
  });
});

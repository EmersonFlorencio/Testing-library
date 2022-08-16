import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Testanto o componente Pokedex', () => {
  test('Se a pagina contem o h2 Encountered pokémons', () => {
    renderWithRouter(<App />);

    const title = screen.getByRole('heading', { name: /Encountered pokémons/i,
      level: 2 });

    expect(title).toBeInTheDocument();
  });

  // test('Se o botão contém o texto Proximo pokemon', () => {
  //   renderWithRouter(<App />);

  //   const nextButton = screen.getByRole('button', { name: /proximo pokemon/i });
  //   const pikachu = screen.getByText(/Pikachu/i);
  //   expect(pikachu).toBeInTheDocument();
  //   userEvent.click(nextButton);
  //   const charmander = screen.getByText(/Charmander/i);
  //   expect(charmander).toBeInTheDocument();

  //   expect(nextButton).toBeInTheDocument();
  // });

  test('Se ao clicar no botão Proximo Pokemon, mostar um pokemon por vez', () => {
    renderWithRouter(<App />);

    const nextButton = screen.getByRole('button', {
      name: /Próximo pokémon/i,
    });
    const pikachu = screen.getByText(/Pikachu/i);
    expect(pikachu).toBeInTheDocument();
    userEvent.click(nextButton);
    const charmander = screen.getByText(/Charmander/i);
    expect(charmander).toBeInTheDocument();
    userEvent.click(nextButton);
    const caterpie = screen.getByText(/Caterpie/i);
    expect(caterpie).toBeInTheDocument();
  });

  test('é exibido o próximo pokémon da lista quando o botão Próximo pokémon é clicado:',
    () => {
      const { getByText } = renderWithRouter(<App />);
      const nextPokemon = screen.getByRole('button',
        { name: /Próximo pokémon/i });
      const Pikachu = getByText('Pikachu');
      expect(Pikachu).toBeInTheDocument();
      userEvent.click(nextPokemon);
      const Charmander = getByText('Charmander');
      expect(Charmander).toBeInTheDocument();
      userEvent.click(nextPokemon);
      userEvent.click(nextPokemon);
      userEvent.click(nextPokemon);
      userEvent.click(nextPokemon);
      userEvent.click(nextPokemon);
      userEvent.click(nextPokemon);
      userEvent.click(nextPokemon);
      const Dragonair = getByText('Dragonair');
      expect(Dragonair).toBeInTheDocument();
      userEvent.click(nextPokemon);
      expect(Pikachu).toBeInTheDocument();
    });

  test('Teste se a Pokédex tem os botões de filtro', () => {
    renderWithRouter(<App />);
    const maxNumber = 7;
    const dataId = screen.getAllByTestId('pokemon-type-button');
    expect(dataId.length).toBe(maxNumber);

    const nomesBtn = ['Electric', 'Fire', 'Bug', 'Poison', 'Psychic', 'Normal', 'Dragon'];
    nomesBtn.forEach((i) => {
      const nomeBtn = screen.getByRole('button', { name: i });
      expect(nomeBtn).toBeVisible();
    });
  });

  test('Teste se a Pokédex contém um botão para resetar o filtro:', () => {
    renderWithRouter(<App />);
    const btnAll = screen.getByRole('button', { name: /all/i });
    expect(btnAll).toBeInTheDocument();
    userEvent.click(btnAll);
    const pokemonName = screen.getByText(/Pikachu/i);
    expect(pokemonName).toBeInTheDocument();
  });
});

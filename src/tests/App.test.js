import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Testando o Componente App', () => {
  test('Se renderiza no topo da pagina link Home na barra de navegação', () => {
    renderWithRouter(<App />);

    const navHome = screen.getByRole('link', { name: /home/i });
    const navFavPokemon = screen.getByRole('link', { name: /favorite pokémons/i });
    const navAbout = screen.getByRole('link', { name: /about/i });

    expect(navHome).toBeInTheDocument();
    expect(navAbout).toBeInTheDocument();
    expect(navFavPokemon).toBeInTheDocument();
  });

  test('Se redireciona para a pagina Home', () => {
    const { history } = renderWithRouter(<App />);
    const home = screen.getByRole('link', { name: /Home/i });

    expect(home).toBeInTheDocument();

    userEvent.click(home);
    const { pathname } = history.location;

    expect(pathname).toBe('/');
  });

  test('Se redireciona para a pagina About', () => {
    const { history } = renderWithRouter(<App />);
    const about = screen.getByRole('link', { name: /about/i });
    expect(about).toBeInTheDocument();

    userEvent.click(about);
    const { pathname } = history.location;

    expect(pathname).toBe('/about');
  });

  test('Se redireciona para a pagina Favorites Pokemon', () => {
    const { history } = renderWithRouter(<App />);
    const favPokemon = screen.getByRole('link', { name: /favorite pokémons/i });
    expect(favPokemon).toBeInTheDocument();

    userEvent.click(favPokemon);
    const { pathname } = history.location;

    expect(pathname).toBe('/favorites');
  });

  test('Se redireciona para a pagina Not Found', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/ffjdjedf');
    const notFound = screen.getByText(/Page requested not found/i);

    expect(notFound).toBeInTheDocument();
  });
});

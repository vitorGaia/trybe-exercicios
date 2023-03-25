// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

afterEach(() => jest.clearAllMocks());

it('fetches a joke', async () => {
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  global.fetch = jest.fn(async () => ({
    json: async () => joke
  }));

  /* global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(joke),
  })) */

  /* jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(joke),
  }); */

  render(<App />);
  const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');

  expect(renderedJoke).toBeInTheDocument();
  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(global.fetch).toHaveBeenCalledWith(
    "https://icanhazdadjoke.com/",
    {"headers": {"Accept": "application/json"}}
  );
});

it('é feito um novo fetch ao clickar no botão', async () => {
  const joke1 = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  const joke2 = {
    id: 'cedcsqw31dxsw',
    joke: 'lau',
    status: 200,
  };

  jest.spyOn(global, 'fetch');

  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValueOnce(joke1),
  });

  render(<App />);

  const newJoke = screen.getByRole('button');

  expect(await screen.findByText(joke1.joke)).toBeInTheDocument();
  expect(screen.queryByText(joke2.joke)).not.toBeInTheDocument();
  expect(global.fetch).toBeCalledTimes(1);

  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(joke2),
  });

  userEvent.click(newJoke);

  expect(await screen.findByText(joke2.joke)).toBeInTheDocument();
  expect(screen.queryByText(joke1.joke)).not.toBeInTheDocument();
  expect(global.fetch).toBeCalledTimes(2);
})
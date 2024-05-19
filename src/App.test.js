import { render, screen } from '@testing-library/react';
import App from './App';
describe('tests #5' , () =>{
test('image', () => {
  render(<App />);
  const image = screen.getByRole('img')
  expect(image).toBeInTheDocument()
});

test('nickname', () => {
  render(<App />);
  const nickname = screen.getByText('Rost')
  expect(nickname).toBeInTheDocument()
});

test('dates', async () => {
  render(<App />);
  const regDate = await screen.findByText('Участник с 08.08.2021')
  expect(regDate).toBeInTheDocument()

  const birthDate = await screen.findByText('Дата рождения: 29.09.2009')
  expect(birthDate).toBeInTheDocument()
});

test('information all', () => {
  render(<App />);
  const alls = screen.getByText('Связь: rost.khv@yandex.ru / +7 996 388-11-48')
  expect(alls).toBeInTheDocument()
});
}
)
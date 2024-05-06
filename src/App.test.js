import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/電話番号を入力してください/i);
  expect(linkElement).toBeInTheDocument();
});

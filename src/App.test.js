import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio hero', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /Aman Ingle/i })).toBeInTheDocument();
  expect(screen.getAllByText(/Associate Engineer/i).length).toBeGreaterThan(0);
});

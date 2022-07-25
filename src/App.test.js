import ProdukForm from './Components/InfoProduk/ProdukForm';
import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';

test("notif component", () => {
  render(<ProdukForm />);
  const linkElement = screen.getByText(/Harga Produk/i);
  expect(linkElement).toBeInTheDocument();
});
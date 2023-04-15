import { render, screen } from '@testing-library/react';
import App from './App';


test('renders `parent folder` on rendering the app',()=>{
  render(<App />);
   const linkElement = screen.getByText(/root/i);
   expect(linkElement).toBeInTheDocument();
})
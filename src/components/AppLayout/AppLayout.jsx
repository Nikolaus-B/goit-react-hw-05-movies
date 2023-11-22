import { Outlet } from 'react-router-dom';
import { GlobalStyle } from '../GlodalStyle';
import { Header, HeaderLink, HeaderList } from './AppLayout.styled';
import { Toaster } from 'react-hot-toast';

export const AppLayout = () => {
  return (
    <div>
      <Header>
        <nav>
          <HeaderList>
            <li>
              <HeaderLink to="/">Home</HeaderLink>
            </li>
            <li>
              <HeaderLink to="/movies">Movies</HeaderLink>
            </li>
          </HeaderList>
        </nav>
      </Header>

      <main>
        <Outlet />
      </main>
      <GlobalStyle />
      <Toaster />
    </div>
  );
};

import { Outlet } from 'react-router-dom';
import { GlobalStyle } from '../GlodalStyle';
import { Header, HeaderLink, HeaderList } from './AppLayout.styled';
import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';

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
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <GlobalStyle />
      <Toaster />
    </div>
  );
};

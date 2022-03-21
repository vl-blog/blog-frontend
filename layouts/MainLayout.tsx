import { FC } from 'react';
import Header from '../components/Header/Header';

const MainLayout: FC = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <footer>footer</footer>
    </>
  );
};

export default MainLayout;

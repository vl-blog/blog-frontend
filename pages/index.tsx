import type { NextPage } from 'next';
import MainLayout from '../layouts/MainLayout';
import BlogSection from '../components/BlogSection/BlogSection';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <BlogSection title='Arduino' />
    </MainLayout>
  );
};

export default Home;

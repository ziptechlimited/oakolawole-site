import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import PracticeAreas from '@/components/home/PracticeAreas';
import AboutPreview from '@/components/home/AboutPreview';
import Achievements from '@/components/home/Achievements';
import LatestArticles from '@/components/home/LatestArticles';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <PracticeAreas />
      <AboutPreview />
      <Achievements />
      <LatestArticles />
    </Layout>
  );
};

export default Index;

import FeaturedCard from './components/FeaturedCard';
import AiTools from './components/AITools';
import Header from './components/Header';
import Hero from './components/Hero';
import AiBanner from './components/AiBanner';
import Post from './components/Post';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <FeaturedCard />
      <AiTools />
      <AiBanner />
      <Post />
      <Footer />
    </div>
  );
}

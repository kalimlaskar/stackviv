import Featured from './components/Featured';
import AiTools from './components/AITools';
import Header from './components/Header';
import Hero from './components/Hero';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Featured />
      <AiTools />
    </div>
  );
}

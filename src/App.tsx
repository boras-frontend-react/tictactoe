import { Game } from '@src';
import { Footer, Header } from '@components';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-primary via-secondary to-accent text-primary">
      <Header />
      <main className="flex-1 flex">
        <Game />
      </main>
      <Footer />
    </div>
  );
}

export default App;

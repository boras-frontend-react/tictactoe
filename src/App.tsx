import { Game } from '@src';
import { Footer } from '@components';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-green-800 to-green-500">
      <main className="flex-1 flex flex-col">
        <Game />
      </main>
      <Footer />
    </div>
  );
}

export default App;

import {Header} from './components/header/header';
import {Footer} from './components/footer/footer';
import "./app.css"
import { Article } from './components/article/article';

function App() {
  return (
    <div>
      <Header />
      <Article/>
      <Article/>
      <Footer />
    </div>
  );
}

export default App;

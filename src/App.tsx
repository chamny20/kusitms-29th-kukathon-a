import Router from './router/router';
import { Toaster } from 'react-hot-toast';
import { GlobalStyle } from './style/global';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
      <Toaster />
    </>
  );
}

export default App;

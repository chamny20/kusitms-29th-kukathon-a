import Header from '../components/common/Header';
import { notify } from '../hooks/notify';

export const MainPage = () => {
  return (
    <>
      <Header />
      hello world
      <h2>안녕하세요</h2>
      <div style={{ fontWeight: 'bold' }}>hihiihihi</div>
      <button onClick={() => notify({ text: 'hi', icon: '🤍' })}>Toast</button>
    </>
  );
};

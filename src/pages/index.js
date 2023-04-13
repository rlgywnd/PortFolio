import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div>여기는 Home</div>
      <div>
        <Link to={'/main'}>Main으로 가기</Link>
      </div>
    </>
  );
};

export default Home;

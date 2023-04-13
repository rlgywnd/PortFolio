import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <>
      <div>여기는 메인 페이지!</div>
      <Link to={'/'}>Home으로 가기</Link>
    </>
  );
};

export default Main;

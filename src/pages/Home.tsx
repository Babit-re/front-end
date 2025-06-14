import { FaHome } from 'react-icons/fa';

import MainLayout from '../components/layout/Main';
import Button from '../components/ui/Button';

const Home = () => {
  return (
    <MainLayout>
      <div className="mb-4">
        <h1 className="flex items-center space-x-1">
          <FaHome />
          <span>홈 페이지</span>
        </h1>
        <p className="text-xs text-gray-400">React Icon 사용 예시</p>
      </div>

      <div>
        <Button color="gray" width="w-28" textSize="text-sm">
          취소하기
        </Button>
        <Button color="yellow" width="w-28" textSize="text-sm">
          등록하기
        </Button>
        <p className="text-xs text-gray-400 mt-1">Button 컴포넌트 사용 예시</p>
      </div>
    </MainLayout>
  );
};

export default Home;

import { useEffect, useState } from 'react';

import MainLayout from '../components/layout/Main';
import { fetchPosts } from '../features/community/community.api';
import type { Post } from '../features/community/community.types';
import PostTable from '../features/community/components/PostTable';

const Community = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const load = async () => {
      const data = await fetchPosts();
      if (data) {
        setPosts(data);
      } else {
        console.log('게시글 없음');
      }
    };

    load();
  }, []);

  return (
    <MainLayout>
      <h2 className="text-xl font-bold mb-4">커뮤니티</h2>
      <PostTable posts={posts} />
    </MainLayout>
  );
};

export default Community;

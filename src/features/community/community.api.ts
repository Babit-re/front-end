import axios from '../../lib/axios';
import type { Post } from './community.types';

export const fetchPosts = async (): Promise<Post[] | null> => {
  try {
    const res = await axios.get('/community');
    return res.data;
  } catch (error) {
    console.log('게시글 목록을 불러오지 못했습니다.', error);
    return null;
  }
};

import type { Post } from '../community.types';

interface PostTableProps {
  posts: Post[];
}

const PostTable = ({ posts }: PostTableProps) => {
  return (
    <table className="w-full border-t text-center">
      <thead className="bg-gray">
        <tr>
          <th className="py-2 font-light">번호</th>
          <th className="py-2">제목</th>
          <th className="py-2">작성자</th>
          <th className="py-2">조회수</th>
          <th className="py-2">등록일</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post) => (
          <tr key={post.id}>
            <td className="py-2">{post.id}</td>
            <td className="py-2">{post.title}</td>
            <td className="py-2">{post.writer}</td>
            <td className="py-2">{post.views}</td>
            <td className="py-2">{post.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PostTable;

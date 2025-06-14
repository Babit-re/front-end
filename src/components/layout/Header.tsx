const Header = () => {
  return (
    <header className="w-full p-7 flex justify-between items-center">
      <a href="/" className="text-2xl font-bold">Babit</a>
      <nav className="space-x-6">
        <a href="/diet">식단관리</a>
        <a href="/community">커뮤니티</a>
        <a href="/profile">마이페이지</a>
      </nav>
    </header>
  );
};

export default Header;

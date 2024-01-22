
interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {

  // Logout Session
  const logout = async () => {
    try {
      await localStorage.removeItem('persist:root')
      window.location.replace('/')
    } catch (error) {
      console.log(error);      
    }
  }


  return (
    <header className="bg-gray-800 p-4 text-white flex justify-between">
      <h1 className="text-2xl font-bold">{title}</h1>
      <div className='cursor-pointer' onClick={logout}>Log Out</div>
    </header>
  );
};

export default Header;

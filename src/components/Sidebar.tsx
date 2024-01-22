import React from 'react';

interface SidebarProps {
  menuItems: string[];
  onMenuItemClick: (item: string) => void;
  activeItem: string | null;
}

const Sidebar: React.FC<SidebarProps> = ({ menuItems, onMenuItemClick, activeItem }) => {

  return (
    <aside className="bg-gray-900 text-white w-64 min-h-screen flex flex-col">
       <nav className="flex-1">
        <ul>
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`p-3 cursor-pointer transition duration-300 ${
                activeItem === item
                  ? 'text-yellow-300 bg-gray-800'
                  : 'hover:text-gray-300 hover:bg-gray-800'
              }`}
              onClick={() => onMenuItemClick(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;

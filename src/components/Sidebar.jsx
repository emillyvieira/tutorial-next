import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="sidebar p-4 m-4 content-container h-full">
      <ul>
        <li className="mb-2"><Link href="#">Home</Link></li>
        <li className="mb-2"><Link href="#">About</Link></li>
        <li className="mb-2"><Link href="#">Services</Link></li>
        <li className="mb-2"><Link href="@/contato">Contact</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;

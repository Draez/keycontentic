import * as React from 'react';
import { Title } from './styles';

interface NavProps {
}

const Nav: React.FunctionComponent<NavProps> = (props) => {
  return (
    <div className="header px-10">

      <div className="header__content flex justify-between py-10 center">
        <h2>Logo</h2>
        <nav>
          <ul className="flex items-center">
            <li className="px-5"><a href="#">Services</a></li>
            <li className="px-5"><a href="#">Services</a></li>
            <li className="px-5"><a href="#">Services</a></li>
            <li className="px-5"><a href="#">Services</a></li>
          </ul>
        </nav>
        <button className="bg-cyan-500 text-white px-4 py-2 rounded-md ml-8">Get started</button>
      </div>

    </div>
  );

};

export default Nav;

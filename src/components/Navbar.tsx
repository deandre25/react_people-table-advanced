import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

const hasActive = ({ isActive }: { isActive: boolean }) => classNames(
  'navbar-item',
  { 'has-background-grey-lighter': isActive },
);

export const Navbar = () => {
  return (
    <nav
      data-cy="nav"
      className="navbar is-fixed-top has-shadow"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink className={hasActive} to="/">
            Home
          </NavLink>

          <NavLink
            className={hasActive}
            to="/people"
          >
            People
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
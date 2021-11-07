import { TemplateIcon } from '@heroicons/react/solid';
import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Link, NavLink } from 'react-router-dom';

const Navigation: React.FC = () => {
  const intl = useIntl();

  return (
    <nav className="sticky top-0 text-white bg-sky-500/90 dark:bg-sky-700/90 backdrop-blur">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link
          to="/"
          aria-label={intl.formatMessage({ id: 'pages.home.headline', defaultMessage: 'Home' })}
          className="rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 dark:focus-visible:ring-sky-700"
        >
          <TemplateIcon className="w-8 h-8" />
        </Link>
        <div className="flex gap-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-4 py-2 rounded-md font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 dark:focus-visible:ring-sky-700 ${
                isActive ? 'bg-white/90 text-sky-500 dark:text-sky-700' : ''
              }`
            }
          >
            <FormattedMessage id="pages.home.headline" defaultMessage="Home" />
          </NavLink>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `px-4 py-2 rounded-md font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 dark:focus-visible:ring-sky-700 ${
                isActive ? 'bg-white/90 text-sky-500 dark:text-sky-700' : ''
              }`
            }
          >
            <FormattedMessage id="pages.settings.headline" defaultMessage="Settings" />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

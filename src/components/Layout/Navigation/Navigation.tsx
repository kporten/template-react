import { TemplateIcon } from '@heroicons/react/solid';
import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Link, NavLink } from 'react-router-dom';

const Navigation: React.FC = () => {
  const intl = useIntl();

  return (
    <nav className="sticky top-0 text-white bg-cyan-500/90 dark:bg-cyan-700/90 backdrop-blur">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link
          to="/"
          aria-label={intl.formatMessage({ id: 'pages.home.headline', defaultMessage: 'Home' })}
        >
          <TemplateIcon className="w-8 h-8" />
        </Link>
        <div className="flex">
          <NavLink
            to="/"
            exact
            className="px-4 py-2 rounded-md font-semibold"
            activeClassName="bg-white/90 text-cyan-500 dark:text-cyan-700"
          >
            <FormattedMessage id="pages.home.headline" defaultMessage="Home" />
          </NavLink>
          <NavLink
            to="/settings"
            className="px-4 py-2 rounded-md font-semibold"
            activeClassName="bg-white/90 text-cyan-500 dark:text-cyan-700"
          >
            <FormattedMessage id="pages.settings.headline" defaultMessage="Settings" />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

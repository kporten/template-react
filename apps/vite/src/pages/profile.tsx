import { UserProfile } from '@clerk/clerk-react';
import { Helmet } from 'react-helmet-async';
import { useIntl } from 'react-intl';

export default function ProfilePage() {
  const intl = useIntl();

  return (
    <>
      <Helmet>
        <title>
          {intl.formatMessage({
            id: 'pages.profile.title',
            defaultMessage: 'Profile',
          })}
        </title>
      </Helmet>
      <UserProfile />
    </>
  );
}

import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';

const EMOJIS = ['💻', '👍', '😃'];

const Hello: React.FC = () => {
  const [emoji, setEmoji] = useState(EMOJIS[0]);

  useEffect(() => {
    const timeout = setInterval(() => {
      setEmoji((state) => {
        const next = EMOJIS.indexOf(state) + 1;
        return next === EMOJIS.length ? EMOJIS[0] : EMOJIS[next];
      });
    }, 2000);

    return () => clearInterval(timeout);
  }, []);

  return (
    <>
      <FormattedMessage id="components.hello.label" defaultMessage="Hello World" />
      {` ${emoji}`}
    </>
  );
};

export default Hello;

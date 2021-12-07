import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';

type HelloProps = {
  emojis: string[];
};

const Hello: React.VFC<HelloProps> = ({ emojis }) => {
  const [emoji, setEmoji] = useState(emojis[0]);

  useEffect(() => {
    const timeout = setInterval(() => {
      setEmoji((state = '') => {
        let nextIndex = emojis.indexOf(state) + 1;
        nextIndex = nextIndex === emojis.length ? 0 : nextIndex;

        return emojis[nextIndex];
      });
    }, 2000);

    return () => clearInterval(timeout);
  }, [emojis]);

  return (
    <>
      <FormattedMessage id="components.hello.label" defaultMessage="Hello World" /> {emoji}
    </>
  );
};

export default Hello;

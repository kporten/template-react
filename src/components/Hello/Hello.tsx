import React, { useEffect, useMemo, useState } from 'react';
import { FormattedMessage } from 'react-intl';

const Hello: React.VFC = () => {
  const emojis = useMemo(() => ['💻', '👍', '😃'], []);
  const [emojiIndex, setEmojiIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setEmojiIndex((currentIndex) => {
        const nextIndex = currentIndex + 1;

        return emojis[nextIndex] ? nextIndex : 0;
      });
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [emojis]);

  return (
    <FormattedMessage
      id="components.hello.label"
      defaultMessage="Hello World {emoji}"
      values={{ emoji: emojis[emojiIndex] }}
    />
  );
};

export default Hello;

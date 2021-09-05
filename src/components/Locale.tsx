import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import { useAtom } from 'jotai';
import React from 'react';
import { FormattedMessage } from 'react-intl';

import { localeAtom, LOCALES, LOCALE_KEYS } from '../store/locale';

const Locale: React.FC = () => {
  const [locale, setLocale] = useAtom(localeAtom);

  return (
    <Listbox
      as="div"
      className="relative w-40"
      value={locale}
      onChange={setLocale}
    >
      <Listbox.Label className="sr-only">
        <FormattedMessage id="locale.label" defaultMessage="Language" />
      </Listbox.Label>
      <Listbox.Button className="relative w-full pl-3 pr-9 py-2 rounded-lg shadow-md text-left text-gray-900 bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-sky-300">
        <span className="block">{LOCALES[locale]}</span>
        <span className="absolute inset-y-0 right-0 pr-2 flex items-center pointer-events-none">
          <SelectorIcon className="w-5 h-5 text-gray-400" />
        </span>
      </Listbox.Button>
      <Transition
        as={React.Fragment}
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Listbox.Options className="absolute w-full mt-1 py-1 rounded-lg shadow-lg overflow-hidden text-base bg-white focus:outline-none">
          {LOCALE_KEYS.map((supportedLocaleKey) => (
            <Listbox.Option
              key={supportedLocaleKey}
              value={supportedLocaleKey}
              className={({ active }) =>
                `relative pl-9 pr-3 py-2 select-none cursor-pointer focus:outline-none ${
                  active ? 'bg-cyan-100 text-cyan-900' : 'text-gray-900'
                }`
              }
            >
              {({ selected }) => (
                <>
                  <span
                    className={`block ${
                      selected ? 'font-medium' : 'font-normal'
                    }`}
                  >
                    {LOCALES[supportedLocaleKey]}
                  </span>
                  {selected && (
                    <span className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                      <CheckIcon className="w-5 h-5 text-cyan-400" />
                    </span>
                  )}
                </>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Transition>
    </Listbox>
  );
};

export default Locale;

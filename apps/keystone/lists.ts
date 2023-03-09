// https://keystonejs.com/docs/config/lists

import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import {
  password,
  relationship,
  select,
  text,
  timestamp,
} from '@keystone-6/core/fields';

export const User = list({
  access: allowAll,
  fields: {
    email: text({
      validation: { isRequired: true },
      isIndexed: 'unique',
    }),
    password: password({ validation: { isRequired: true } }),
    name: text({ validation: { isRequired: true } }),
    posts: relationship({ ref: 'Post.author', many: true }),
    createdAt: timestamp({
      defaultValue: { kind: 'now' },
    }),
  },
});

export const Post = list({
  access: allowAll,
  fields: {
    title: text({ validation: { isRequired: true } }),
    publishedAt: timestamp(),
    status: select({
      options: [
        { label: 'Published', value: 'published' },
        { label: 'Draft', value: 'draft' },
      ],
      defaultValue: 'draft',
      ui: { displayMode: 'segmented-control' },
    }),
    author: relationship({ ref: 'User.posts' }),
  },
});

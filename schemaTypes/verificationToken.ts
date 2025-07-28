import {defineField} from 'sanity'

export const verificationToken = {
  name: 'verificationToken',
  title: 'Verification Token',
  type: 'document',
  fields: [
    defineField({
      name: 'owner',
      title: 'Owner',
      type: 'string',
    }),
    defineField({
      name: 'token',
      title: 'Token',
      type: 'string',
    }),
    defineField({
      name: 'expires',
      title: 'Expires',
      type: 'datetime',
    }),
  ],
}

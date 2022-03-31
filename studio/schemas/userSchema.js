export const userSchema = {
  name: 'users',
  type: 'document',
  title: 'Users',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'externalWalletAddress',
      type: 'string',
      title: 'External Wallet Address',
    },
    {
      name: 'likes',
      type: 'array',
      title: 'Likes',
      of: [{ type: 'reference', to: { type: 'users' } }],
    },
  ],
}

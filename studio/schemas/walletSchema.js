export const walletSchema = {
  name: 'internalWallets',
  type: 'document',
  title: 'Internal Wallets',
  fields: [
    {
      name: 'address',
      type: 'string',
      title: 'Address',
    },
    {
      name: 'privateKey',
      type: 'string',
      title: 'Private Key',
    },
  ],
}

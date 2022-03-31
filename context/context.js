import { createContext, useEffect, useState } from 'react'
import { useMoralis } from 'react-moralis'

export const BlockFiContext = createContext()

export const BlockFiProvider = ({ children }) => {
  const { authenticate, isAuthenticated } = useMoralis()

  const [currentAccount, setCurrentAccount] = useState('');


  useEffect(() => {
    checkWalletConnection()

    if (isAuthenticated) {
      requestUsersData(user.get('ethAddress'))
      requestCurrentUserData(user.get('ethAddress'))
    }
  }, [isAuthenticated])

  /* insert user data into sanity */

  const checkWalletConnection = async () => {
    if (isAuthenticated) {
      const address = user.get('ethAddress')
      setCurrentAccount(address)
      requestToCreateUserProfile(address, faker.name.findName())
    } else {
      setCurrentAccount('')
    }
  }

  const connectWallet = async () => {
    if (!isAuthenticated) {
      try {
        await authenticate({
          signingMessage: 'Log in using Moralis',
        })
      } catch (error) {
        console.error(error)
      }
    }
  }
  const requestToCreateUserProfile = async (walletAddress, name) => {
    try {
      await fetch(`/api/createUser`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userWalletAddress: walletAddress,
          name: name,
        }),
      })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <BlockFiContext.Provider
      value={{
        connectWallet,
      }}
    >
      {children}
    </BlockFiContext.Provider>
  )
}

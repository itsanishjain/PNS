import Coins from '../components/coins'
import Header from '../components/header'
// import Modal from '../components/modal'
import Portfolio from '../components/portfolio'
// import { useMoralis } from "react-moralis"

export default function Home() {
  // const { isAuthenticated } = useMoralis()
  // console.log(isAuthenticated)
  // if (!isAuthenticated) return <Modal />

  return (
    <div>
      <Header />
      <Portfolio />
      <br />
      <Coins />
    </div>
  )
}

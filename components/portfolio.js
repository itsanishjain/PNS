import Graph from './graph'
import Image from 'next/image'
import btc from '../assets/btc.png'
import usdt from '../assets/usdt.png'

const styles = {
  container: `flex items-center justify-between border bg-white p-10 rounded-md mb-2`,
  mainView: `h-full flex items-center justify-between max-w-screen-2xl m-auto pt-3`,
  tabButton: `text-gray-300 border mr-2 w-10 rounded-md h-10 flex items-center justify-center cursor-pointer hover:border-blue-700 hover:text-blue-700`,
}

const Portfolio = () => {
  return (
    <div className={styles.mainView}>
      <div className='flex'>
        <div className='w-1/3'>
          <div className={styles.container}>
            <div>
              <p className='mb-3'>Wallet</p>
              <p className='mb-3'>Balance</p>
              <p className='tex text-2xl'>$0.00</p>
            </div>
            <p>0 Active Crypto Balances</p>
          </div>

          <div className={styles.container}>
            <div>
              <p className='mb-3'>Interest Account</p>
              <p>Balance</p>
              <p className='tex text-2xl mb-3'>$0.00</p>
              <p>Total Interest Paid</p>
              <p className='tex text-2xl'>$0.00</p>
            </div>
            <div>
              <div className='flex items-center'>
                <div>
                  <Image src={btc} alt='' width={30} height={30} />
                </div>
                <div className='-ml-3'>
                  <Image src={usdt} alt='' width={30} height={30} />
                </div>
              </div>
              <p>2 Active Crypto Balances</p>
              <p>Accrued Interest</p>
              <p className='tex text-2xl'>$0.30</p>
            </div>
          </div>

          <div className={styles.container}>
            <div>
              <p className='mb-3 font-medium'>Loans</p>
              <p>
                lorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem
                ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem
                ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsum
              </p>
              <p className='mt-3 text-blue-600 cursor-pointer font-medium'>
                Borrow now
              </p>
            </div>
          </div>
        </div>
        <div className='p-10 ml-2 rounded-md bg-white border w-2/3'>
          <div>
            <p>Total Assets Value</p>
            <p className='tex text-4xl font-bold'>$0.00</p>
            <p className='mb-5'>
              <span className='text-red-600'>- $4.89 (-3.55%)</span> 1 Month
              Change{' '}
            </p>
            <Graph />
          </div>
          <div className='flex items-center w-full justify-end'>
            <div className={styles.tabButton}>1M</div>
            <div className={styles.tabButton}>3M</div>
            <div className={styles.tabButton}>6M</div>
            <div className={styles.tabButton}>12M</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio

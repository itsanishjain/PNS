import TableHeader from './table/tableHeader'
import TableRow from './table/tableRow'

const styles = {
  mainView: `max-w-screen-2xl m-auto`,
  // container: `flex items-center justify-between mt-5 border bg-white p-10 rounded-md mb-2 w-full`,
  // mainView: `h-full flex items-center justify-between max-w-screen-2xl m-auto pt-3`
}

const Coins = () => {
  return (
    <div className={styles.mainView}>
      <div>
        <p className='font-medium'>Markets</p>
        <div className='w-full bg-white p-5 border rounded-md mt-5'>
          <table className='w-full'>
            <TableHeader />
            <br />
            <TableRow
              name='Bitcoin'
              symbol='BTC'
              price='41,025.79'
              hourlyChange='0.99'
              apy='5.00'
            />
            <TableRow
              name='Bitcoin'
              symbol='BTC'
              price='41,025.79'
              hourlyChange='0.99'
              apy='5.00'
            />
            <TableRow
              name='Bitcoin'
              symbol='BTC'
              price='41,025.79'
              hourlyChange='0.99'
              apy='5.00'
            />
            <TableRow
              name='Bitcoin'
              symbol='BTC'
              price='41,025.79'
              hourlyChange='0.99'
              apy='5.00'
            />
            <TableRow
              name='Bitcoin'
              symbol='BTC'
              price='41,025.79'
              hourlyChange='0.99'
              apy='5.00'
            />
            <TableRow
              name='Bitcoin'
              symbol='BTC'
              price='41,025.79'
              hourlyChange='0.99'
              apy='5.00'
            />
            <TableRow
              name='Bitcoin'
              symbol='BTC'
              price='41,025.79'
              hourlyChange='0.99'
              apy='5.00'
            />
            <TableRow
              name='Bitcoin'
              symbol='BTC'
              price='41,025.79'
              hourlyChange='0.99'
              apy='5.00'
            />
          </table>
        </div>
      </div>
    </div>
  )
}

export default Coins

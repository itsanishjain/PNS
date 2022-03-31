import Image from 'next/image'
import btc from '../../assets/btc.png'

const styles = {
  th: `text-left font-medium py-3`,
  symbol: `text-gray-400 ml-3`,
  buySellButton: `text-blue-600 text-left cursor-pointer rounded-md font-medium py-3 border border-gray-100 h-10 flex items-center justify-center`,
  greenText: `text-left font-medium py-3 text-green-500`,
}

const TableRow = ({ name, symbol, price, hourlyChange, apy }) => {
  return (
    <tbody className='border-gray-200 border-b'>
      <tr>
        <th className={styles.th}>
          <div className='flex items-center'>
            <Image src={btc} alt='' width={30} height={30} />
            <p className='ml-3'>{name}</p>
            <span className={styles.symbol}>{symbol}</span>
          </div>
        </th>
        <th className={styles.th}>${price}</th>
        <th className={styles.greenText}>{hourlyChange}%</th>
        <th className={styles.th}>{apy}%</th>
        <th className={styles.buySellButton}>Buy/Sell</th>
      </tr>
    </tbody>
  )
}

export default TableRow

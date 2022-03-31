import { Help } from '../../assets/svg/help'

const styles = {
  th: `text-left font-medium`,
}

const TableHeader = () => {
  return (
    <tbody>
      <tr>
        <th className={styles.th}>Assets</th>
        <th className={styles.th}>Price</th>
        <th className={styles.th}>24h Change</th>
        <th className={styles.th}>
          <div className='flex items-center'>
            <p className='mr-2'>Interest Account APY</p> <Help />{' '}
          </div>
        </th>
        <th className={styles.th}>Trade</th>
      </tr>
    </tbody>
  )
}

export default TableHeader

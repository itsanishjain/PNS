import { DropDown } from '../assets/svg/dropDown'
import { Logo } from '../assets/svg/logo'

const styles = {
  headerLink: `ml-10 h-20 flex items-center cursor-pointer`,
  activeLink: `bg-gray-900 flex items-center border-b-4 border-blue-600`,
  avatar: `bg-black text-white h-10 w-10 flex items-center justify-center rounded-full ml-5`,
}

const Header = () => {
  return (
    <div className='bg-white h-20 border-b'>
      <div className='h-full flex items-center justify-between max-w-screen-2xl m-auto'>
        <div className='flex items-center'>
          <Logo />
          <div className='flex ml-10'>
            <div className={[styles.headerLink, styles.activeLink]}>
              Dashboard
            </div>
            <div className={styles.headerLink}>
              Accounts <div className='m-1' /> <DropDown />{' '}
            </div>
            <div className={styles.headerLink}>Fund</div>
            <div className={styles.headerLink}>Withdraw</div>
            <div className={styles.headerLink}>Trade</div>
            <div className={styles.headerLink}>Borrow</div>
          </div>
        </div>
        <div className='flex items-center'>
          <button className='bg-blue-600 text-white py-2 px-3 rounded-md'>
            Refer a friend
          </button>
          <div className={styles.avatar}>DR </div>
          <div className='m-1' /> <DropDown />
        </div>
      </div>
    </div>
  )
}

export default Header

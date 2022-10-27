import { useAppContext } from '../context/context'
import style from '../styles/Header.module.css'
import UserCard from './UserCard'
import ConnectWalletBtn from './ConnectWalletBtn'
const Header = () => {
  const { address, connectWallet } = useAppContext()
  return (
    <div className={style.wrapper}>
      <div className={style.title}>Lottery DAPP 💰</div>
      {!address ? (
        <ConnectWalletBtn connectWallet={connectWallet} />
      ) : (
        <UserCard address={address} />
      )}
    </div>
  )
}
export default Header
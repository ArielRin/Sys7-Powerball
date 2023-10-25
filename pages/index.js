import Header from '../components/Header'
import LotteryCard from '../components/LotteryCard'
import LatestWinners from '../components/LatestWinners'
import Jackpot from '../components/Jackpot'
import Table from '../components/Table'

import style from '../styles/Home.module.css'
export default function Home() {
  return (
    <div className={style.wrapper}>
      <Header />
      <LotteryCard />
      <Jackpot />
      <LatestWinners />
    </div>
  )
}

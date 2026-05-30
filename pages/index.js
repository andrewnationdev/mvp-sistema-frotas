import { useCallback, useEffect, useState } from 'react'
import Button from '../components/Button'
import ClickCount from '../components/ClickCount'
import styles from '../styles/home.module.css'
import DashboardPage from './dashboard/dashboard'
import HeaderComponent from '../components/layout/header/header.component'
import FooterComponent from '../components/layout/footer/footer.component'

function throwError() {
  console.log(
    // The function body() is not defined
    document.body()
  )
}

function Home() {
  return (
    <>
      <HeaderComponent/>
      <DashboardPage/>
      <FooterComponent/>
    </>
  )
}

export default Home

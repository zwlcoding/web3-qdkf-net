'use client';
import Link from "next/link"
import styles from "./styles.module.css"
import {ConnectButton, Connector} from '@ant-design/web3'


const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.title}>web3-waylon</div>
            <div className={styles.nav}>
                <Link href={'/coin'}>cion</Link>
                <Link href={'/airdrop'}>airdrop</Link>
                <Link href={'/about'}>about</Link>
            </div>
            <div className={styles.account}>
                <Connector modalProps={{
                    mode: 'simple'
                }}>
                    <ConnectButton type={'text'} />
                </Connector>
            </div>
        </div>
    )
}

export default Header

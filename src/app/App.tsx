'use client'

import {WagmiWeb3ConfigProvider, WalletConnect} from "@ant-design/web3-wagmi";
import {hardhat, mainnet} from "wagmi/chains";
import Header from "@/components/Header";
import {AntdRegistry} from "@ant-design/nextjs-registry";
import {QueryClient} from "@tanstack/react-query";
import {createConfig, http} from "wagmi";
import {walletConnect} from "wagmi/connectors";

const queryClient = new QueryClient();

const config = createConfig({
    chains: [mainnet, hardhat],
    transports: {
        [mainnet.id]: http(),
        [hardhat.id]: http()
    },
    connectors: [
        walletConnect({
            showQrModal: false,
            projectId: '3a6b4adb38c6e55e78150988ce9c9e6c'
        })
    ]
})
const App = ({
                 children,
             }: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <AntdRegistry>
            <WagmiWeb3ConfigProvider
                eip6963={{
                    autoAddInjectedWallets: true
                }}
                ens
                chains={[mainnet,hardhat]}
                wallets={[
                    WalletConnect()
                ]}
                config={config}
                queryClient={queryClient}
            >
                <Header/>
                {children}
            </WagmiWeb3ConfigProvider>
        </AntdRegistry>
    )
}

export default App


import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {http} from 'wagmi'
import { bsc, base, mainnet, polygon } from 'wagmi/chains';

export const config = getDefaultConfig({
    appName: 'web-qdkf-net',
    projectId: '3a6b4adb38c6e55e78150988ce9c9e6c',
    chains: [mainnet, bsc, polygon, base],
    transports: {
        [mainnet.id]: http(`https://api.zan.top/node/v1/eth/mainnet/052f670653874e699da79df7d57755bf`),
        [bsc.id]: http(`https://api.zan.top/node/v1/bsc/mainnet/052f670653874e699da79df7d57755bf`),
        [polygon.id]: http(`https://api.zan.top/node/v1/polygon/mainnet/052f670653874e699da79df7d57755bf`),
        [base.id]: http(`https://api.zan.top/node/v1/base/mainnet/052f670653874e699da79df7d57755bf`),
        // [hardhat.id]: http(`http://127.0.0.1:8545/`)
    }

});

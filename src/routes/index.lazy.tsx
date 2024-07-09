import {createLazyFileRoute} from '@tanstack/react-router'
import {useAccount} from "wagmi"
import {useLocalStorage} from "react-use";

// import { parseEther } from "viem";

const Index = () => {
    const {address} = useAccount();
    const [jwt_token] = useLocalStorage('__ww_jwt_token');
    // const result = useReadContract({
    //     abi: [
    //         {
    //             type: 'function',
    //             name: 'balanceOf',
    //             stateMutability: 'view',
    //             inputs: [{name: 'account', type: 'address'}],
    //             outputs: [{type: 'uint256'}],
    //         },
    //     ],
    //     address: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
    //     functionName: 'balanceOf',
    //     args: [address as `0x${string}`],
    // });
    // const {writeContract} = useWriteContract();
    // const mintNFT = () => {
    //     writeContract(
    //         {
    //             abi: [
    //                 {
    //                     type: "function",
    //                     name: "mint",
    //                     stateMutability: "payable",
    //                     inputs: [
    //                         {
    //                             internalType: "uint256",
    //                             name: "quantity",
    //                             type: "uint256",
    //                         },
    //                     ],
    //                     outputs: [],
    //                 },
    //             ],
    //             address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
    //             functionName: "mint",
    //             args: [BigInt(1)],
    //             value: parseEther("0.01"),
    //         },
    //         {
    //             onSuccess: () => {
    //                 console.log('Mint success')
    //             },
    //             onError: (err) => {
    //                 console.log('Mint Error', err)
    //             },
    //         }
    //     );
    // }
    return (
        <div>
            welcome home
            <h1>{address}</h1>
            <h2>{jwt_token as string}</h2>
            {/*<h2>NFT total: {result?.data?.toString()}</h2>*/}

            {/*<button className="btn" onClick={mintNFT}>*/}
            {/*    /!*<span className="loading loading-spinner"></span>*!/*/}
            {/*    mint*/}
            {/*</button>*/}
        </div>
    )

}

export const Route = createLazyFileRoute('/')({
    component: Index
})
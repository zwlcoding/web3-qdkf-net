import {createLazyFileRoute} from '@tanstack/react-router'
import {useAccount, useReadContract, useWriteContract} from "wagmi"
import { parseEther } from "viem";

const Index = () => {
    const {address} = useAccount();
    const result = useReadContract({
        abi: [
            {
                type: 'function',
                name: 'balanceOf',
                stateMutability: 'view',
                inputs: [{name: 'account', type: 'address'}],
                outputs: [{type: 'uint256'}],
            },
        ],
        address: '0xEcd0D12E21805803f70de03B72B1C162dB0898d9',
        functionName: 'balanceOf',
        args: [address as `0x${string}`],
    });
    const {writeContract} = useWriteContract();
    const mintNFT = () => {
        writeContract(
            {
                abi: [
                    {
                        type: "function",
                        name: "mint",
                        stateMutability: "payable",
                        inputs: [
                            {
                                internalType: "uint256",
                                name: "quantity",
                                type: "uint256",
                            },
                        ],
                        outputs: [],
                    },
                ],
                address: "0xEcd0D12E21805803f70de03B72B1C162dB0898d9",
                functionName: "mint",
                args: [BigInt(1)],
                value: parseEther("0.01"),
            },
            {
                onSuccess: () => {
                    console.log('Mint success')
                },
                onError: (err) => {
                    console.log('Mint Error', err)
                },
            }
        );
    }
    return (
        <div>
            <h1>{address}</h1>
            <h2>{result?.data?.toString()}</h2>
            <div onClick={mintNFT}>mint</div>
        </div>
    )

}

export const Route = createLazyFileRoute('/')({
    component: Index
})
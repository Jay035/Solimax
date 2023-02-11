import { ethers } from "ethers";
import { createClient, configureChains, mainnet } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'

const { provider } = configureChains([fantom, fantomTestnet, optimism, optimismGoerli, localhost
], [publicProvider()])

export class LauncPool {
    constructor(address) {
        this.address = address
    }
    getpoolAddress() {
        return this.address;
    }
    increaseAllowance(spender, amount) {
    }
    buyTokens(amount) {

    }
    getTierDetails() {

    }
    getPhase() {

    }
}

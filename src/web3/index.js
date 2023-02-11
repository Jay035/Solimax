import { ethers } from "ethers";
import { createClient, configureChains, mainnet } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { erc20ABI } from "wagmi";
import SolimaxLaunchPadABI from "./abi/SolimaxLaunchPad.json";
import SolimaxIDOABI from "./abi/SolimaxIDOLocking.json"
import { Tokens } from "./tokens";
import { useNetwork } from "wagmi";
import { launchPools } from "./launchPools"
const { provider, } = configureChains([fantom, fantomTestnet, optimism, optimismGoerli, localhost
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

export async function fetchByPoolByIdAndChain(id, chain) {
    return { chain, address } = launchPools.filter(e => e === id.toString())
}

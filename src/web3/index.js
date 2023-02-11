import { ethers } from "ethers";
import { createClient, configureChains, mainnet } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { erc20ABI } from "wagmi";
import SolimaxLaunchPadABI from "./abi/SolimaxLaunchPad.json";
import SolimaxIDOABI from "./abi/SolimaxIDOLocking.json"
import { Tokens } from "./tokens";
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

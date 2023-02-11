import { ethers } from "ethers";
import { createClient, configureChains, mainnet } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { erc20ABI } from "wagmi";
import SolimaxLaunchPadABI from "./abi/SolimaxLaunchPad.json";
import SolimaxIDOABI from "./abi/SolimaxIDOLocking.json"
import IERC20 from "./abi/IERC20.json"
import { Tokens } from "./tokens";
import { useNetwork } from "wagmi";
import { launchPools } from "./launchPools"
import { useSigner } from 'wagmi'




export default class LaunchPoolClass {

    constructor(address, token, tier, signer) {
        this.address = address
        this.token = token
        this.tier = tier
        this.signer = signer
    }
    getpoolAddress() {
        return this.address;
    }
    async increaseAllowance(spender, amount) {
        const contract = new ethers.Contract(this.token, IERC20.abi, this.signer);
        const tx = await contract.functions.increaseAllowance(spender.toString(), amount.toString());
        const receipt = await tx.wait();
        return receipt;
    }
    async buyTokens(amount) {
        const contract = new ethers.Contract(this.address, SolimaxLaunchPadABI, this.signer);
        const tx = await contract.functions.buyTokens(amount.toString());
        const receipt = await tx.wait();
        return receipt
    }
    async getTierDetails() {
        const contract = new ethers.Contract(this.address, SolimaxLaunchPadABI, this.signer);
        const result = await contract.callStatic.functions.tierDetails(this.tier.toString());
        return result
    }
    getPhase() {

    }
}

// export async function fetchByPoolByIdAndChain(id, chain) {
//     return { chain, address } = launchPools.filter(e => e === id.toString())
// }

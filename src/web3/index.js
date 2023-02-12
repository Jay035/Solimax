import { ethers } from "ethers";
import SolimaxLaunchPadABI from "./abi/SolimaxLaunchPad.json";
import SolimaxIDOABI from "./abi/SolimaxIDOLocking.json"
import IERC20 from "./abi/IERC20.json"


export class LaunchPoolClass {
    constructor(address, token, tier, signer, provider) {
        this.address = address
        this.token = token
        this.tier = tier
        this.signer = signer
        this.provider = provider
        this.abi = SolimaxLaunchPadABI
        this.contract = new ethers.Contract(this.address, this.abi, this.signer)
        this.contractWithProvider = new ethers.Contract(this.address, this.abi, this.provider)
    }
    getpoolAddress() {
        return this.address;
    }
    async increaseAllowance(amount) {
        const contract = new ethers.Contract(this.token, IERC20.abi, this.signer);
        const tx = await contract.functions.increaseAllowance(this.address, amount.toString());
        const receipt = await tx.wait();
        return receipt;
    }
    async buyTokens(amount) {
        const tx = await this.contract.functions.buyTokens(amount.toString());
        const receipt = await tx.wait();
        return receipt
    }
    async getTierDetails() {
        const result = await this.contractWithProvider.callStatic.tierDetails(this.tier.toString());
        console.log(result, result.toString())
        const tierDetails = {
            "maxTierCap": result[0].toString(),
            "minUserCap": result[1].toString(),
            "maxUserCap": result[2].toString(),
            "amountRaised": result[3].toString(),
            "users": result[4].toString()
        }
        return tierDetails
    }
    getPhase() {

    }
    async getSaleEnd() {
        const result = await this.contractWithProvider.callStatic.saleEnd();
        return result
    }
    async getSaleStart() {
        const result = await this.contract.functions.saleStart();
        return result.toString()
    }
    async checkAllowance(owner, spender) {
        const result = await this.contractWithProvider.functions.allowance(owner.toString(), spender.toString());
    }
}

export class StakingPoolClass {
    constructor(address, token, signer, provider) {
        this.address = address
        this.token = token
        this.signer = signer
        this.provider = provider
    }
    //allowance
    async increaseAllowance(spender, amount) {
        const contract = new ethers.Contract(this.token, IERC20.abi, this.signer);
        const tx = await contract.functions.increaseAllowance(spender.toString(), amount.toString());
        const receipt = await tx.wait();
        return receipt;
    }
    //stake
    async stake(amount) {
        const contract = new ethers.Contract(this.address, SolimaxIDOABI.abi, this.signer);
        const tx = await contract.functions.stake(amount.toString());
        const receipt = await tx.wait();
        return receipt
    }
    //withdraw
    async withDraw() {
        const contract = new ethers.Contract(this.address, SolimaxIDOABI.abi, this.signer);
        const tx = await contract.functions.withdraw();
        const receipt = await tx.wait();
        return receipt
    }
    //emergency withdraw
    async emergencyWithdraw() {
        const contract = new ethers.Contract(this.address, SolimaxIDOABI.abi, this.signer);
        const tx = await contract.functions.emergencyWithdraw();
        const receipt = await tx.wait();
        return receipt
    }
    //userDeposits
    async userDeposits(walletAddress) {
        const contract = new ethers.Contract(this.address, SolimaxIDOABI.abi, this.provider);
        return await contract.callStatic.functions.userDeposits(walletAddress);
    }
    //staked Balance
    async stakedBalance() {
        const contract = new ethers.Contract(this.address, SolimaxIDOABI.abi, this.provider);
        return await contract.callStatic.functions.stakedBalance();

    }
    //Reward Balance
    async RewardBalance() {
        const contract = new ethers.Contract(this.address, SolimaxIDOABI.abi, this.provider);
        return await contract.callStatic.functions.rewardBalance();
    }
    //total Participant
    async totalParticipant() {
        const contract = new ethers.Contract(this.address, SolimaxIDOABI.abi, this.provider);
        return await contract.callStatic.functions.totalParticipants();
    }
    //lock duration
    async lockDuration() {
        const contract = new ethers.Contract(this.address, SolimaxIDOABI.abi, this.provider);
        return await contract.functions.lockDuration();
    }
    //get all address of users in a pool
    async getAllAddress() {
        const totalNoOfPart = await this.totalParticipant()
    }
}

// export async function fetchByPoolByIdAndChain(id, chain) {
//     return { chain, address } = launchPools.filter(e => e === id.toString())
// }

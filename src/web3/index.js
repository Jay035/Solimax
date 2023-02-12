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
    async getUserAddress() {
        return await this.signer.getAddress()
    }
    async checkAllowance() {
        const contract = new ethers.Contract(this.token, IERC20.abi, this.provider);
        const result = await contract.functions.allowance(this.getUserAddress.toString(), this.address);
        return result
    }
}

export class StakingPoolClass {
    constructor(address, token, signer, provider) {
        this.address = address
        this.token = token
        this.signer = signer
        this.provider = provider
        this.contract = new ethers.Contract(this.address, SolimaxIDOABI.abi, this.signer)
        this.contractWithProvider = new ethers.Contract(this.address, SolimaxIDOABI.abi, this.provider)
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
        const tx = await this.contract.functions.stake(amount.toString());
        const receipt = await tx.wait();
        return receipt
    }
    //withdraw
    async withDraw() {
        const tx = await this.contract.functions.withdraw();
        const receipt = await tx.wait();
        return receipt
    }
    //emergency withdraw
    async emergencyWithdraw() {
        const tx = await this.contract.functions.emergencyWithdraw();
        const receipt = await tx.wait();
        return receipt
    }
    //userDeposits
    async userDeposits() {
        const user = await this.getUserAddress()
        return await this.contractWithProvider.callStatic.userDeposits(user);
    }
    //staked Balance
    async stakedBalance() {
        return await this.contractWithProvider.callStatic.stakedBalance();

    }
    //Reward Balance
    async RewardBalance() {
        return await this.contractWithProvider.callStatic.rewardBalance();
    }
    //total Participant
    async totalParticipant() {
        return await this.contractWithProvider.callStatic.totalParticipants();
    }
    //lock duration
    async lockDuration() {
        return await this.contractWithProvider.callStatic.lockDuration();
    }
    //get all address of users in a pool
    async getAllAddress() {
        return await this.contractWithProvider.callStatic.totalParticipant()
    }
    async getUserAddress() {
        return await this.signer.getAddress()
    }
    async checkAllowance() {
        const contract = new ethers.Contract(this.token, IERC20.abi, this.provider);
        const user = await this.getUserAddress()
        const result = await contract.functions.allowance(user, this.address);
        return result.toString()
    }
}

// export async function fetchByPoolByIdAndChain(id, chain) {
//     return { chain, address } = launchPools.filter(e => e === id.toString())
// }

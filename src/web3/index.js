import { ethers } from "ethers";

export class LauncPool {
    constructor(address) {
        this.address = address
    }
    getpoolAddress() {
        return this.address;
    }
}

import { BigNumber, ethers } from "ethers"
export function convertweiToEthers(amount, decimal) {
    const value = BigNumber.from(amount);
    return ethers.utils.formatUnits(value, decimal)
}
export function convertEthersToWei(amount, decimal) {
    return ethers.utils.parseUnits(amount.toString(), decimal)
}

// export async function etherToUsdt(value) {
//     const priceUrl = "https://api.coinconvert.net/convert/usdt/matic?amount=" + value.toString();
//     const poly = await axios.get(priceUrl).then((res) => {
//         return res.data.MATIC
//     })
// }
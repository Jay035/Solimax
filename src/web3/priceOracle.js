export async function convertweiToEthers(amount) {
    return (parseFloat(amount) / 1000000000000000000).toString()
}

export async function etherToUsdt(value) {
    const priceUrl = "https://api.coinconvert.net/convert/usdt/matic?amount=" + value.toString();
    const poly = await axios.get(priceUrl).then((res) => {
        return res.data.MATIC
    })
}
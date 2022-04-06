import Cors from 'cors'

const cors = Cors({
  methods: ['GET', 'HEAD'],
})

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}


async function handler(req, res) {
  await runMiddleware(req, res, cors)

  const tokenlist = {
  "networkName": [ 'Mumbai' , 'Matic TestNet' , 'Polygon PoS Chain Testnet' ],
  "chainId": 80001,
  "explorers": ['https://mumbai.polygonscan.com/'],
  'currency' : 'MATIC',
  "tokens": [
    {
      "address": "0xECd313e29b85cAf347fb832F80427602030cD3Fc",
      "name": "dTether USD",
      "symbol": "dUSDT",
      "decimals": 6,
      "logoURI": "https://cryptologos.cc/logos/tether-usdt-logo.png?v=022"
    },
    {
      "address": "0x356058b999d315Ef9F6d13f1C478591E9C667831",
      "name": "Diverse ARDX",
      "symbol": "dARDX",
      "decimals": 18,
      "logoURI": "https://ardcoin.com/wp-content/themes/ardcoin/images/logo/logo3.png"
    },
    {
      "address": "0xaB57fAf3b573B8ac1ad90255f6cF4E92DbbcCE91",
      "name": "Diverse DAI",
      "symbol": "dDAI",
      "decimals": 18,
      "logoURI": "https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.png?v=022"
    },
    {
      "address": "0x2b8920cBdDCc3e85753423eEceCd179cb9232554",
      "name": "Diverse USDC",
      "symbol": "dUSDC",
      "decimals": 6,
      "logoURI": "https://cryptologos.cc/logos/usd-coin-usdc-logo.png?v=022"
    },
    {
      "address": "0x8A250B3517AD8d59354D50af0D9be5c4Cd90F070",
      "name": "DummyToken-A",
      "symbol": "TKN-A",
      "decimals": 18,
      "logoURI": "https://faucet.dsolutions.mn/_next/image?url=https%3A%2F%2Ffaucet.dsolutions.mn%2Fdiversetoken.png&w=640&q=75"
    },
    {
      "address": "0x551181Be541f56ce6C6c13448F54Adb8eA2AB531",
      "name": "DummyToken-B",
      "symbol": "TKN-B",
      "decimals": 18,
      "logoURI": "https://faucet.dsolutions.mn/_next/image?url=https%3A%2F%2Ffaucet.dsolutions.mn%2Fdiversetoken.png&w=640&q=75"
    },
    {
      "address": "0x14cD48F91D3ca4FE9C7e2e888d68667879942A9D",
      "name": "DummyToken-C",
      "symbol": "TKN-C",
      "decimals": 18,
      "logoURI": "https://faucet.dsolutions.mn/_next/image?url=https%3A%2F%2Ffaucet.dsolutions.mn%2Fdiversetoken.png&w=640&q=75"
    },
    {
      "address": "0x76Cc59faf54D6262680049D4B5c74e7A587C8849",
      "name": "DummyToken-D",
      "symbol": "TKN-D",
      "decimals": 18,
      "logoURI": "https://faucet.dsolutions.mn/_next/image?url=https%3A%2F%2Ffaucet.dsolutions.mn%2Fdiversetoken.png&w=640&q=75"
    },
  ]
}

  res.status(200).json(tokenlist)
}

export default handler;

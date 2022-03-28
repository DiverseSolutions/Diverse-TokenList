export default function handler(req, res) {
  const tokenlist = {
  "name": "Diverse Token List",
  "timestamp": Date.now(),
  "version": {
    "major": 1,
    "minor": 0,
    "patch": 0
  },
  "tags": {},
  "logoURI": "https://www.dsolutions.mn/static/media/logo-no-text.8057f73a.png",
  "keywords": [
    "uniswap",
    "default"
  ],
  "tokens": [
    {
      "chainId": 80003,
      "address": "0xECd313e29b85cAf347fb832F80427602030cD3Fc",
      "name": "dTether USD",
      "symbol": "dUSDT",
      "decimals": 6,
      "logoURI": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFfZAu_tCWAi3Hy3H3ac-R5t9-hIherdacCXzBR4WS_jDhvH1UOnDhMqHSOBGoWLJzbDE&usqp=CAU"
    },
  ]
}

  res.status(200).json(tokenlist)
}

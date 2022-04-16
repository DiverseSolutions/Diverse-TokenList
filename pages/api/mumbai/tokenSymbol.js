import Cors from 'cors'
import { mumbaiTokenList } from '../../../constants';

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
  const { symbol } = req.query

  let foundToken = mumbaiTokenList.tokens.find((i) => i.symbol === symbol.toString())

  if(symbol == undefined){
    res.status(400).json({ error: 'symbol query parameter not found' })
  }

  if(foundToken == undefined){
    res.status(400).json({ error: 'token not found' })
  }

  res.status(200).json(foundToken)
}

export default handler;


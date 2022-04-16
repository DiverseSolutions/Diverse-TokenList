import Link from 'next/link'

export default function Home() {

  return (
    <div>
      <div className="absolute navbar">
        <div className="flex-1">
          <a className="text-xl normal-case btn btn-ghost"><span className="mr-1 text-blue-500">Diverse</span> Solutions</a>
        </div>
        <div className="flex-none">
          <ul className="p-0 menu menu-horizontal">
            <li><a href="https://dsolutions.mn/">Website</a></li>
            <li><a href="https://github.com/DiverseSolutions?q=&type=public&language=&sort=">Github</a></li>
          </ul>
        </div>
      </div>
      <div className="min-h-screen hero bg-base-200">
        <div className="text-center hero-content">
          <div className="max-w-lg">
            <h1 className="text-5xl font-bold"><span className="text-blue-600">Diverse</span> Token List 🎁</h1>
            <p className="py-6 text-xl">Easy API endpoints to retrieve json formatted token lists of every tokens we know 🎉 🥳</p>
            <div className="flex flex-col">
              <Link href="/api/mumbai/tokenlist">
                <button className="self-start w-6/12 btn btn-primary">Example Mumbai TokenList Endpoint</button>
              </Link>
              <Link href="/api/mumbai/tokenName?name=dTether%20USD">
                <button className="self-end w-6/12 my-4 text-white btn btn-warning">Example Mumbai TokenName Endpoint</button>
              </Link>
              <Link href="/api/mumbai/tokenSymbol?symbol=dUSDT">
                <button className="self-end w-6/12 text-white btn btn-success">Example Mumbai TokenSymbol Endpoint</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

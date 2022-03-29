import Link from 'next/link'

export default function Home() {

  return (
    <div>
      <div class="absolute navbar">
        <div class="flex-1">
          <a class="btn btn-ghost normal-case text-xl"><span className="mr-1 text-blue-500">Diverse</span> Solutions</a>
        </div>
        <div class="flex-none">
          <ul class="menu menu-horizontal p-0">
            <li><a href="https://dsolutions.mn/">Website</a></li>
            <li><a href="https://github.com/DiverseSolutions?q=&type=public&language=&sort=">Github</a></li>
          </ul>
        </div>
      </div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content text-center">
          <div class="max-w-lg">
            <h1 class="text-5xl font-bold"><span className="text-blue-600">Diverse</span> Token List 🎁</h1>
            <p class="py-6 text-xl">Easy API endpoints to retrieve json formatted token lists of every tokens we know 🎉 🥳</p>
            <Link href="/api/mumbai/tokenlist">
              <button class="btn btn-primary">Get Mumbai Token List</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )

}

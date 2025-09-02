import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-blue-900 text-white">
      {/* Header with token address */}
      <div className="flex justify-center pt-8 pb-16">
        <div className="flex items-center gap-4 bg-blue-800/50 rounded-full px-6 py-3 border border-blue-700">
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
            <div className="w-6 h-6 bg-green-600 rounded-full"></div>
          </div>
          <span className="text-sm font-mono text-blue-200">CA : coming soon</span>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1">
            <h1
              className="text-6xl lg:text-8xl font-bold text-white mb-8"
              style={{ fontFamily: "Comic Sans MS, cursive" }}
            >
              Welcome To WLOB WLOB
            </h1>
          </div>
          <div className="flex-shrink-0">
            <div className="w-64 h-64 lg:w-80 lg:h-80">
              <img
                src="/blue-character-suit.png"
                alt="WLOB WLOB Blue Character"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-shrink-0">
            <div className="w-64 h-64 bg-blue-600 rounded-full p-4 border-8 border-blue-500">
              <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center">
                <img
                  src="/blue-character-astronaut.png"
                  alt="WLOB WLOB Blue Astronaut"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
            </div>
          </div>

          <div className="flex-1 max-w-2xl">
            <h2 className="text-5xl font-bold mb-8 text-white" style={{ fontFamily: "Comic Sans MS, cursive" }}>
              About WLOB
            </h2>
            <p className="text-xl leading-relaxed mb-8 text-blue-100">
              WLOB WLOB isn't just another coin—it represents an entire culture, a way of connecting through humor,
              nostalgia, and shared internet heritage....Inspired by the beloved and instantly recognizable Apu Apustaja
              meme, WLOB WLOB was created not as a corporate product, but as a grassroots movement born from the purest
              parts of internet culture. It's driven by genuine frenship, collective laughter, and that chaotic,
              beautiful energy only the internet can provide.
            </p>
            <p className="text-xl leading-relaxed mb-8 text-blue-100">
              Here, there are no corporate suits, no over-polished marketing, and definitely no empty promises. Just
              memes, authentic vibes, and a tight-knit community that values connection over convention, and fun over
              formality. We're not trying to be the next big thing—we're just here to enjoy the ride together, and maybe
              shake things up along the way.
            </p>
            <p className="text-xl leading-relaxed mb-8 text-blue-100">
              So why not be part of something real? Join the swarm....
            </p>
            <p className="text-2xl font-bold mb-8 text-white">Be a fren. Be WLOB WLOB.</p>
            <Button className="bg-blue-700 hover:bg-blue-600 text-white px-8 py-3 rounded-full text-lg border-2 border-blue-600">
              Join here for inspiration
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex gap-8">
            <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center">
              <span className="text-2xl">🦅</span>
            </div>
            <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center">
              <span className="text-2xl">💎</span>
            </div>
            <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center">
              <span className="text-2xl">📱</span>
            </div>
            <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center">
              <span className="text-2xl">🐦</span>
            </div>
          </div>

          <div className="text-center lg:text-right">
            <p className="text-lg text-blue-200 mb-4">
              WLOB WLOB token is simply paying homage to a meme we all love and recognize. WLOB is a meme coin with no
              intrinsic value or expectation of financial return.
            </p>
            <p className="text-lg text-blue-200 mb-8">
              The coin is run 100% by the community and is for entertainment purposes only.
            </p>
            <div className="text-right">
              <p className="text-lg font-bold text-white">© 2025 WLOB WLOB Community.</p>
              <p className="text-lg font-bold text-white">All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

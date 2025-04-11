import brainy_waving from "../assets/brainy_waving.png"

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center w-1/2">
        <img src={brainy_waving} alt="brainy waving" className="w-1/2 mb-8"/>
        <h1 className="text-3xl font-extrabold font-merriweather-sans mb-2 text-gray-200">Hey there ! I'm Brainy</h1>
        <h2 className="text-3xl font-extrabold font-merriweather-sans mb-4 text-gray-200 w-2/3 text-center">Oops! Looks like you need my dad's permission to explore my brain. Got your access key?</h2>
      </div>
    </div>
  )
} 
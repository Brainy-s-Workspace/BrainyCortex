import brainy_waving from "../assets/brainy_waving.png"

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <img src={brainy_waving} alt="brainy waving" className="w-1/5 mb-8"/>
      <h1 className="text-4xl font-bold mb-4">Welcome to BrainyCortex</h1>
    </div>
  )
} 
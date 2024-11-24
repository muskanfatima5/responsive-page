import Navbar from "./components/navigation/nav"

function Home(){
  return(
    <div className="sm:flex">
    <Navbar />
  <div className="flex-col justify-center text-white md:flex-row">
    <div className="bg-slate-500 h-[160px] lg:h-48">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
      <div className="bg-black h-40 lg:h-48 md:w-[50%]">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
      <div className="bg-blue-600 h-40 lg:h-48 md:w-[50%]">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
      </div>
      </div>)
}export default Home
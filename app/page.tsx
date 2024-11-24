import Navbar from "./components/navigation/nav"

function Home(){
  return(
    <div className="flex md:flex-col lg:flex-col">
    <Navbar />
  <div className="bg-gray-800 flex justify-center text-white md:flex-col lg:flex-row">
    <div className="bg-slate-500 h-[160px] lg:h-48 lg:w-[33.3%]">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
      <div className="bg-black h-40 lg:h-48 md:w-[50%] lg:w-[33.3%]">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
      <div className="bg-blue-600 h-40 lg:h-48 md:w-[50%] lg:w-[33.3%]">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
      </div>
      </div>)
}export default Home
import Navbar from "./components/navigation/nav"

function Home(){
  return(
    <div className="flex md:flex-col lg:flex-col">
    <Navbar />
  <div className="bg-gray-800 flex justify-center font-bold text-white md:flex-col lg:flex-row">
    <div className="bg-slate-500 h-screen lg:h-48 lg:w-[33.3%]">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
      <div className="bg-black h-screen lg:h-48 md:w-[50%] lg:w-[33.3%]">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
      <div className="bg-blue-600 h-screen lg:h-48 md:w-[50%] lg:w-[33.3%]">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
      </div>
      </div>)
}export default Home

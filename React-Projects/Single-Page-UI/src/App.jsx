function App() {
  const boxShadow = { boxShadow: '0 0 0 1px #5a5959' }
  return (

    <>
      <nav className="px-20 py-4 flex justify-between items-center">
        <a href=""><img src="src/assets/sk-logo.svg" alt="asd" width={76} height={42} /></a>
        <ul className="flex space-x-6 font-semibold">
          <a href=""><li className="cursor-pointer hover:underline-offset-8 hover:underline">MENU</li></a>
          <a href=""><li className="cursor-pointer hover:underline-offset-8 hover:underline">LOCATION</li></a>
          <a href=""><li className="cursor-pointer hover:underline-offset-8 hover:underline">ABOUT</li></a>
          <a href=""><li className="cursor-pointer hover:underline-offset-8 hover:underline">CONTACT</li></a>
        </ul>
        <button className="btn-red">Login</button>
      </nav>

      <div className="mt-20 px-40 grid grid-cols-2">
        <div className="space-y-9">
          <h1 className="text-[108px] font-extrabold" style={{ lineHeight: 1 }}>YOUR FEET DESERVE THE BEST</h1>
          <p className="text-[#5a5959] font-semibold w-[404px]">YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
          <div className="space-x-10">
            <button className="btn-red">Shop Now</button>
            <button className="px-4 py-[6px] text-[#5a5959] font-semibold hover:bg-[#5a5959] hover:text-white transition-colors" style={boxShadow}>Category</button>
          </div>
          <div className="space-y-4">
            <span className="text-[#5a5959]">Also Available On</span>
            <div className="flex space-x-4">
              <img src="src/assets/daraz.ico" width={32} height={32} alt="" />
              <img src="src/assets/facebook.png" width={32} height={32} alt="" />
            </div>
          </div>
        </div>

        <div className="py-16">
          <img src="src/assets/item.png" width={530} alt="" />
        </div>
      </div>
    </>
  )
}

export default App

const Navbar = () => {
    return (
        <main>
            <div className="flex justify-evenly  column-gap: 20px;">
                <div className="flex gap-16 my-8 text-[20px] gap: 30% ">
                <h2 className=" font-style: italic  scroll-margin-left: -5px  text-[#FFC624]   scroll-ms-6 snap-start" >Food house</h2>
                    <a className="text-[#FFC624]">HOME</a>
                    <a>RESTAURANT</a>
                    <a>SERVICES</a>
                    <a>CART</a>
                </div>
                <p className="my-8 text-[20px]">Sign In</p>
            </div>
        </main>
    )
}
export default Navbar;
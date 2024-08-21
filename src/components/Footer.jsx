import { FaLinkedin, FaXTwitter, FaGithub, FaCopy } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-n-3  w-full py-12 space-y-16  px-6 lg:px-32">
      <div className="space-y-8">
        <h4 className="text-n-1  font-semibold text-2xl leading-6 tracking-tighter" >
          Think I'd be a good fit for your team or project? Let's connect.
        </h4>
        {/* function to copy text*/}
        {/* using width auto will use the elements width*/}
        <button className="text-md flex justify-between  transition-colors duration-300 ease-in-out hover:bg-n-btnGrey font-[500] rounded-full space-x-2 bg-n-1 w-auto items-center  shadow-md px-6 py-3">
          <a
            href="mailto:nafisafaruna@gmail.com"
            className={``}

          > Nafisafaruna@gmail.com

          </a>
          <FaCopy />
        </button>
      </div>
      <div className="space-y-14 ">
        {/*  map it*/}
        <div className="space-y-5">
          <h2 className="text-n-textGrey font-semibold w-auto">SELECTED PROJECTS</h2>
          <div className="flex flex-col">
            {/* link to pages talking about the project */}
            <a className="  text-n-1 font-bold w-auto hover:underline transition duration-300 ease-in-out" href="https://nenepo.github.io/co-working-space/" target="_blank">co-working space</a>
            <a className="hover:underline transition duration-300 ease-in-out text-n-1 font-bold w-auto" href="#">camgirl: social media webapp</a>
            <a className="hover:underline transition duration-300 ease-in-out text-n-1 font-bold w-auto" href="https://auth-user-tau.vercel.app/"  target="_blank">Auth User</a>
            <a href="#"></a>
          </div>

        </div>
        <div className="text-n-1 ">
          {/* github */}
          <div className="flex justify-between">
            <a className="flex justify-between space-x-2 items-center">

              <FaLinkedin />
              <span className="hover:underline transition duration-300 ease-in-out"> Linkedin</span>
            </a>
            <a href="https://twitter.com/Nene_dev26" className="flex justify-between space-x-2 items-center">

              <FaXTwitter />
              <span className="hover:underline transition duration-300 ease-in-out">TwitterX</span>
            </a >
            <a href=" https://github.com/Nenepo " className="flex justify-between space-x-2 items-center">

              <FaGithub />
              <span className="hover:underline transition duration-300 ease-in-out">Github</span>
            </a>
          </div>

        </div>
      </div>
      <div className="md:mx-auto md:w-[50%]">
        <h4 className="text-n-1 font-semibold uppercase">Nafisat Faruna</h4>
        <p className="text-n-textGrey">
          React developer but to be honest being a developer is about adapting to the frameworks as far as you have a good foundational earning
        </p>
        <img src="/assets/black woman.jpg" alt="" className="w-[80%]" />
      </div>
    </footer>
  )
}

export default Footer
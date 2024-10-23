import gmail from "../assets/images/Gmail.svg";
import lock from "../assets/images/lock.svg";

const Login: React.FC = () => {
  return (
    <div className="bg-[#F6F4F4] w-full ">
      <div className="mx-3 mb-60">
        <h1 className="text-[#820000] text-[32px] font-[800]">Life Water</h1>
      </div>
      <div  className="h-[500px] bg-[#FFFFFF] rounded-3xl shadow">
        <div className="text-center">
            <h1 className="text-[#820000]  text-[32px] pt-3 font-bold">Welcome Back</h1>
        </div>
        <div className=" flex flex-col justify-center items-center bg-gray-50">
      <div className="bg-white px-7 pt-3 pb-10  shadow-md w-">
        <div className="mb-4">
          <label className="block text-[#313131] text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <div className="relative">
            <input
              id="email"
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
            <span className="absolute inset-y-0 right-4 flex items-center">
              <img className="text-black" src={gmail} alt="Email Icon" />
            </span>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
            <span className="absolute inset-y-0 right-4 flex items-center">
              <img src={lock} alt="" />
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between mb-6">
          <label className="inline-flex items-center text-[#820000]">
            <input type="checkbox" className="form-checkbox h-4 w-4 bg-[#820000] text-[#820000]" />
            <span className="ml-2 text-[#CBCBCB]">Remember me</span>
          </label>
          
        </div>

        <button className="w-full bg-gradient-to-r  from-[#2A2B2F] to-[#28292D] bg-black text-[#FFFFFF] py-3 rounded-lg text-lg shadow-lg hover:bg-gray-900 transition duration-300">
          Login
        </button>

        <p className="text-xs text-gray-500 mt-4 text-center">
        For security purposes: "We take your security seriously. Your login information is encrypted for your protection."        </p>
      </div>
    </div>
      </div>
    </div>
  );
};

export default Login;

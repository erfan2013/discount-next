export default function page() {
  return (
    <main className="w-full flex justify-center items-center bg-gray-300 p-24 min-h-screen ">
      <section className="flex flex-col gap-3 bg-transparent">
        <div className="flex justify-center items-center ml-">
          <img src="/logo.png" alt="logo" className="h-20" />
        </div>
        <div className=" flex flex-col gap-3 bg-white p-10 rounded-xl min-w-[440px]">
          <h1 className="font-bold text-xl">Login with Email </h1>
          <form className="flex flex-col gap-3">
          
              <input
                type="email"
                placeholder="Enter Your Email"
                name="user-email"
                id="user-email"
                className="px-3 py-2 rounded border focus:outline-none w-full"
              />
               <input
                type="password"
                placeholder="Enter Your password"
                name="user-password"
                id="user-pasword"
                className="px-3 py-2 rounded border focus:outline-none w-full"
              />
              <button>Login</button>
          </form>
        </div>
      </section>
    </main>
  );
}

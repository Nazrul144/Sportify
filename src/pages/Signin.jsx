import Link from "next/link";
import React from "react";

const Signin = () => {
  return (
    <section>
      <div className="flex items-center justify-center px-4 py-6 sm:px-6 sm:py-16 lg:px-8 lg:py-8">
        <div className="p-4 shadow-md xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <div className="mb-2 flex justify-center"></div>
          <h2 className="text-center text-2xl font-bold leading-tight text-black">Sign in to your account</h2>
          <span class="relative flex justify-center">
  <div
    class="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"
  ></div>

  <span class="relative z-10 bg-white px-6">or</span>
</span>
          <p className="text-center text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <Link href={"/signup"} className="font-bold text-sky-400">
              Sign up
            </Link>
          </p>
          <form className="mt-6" method="POST" action="#">
            <div className="space-y-2">
              {/*Email*/}
              <div>
                <label className="text-base font-medium text-gray-900">Email</label>
                <div className="mt-2">
                  <input
                    placeholder="Email"
                    type="email"
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
              </div>

              {/*Password*/}
              <div>
                <div className="flex items-center justify-between">
                  <label className="text-base font-medium text-gray-900">Password</label>
                  <a className="text-sm font-semibold text-black hover:underline" title="" href="#">
                    Forgot password?
                  </a>
                </div>
                <div className="mt-2">
                  <input
                    placeholder="Password"
                    type="password"
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
              </div>

              <div>
                <button
                  className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  type="button"
                >
                  Sign in
                </button>
              </div>
            </div>
          </form>
          <div className="mt-3 space-y-3">
            {/*Sign in with social link*/}
            <button
              className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
              type="button"
            >
              <span className="mr-2 inline-block">
                <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rose-500">
                  <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                </svg>
              </span>
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signin;

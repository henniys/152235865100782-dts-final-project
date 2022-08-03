import Logo from "../assets/images/jyptify.png";

function Login() {
  return (
    <div className="hero min-h-screen bg-blue-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <img src={Logo} alt="logo" />
          <h1 className="text-5xl font-bold text-white">Login now!</h1>
          <p className="py-6 font-bold text-2xl text-white">
            Listen to amazing music from your favorite artists.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-info font-bold">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-info font-bold">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                Don't have an account? Register
                <a
                  href="/register"
                  className=" link link-hover text-info font-bold"
                >
                  here.
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-info text-white">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

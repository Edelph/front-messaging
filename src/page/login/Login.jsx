import React, { useState } from "react";
import { currentPage$ } from "../state/rxjs";
import compteService from "../../service/countService";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [viewPssd, setViewPssd] = useState(false);

  const submitHandle = async (e) => {
    const response = await compteService.login(userName, password);
    console.log(response);
    const data = response.data;
    if (data) {
      console.log(data);
      compteService.setStorage(data);
      currentPage$.next("CHAT");
    }
  };
  const createCompte = (e) => {
    e.preventDefault();
    currentPage$.next("CREATE_COMPTE");
  };

  return (
    <>
      <div className="auth-page-wrapper pt-5">
        <div className="auth-one-bg-position auth-one-bg" id="auth-particles">
          <div className="bg-overlay"></div>

          <div className="shape">
            {/* <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1440 120">
                <path d="M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z"></path>
            </svg> */}
          </div>
        </div>

        <div className="auth-page-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div
                  className="text-center mt-sm-5 
                     text-white-50"
                >
                  <div>
                    <a href="index.html" className="d-inline-block auth-logo">
                      <img
                        src="assets/images/logo-light.png"
                        alt=""
                        height="20"
                      />
                    </a>
                  </div>
                  <p className="mt-3 fs-15 fw-semibold">Messager</p>
                </div>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-md-8 col-lg-6 col-xl-5">
                <div className="card mt-4">
                  <div className="card-body p-4">
                    <div className="text-center mt-2">
                      <h5 className="text-primary">Welcome Back !</h5>
                      <p className="text-muted">Sign in to THB Message .</p>
                    </div>
                    <div className="p-2 mt-4">
                      <div className="mb-3">
                        <label htmlFor="username" className="form-label">
                          Username
                        </label>
                        <input
                          value={userName}
                          onChange={(e) => setUserName(e.target.value)}
                          type="text"
                          className="form-control"
                          id="username"
                          name="username"
                          placeholder="Enter username"
                        />
                      </div>

                      <div className="mb-3">
                        <label className="form-label" htmlFor="password-input">
                          Password
                        </label>
                        <div className="position-relative auth-pass-inputgroup mb-3">
                          <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type={viewPssd ? "text" : "password"}
                            className="form-control pe-5"
                            name="password"
                            placeholder="Enter password"
                            id="password-input"
                          />
                          <button
                            className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted"
                            type="button"
                            id="password-addon"
                            onClick={(e) =>
                              setViewPssd((viewPssd) => !viewPssd)
                            }
                          >
                            <i className="ri-eye-fill align-middle"></i>
                          </button>
                        </div>
                      </div>

                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="auth-remember-check"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="auth-remember-check"
                        >
                          Remember me
                        </label>
                      </div>

                      <div className="mt-4">
                        <button
                          onClick={submitHandle}
                          className="btn btn-success w-100"
                          type="submit"
                        >
                          Sign In
                        </button>
                      </div>
                      <div className="mt-4 text-center">
                        <p className="mb-0">
                          Don't have an account ?{" "}
                          <span
                            onClick={createCompte}
                            style={{ cursor: "pointer" }}
                            className="fw-bold text-primary text-decoration-underline"
                          >
                            {" "}
                            Signup{" "}
                          </span>{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

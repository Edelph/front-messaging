import React, { useState } from "react";
import "./SingUp.css";
import { currentPage$ } from "../state/rxjs";
import compteService from "../../service/countService";

const SingUp = () => {
  const [viewPssd, setViewPssd] = useState(false);

  const [newCompte, setNewCompte] = useState({
    nameClient: "",
    lastNameClient: "",
    emailClient: "",
    passWordClient: "",
  });

  const createCompte = async (e) => {
    e.preventDefault();
    console.log(newCompte);
    const response = await compteService.register(newCompte);
    const data = response.data;
    console.log(response);
    if (data) {
      console.log(data);
      compteService.setStorage(data);
      currentPage$.next("CHAT");
    }
  };

  const login = (e) => {
    e.preventDefault();
    currentPage$.next("LOGIN");
  };
  return (
    <div>
      <div className="auth-page-wrapper pt-5">
        <div className="auth-one-bg-position auth-one-bg" id="auth-particles">
          <div className="bg-overlay"></div>

          <div className="shape">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 1440 120"
            >
              <path d="M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z"></path>
            </svg> */}
          </div>
        </div>

        <div className="auth-page-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="text-center mt-sm-5 text-white-50">
                  <div>
                    <a
                      href="index.html"
                      className="d-inline-block auth-logo"
                    ></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-md-8 contLogin col-lg-6 col-xl-5">
                <div className="card mt-4">
                  <div className="card-body p-4">
                    <div className="text-center mt-2">
                      <h5 className="text-primary">Welcome Back !</h5>
                      <p className="text-muted">Sing up in to THB Message .</p>
                    </div>
                    <div className="p-2 mt-4 flex">
                      <form>
                        <div className="formulaire">
                          <div>
                            <div className="mb-3">
                              <label htmlFor="name" className="form-label">
                                Name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="nameClient"
                                value={newCompte?.nameClient || ""}
                                onChange={(e) => {
                                  setNewCompte((newCompte) => {
                                    return {
                                      ...newCompte,
                                      nameClient: e.target.value,
                                    };
                                  });
                                }}
                                placeholder="Enter name"
                              />
                            </div>
                            <div className="mb-3">
                              <label htmlFor="mail" className="form-label">
                                Email
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                value={newCompte?.emailClient || ""}
                                onChange={(e) => {
                                  setNewCompte((newCompte) => {
                                    return {
                                      ...newCompte,
                                      emailClient: e.target.value,
                                    };
                                  });
                                }}
                                id="mail"
                                name="emailClient"
                                placeholder="Enter Email"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="mb-3">
                              <label htmlFor="lasteName" className="form-label">
                                Last Name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name="lastNameClient"
                                value={newCompte?.lastNameClient || ""}
                                onChange={(e) => {
                                  setNewCompte((newCompte) => {
                                    return {
                                      ...newCompte,
                                      lastNameClient: e.target.value,
                                    };
                                  });
                                }}
                                id="lastName"
                                placeholder="Enter Last Name"
                              />
                            </div>
                            <div className="mb-3">
                              <label
                                className="form-label"
                                htmlFor="password-input"
                              >
                                Password
                              </label>
                              <div className="position-relative auth-pass-inputgroup mb-3">
                                <input
                                  type={viewPssd ? "text" : "password"}
                                  name="passWordClient"
                                  value={newCompte?.passWordClient || ""}
                                  onChange={(e) => {
                                    setNewCompte((newCompte) => {
                                      return {
                                        ...newCompte,
                                        passWordClient: e.target.value,
                                      };
                                    });
                                  }}
                                  className="form-control pe-5"
                                  placeholder="Enter password"
                                  id="password-input"
                                />
                                <button
                                  className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted "
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
                          </div>
                        </div>

                        <div className="mt-4">
                          <button
                            className="btn btn-success w-100"
                            type="submit"
                            onClick={createCompte}
                          >
                            Sign Up
                          </button>
                        </div>
                        <div className="mt-4 text-center">
                          <p className="mb-0">
                            Already have an account ?
                            <span
                              onClick={login}
                              style={{ cursor: "pointer" }}
                              className="fw-bold text-primary text-decoration-underline"
                            >
                              Login
                            </span>
                          </p>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingUp;

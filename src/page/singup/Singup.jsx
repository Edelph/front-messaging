import React from "react";
import "./SingUp.css";

const Singup = () => {
  return (
    <div>
      <div class="auth-page-wrapper pt-5">
        <div class="auth-one-bg-position auth-one-bg" id="auth-particles">
          <div class="bg-overlay"></div>

          <div class="shape">
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

        <div class="auth-page-content">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="text-center mt-sm-5 text-white-50">
                  <div>
                    <a href="index.html" class="d-inline-block auth-logo"></a>
                  </div>
                </div>
              </div>
            </div>

            <div class="row justify-content-center">
              <div class="col-md-8 contLogin col-lg-6 col-xl-5">
                <div class="card mt-4">
                  <div class="card-body p-4">
                    <div class="text-center mt-2">
                      <h5 class="text-primary">Welcome Back !</h5>
                      <p class="text-muted">Sing up in to THB Message .</p>
                    </div>
                    <div class="p-2 mt-4 flex">
                      <form>
                        <div class="formulaire">
                          <div>
                            <div class="mb-3">
                              <label for="name" class="form-label">
                                Name
                              </label>
                              <input
                                type="text"
                                class="form-control"
                                id="name"
                                name="nameClient"
                                placeholder="Enter name"
                              />
                            </div>
                            <div class="mb-3">
                              <label for="mail" class="form-label">
                                Email
                              </label>
                              <input
                                type="text"
                                class="form-control"
                                id="mail"
                                name="emailClient"
                                placeholder="Enter Email"
                              />
                            </div>
                          </div>
                          <div>
                            <div class="mb-3">
                              <label for="lasteName" class="form-label">
                                Last Name
                              </label>
                              <input
                                type="text"
                                class="form-control"
                                name="lastNameClient"
                                id="lasteName"
                                placeholder="Enter Last Name"
                              />
                            </div>
                            <div class="mb-3">
                              <label class="form-label" for="password-input">
                                Password
                              </label>
                              <div class="position-relative auth-pass-inputgroup mb-3">
                                <input
                                  type="password"
                                  name="passwordClient"
                                  class="form-control pe-5"
                                  placeholder="Enter password"
                                  id="password-input"
                                />
                                <button
                                  class="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted "
                                  type="button"
                                  id="password-addon"
                                >
                                  <i class="ri-eye-fill align-middle"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="mt-4">
                          <button class="btn btn-success w-100" type="submit">
                            Sign Up
                          </button>
                        </div>
                        <div class="mt-4 text-center">
                          <p class="mb-0">
                            Don't have an account ?
                            <a
                              href="/"
                              class="fw-bold text-primary text-decoration-underline"
                            >
                              Signup
                            </a>
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

export default Singup;

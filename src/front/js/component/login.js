import React from "react";

const Login = () => {
  return (
    <div
    className="modal fade"
    id="loginModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Modal title
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div className="modal-body container">
          <section className="vh-100 section-bg">
            <div className="container py-5 h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col col-xl-10">
                  <div className="card border-radcustom">
                    <div className="row g-0">
                      <div className="col-md-6 col-lg-5 d-none d-md-block">
                        <img
                          src="https://iscale.iheart.com/catalog/artist/6947"
                          alt="login form"
                          className="img-fluid border-radcustom2"
                        />
                      </div>
                      <div className="col-md-6 col-lg-7 d-flex align-items-center">
                        <div className="card-body p-4 p-lg-5 text-black">
                          <form>
                            <div className="d-flex align-items-center mb-3 pb-1">
                              <i className="fas fa-cubes fa-2x me-3 color-i"></i>
                              <span className="h1 fw-bold mb-0">Logo</span>
                            </div>

                            <h5 className="fw-normal mb-3 pb-3">
                              Sign into your account
                            </h5>

                            <div className="form-outline mb-4">
                              <input
                                type="email"
                                id="form2Example17"
                                className="form-control form-control-lg"
                              />
                              <label
                                className="form-label"
                                for="form2Example17"
                              >
                                Email address
                              </label>
                            </div>

                            <div className="form-outline mb-4">
                              <input
                                type="password"
                                id="form2Example27"
                                className="form-control form-control-lg"
                              />
                              <label
                                className="form-label"
                                for="form2Example27"
                              >
                                Password
                              </label>
                            </div>

                            <div className="pt-1 mb-4">
                              <button
                                className="btn btn-dark btn-lg btn-block"
                                type="button"
                              >
                                Login
                              </button>
                            </div>

                            <a className="small text-muted" href="#!">
                              Forgot password?
                            </a>
                            <p className="mb-5 pb-lg-2 account-className">
                              Don't have an account?{" "}
                              <a href="#!">Register here</a>
                            </p>
                            <a href="#!" className="small text-muted">
                              Terms of use.
                            </a>
                            <a href="#!" className="small text-muted">
                              Privacy policy
                            </a>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" className="btn btn-primary">
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Login;
import logo from "./images/logo.svg";

export default function App() {
  return (
    <>
      <div className="spinner-wrapper">
        <div className="spinner">
          <div className="bounce1"></div>
          <div className="bounce2"></div>
          <div className="bounce3"></div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
        {/* <a className="navbar-brand logo-text page-scroll" href="index.html">Corso</a>  */}

        <a className="navbar-brand logo-image" href="index.html">
          <img src={logo} alt="alternative" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExampleDefault"
          aria-controls="navbarsExampleDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-awesome fas fa-bars"></span>
          <span className="navbar-toggler-awesome fas fa-times"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link page-scroll" href="#register">
                REGISTER <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link page-scroll" href="#description">
                DETAILS
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle page-scroll"
                href="#date"
                id="navbarDropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                DATE
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="article-details.html">
                  <span className="item-text">ARTICLE DETAILS</span>
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="terms-conditions.html">
                  <span className="item-text">TERMS CONDITIONS</span>
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="privacy-policy.html">
                  <span className="item-text">PRIVACY POLICY</span>
                </a>
              </div>
            </li>

            <li className="nav-item">
              <a className="nav-link page-scroll" href="#contact">
                CONTACT
              </a>
            </li>
          </ul>
          <span className="nav-item social-icons">
            <span className="fa-stack">
              <a href="#your-link">
                <i className="fas fa-circle fa-stack-2x"></i>
                <i className="fab fa-facebook-f fa-stack-1x"></i>
              </a>
            </span>
            <span className="fa-stack">
              <a href="#your-link">
                <i className="fas fa-circle fa-stack-2x"></i>
                <i className="fab fa-twitter fa-stack-1x"></i>
              </a>
            </span>
          </span>
        </div>
      </nav>

      <header id="header" className="header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-container">
                <div className="countdown">
                  <span id="clock"></span>
                </div>
                <h1>SEO Training Course</h1>
                <p className="p-large">
                  Do you feel like you&apos;re doing a lot of guess work when it
                  comes to SEO for your website? Take the SEO training course to
                  change that
                </p>
                <a className="btn-solid-lg page-scroll" href="#register">
                  REGISTER
                </a>
                <a className="btn-outline-lg page-scroll" href="#instructor">
                  DISCOVER
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="outer-container">
          <div className="slider-container">
            <div className="swiper-container image-slider-1">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <img
                    className="img-fluid"
                    src="./images/details-slide-1.jpg"
                    alt="alternative"
                  />
                </div>

                <div className="swiper-slide">
                  <img
                    className="img-fluid"
                    src="./images/details-slide-2.jpg"
                    alt="alternative"
                  />
                </div>

                <div className="swiper-slide">
                  <img
                    className="img-fluid"
                    src="./images/details-slide-3.jpg"
                    alt="alternative"
                  />
                </div>
              </div>

              <div className="swiper-button-next"></div>
              <div className="swiper-button-prev"></div>
            </div>
          </div>
        </div>
      </header>

      <div id="register" className="form-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="text-container">
                <h2>Register Using The Form</h2>
                <p>
                  It&apos;s easy to register for the course, just fill out the
                  form and click submit. Then you will be registered for one of
                  the best SEO training courses in the industry
                </p>
                <ul className="list-unstyled li-space-lg">
                  <li className="media">
                    <i className="fas fa-square"></i>
                    <div className="media-body">
                      <strong>Your information</strong> is required to complete
                      the registration
                    </div>
                  </li>
                  <li className="media">
                    <i className="fas fa-square"></i>
                    <div className="media-body">
                      <strong>It&apos;s safe with us</strong> and will not be
                      used for marketing
                    </div>
                  </li>
                  <li className="media">
                    <i className="fas fa-square"></i>
                    <div className="media-body">
                      <strong>You will receive</strong> a confirmation email in
                      less than 24h
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-container">
                <form
                  id="registrationForm"
                  data-toggle="validator"
                  data-focus="false"
                >
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control-input"
                      id="rname"
                      name="rname"
                      required
                    />
                    <label className="label-control" htmlFor="rname">
                      Complete name
                    </label>
                    <div className="help-block with-errors"></div>
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control-input"
                      id="remail"
                      name="remail"
                      required
                    />
                    <label className="label-control" htmlFor="remail">
                      Email address
                    </label>
                    <div className="help-block with-errors"></div>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control-input"
                      id="rphone"
                      name="rphone"
                      required
                    />
                    <label className="label-control" htmlFor="rphone">
                      Phone number
                    </label>
                    <div className="help-block with-errors"></div>
                  </div>
                  <div className="form-group checkbox">
                    <input
                      type="checkbox"
                      id="rterms"
                      value="Agreed-to-Terms"
                      name="rterms"
                      required
                    />
                    I&apos;ve read and agree to Corso&apos;s written{" "}
                    <a href="privacy-policy.html">Privacy Policy</a> and{" "}
                    <a href="terms-conditions.html">Terms & Conditions</a>
                    <div className="help-block with-errors"></div>
                  </div>
                  <div className="form-group">
                    <button
                      type="submit"
                      className="form-control-submit-button"
                    >
                      REGISTER
                    </button>
                  </div>
                  <div className="form-message">
                    <div
                      id="rmsgSubmit"
                      className="h3 text-center hidden"
                    ></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

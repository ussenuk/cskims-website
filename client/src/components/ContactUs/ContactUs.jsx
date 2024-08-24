
import React from "react";
import "./ContactUs.css";

function ContactUs() {
  return (
    <section id="contact-page" className="pt-90 pb-120 gray-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="contact-from mt-30">
              <div className="section-title">
                <h1>Contactez-nous</h1>
                <h2>Keep In Touch</h2>
              </div>
              <div className="main-form pt-45">
                <form
                  id="contact-form"
                  action="#"
                  method="post"
                  data-toggle="validator"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="singel-form form-group">
                        <input
                          name="name"
                          type="text"
                          placeholder="Your name / votre nom"
                          data-error="Name is required."
                          required
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="singel-form form-group">
                        <input
                          name="email"
                          type="email"
                          placeholder="Email / adresse mail"
                          data-error="Valid email is required."
                          required
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="singel-form form-group">
                        <input
                          name="subject"
                          type="text"
                          placeholder="Subject / sujet"
                          data-error="Subject is required."
                          required
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="singel-form form-group">
                        <input
                          name="phone"
                          type="text"
                          placeholder="Phone / Numero de telephone"
                          data-error="Phone is required."
                          required
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="singel-form form-group">
                        <textarea
                          name="message"
                          placeholder="Message"
                          data-error="Please, leave us a message."
                          required
                        ></textarea>
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <p className="form-message"></p>
                    <div className="col-md-12">
                      <div className="singel-form">
                        <button type="submit" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out">
                          Send / envoyer
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="contact-address mt-30">
              <div className="contact-address-container">
                <ul>
                  <li>
                    <div className="singel-address">
                      <div className="icon">
                        <i className="fa fa-home"></i>
                      </div>

                    </div>
                  </li>
                  <li>
                    <div className="singel-address">
                      <div className="icon">
                        <i className="fa fa-phone"></i>
                      </div>
                      <div className="cont">
                        <p>
                          <strong>Téléphone Contacts</strong> : +243 975034623 ||
                          +243 995840830
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="singel-address">
                      <div className="icon">
                        <i className="fa fa-envelope-o"></i>
                      </div>
                      <div className="cont">
                        <p>
                          <strong>Email Address : </strong>
                          <a href="mailto:info@csk.edu" style={{ color: "blue" }}>
                            <u>ukimanuka@gmail.com</u>
                          </a>
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;


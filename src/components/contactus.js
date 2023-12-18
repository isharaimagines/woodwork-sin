import "./contactus.css";
import wallbg from "../assets/img/wall_wood.jpg";

export const Contactus = () => {
  return (
    <>
      <div className="c-container">
        <img src={wallbg} alt="c-banner" />

        <div className="c-text">
          <h1> For the Services We Can Provide For You</h1>
          <h3>Contact Us</h3>
        </div>
      </div>

      <div className="section">
        <div className="cu-content">
          <h1>Request a free estimate.</h1>
          <h2>Phone: +94771234567</h2>
          <h2>Or email: example@gmail.com</h2>
        </div>
        <div className="cu-noticed">
          <p>
            Please include an overall description of the project, your location,
            approximate dimensions, and any material or finishing preferences
            you may have.
          </p>
          <p>
            When we receive the details about your requirement, we will start
            our processing. After that, you will get a complete description of
            our process. Then we can talk about the task over a phone call.
          </p>
          <p>We look forward to hearing from you!</p>
        </div>
      </div>
      <hr />
      <div className="section">
        <div className="cu-noticed">
          <h1>What to expect:</h1>
          <div className="cu-row">
            <div className="cu-col">
              <h2>1. Initial Consultation</h2>
              <p>
                We offer a no-charge consultation to discuss your project and
                provide a price estimate under no obligation. We invite you to
                take advantage of our years of experience to explore the
                possibilities for your space.{" "}
              </p>

              <h2>2. Custom Design</h2>
              <p>
                Once we have all the necessary information, we can provide a
                formal proposal with detailed costs and a timetable. If you are
                ready to move ahead with the project, we request 10% of the
                payment to lock a slot in our calendar. We then schedule a
                follow-up to set about creating your unique design and discuss
                the particulars of your project.
              </p>

              <h2>3. Build</h2>
              <p>
                We present 3D rendering drawings, photos, and/or sample
                materials. When you are happy with the final design, we are
                ready to build. Shortly before building begins, we require a 70%
                payment towards the construction of your project, including
                ordering materials. We craft your piece(s) in our Brooklyn
                studio.
              </p>

              <h2>4. Delivery & Installation </h2>
              <p>
                The majority of construction takes place in our studio; this
                minimizes the amount of time for installations so that there is
                as little disruption to your home as possible. All installation
                is done by our own crafts people who are trained to ensure that
                your project is installed precisely.{" "}
              </p>

              <p>
                Throughout the process, we are available to answer any questions
                you may have. Call us at (718) 722-1266 or email
                info@urbanhomecraft.com if you have questions.
              </p>
            </div>
            <div className="cu-col">
              <div class="formbold-main-wrapper">
                <div class="formbold-form-wrapper">
                  <form action="" method="POST">
                    <div class="formbold-input-wrapp formbold-mb-3">
                      <label for="firstname" class="formbold-form-label">
                        Name
                      </label>

                      <div>
                        <input
                          type="text"
                          name="firstname"
                          id="firstname"
                          placeholder="First name"
                          class="formbold-form-input"
                        />

                        <input
                          type="text"
                          name="lastname"
                          id="lastname"
                          placeholder="Last name"
                          class="formbold-form-input"
                        />
                      </div>
                    </div>

                    <div class="formbold-mb-3">
                      <div>
                        <label for="email" class="formbold-form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="example@email.com"
                          class="formbold-form-input"
                        />
                      </div>
                    </div>
                    <div class="formbold-mb-3">
                      <div>
                        <label for="phone" class="formbold-form-label">
                          Phone
                        </label>
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          placeholder="Phone number"
                          class="formbold-form-input"
                        />
                      </div>
                    </div>

                    <div class="formbold-mb-3">
                      <label for="address" class="formbold-form-label">
                        Address
                      </label>

                      <input
                        type="text"
                        name="address"
                        id="address"
                        placeholder="Current address"
                        class="formbold-form-input formbold-mb-3"
                      />
                    </div>

                    <div class="formbold-input-flex">
                      <div>
                        <label for="post" class="formbold-form-label">
                          Post/Zip code
                        </label>
                        <input
                          type="text"
                          name="post"
                          id="post"
                          placeholder="ex:8976"
                          class="formbold-form-input"
                        />
                      </div>
                      <div>
                        <label for="city" class="formbold-form-label">
                          City
                        </label>
                        <input
                          type="text"
                          name="city"
                          id="city"
                          placeholder="ex: New York"
                          class="formbold-form-input"
                        />
                      </div>
                    </div>
                    <div class="formbold-mb-3">
                      <label for="message" class="formbold-form-label">
                        Project Description
                      </label>
                      <textarea
                        rows="6"
                        name="message"
                        id="message"
                        placeholder="Description"
                        class="formbold-form-input"
                      ></textarea>
                    </div>

                    <button class="formbold-btn">Send</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

import "./contactus.css";
import wallbg from "../assets/img/wall_wood.jpg";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export const Contactus = () => {
  const [notificationText, setNotificationText] = useState("Active");
  const [labelColor, setLabelColor] = useState("black");
  const [t] = useTranslation("global");

  // Function to update the text content of the label

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    address: "",
    post: "",
    city: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    setNotificationText("Working on....");
    e.preventDefault();
    if (validateForm()) {
      submitForm();
      clearForm();
    } else {
      setLabelColor("blue");
      setNotificationText("Required Fields....");
      alert("Please fill all required fields.");
    }
  };

  const validateForm = () => {
    // Regular expressions for validation
    const nameRegex = /^[a-zA-Z]+$/; // Only letters
    const emailRegex = /^[a-zA-Z0-9._%+-]+@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/; // Email or Gmail
    const phoneRegex = /^\d+$/; // Only numbers
    const cityRegex = /^[a-zA-Z]+$/; // Only letters
    const postRegex = /^\d+$/; // Only numbers

    // Check each field against its corresponding regex pattern
    const isFirstNameValid = nameRegex.test(formData.firstname);
    const isLastNameValid = nameRegex.test(formData.lastname);
    const isEmailValid = emailRegex.test(formData.email);
    const isPhoneValid = phoneRegex.test(formData.phone);
    const isAddressValid = formData.address.trim() !== ""; // Non-empty address
    const isCityValid = cityRegex.test(formData.city);
    const isPostValid = postRegex.test(formData.post);
    const isMessageValid = formData.message.trim() !== ""; // Non-empty message

    // Return true if all fields pass validation, false otherwise
    return (
      isFirstNameValid &&
      isLastNameValid &&
      isEmailValid &&
      isPhoneValid &&
      isAddressValid &&
      isCityValid &&
      isPostValid &&
      isMessageValid
    );
  };

  //f68178c8b54d80db9a1b8875db3716e6
  const submitForm = () => {
    fetch("https://formsubmit.co/ajax/studymotivat01@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        firstname: formData.firstname,
        lastname: formData.lastname,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        post: formData.post,
        city: formData.city,
        message: formData.message,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Form submission failed");
        }
      })
      .then((data) => {
        setLabelColor("green");
        setNotificationText("Send Successfully !");
        alert("Form submitted successfully !");
        // Reset form fields after successful submission
        clearForm();
      })
      .catch((error) => {
        console.error("Error:", error);
        setLabelColor("red");
        setNotificationText("Error while sending");
        alert("Error while submit form, Try again !");
      });
  };

  const clearForm = () => {
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      address: "",
      post: "",
      city: "",
      message: "",
    });
  };

  return (
    <>
      <div className="c-container">
        <img src={wallbg} alt="c-banner" />

        <div className="c-text">
          <h1>{t("contact.headname")}</h1>
          <h3>{t("navbar.Contact")}</h3>
        </div>
      </div>

      <div className="section">
        <div className="cu-content">
          <h1>{t("contact.subtitle00")}</h1>
          <h2>{t("contact.subtitle0")}</h2>
          <h2>
            <a href="mailto:studymotivat01@gmail.com">
              {t("contact.subtitle1")}
            </a>
          </h2>
        </div>
        <div className="cu-noticed">
          <p>{t("contact.subtitle2")}</p>
          <p>{t("contact.subtitle3")}</p>
          <p>{t("contact.subtitle4")}</p>
        </div>
      </div>
      <hr />
      <div className="section">
        <div className="cu-noticed">
          <h1>{t("contact.needtitle")}</h1>
          <div className="cu-row">
            <div className="cu-col">
              <h2>1. {t("contact.subtitle5")}</h2>
              <p>{t("contact.subtitle6")}</p>

              <h2>2. {t("contact.subtitle7")}</h2>
              <p>{t("contact.subtitle8")}</p>

              <h2>3. {t("contact.subtitle9")}</h2>
              <p>{t("contact.subtitle10")}</p>

              <h2>4. {t("contact.subtitle11")}</h2>
              <p>{t("contact.subtitle12")}</p>

              <p>{t("contact.subtitle13")}</p>
            </div>
            <div className="cu-col">
              <div className="formbold-main-wrapper">
                <div className="formbold-form-wrapper">
                  <form method="POST" id="myForm" onSubmit={handleSubmit}>
                    <div className="formbold-input-wrapp formbold-mb-3">
                      <label
                        htmlFor="firstname"
                        className="formbold-form-label"
                      >
                        Name
                      </label>
                      <div>
                        <input
                          type="text"
                          name="firstname"
                          id="firstname"
                          placeholder="First Name"
                          className="formbold-form-input"
                          value={formData.firstname}
                          onChange={handleChange}
                        />
                        <input
                          type="text"
                          name="lastname"
                          id="lastname"
                          placeholder="Last Name"
                          className="formbold-form-input"
                          value={formData.lastname}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="formbold-mb-3">
                      <div>
                        <label htmlFor="email" className="formbold-form-label">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="example@email.com"
                          className="formbold-form-input"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="formbold-mb-3">
                      <div>
                        <label htmlFor="phone" className="formbold-form-label">
                          Phone No
                        </label>
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          placeholder="+94712345678"
                          className="formbold-form-input"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="formbold-mb-3">
                      <label htmlFor="address" className="formbold-form-label">
                        Address
                      </label>

                      <input
                        type="text"
                        name="address"
                        id="address"
                        placeholder="Address"
                        className="formbold-form-input formbold-mb-3"
                        value={formData.address}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="formbold-input-flex">
                      <div>
                        <label htmlFor="post" className="formbold-form-label">
                          Postal Code
                        </label>
                        <input
                          type="text"
                          name="post"
                          id="post"
                          placeholder="ex: 89760"
                          className="formbold-form-input"
                          value={formData.post}
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <label htmlFor="city" className="formbold-form-label">
                          City
                        </label>
                        <input
                          type="text"
                          name="city"
                          id="city"
                          placeholder="ex: Colombo"
                          className="formbold-form-input"
                          value={formData.city}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="formbold-mb-3">
                      <label htmlFor="message" className="formbold-form-label">
                        A detailed explanation
                      </label>
                      <textarea
                        rows="6"
                        name="message"
                        id="message"
                        placeholder="Description"
                        className="formbold-form-input"
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                    <label
                      id="notification_label"
                      style={{ color: labelColor }}
                    >
                      <i class="ri-restart-line"></i> {notificationText}
                    </label>
                    <input type="hidden" name="_template" value="table"></input>
                    <button className="formbold-btn">SEND</button>
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

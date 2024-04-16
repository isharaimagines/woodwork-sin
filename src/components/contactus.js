import "./contactus.css";
import wallbg from "../assets/img/wall_wood.jpg";
import React, { useState } from "react";

export const Contactus = () => {
  const [notificationText, setNotificationText] = useState("Active");
  const [labelColor, setLabelColor] = useState("black");

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
          <h1> අපට ඔබ වෙනුවෙන් සැපයිය හැකි සේවාවන් සඳහා</h1>
          <h3>අපව අමතන්න</h3>
        </div>
      </div>

      <div className="section">
        <div className="cu-content">
          <h1>නොමිලේ ඇස්තමේන්තුවක් ඉල්ලන්න.</h1>
          <h2>දුරකතන අංකය: (+94) 771923940</h2>
          <h2>
            <a href="mailto:studymotivat01@gmail.com">
              හෝ ඊමේල් කරන්න: studymotivat01@gmail.com
            </a>
          </h2>
        </div>
        <div className="cu-noticed">
          <p>
            කරුණාකර ව්‍යාපෘතියේ සමස්ත විස්තරයක්, ඔබේ ස්ථානය, ආසන්න පරිමාණයක් සහ
            භාණ්ඩය සැදිමට අවශ්‍ය ද්‍රව්‍ය හෝ නිම කිරීමේ මනාප ඇතුළත් කරන්න.
          </p>
          <p>
            ඔබගේ අවශ්‍යතාවය පිළිබඳ විස්තර අපට ලැබුණු පසු, අපි අපගේ සැකසීම ආරම්භ
            කරන්නෙමු. ඊට පසු, අපගේ ක්රියාවලිය පිළිබඳ සම්පූර්ණ විස්තරයක් ඔබට
            ලැබෙනු ඇත. එවිට අපට දුරකථන ඇමතුමකින් කාර්යය ගැන කතා කළ හැකිය.
          </p>
          <p>අපි ඔබගෙ පණිවිඩ බලාපොරොත්තු වෙන් !</p>
        </div>
      </div>
      <hr />
      <div className="section">
        <div className="cu-noticed">
          <h1>අපේක්ෂා කළ යුතු දේ:</h1>
          <div className="cu-row">
            <div className="cu-col">
              <h2>1. මූලික උපදේශනය</h2>
              <p>
                ඔබගේ ව්‍යාපෘතිය සාකච්ඡා කිරීමට සහ වගකීමක් යටතේ මිල ඇස්තමේන්තුවක්
                සැපයීමට අපි ගාස්තු රහිත උපදේශනයක් පිරිනමමු. ඔබගේ අදහස් ගවේෂණය
                කිරීම සඳහා අපගේ වසර ගණනාවක අත්දැකීම් ප්‍රයෝජනයට ගන්නා ලෙස අපි
                ඔබට ආරාධනා කරන්නෙමු.
              </p>

              <h2>2. පාරිභෝගික නිර්මාණය</h2>
              <p>
                අපට අවශ්‍ය සියලු තොරතුරු ලැබුණු පසු, සවිස්තරාත්මක වියදම් සහ
                කාලසටහනක් සහිත විධිමත් යෝජනාවක් අපට සැපයිය හැකිය. ඔබ ව්‍යාපෘතිය
                සමඟ ඉදිරියට යාමට සූදානම් නම්, දිනයක් වෙන් කරගැනීමට අපි ගෙවීමෙන්
                10%ක් ඉල්ලා සිටිමු. ඔබගේ අද්විතීය නිර්මාණ නිර්මාණය කිරීම සහ ඔබේ
                ව්‍යාපෘතියේ විස්තර සාකච්ඡා කිරීම සඳහා අපි පසු විපරමක් සැලසුම්
                කරමු.
              </p>

              <h2>3. ගොඩනැගිම </h2>
              <p>
                අවසාන සැලසුම ගැන ඔබ සතුටු වන විට, අපි ගොඩනැගීමට සූදානම්.
                ගොඩනැගීම ආරම්භ කිරීමට ටික වේලාවකට පෙර, ඇණවුම් ද්‍රව්‍ය ඇතුළුව,
                ඔබේ ව්‍යාපෘතියේ ඉදිකිරීම් සඳහා 70% ක ගෙවීමක් අපට අවශ්‍ය වේ. අපි
                ඔබේ වැඩ කොටස අපගේ වැඩ සාප්පුව තුළ සකස් කරමු.
              </p>

              <h2>4. භාරදීම සහ ස්ථාපනය </h2>
              <p>
                ඉදිකිරීම් වලින් බහුතරයක් අපගේ වැඩපල තුළ සිදු වේ; මෙය ස්ථාපනය
                සඳහා ගතවන කාලය අවම කරයි, එවිට ඔබේ නිවසට හැකි තරම් කුඩා බාධා ඇති
                වේ. ඔබගේ ව්‍යාපෘතිය නිශ්චිතවම ස්ථාපනය කර ඇති බව සහතික කිරීමට
                පුහුණු වූ අපගේම අත්කම් නිර්මාණකරුවන් විසින් සියලුම ස්ථාපනය සිදු
                කරනු ලැබේ.
              </p>

              <p>
                මෙම ක්‍රියාවලිය පුරාම, ඔබට ඇති ඕනෑම ප්‍රශ්නයකට පිළිතුරු දීමට අප
                බැදී ඇත. ඔබට ප්‍රශ්න ඇත්නම් (+94) 771234567 හෝ info@gmail.com
                වෙත විද්‍යුත් තැපෑලෙන් අප අමතන්න.
              </p>
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

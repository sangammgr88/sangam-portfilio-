'use client'

import React, { useState, useRef, FormEvent } from "react";
import { RiMessageFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import Navbar from "../pages/Navbar";

const Contact = () => {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm("service_n1ept4m", "template_pctp3x7", form.current, "vBN1eIVDxf_tHK1K0")
        .then(
          (response) => {
            console.log("SUCCESS!");
            setFormData({
              firstName: "",
               lastName: "",
                email: "",
             message: "",
            })
           
          },
          (error) => {
            console.log("FAILED...", error.text);
  
            
          }
        );
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-semibold mb-8 text-center">Contact Form</h2>

        <div className="flex flex-col lg:flex-row gap-12 justify-center">
          {/* Form Section */}
          <div className="w-full lg:w-[600px] p-6 bg-white rounded-lg shadow-md">
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-4">
                <label
                  htmlFor="firstName"
                  className="block text-sm text-blacksdfsd font-medium text-gray-700 mb-2"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter your First Name"
                  className="w-full p-3 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter your Last Name"
                  className="w-full p-3 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="youremail@gmail.com"
                  className="w-full p-3 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  className="w-full p-3 border border-gray-300 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Submit
              </button>

            </form>
          </div>

          {/* Contact Details Section */}
          <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-black mb-4">Contact Details</h3>
            <div className="">
              <div>
                <Image
                  className="rounded-full mx-auto"
                  src="/photos/profile.jpg"
                  alt="Profile"
                  width={150}
                  height={150}
                />
              </div>
              <div className="mt-7 text-center">
                <p className="text-xl text-black font-bold">Sangam Thapa Magar</p>
                <p className="text-sm text-gray-600 mb-4">Kathmandu, Nepal</p>
              </div>
            </div>

            <ul className="space-y-3 text-center">
              <li className="flex items-center justify-center gap-2">
                <RiMessageFill className="text-blue-500" />
                <a href="#" className="text-blue-500 hover:underline">
                  Chat with me
                </a>
              </li>
              <li className="flex items-center justify-center gap-2">
                <FaXTwitter className="text-blue-500" />
                <a href="#" className="text-blue-500 hover:underline">
                  Follow me
                </a>
              </li>
              <li className="flex items-center justify-center gap-2">
                <IoMdCall className="text-blue-500" />
                <a
                  href="tel:+977-0000000000"
                  className="text-blue-500 hover:underline"
                >
                  Call me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

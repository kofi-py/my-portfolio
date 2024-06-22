// src/pages/Contact.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import ContactCard from "../components/ContactCard";
const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-8 bg-gray-100">
      <ContactCard />
      <div className="mt-8">
        <div className="flex items-center mb-4">
          <FontAwesomeIcon icon={faEnvelope} className="text-blue-500 mr-3" />
          <p>pastorkofi101@gmail.com</p>
        </div>
        <div className="flex items-center mb-4">
          <FontAwesomeIcon icon={faPhone} className="text-blue-500 mr-3" />
          <p>(860) 960-1522</p>
        </div>
        <div className="flex items-center">
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            className="text-blue-500 mr-3"
          />
          <p>137 Westerly Terrace, East Hartford, CT</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

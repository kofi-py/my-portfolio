// src/components/Contact.js
// src/components/Contact.js
import React, { useState } from "react";
import emailjs from "emailjs-com";
import {
  ChakraProvider,
  Container,
  extendTheme,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Heading,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        backgroundColor: "#f0f4f8",
        color: "#333",
        lineHeight: "tall",
      },
    },
  },
});

const ContactCard = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "YOUR_SERVICE_ID";
    const templateID = "YOUR_TEMPLATE_ID";
    const userID = "YOUR_USER_ID";

    emailjs.sendForm(serviceID, templateID, e.target, userID).then(
      (result) => {
        console.log(result.text);
        alert("Message sent successfully!");
      },
      (error) => {
        console.log(error.text);
        alert("Failed to send message. Please try again.");
      }
    );

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <ChakraProvider theme={theme}>
      <Container
        maxW="container.md"
        p={8}
        bg="white"
        shadow="md"
        rounded="lg"
        mt={8}
      >
        <Heading as="h2" size="xl" mb={6} textAlign="center">
          Contact Me
        </Heading>
        <form onSubmit={handleSubmit}>
          <FormControl mb={6}>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              size="lg"
              placeholder="Your Name"
            />
          </FormControl>
          <FormControl mb={6}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              size="lg"
              placeholder="Your Email"
            />
          </FormControl>
          <FormControl mb={6}>
            <FormLabel htmlFor="message">Message</FormLabel>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              size="lg"
              placeholder="Your Message"
              rows={6}
            />
          </FormControl>
          <Button
            type="submit"
            colorScheme="blue"
            size="lg"
            width="full"
            leftIcon={<FontAwesomeIcon icon={faPaperPlane} />}
          >
            Send Message
          </Button>
        </form>
      </Container>
    </ChakraProvider>
  );
};

export default ContactCard;

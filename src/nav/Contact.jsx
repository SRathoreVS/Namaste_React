import React from "react";
import { TextField, Button, Card, CardContent, Typography } from "@mui/material";

const Contact = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-teal-500 to-cyan-600 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="max-w-2xl mx-auto text-lg">
          Have questions? We’d love to hear from you. Reach out and our team will get back to you soon.
        </p>
      </section>

      {/* Contact Info + Form */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-6">
          <Card className="shadow-lg rounded-2xl">
            <CardContent>
              <Typography variant="h6" className="font-semibold text-teal-600">
                Address
              </Typography>
              <Typography variant="body2" color="text.secondary">
                123 Innovation Street, Tech City, India
              </Typography>
            </CardContent>
          </Card>
          <Card className="shadow-lg rounded-2xl">
            <CardContent>
              <Typography variant="h6" className="font-semibold text-teal-600">
                Email
              </Typography>
              <Typography variant="body2" color="text.secondary">
                support@example.com
              </Typography>
            </CardContent>
          </Card>
          <Card className="shadow-lg rounded-2xl">
            <CardContent>
              <Typography variant="h6" className="font-semibold text-teal-600">
                Phone
              </Typography>
              <Typography variant="body2" color="text.secondary">
                +91 98765 43210
              </Typography>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
          <form className="space-y-5">
            <TextField
              fullWidth
              label="Your Name"
              variant="outlined"
              required
            />
            <TextField
              fullWidth
              label="Your Email"
              variant="outlined"
              type="email"
              required
            />
            <TextField
              fullWidth
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              required
            />
            <Button
              variant="contained"
              color="primary"
              className="!bg-teal-600 !hover:bg-teal-700 w-full py-2"
            >
              Submit
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;

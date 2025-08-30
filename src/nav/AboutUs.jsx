import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const teamMembers = [
  {
    name: "Satyam Rathore",
    role: "Founder & CEO",
  },
  {
    name: "Ananya Sharma",
    role: "Lead Developer",
  },
  {
    name: "Rahul Verma",
    role: "UI/UX Designer",
  },
];

const AboutUs = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
        <p className="max-w-2xl mx-auto text-lg">
          We are a passionate team dedicated to building modern, user-friendly
          and scalable web applications for businesses and individuals.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-5xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10">
        <div className="p-6 bg-white rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-600">
            Our Mission
          </h2>
          <p className="text-gray-600">
            To deliver innovative and efficient digital solutions that empower
            businesses to grow and succeed in the modern era. We focus on
            performance, accessibility, and long-term value creation.
          </p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-purple-600">
            Our Vision
          </h2>
          <p className="text-gray-600">
            To become a trusted global partner for technology and innovation,
            known for creativity, reliability, and transforming ideas into
            impactful realities.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-100 py-16">
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-10">
          Meet Our Team
        </h2>
        <div className="max-w-6xl mx-auto grid gap-8 px-6 md:grid-cols-3">
          {teamMembers.map((member, index) => (
            <Card key={index} className="shadow-lg rounded-2xl hover:scale-105 transition-transform">
              <CardContent>
                <Typography variant="h6" component="div" className="font-semibold">
                  {member.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {member.role}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

import ClassCardExample from "../components/ClassCardEg";
import User from "../components/User";
import UserClass from "../components/UserClass";

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

      <User name={"Satyam rathore (function)"} />
      <UserClass name={"Satyam rathore (Class)"} location={"mumbai(class)"} />
      <ClassCardExample
        role={"Frontend developer"}
        company={"Accenture"}
        phone={"+91-6394614898"}
      />
    </div>
  );
};

export default AboutUs;

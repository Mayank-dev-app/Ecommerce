import {FaAddressBook, FaPhoneAlt, FaEnvelope, FaClock} from "react-icons/fa";
const Contact = () => {
    return (
        <div className="w-full my-20">
            {/* Hero Section */}
            <div className=" bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-16 px-6 text-center">
                <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
                <p className="max-w-2xl mx-auto text-lg">
                    Have questions? We’d love to hear from you! Get in touch with us for
                    support, feedback, or business inquiries.
                </p>
            </div>

            {/* Contact Form + Info */}
            <div className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className="bg-white p-8 rounded-2xl shadow-md">
                    <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                    <form className="space-y-5">
                        <div>
                            <label className="block text-gray-700 font-medium">Name</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium">Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium">Message</label>
                            <textarea
                                rows="4"
                                placeholder="Type your message..."
                                className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Contact Info */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
                    <p className="text-gray-700">
                        Reach out to us through any of the following ways:
                    </p>

                    <div className="space-y-4 text-gray-700">
                        <p className="flex items-center gap-2">
                            <FaAddressBook className="text-blue-500" />
                            <span><strong>Address:</strong> 123 ImarKet Shop Street, Bulandshahr, India</span>
                        </p>

                        <p className="flex items-center gap-2">
                            <FaPhoneAlt className="text-green-500" />
                            <span><strong>Phone:</strong> +91 705508....</span>
                        </p>

                        <p className="flex items-center gap-2">
                            <FaEnvelope className="text-red-500" />
                            <span><strong>Email:</strong> support@ImarKEt.com</span>
                        </p>

                        <p className="flex items-center gap-2">
                            <FaClock className="text-yellow-500" />
                            <span><strong>Working Hours:</strong> Mon - Sat (9:00 AM - 7:00 PM)</span>
                        </p>
                    </div>

                    {/* Map Embed */}
                    <div className="mt-6">
                        <iframe
                            title="Google Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14016.779660497095!2d77.21672195!3d28.64480025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd7c1a4d1b8d%3A0x1234567890abcdef!2sNew%20Delhi!5e0!3m2!1sen!2sin!4v1633020222345!5m2!1sen!2sin"
                            width="100%"
                            height="250"
                            allowFullScreen=""
                            loading="lazy"
                            className="rounded-lg shadow-md"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;

import React from "react";

const MissionStatementPage: React.FC = () => {
    return (
        <div className="bg-gray-100 min-h-screen p-8">
            <div className="container mx-auto grid grid-cols-2 gap-6">
                <div className="p-4 bg-white rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
                    <p className="text-gray-600">
                        A mission statement should succinctly capture the purpose and direction of your organization. It should answer the question: "Why does our organization exist?" Here's an example:

                        "Empower individuals through innovative technology solutions that enhance their lives and drive positive change in our communities."      </p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
                    <p className="text-gray-600">
                        "Fostering Bonds, Transforming Lives: Our Vision for the PetShop

                        Our vision is to create a world where every pet finds a loving home and experiences the joy of companionship. We aspire to be a beacon of hope for abandoned and neglected animals, where our community comes together to provide care, support, and responsible ownership.

                        In this future, our PetShop is not just a place to adopt pets; it's a hub of compassion and connection. We envision a society where the well-being of animals is a shared responsibility, and every wag of a tail reflects a life transformed through care and love.

                        Join us in shaping a future where pets and people thrive together, and where the bond between humans and animals is cherished and celebrated."

                        Feel free to modify this text to align with the specific goals and values of your pet shop's vision.          </p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-2">Core Values</h2>
                    <p className="text-gray-600">
                        Core values define the beliefs and principles that guide your organization's behavior and decisions. They shape your company culture and reflect your organization's identity. Here are a few possible core values:

                        Innovation: We continuously seek creative solutions to challenges, embracing change as an opportunity for growth.

                        Integrity: We uphold honesty, transparency, and ethical conduct in all interactions, earning the trust of our customers and partners.

                        Collaboration: We believe in the power of teamwork and value diverse perspectives to foster innovation and achieve shared goals.

                        Customer-Centric: We prioritize understanding and meeting the needs of our customers, ensuring their success is our success.

                        Sustainability: We are committed to reducing our environmental footprint and contributing po          </p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-2">Goals</h2>
                    <p className="text-gray-600">
                        Goals provide a roadmap for what your organization aims to achieve. They should be specific, measurable, achievable, relevant, and time-bound (SMART). Here are a few examples:

                        Short-Term Goal: Launch a new product within the next six months that addresses a pressing customer need and generates at least 1,000 sign-ups.

                        Medium-Term Goal: Increase annual revenue by 20% through expanding our customer base and enhancing customer retention strategies over the next two years.

                        Long-Term Goal: Establish a global presence in key markets by opening three international offices within the next five years.


                    </p>
                </div>
            </div>
        </div>
    );
};

export default MissionStatementPage;

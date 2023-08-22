/* eslint-disable react/no-unescaped-entities */
import React from "react";

const MissionStatementPage: React.FC = () => {
    return (
        <div className="bg-gray-100 min-h-screen p-8">
            <div className="container mx-auto grid grid-cols-2 gap-6">
                <div className="p-4 bg-white rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
                    <p className="text-gray-600">
                        Building a better world for pets via innovative technology therby fostering healthy bond and peaceful coexstence between humans and pets.     </p>
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
                        Innovation: We continuously seek creative solutions to challenges, embracing change as an opportunity for growth. Integrity: We uphold honesty, transparency, and ethical conduct in all interactions, earning the trust of our customers and partners. Collaboration: We believe in the power of teamwork and value diverse perspectives to foster innovation and achieve shared goals.  </p>  </div>
                <div className="p-4 bg-white rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-2">Goals</h2>
                    <p className="text-gray-600">

                        Short-Term Goal: Launch at a production scale within the next six months that addresses a pressing customer need and generates at least 1,000 sign-ups.

                        Medium-Term Goal: Provide homes for 100 pets within one year from launch date..

                        Long-Term Goal: Establish a global presence in key markets by opening three international offices within the next five years.


                    </p>
                </div>
            </div>
        </div>
    );
};

export default MissionStatementPage;

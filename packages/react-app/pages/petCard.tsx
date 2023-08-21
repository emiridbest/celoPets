/* eslint-disable @next/next/no-img-element */
import React from "react";
import pet from "./index"

export interface Pet {
  name: string;
  breed: string;
  color: string;
  description: string;
  age: number;
  imageURL: string;
  adopted: boolean;
  id: number;
  adopter:string;
}
interface PetCardProps {
  pet: Pet;
  onAdopt: (petId: number) => any;
}

export default function PetCard({ pet, onAdopt }: PetCardProps) {

  return (
    <div className="bg-white border border-gray-300 rounded-md p-4 w-44 shadow-md">
      <div className="mb-4">
        <img
          src={pet.imageURL}
          alt={pet.name}
          className="w-full h-auto rounded-md"
        />
      </div>
      <h2 className="text-gray-600">Name: {pet.name}</h2>
      <h2 className="text-gray-600">Breed: {pet.breed}</h2>
      <p className="text-gray-600">Color: {pet.color}</p>
      <p  className="text-gray-600 whitespace-pre-wrap overflow-auto">Desc: {pet.description}</p>
      <p className="text-gray-600">Age: {pet.age}</p>
      <p  className="text-gray-600 whitespace-pre-wrap overflow-auto">Adopter: {pet.adopter}</p>
      <div className="mt-4">
        {!pet.adopted ? (
          <button
            onClick={() => onAdopt(pet.id)}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Adopt
          </button>
        ) : (
          <p className="text-gray-500">Adopted</p>
        )}
      </div>
    </div>
  );
}

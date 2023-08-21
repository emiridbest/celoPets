
import React, { useEffect, useState } from 'react';
import Upload from './upload';
import PetCard from './petCard';
import { ethers } from 'ethers';
import { useEthersSigner } from './hook';
import { contractAddress, wagmiAbi } from '@/abi/PetShop';
import { PlusIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';



declare global {
  interface Window {
    ethereum?: any;
  }
}
interface Pet {
  adopter: string;
  id: number;
  age: number;
  name: string;
  breed: string;
  color: string;
  description: string;
  CID: string;
  adopted: boolean;
}


const Home: React.FC = () => {
  const [pets, setPets] = useState<Pet[]>([]);
  const signer = useEthersSigner();
  const contract = new ethers.Contract(contractAddress, wagmiAbi, signer);
  const [isMobile, setIsMobile] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);


  const handleUploadPet = async (age: number, name: string, breed: string, color: string, description: string, CID: string) => {
    // Logic to upload pet to Pinata
    // After uploading, you can refresh the pets list
    const gasLimit = ethers.utils.hexlify(6000000);
    await contract.addPet(age, name, breed, color, description, CID, { gasLimit });

    fetchPets()
  };

  const fetchPets = async () => {
    try {
      const availablePets = await contract.adoptedPets();

      const formattedPets = [];
      for (const petIdBN of availablePets) {
        const petId = petIdBN.toNumber();
        console.log("Pet adopted:", petId);

        const petDetail = await contract.petList(petId); // Use petId
        formattedPets.push({ ...petDetail, key: petId });
      }

      setPets(formattedPets);
    } catch (error) {
      console.error("Error fetching pets:", error);
    }
  };

  const handleAdopt = async (petId: number) => {
    try {
      for (const pet of pets) {
        console.log("Adopting pet with id:", pet.id);
        const gasLimit = ethers.utils.hexlify(6000000);
        await contract.adoptPet(petId, { gasLimit });
  
        console.log("Pet adopted:", pet.id);
      }
  
      // Fetch the updated list of pets after adoption
      fetchPets();
    } catch (error) {
      console.error("Error adopting pets:", error);
    }
  };
  
  useEffect(() => {
    if (contract) {
      fetchPets();
    }
  }, [signer]);

  const buttonPosition = isMobile ? 'fixed bottom-4 right-4' : 'absolute top-40 right-20';

  return (
    <div>
      <div className="container mx-auto p-1">
        <div className={`flex flex-col resr-cyan mx-auto content-center px-4 py-6 text-center sm:px-6 ${showAnimation ? 'animate-bounce' : ''}`}>
          <h1 className="text-7xl font-bold text-cyan "> Adopt a Pet Today</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {pets.map((pet) => (
            <PetCard
              key={pet.id} // Add a unique key prop here
              pet={{
                name: pet.name,
                breed: pet.breed,
                color: pet.color,
                description: pet.description,
                age: pet.age,
                adopter: pet.adopter,
                imageURL: `https://gateway.pinata.cloud/ipfs/${pet.CID}`,
                adopted: pet.adopted,
                id: pet.id,
              }}
              onAdopt={handleAdopt}
            />
          ))}
        </div>

        <Upload handleUploadPets={handleUploadPet} />
        <Link href="/upload">
          <button
            className={`bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-200 ${buttonPosition}`}
            type="button"
          >
            <PlusIcon className="h-6 w-6" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
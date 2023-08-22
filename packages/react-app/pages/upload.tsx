import React, { useState } from 'react';

interface UploadProps {
  handleUploadPets: (
    age: number,
    name: string,
    breed: string,
    color: string,
    description: string,
    CID: string,
  ) => void;
}

const pinataApiKey = process.env.NEXT_PUBLIC_PINATA_API_KEY;
const pinataSecretApiKey = process.env.NEXT_PUBLIC_PINATA_API_SECRET;

const Upload: React.FC<UploadProps> = ({ handleUploadPets }) => {
  const [breedInput, setBreedInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [colorInput, setColorInput] = useState('');
  const [ageInput, setAgeInput] = useState<number>(0);
  const [description, setDescription] = useState('');
  const [pinataCID, setPinataCID] = useState<string>('');
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0];
    if (selectedFile) {
      setIsUploading(true);
      const data = new FormData();
      data.append('file', selectedFile);
      data.append('pinataOptions', JSON.stringify({ wrapWithDirectory: false }));
  
      try {
        const timestamp = new Date().toISOString(); // Generate a unique timestamp
        const content = selectedFile.name + timestamp; // Modify content
  
        const response = await fetch(
          "https://api.pinata.cloud/pinning/pinFileToIPFS",
          {
            method: "POST",
            headers: {
              pinata_api_key: pinataApiKey,
              pinata_secret_api_key: pinataSecretApiKey,
            },
            body: data,
          }
        );
  
        console.log("Pinata API Response Status:", response.status);
        const responseData = await response.json();
        console.log("Pinata API Response Data:", responseData);
  
        if (!response.ok) {
          console.error("Error uploading to Pinata:", responseData.error);
          setIsUploading(false);
          return;
        }
  
        const newPinataCID = responseData.IpfsHash;
        setPinataCID(newPinataCID);
        setIsUploading(false);
      } catch (error) {
        console.error('Error uploading to Pinata:', error);
        setIsUploading(false);
      }
    }
  };
  
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    handleUploadPets(ageInput, nameInput, breedInput, colorInput, description, pinataCID);
    // Handle submitting the form and calling handleUploadPets
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Upload Pet to Pinata</h2>
      <div className="grid grid-cols-1 gap-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
        />
        <input
          type="text"
          placeholder="Breed"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
          value={breedInput}
          onChange={(e) => setBreedInput(e.target.value)}
        />
        <input
          type="string"
          placeholder="color"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
          value={colorInput}
          onChange={(e) => setColorInput(e.target.value)}
        />
        <input
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
          type="string"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Age in years"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
          value={ageInput}
          onChange={(e) => setAgeInput(Number(e.target.value))}
        />
        <input
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
          type="text"
          id="pinataCID"
          value={isUploading ? 'Retrieving PinataCID...' : pinataCID}
          readOnly
        />

        <input
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
          type="file"
          accept=".jpg,.png" // Accepts only .jpg and .png files
          onChange={handleFileChange}
        />
        <button
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full shadow-lg transition-all duration-200"
          onClick={handleSubmit}
          disabled={isUploading || !pinataCID}
        >
          {isUploading ? 'Uploading...' : 'Upload'}
        </button>
      </div>
    </div>
  );
};

export default Upload;

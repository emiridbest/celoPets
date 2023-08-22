// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PetShop {
    struct Pet {
        uint256 id;
        uint8 age;
        string name;
        string breed;
        string color;
        string description;
        string CID;
        bool adopted;
        address adopter;
    }

    Pet[] public petList;
    mapping(uint256 => address) public owner;

    event PetUploaded(
        uint256 id,
        uint8 age,
        string name,
        string breed,
        string color,
        string description,
        string CID
    );
    event PetAdopted(uint256 indexed petId, address indexed adopter);

    function addPet(
        uint8 age,
        string memory name,
        string memory breed,
        string memory color,
        string memory description,
        string memory CID
    ) external {
        uint256 petId = petList.length;
        petList.push(
            Pet(
                petId,
                age,
                name,
                breed,
                color,
                description,
                CID,
                false,
                address(0)
            )
        );
        owner[petId] = msg.sender;
        emit PetUploaded(petId, age, name, breed, color, description, CID);
    }

    function adoptPet(uint256 petId) public {
        require(petId >= 0 && petId <= petList.length, "Pet does not exist");
        require(!petList[petId].adopted, "Pet already adopted");
        require(msg.sender != owner[petId], "You already own this pet");
        petList[petId].adopted = true;
        petList[petId].adopter = msg.sender;

        emit PetAdopted(petId, msg.sender);
    }

    function getAllPets() external view returns (uint256[] memory) {
        uint256[] memory availablePetIds = new uint256[](petList.length);

        for (uint256 i = 0; i < petList.length; i++) {
            availablePetIds[i] = petList[i].id;
        }

        return availablePetIds;
    }

    function adoptedPets() external view returns (uint256[] memory) {
        uint256[] memory adoptedPetIds = new uint256[](petList.length);
        uint256 count = 0;

        for (uint256 i = 0; i < petList.length; i++) {
            if (petList[i].adopted) {
                adoptedPetIds[count] = i + 1;
                count++;
            }
        }

        return adoptedPetIds;
    }

    function getPetInfo(uint256 petId) external view returns (Pet memory) {
        require(petId >= 0 && petId <= petList.length, "Pet does not exist");
        return petList[petId - 1];
    }
}

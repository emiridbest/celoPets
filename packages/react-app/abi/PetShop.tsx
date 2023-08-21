export const contractAddress = "0x0d578F50f73c069F4ae0F1ec17Ab7AFd5c9D0ba7"
export const wagmiAbi = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "petId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "adopter",
				"type": "address"
			}
		],
		"name": "PetAdopted",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint8",
				"name": "age",
				"type": "uint8"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "breed",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "color",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "CID",
				"type": "string"
			}
		],
		"name": "PetUploaded",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint8",
				"name": "age",
				"type": "uint8"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "breed",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "color",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "CID",
				"type": "string"
			}
		],
		"name": "addPet",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "petId",
				"type": "uint256"
			}
		],
		"name": "adoptPet",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "adoptedPets",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAvailablePets",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "petId",
				"type": "uint256"
			}
		],
		"name": "getPetInfo",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "uint8",
						"name": "age",
						"type": "uint8"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "breed",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "color",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "description",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "CID",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "adopted",
						"type": "bool"
					},
					{
						"internalType": "address",
						"name": "adopter",
						"type": "address"
					}
				],
				"internalType": "struct PetShop.Pet",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "petList",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "uint8",
				"name": "age",
				"type": "uint8"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "breed",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "color",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "CID",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "adopted",
				"type": "bool"
			},
			{
				"internalType": "address",
				"name": "adopter",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
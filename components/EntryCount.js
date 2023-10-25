import React, { useEffect, useState } from 'react';
import Web3 from 'web3';

const PlayerList = () => {
  const [web3, setWeb3] = useState(null);
  const [players, setPlayers] = useState([]);
  const [walletCount, setWalletCount] = useState(0);

  useEffect(() => {
    async function initWeb3() {
      if (window.ethereum) {
        const web3Instance = new Web3(window.ethereum);
        await window.ethereum.enable();
        setWeb3(web3Instance);
      }
    }
    initWeb3();
  }, []);

  useEffect(() => {
    async function getPlayersList() {
      if (web3) {
        const accounts = await web3.eth.getAccounts(); // Get connected wallet addresses
        if (accounts.length > 0) {
          const currentWallet = accounts[0]; // Use the first connected wallet
          const contractABI = [
            // Replace with your actual contract ABI
            // Example:
            {
              constant: true,
              inputs: [],
              name: 'getPlayers',
              outputs: [{ name: '', type: 'address[]' }],
              type: 'function',
            },
          ];

          const contractAddress = '0xd7EA92A63371cC9324E9Fde3F69c7aDfBd77BAEc'; // Replace with your actual contract address
          const contract = new web3.eth.Contract(contractABI, contractAddress);
          const playerAddresses = await contract.methods.getPlayers().call();
          setPlayers(playerAddresses);

          // Count the number of times the current wallet address appears
          const count = playerAddresses.filter(address => address.toLowerCase() === currentWallet.toLowerCase()).length;
          setWalletCount(count);
        }
      }
    }

    if (web3) {
      getPlayersList();
    }
  }, [web3]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h2 style={{ color: 'white' }}>List of Current Players:</h2>
      <p style={{ color: 'white' }}>Your wallet address appears {walletCount} times in the list.</p>
      <ul>
        {players.map((player, index) => (
          <li key={index} style={{ color: 'white' }}>{player}</li>
        )}
      </ul>
    </div>
  );
};

export default PlayerList;

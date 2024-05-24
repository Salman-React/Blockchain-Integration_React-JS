const express = require('express');
const { Web3 } = require('web3');
var cors = require('cors')


const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors())

// Connect to TestNet using Infura
const web3 = new Web3('https://mainnet.infura.io/v3/023ab9055c2f4f719d5d3beca0cf47d9');

app.get('/api/testConnection', async (req, res) => {
  try {
    const blockNumber = await web3.eth.getBlockNumber();
    res.send(`Connection with blockchain successful, Your Block Number is: ${blockNumber}`);
  } catch (error) {
    console.error('Error connecting to blockchain:', error);
    res.status(500).send('Connection failed');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

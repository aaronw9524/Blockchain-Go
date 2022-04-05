const Migrations = artifacts.require("Migrations");
const DaiTokenMock = artifacts.require("DaiTokenMock");

module.exports = async function(deployer) {
  await deployer.deploy(Migrations);
  await deployer.deploy(DaiTokenMock);
  const tokenMock = await DaiTokenMock.deployed()
  
  await tokenMock.mint(
    '0x23711fF3eD42a36b2b70276Adc4deA19f72d2AEC',
    '1000000000000000000000'
  )
};

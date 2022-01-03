const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
  const gameContract = await gameContractFactory.deploy(
    ["Seeker", "Merlin", "Arthur"],       // Names
    ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtaKUBlXOfcMXzKqm73o1ft9LQY-MSYUPTPQ&usqp=CAU", // Images
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0AewtdQbOdTG_MKHSkLOxOBzhlnXIJvPykQ&usqp=CAU", 
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj0Y8VIV72TvLbMyCgL5CaAoF2UFUt8Iirlg&usqp=CAU"],
    [100, 200, 300],                    // HP values
    [100, 50, 25],                      // Attack damage values
    "Darken rahl",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgjHSm_j3uenyTA2ED8QeAT6zZc8yKU-SuHL8o8Z0m1Nsnx93avLgd9RG-&s=10",
    1200,
    50
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

  let txn;
// We only have three characters.
// an NFT w/ the character at index 2 of our array.
txn = await gameContract.mintCharacterNFT(2);
await txn.wait();

txn = await gameContract.attackBoss();
await txn.wait();

txn = await gameContract.attackBoss();
await txn.wait();
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
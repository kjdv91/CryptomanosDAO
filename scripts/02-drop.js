import { ethers } from 'ethers';
import sdk from "./01-instanciar-sdk.js";

(async () =>{
    try{
        const dropAddress = await sdk.deployer.deployEditionDrop(
            {
                name: "Cryptomanos DAO",
                description: "Dao de la comunidad Cryptomanos Learning",
                image: "https://gateway.pinata.cloud/ipfs/Qmc1sGaA8TtwcoFAwyNdTdfS6bkyMNPmedXiMoP8yMPYxk/100.png",
                primary_sale_recipient: ethers.constants.AddressZero
            });

            const editionDrop = sdk.getEditionDrop(dropAddress);
            const metadata = await editionDrop.metadata.get();

            console.log("Contrato de drop deployed ", editionDrop)
            console.log("Metadata del drop", metadata)

    }catch(err){
        console.error("Error en deployar editionDrop", err)

    }

})();
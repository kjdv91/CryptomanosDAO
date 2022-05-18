import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { ethers } from 'ethers'
import 'dotenv/config'

if(!process.env.PRIVATE_KEY || process.env.PRIVATE_KEY ===""){
    console.log("Private Key no encontrada")

}

if(!process.env.ALCHEMY_KEY || process.env.ALCHEMY_KEY ===""){
    console.log("Private Key no encontrada")

}

if(!process.env.WALLET_ADDRESS || process.env.WALLET_ADDRESS ===""){
    console.log("Private Key no encontrada")

}

const sdk = new ThirdwebSDK(
    new ethers.Wallet(
        process.env.PRIVATE_KEY,
        ethers.getDefaultProvider(process.env.ALCHEMY_KEY)
    )
);

(async()=>{
    try{
        const address = await sdk.getSigner().getAddress();
        console.log("Sdk instanciado por:", address);

    }catch(err){
        console.error("Ocurrio un error al instanciar el SDK", err);
        process.exit(1);

    }
})();

export default sdk;
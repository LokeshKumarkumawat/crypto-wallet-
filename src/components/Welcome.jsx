import React, { useContext } from 'react'
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";


import { Loader } from '.'


import { TransactionContext } from '../context/TransactionsContext';
import { shortenAddress } from '../utils/shortenAddress'





const Input = ({ placeholder, name, type, value, handleChange }) => (
    <input
        placeholder={placeholder}
        type={type}
        step="0.0001"
        value={value}
        onChange={(e) => handleChange(e, name)}
        className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
    />
);



const Welcome = () => {


    const { connectWallet, currentAccount, formData, sendTransaction,isLoading, handleChange } = useContext(TransactionContext);






    const handleSubmit = (e) => {
        const { addressTo, amount, message } = formData;

        e.preventDefault();

        if (!addressTo || !amount || !message) return;

        sendTransaction();
    };


    return (
        <div className="md:container md:mx-auto md:flex items-center  p-4 mt-10 " >
            <div className="text-white md:flex-1 flex md:justify-center ">

                <div className=" md:w-96">


                    <h1 className="text-2xl">Send Crypto</h1>
                    <p className="mt-3 ">Explore the crypto world. Buy and sell cryptocurrencies </p>

                    {!currentAccount && (
                        <p className="mt-4 px-2	w-fit white-glassmorphism rounded-md p-1 ">Address</p>


                    )}

                    {currentAccount && (

                        <p className="mt-4 px-2	w-fit white-glassmorphism rounded-md p-1 ">{shortenAddress(currentAccount)}</p>

                    )}

                    {currentAccount && (


                        <button
                            type="button"
                            onClick={connectWallet}
                            className="flex flex-row w-full md:w-48  justify-center items-center my-6 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
                        >
                            <AiFillPauseCircle className="text-white mr-2" />
                            <p className="text-white text-base font-semibold">
                                Connected
                            </p>
                        </button>

                    )}

                    {!currentAccount && (


                        <button
                            type="button"
                            onClick={connectWallet}
                            className="flex flex-row w-full md:w-48  justify-center items-center my-6 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
                        >
                            <AiFillPlayCircle className="text-white mr-2" />
                            <p className="text-white text-base font-semibold">
                                Connect Wallet
                            </p>
                        </button>

                    )}


                </div>
            </div>



            <div className=" mt-10 md:flex-1  flex md:justify-center justify-center items-end">


                <div className="p-5 md:w-96 w-full flex flex-col  items-center blue-glassmorphism">
                    <Input placeholder="Address To" name="addressTo" type="text" handleChange={handleChange} />
                    <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange} />
                    <Input placeholder="Enter Message" name="message" type="text" handleChange={handleChange} />

                    <div className="h-[1px] w-full bg-gray-400 my-2" />

                    {isLoading
                        ? <Loader />
                        : (
                            <button
                                type="button"
                                onClick={handleSubmit}
                                className="text-white w-full  mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
                            >
                                Send now
                            </button>
                        )}
                </div>
            </div>

        </div>

    )
}

export default Welcome
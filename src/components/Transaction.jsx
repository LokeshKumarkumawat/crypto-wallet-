

import React, { useContext } from 'react'


import { TransactionContext } from '../context/TransactionsContext';
import { shortenAddress } from '../utils/shortenAddress'


const TransactionCard = ({ addressTo, addressFrom, timestamp, message, amount }) => {

    return (

        <div className="white-glassmorphism p-3  rounded-md  ">
            <p className=" text-slate-400">From:&nbsp;&nbsp;<span className="text-white">{shortenAddress(addressFrom)} </span> </p>
            <p className="my-2 text-slate-400">To:&nbsp;&nbsp; <span className="text-white">{shortenAddress(addressTo)}</span> </p>
            <p className="my-2 text-slate-400">Amount:&nbsp;&nbsp; <span className="text-white">{amount}</span> </p>
            <p className="my-2 text-slate-400 truncate">Message:&nbsp;&nbsp; <span className="text-white">{message}</span> </p>
            <p className="my-2 text-white text-center text-xs mt-6 mb-0 "> <span className=" bg-[#0d0e0c94] py-2 px-1 rounded-md ">{timestamp}</span></p>
        </div>


    )

}



const Transaction = () => {


    const { currentAccount, transactions } = useContext(TransactionContext);


    return (

        <div className="md:container md:mx-auto text-white md:flex-row items-center mt-9 md:mt-24 ">

            {!currentAccount ? (
                <div>
                    <h1 className="flex justify-center text-2xl text-center px-4">Connect your account to see the transactions</h1>
                </div>

            ) : (

                <div>
                    <h1 className="flex justify-center text-2xl">Transactions</h1>
                </div>

            )}



            {/* white-glassmorphism  */}



            <div className=" text-white grid grid-cols-2 md:grid-cols-4 sm:grid-cols-2 gap-2 p-4 mt-9">


                

            

                {transactions.map((transaction, i) => (
                    <TransactionCard key={i} {...transaction} />


                ))}

            </div>

        </div>
    )
}

export default Transaction
import { useEffect, useState } from "react";
import Navbar from "../componets/Navbar";
import "../style/presale.css";
import bnb from "../assets/bnb.png"
import usdt from "../assets/usdt.png"
import arrow from "../assets/Arrow.png"
import { contractAddress, contractAbi } from "../componets/utils/Contract";
import { usdtAddress, usdtAbi } from "../componets/utils/USDT";
import toast from "react-hot-toast";
import { useAccount } from "wagmi";
import Web3 from "web3";
import {
  prepareWriteContract,
  writeContract,
  waitForTransaction,
} from "@wagmi/core";
import { Web3Button } from "@web3modal/react";
import Footer from "../componets/Footer";

const isValid = (regex) => (input) => regex.test(input);
const numberRegex = /^\d*\.?\d*$/;
const isValidNumber = isValid(numberRegex);

const Presale = () => {

  const [isOpen, setIsOpen] = useState(false);
  const { isConnected, address } = useAccount();
  const [walletBal, setwalletBal] = useState(0);

  const [fundsRaised, setFundsRaised] = useState(0);
  const [tokensSold, setTokensSold] = useState(0);
  const [usdtPrice, setUsdtPrice] = useState(0);
  const Helper = new Web3("https://1rpc.io/bnb");
  const usdtTokenContract = new Helper.eth.Contract(usdtAbi, usdtAddress);

  const tokenPrice = usdtPrice;

  const [data, setData] = useState({
    eth: "",
    gart: "",
  });

  const closeModal = () => {
    setIsOpen(false);
  };

  const checkWalletAddress = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isConnected) {
      fetchwalletBal(address);
    }
  }, [isConnected, address]);

  const fetchwalletBal = async (walletAddress) => {
    try {
      const balance = await Helper.eth.getBalance(walletAddress);
      const balanceInEther = Helper.utils.fromWei(balance);
      setwalletBal(balanceInEther);
    } catch (error) {
      console.error("Error fetching wallet balance:", error);
    }
  };

  const [allowance, setAllowance] = useState(0);

  useEffect(() => {
    const fetchAllowance = async () => {
      try {
        const usdtContract = new Helper.eth.Contract(usdtAbi, usdtAddress);
        const allowanceAmount = await usdtContract.methods
          .allowance(address, contractAddress)
          .call();
        setAllowance(allowanceAmount);
      } catch (error) {
        console.error("Error fetching allowance:", error);
      }
    };
    console.log("fetch allowance");
    fetchAllowance();
  }, [address, contractAddress]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const presaleContract = new Helper.eth.Contract(
          contractAbi,
          contractAddress
        );

        const fundsRaised = await presaleContract.methods
          .totalUSDTCollected()
          .call();
        setFundsRaised(fundsRaised / 10 ** 18);

        const tokensSold = await presaleContract.methods
          .totalTokensSold()
          .call();
        setTokensSold(tokensSold / 10 ** 18);

        const usdtPri = await presaleContract.methods.tokensPerUSDT().call();
        setUsdtPrice(usdtPri / 10000);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const buy = async () => {
    if (!address || !isConnected) {
      toast.error("Please connect your wallet!");
      return;
    }
    try {
      let ethValue = Helper.utils.toWei(data.eth.toString());
      const ethValueNumber = Number(ethValue);

      const tokenBalance = await usdtTokenContract.methods
        .balanceOf(address)
        .call();

      if (Number(tokenBalance) < ethValueNumber) {
        toast.error("Insufficient USDT balance for this transaction");
        return;
      }

      if (allowance < ethValueNumber) {
        toast.error("You don't have enough allowance for this transaction");
        return;
      }

      const buyTransaction = await prepareWriteContract({
        address: contractAddress,
        abi: contractAbi,
        functionName: "buy",
        args: [ethValueNumber],
        from: address,
      });

      const toastId = toast.loading("Processing Buy Transaction..");
      await writeContract(buyTransaction);

      toast.success("Buy Transaction completed successfully", { id: toastId });
      setData({ eth: "", gart: "" });

      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } catch (error) {
      toast.dismiss();
      if (allowance < 0) {
        toast.error("You don't have enough allowance for this transaction");
      } else {
        toast.error("Error in buytransaction");
      }

      console.error(error);
    }
  };

  const approveTran = async () => {
    if (!address || !isConnected) {
      toast.error("Please connect your wallet!");
      return;
    }
    try {
      let ethValue = Helper.utils.toWei(data.eth.toString());
      const ethValueNumber = Number(ethValue * 10 ** 18);
      const approvalTransaction = await prepareWriteContract({
        address: usdtAddress,
        abi: usdtAbi,
        functionName: "approve",
        args: [contractAddress, ethValueNumber],
        from: address,
      });

      const toastId = toast.loading("Approving transaction...");
      const hash = await writeContract(approvalTransaction);
      toast.loading("Processing Approval Transaction..", { id: toastId });
      await waitForTransaction(hash);
      toast.dismiss(toastId);
      toast.success("Approval completed successfully");
      setAllowance(ethValueNumber);
    } catch (error) {
      toast.dismiss();
      toast.error("Error in approve transaction");
      console.error(error);
    }
  };


  return (
    <>
      <div id="presale" className=" presale-main">
        <Navbar />

        <div className="presale-page">
        <div className="presale-bg">
          <div className=" ">
            <div className="">
              <div className="presale-heading">
                UNIVERSAL TRAVEL PAY <br />
                <span className="presale"> Presale</span>
              </div>
              <p className="color-white presale-para">
                Join the Universal Travel Pay (UTPC) presale and be part of the
                future of effortless global travel payments. Secure your tokens
                now for exclusive early benefits!
              </p>
            </div>
            <br />
            <Web3Button />
            <div className="price">
              <div className="price-div">
                <div>Listing price: </div>
                <div className="dollar-price">$0.0001</div>
              </div>
              <img src={arrow} alt="" />
              <div className="price-div">
                <div>Next price: </div>
                <div className="dollar-price">$0.0002</div>
              </div>
            </div>
          </div>
          {/* background dark-gray */}
          <div className="">
            <div className="">
              <div className="buy">Buy with</div>
              <div className="btn-div">
                <button className="btn-img btns orange-btn"> <img src={usdt} className="image-btn" alt="" /> USDT</button>
              {/* <button className="btn-img btns orange-btn"> <img src={bnb} className="image-btn" alt="" /> BNB</button> */}
              </div>
              <div className="">
                <input
                    type="text"
                    className="input-field"
                    placeholder="USDT Amount"
                    value={data.eth}
                    onChange={(e) => {
                      const val = e.target.value
                        .split("")
                        .filter((el) => isValidNumber(el))
                        .join("");
                      setData({
                        ...data,
                        eth: val,
                        gart: val * tokenPrice,
                      });
                    }}
                  />
              </div>
              <div className="buy">You Will Get</div>

              <div className="">
              <input
                    type="text"
                    className="input-field"
                    placeholder="UTPC Amount"
                    value={data.gart}
                    onChange={(e) => {
                      const val = e.target.value
                        .split("")
                        .filter((el) => isValidNumber(el))
                        .join("");
                      setData({
                        ...data,
                        gart: val,
                        eth: val / tokenPrice,
                      });
                    }}
                  />
              </div>
            </div>
            {allowance > data.eth ? (
                <button onClick={buy} className="approve-btn" type="button">
                  Buy Now
                </button>
              ) : (
                <button
                  onClick={approveTran}
                  className="approve-btn"
                  type="button"
                >
                  Approve
                </button>
              )}
          </div>
        </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Presale;

"use client";
import Image from "next/image";
import { ModeToggle } from "./Modetoggle";
import { useAccount } from "wagmi";
import { Button } from "./ui/button";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { truncateAddress } from "@/lib/utils";
import { bookingAbi, bookingAddress, tokenAbi, tokenAddress } from "@/constants";
import { useReadContract } from "wagmi";
import { useEffect, useState } from "react";


export default function Nav() {
  const { isConnected, address } = useAccount();
  const { open } = useWeb3Modal();
  const [token, setToken] = useState<any>([]);

  const handleConnect = () => {
    open();
  };

  const {data: tokenData } = useReadContract({
    abi: tokenAbi,
    address: tokenAddress,
    functionName: "balanceOf",
    args: [address],
  });

  useEffect(() => {
    if (address && tokenData) {
      setToken(tokenData.toString());
    }
  }, [tokenData, address]);

  return (
    <header>
      <nav>
        <ul className="flex items-center justify-between">
          <li>
            <a
              className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
              href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/pex.png"
                alt="PEX Logo"
                className="dark:invert"
                width={100}
                height={24}
                priority
              />
            </a>
          </li>

          <li>
            <h1 className="text-2xl font-bold">Hotel Booking Dapp</h1>
          </li>
          <li>
            <div className="flex items-center gap-3">
              {!isConnected ? (
                <Button onClick={handleConnect}>Connect Wallet</Button>
              ) : (
                <p>
                  {truncateAddress(address)}&nbsp;{token} HTK
                </p>
              )}
              <ModeToggle />
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

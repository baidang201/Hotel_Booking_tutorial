"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

import { bookingAbi, bookingAddress, tokenAbi, tokenAddress } from "@/constants";
import { toast } from "sonner";
import { useAccount, useReadContract, useWriteContract } from "wagmi";
import RoomCard from "@/components/RoomCard";
import AddRoomModal from "@/components/AddRoomModal";
import SetAvailabilityModal from "@/components/SetAvailabilityModal";

export default function Home() {
  const [rooms, setRooms] = useState<any>([]);
  const { isConnected, address } = useAccount();
  const {
    data: hash,
    error,
    isPending,
    writeContractAsync,
  } = useWriteContract();

  const { data: roomData } = useReadContract({
    abi: bookingAbi,
    address: bookingAddress,
    functionName: "getAllRooms",
  });

  useEffect(() => {
    if (roomData) {
      setRooms(roomData);
    }
  }, [roomData]);

  const handleMintToken = async () => {
    try {
      const bookRoomTx = await writeContractAsync({
        abi: tokenAbi,
        address: tokenAddress,
        functionName: "mint",
        args: [address, "100000000000000000000"],
      });

      console.log("mintToken hash:", bookRoomTx);
    } catch (err: any) {
      toast.error("mintToken Failed: " + err.message);
      console.log("mintToken Failed: " + err.message);
    }
  };

  const handleApproveToken = async () => {
    try {
      const bookRoomTx = await writeContractAsync({
        abi: tokenAbi,
        address: tokenAddress,
        functionName: "approve",
        args: [bookingAddress, "10000000000000000000000"],
      });

      console.log("approveToken hash:", bookRoomTx);
    } catch (err: any) {
      toast.error("approveToken Failed: " + err.message);
      console.log("approveToken Failed: " + err.message);
    }
  };

  return (
    <main>
      <section className="py-12 flex  items-center justify-between ">
        <h1 className="text-lg font-bold">Owner actions</h1>
        <div className="flex items-center gap-2">
          <button onClick={handleMintToken}>Mint HotelToken</button>
          <button onClick={handleApproveToken}>Approve HotelToken</button>
          <AddRoomModal>
            <Button>Add room</Button>
          </AddRoomModal>

          <SetAvailabilityModal>
            <Button>Set availability</Button>
          </SetAvailabilityModal>
          
        </div>
      </section>

      <div>
        {rooms.length > 0 ? (
          rooms?.map((room: any) => (
            <>
              <RoomCard key={room.id} room={room} />
            </>
          ))
        ) : (
          <div>
            <h1 className="text-2xl font-semibold">No rooms available</h1>
          </div>
        )}
      </div>
    </main>
  );
}

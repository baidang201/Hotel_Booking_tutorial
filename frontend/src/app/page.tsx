"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { parseEther } from "viem";

import { Rooms } from "@/constants/dummy";
import {
  tokenAbi,
  bookingAbi,
  tokenAddress,
  bookingAddress,
} from "@/constants";

import { useReadContract, useAccount, useWriteContract } from "wagmi";
import RoomCard from "@/components/RoomCard";
import AddRoomModal from "@/components/AddRoomModal";
import AddReviewModal from "@/components/AddReviewModal";

export default function Home() {
  const [rooms, setRooms] = useState<any>([]);

  const {
    data: roomData,
    status,
    isLoading,
    error,
  } = useReadContract({
    abi: bookingAbi,
    address: bookingAddress,
    functionName: "getAllRooms",
  });

  useEffect(() => {
    if (roomData) {
      console.log(roomData);
      // Assuming the contract returns an array of rooms, cast it to Room[]
      setRooms(roomData);
    }
  }, [roomData]);

  return (
    <main>
      <section className="py-12 flex  items-center justify-between ">
        <h1 className="text-lg font-bold">Owner actions</h1>
        <div className="flex items-center gap-2">
          <AddRoomModal>
            <Button>Add room</Button>
          </AddRoomModal>

          <Button>Set availability</Button>
        </div>
      </section>

      <div>
        {/* {isLoading && <div>Loading...</div>} */}
        {rooms.length > 0 ? (
          rooms?.map((room: any) => (
            <>
              {console.log(room)}
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

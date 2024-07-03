"use client";
import React, {useState} from "react";
import {Button} from "@/components/ui/button";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [valueArray, setValueArray] = useState(new Array(9).fill(""));
  const [turn, setTurn] = useState<number>(0);

  const handlePlay = (index: number) => {
    console.log(turn);
    let newValueArray = [...valueArray];
    newValueArray[index] = turn % 2 ? "X" : "O";
    setTurn(turn + 1);
    setValueArray(newValueArray);
  };

  const handleReplay = () => {
    setTurn(0);
    setValueArray(new Array(9).fill(""));
  };

  return (
    <div className="bg-white w-screen h-screen">
      <div
        className={"game flex justify-center " + (!isPlaying ? "hidden" : "")}
      >
        <div className="grid gap-2 grid-cols-3 grid-rows-3 w-fit">
          {valueArray.map((value: string, index: number) => (
            <div
              key={index}
              className="w-40 h-40 flex justify-center items-center border-solid border-2 border-black"
              onClick={() => handlePlay(index)}
            >
              <p className="content font-bold text-4xl text-[100px] text-black">
                {value}
              </p>
            </div>
          ))}
        </div>
        <div className={"resultContainer " + (!isPlaying ? "hidden" : "")}>
          <p className={"result " + (!isPlaying ? "hidden" : "")}></p>
        </div>
      </div>
      <div className="flex justify-center items-center w-screen h-screen absolute">
        <div className="absolute">
          <Button
            className={"startButton " + (isPlaying ? "hidden" : "")}
            variant="outline"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            start
          </Button>
          <Button
            className={"replayButton " + (!isPlaying ? "hidden" : "")}
            variant="outline"
            onClick={handleReplay}
          >
            Stop Game
          </Button>
        </div>
      </div>
    </div>
  );
}

"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

/**
 * @description Defines a React component that displays a simple game of tic-tac-toe.
 * It uses state to keep track of the current game state, including who is playing
 * and the current turn. The `handlePlay` and `handleReplay` functions are called
 * when the player clicks on a cell in the game board.
 *
 * @returns {HTML division element} a game interface with a tic-tac-toe board and
 * buttons for starting and stopping the game.
 *
 * 	* `<div className="bg-white w-screen h-screen">`: This is the main div element
 * that contains all the game components. It has a class of "bg-white" for a white
 * background and "w-screen" to cover the entire screen width. It also has a height
 * of "h-screen" to reach the full screen height.
 * 	* `<div className="game flex justify-center hidden">`: This div element is inside
 * the main div element and has a class of "game". It uses the "flex" layout mode to
 * center its content vertically and horizontally. The "justify-center" class centers
 * the element within its container, and the "hidden" class hides it when the game
 * is not in progress.
 * 	* `<div className="grid gap-2 grid-cols-3 grid-rows-3 w-fit">`: This is a div
 * element inside the "game" div element that contains 3 columns and 3 rows of game
 * pieces. The "grid" layout mode is used to position the pieces in a grid, and the
 * "gap-2" class sets the gap between the pieces to 2 pixels. The "w-fit" class makes
 * sure that each piece fits within its container.
 * 	* `{valueArray.map((value: string, index: number) => (`): This is an array of
 * game pieces that are displayed on the screen. Each piece is represented by a small
 * rectangle with a specific value inside it (either "X" or "O"). The `map` function
 * iterates over each piece in the `valueArray` and creates a new div element for
 * each one, with its own `key` attribute set to the `index` of the piece.
 * 	* `<div className="w-40 h-40 flex justify-center items-center border-solid border-2
 * border-black">`: This is a div element inside the game grid that represents a
 * single game piece. It has a class of "w-40" to set its width to 40 pixels, and
 * "h-40" to set its height to 40 pixels as well. The "flex" layout mode centers the
 * element within its container vertically and horizontally. The `justify-center`
 * class centers the element within its own grid cell, and the `items-center` class
 * aligns its content in the middle. The `border-solid` class sets a solid border
 * around the piece, and the `border-2` class adds an additional outer border with a
 * different color. Finally, the `border-black` class sets the color of both borders
 * to black.
 * 	* `<p className="content font-bold text-4xl text-[100px] text-black">`: This is
 * a simple text element inside each game piece that displays its value ("X" or "O").
 * The `className` attribute sets the styles for the text element, including its font
 * size (`text-4xl`) and color (`text-black`). The `[100px]` attribute sets the width
 * of the text to 100 pixels.
 * 	* `<Button className={"startButton " + (isPlaying ? "hidden" : "")} variant="outline">`:
 * This is a button element inside the game grid that allows players to start a new
 * game. The `className` attribute sets the styles for the button, including its
 * background color (`outline`) and size (`w-full`). The `(isPlaying ? "hidden" :
 * "")` syntax hides the button when the game is in progress.
 * 	* `<Button className={"replayButton " + (!isPlaying ? "hidden" : "")}
 * variant="outline">`: This is another button element inside the game grid that
 * allows players to replay a previous game. Similar to the "start" button, this
 * element has an `className` attribute that sets its styles and hides it when the
 * game is in progress.
 */

export default function Home() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [valueArray, setValueArray] = useState(new Array(9).fill(""));
  const [turn, setTurn] = useState<number>(0);
  const { toast } = useToast();

  /**
   * @description Updates the game state by modifying the `valueArray` and `turn`
   * variables, then logs the current turn to the console.
   *
   * @param {number} index - 0-based index of the current game space on which the move
   * is being made, and is used to determine the appropriate symbol to be assigned to
   * that position in the value array.
   */

  const handlePlay = (index: number) => {
    let newValueArray = [...valueArray];
    if (newValueArray[index] !== "") return;
    newValueArray[index] = turn % 2 ? "O" : "X";
    setTurn(turn + 1);
    setValueArray(newValueArray);
  };

  useEffect(() => {
    setTimeout(() => {
      checkWin();
    }, 500);
  }, [valueArray]);

  /**
   * @description Sets `turn` to 0 and initializes a new array with nine elements filled
   * with empty strings, which will be used to store the player's moves.
   */
  const handleReplay = () => {
    setTurn(0);
    setValueArray(new Array(9).fill(""));
  };

  const checkWin = () => {
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    const winningCondition = winConditions.find((condition) => {
      const [a, b, c] = condition;
      return (
        valueArray[a] === valueArray[b] &&
        valueArray[b] === valueArray[c] &&
        valueArray[a] !== ""
      );
    });

    if (winningCondition) {
      const a = winningCondition[0];
      toast({ description: `${valueArray[a]} wins!` });
      handleReplay();
    }
    if (turn === 9) {
      toast({ description: "It's a draw!" });
      handleReplay();
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div
        className={
          "flex justify-center items-center absolute " +
          (!isPlaying ? "hidden" : "")
        }
      >
        {/**
         * @description Handles player click event
         *
         * @param {string} className - CSS class or styles to be applied to each component
         * in the `grid` layout, enabling developers to define specific styles for each component.
         */}
        <div className="grid gap-2 grid-cols-3 grid-rows-3">
          {valueArray.map((value: string, index: number) => (
            <Card
              key={index}
              className="w-40 h-40 flex justify-center items-center border-solid border-2 "
              onClick={() => handlePlay(index)}
            >
              <p className="content font-bold text-4xl text-[100px] ">
                {value}
              </p>
            </Card>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center z-10">
        {/**
         * @description Sets the `isPlaying` state variable to the opposite value of its
         * current value when the button is clicked.
         *
         * @param {string} className - class name for the button element when the button is
         * played or hidden.
         *
         * @param {string} variant - CSS property to apply to the Button component's outline
         * style when it is clicked, allowing for customization of its appearance.
         *
         * @param {`OnClickEvent`.} onClick - event handler that is triggered when the button
         * is clicked, setting the `isPlaying` variable to its opposite value.
         *
         * 	* `className`: A string representing a set of class names that can be added to
         * the button element. It is either "hidden" or an empty string.
         * 	* `variant`: A string representing one of the possible variant options for the
         * button, which is currently `outline`.
         * 	* `onClick`: The function to call when the button is clicked. Its purpose is to
         * set the `isPlaying` state to its opposite value.
         */}
        <Button
          className={" " + (isPlaying ? "hidden" : "")}
          variant="outline"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          start
        </Button>
        <Button
          className={" " + (!isPlaying ? "hidden" : "absolute top-5")}
          variant="outline"
          onClick={handleReplay}
        >
          Stop Game
        </Button>
      </div>
    </div>
  );
}

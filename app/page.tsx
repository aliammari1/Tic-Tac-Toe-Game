"use client";
import React, {useState} from "react";
import {Button} from "@/components/ui/button";

/**
 * @description Sets up a game board with nine squares, updates the state of the board
 * when a player clicks on a square, and provides two buttons to start or stop the game.
 * 
 * @returns {HTML div element with various class names applied to its inner elements
 * and attributes} a HTML component representing a game board with 9 spaces, where
 * the player can input their move.
 * 
 * 	* `className`: A string that represents the class name of the outermost div
 * element, which is set to "bg-white w-screen h-screen".
 * 	* `return`: The keyword that indicates the function returns something.
 * 	* `<div className="game flex justify-center ...">`: An HTML division element with
 * a class name of "game", which is a flex container with a justify content of center
 * and a gap of 2.
 * 	* `{valueArray.map((value: string, index: number) => (...))}`: A JavaScript
 * function that maps over the `valueArray` state variable and returns an array of
 * HTML division elements. Each element has a class name of "w-40 h-40 flex justify-center
 * items-center border-solid border-2 border-black", and is clickable with an event
 * handler that calls the `handlePlay` function.
 * 	* `<div className="resultContainer ...">`: An HTML division element with a class
 * name of "resultContainer".
 * 	* `<p className={"result ..."}>`: An HTML paragraph element with a class name of
 * "result".
 * 	* `<Button...>` and `<Button...>`: Two HTML button elements with different class
 * names. The first button has an event handler that sets the `isPlaying` state
 * variable to its opposite value, and the second button has an event handler that
 * calls the `handleReplay` function.
 */
export default function Home() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [valueArray, setValueArray] = useState(new Array(9).fill(""));
  const [turn, setTurn] = useState<number>(0);

  /**
   * @description Updates the game state by modifying the value array and turning it
   * into a new array with updated values for the given index.
   * 
   * @param {number} index - 0-based index of the cell in the `valueArray` where the
   * new value will be assigned.
   */
  const handlePlay = (index: number) => {
    console.log(turn);
    let newValueArray = [...valueArray];
    newValueArray[index] = turn % 2 ? "X" : "O";
    setTurn(turn + 1);
    setValueArray(newValueArray);
  };

  /**
   * @description Sets two variables, `turn` and `valueArray`. The `turn` variable is
   * initialized to 0, while the `valueArray` variable is initialized to a new empty
   * array with nine elements.
   */
  const handleReplay = () => {
    setTurn(0);
    setValueArray(new Array(9).fill(""));
  };

  return (
    <div className="bg-white w-screen h-screen">
      <div
        className={"game flex justify-center " + (!isPlaying ? "hidden" : "")}
      >
        {/**
         * @description Takes an array of values and creates a set of clickable boxes for
         * each value, displaying the corresponding value within the box upon click.
         * 
         * @param {string} className - CSS class to apply to the component that is being rendered.
         */}
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
          {/**
           * @description Toggle the visibility of its internal class name between "hidden" and
           * "visible".
           * 
           * @param {string} className - CSS class to be applied to the `Button` component,
           * which can be used to style or customize its appearance.
           * 
           * @param {string} variant - theme of the button and determines whether it is visible
           * or hidden.
           * 
           * @param {JavaScript function.} onClick - event trigger for starting or stopping the
           * playing state of the code given to the function.
           * 
           * 	* `className`: A string that specifies a class name to be applied to the button
           * element. It can have a value like `"startButton"` or any other desired class name.
           * 	* `variant`: A string that determines the appearance of the button. The supported
           * values for this property are `contained`, `outline`, and `flat`. In this case,
           * `outline` is used, which means the button has a raised border around it.
           * 	* `onClick`: An arrow function that specifies the action to be performed when the
           * button is clicked. It takes no arguments.
           */}
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

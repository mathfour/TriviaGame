# TriviaGame
Week 5 Homework - A Trivia Game on 80s Toys

## Instructions
Find the [instructions here](https://github.com/the-Coding-Boot-Camp-at-UT/02-2017-Houston-Class-Content/blob/master/Class-Content/05-timers-trivia/2-Homework/Instructions/homework-instructions.md)

## Ideas for the Questions

1. What was the last name of the talking bear
Teddy Ruxpin

2. What was the spin off of the cabbage patch kids?

3. Monchichi
    * Maybe include [this video?](https://www.youtube.com/watch?v=od3cNTl40VI)

4. Atari

5. Rainbow Bright

6. Strawberry Shortcake

7. My Buddy

8. Merlin

9. Scratch 'n Sniff Stickers

10. Waterful Ring Toss

## Flowchart (pre-psuedo-code)

### User Experience

10. Jo clicks start button
20. DOM shows question 1 and timer is ticking
30. Jo acts
  32. Chooses an answer, OR
  35. Takes too long
40. Timer pauses but continues to display
50. DOM gives results:
  * If Jo is right, DOM shows You're Right!
  * If Jo is wrong, DOM shows Great guess!
  * If Jo takes too long, DOM shows Outta Time!
60. DOM shows correct answer
70. Hidden timer counts 4-5 seconds
80. DOM shows question 2 and flow starts back at 2 above

### DOM Experience

#### Bits
* JSON has questions and choices (`trivia.json`)
*
* Divs/Spans:
  * Timer with counting timer
  * Question and choices
  * Results
  * Correct answer
* Inputs
  * Buttons are `startNow` and `startOver`
  * Need to take clicks on choices or a, b, c or d as keystrokes. (Start with clicks and move to letters if I have time)
* Loops
  * Questions (from JSON)
  * Timer (using `setTimeout`)
  * `startOver` click and cleanout
  * Counter for rights/wrongs/time out
* if/else logic
  * Answer right/wrong/time out
  * if done with all questions, show results div

### Things To Do

- [] Create questions and put in JSON
- [] Create html structure
- [] Create css and get some nice formatting
- [] Create and test timer
- []

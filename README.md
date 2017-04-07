# TriviaGame
Week 5 Homework - A Trivia Game
[Click here to play the game](https://mathfour.github.io/TriviaGame/)

## Instructions
Find the [instructions here](https://github.com/the-Coding-Boot-Camp-at-UT/02-2017-Houston-Class-Content/blob/master/Class-Content/05-timers-trivia/2-Homework/Instructions/homework-instructions.md)

## Ideas for the Questions

Initially wanted to make the trivia game about 80s toys. But I needed to focus on the logic more than the playfulness. So I decided to use the questions from an [open source question bank](https://opentdb.com).

Here are the questions I started to think about before I shifted:
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

1. Jo clicks start button
2. DOM shows question 1 and timer is ticking
3. Jo acts
  1. Chooses an answer, OR
  1. Takes too long
4. Timer pauses but continues to display
5. DOM gives results:
  * If Jo is right, DOM shows You're Right!
  * If Jo is wrong, DOM shows Great guess!
  * If Jo takes too long, DOM shows Outta Time!
6. DOM shows correct answer
7. Hidden timer counts 4-5 seconds
8. DOM shows question 2 and flow starts back at 2 above

### DOM Experience

#### Bits
* JSON has questions and choices (`trivia.json`)
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

- [] ~Create questions and put in JSON~
- [] ~Create html structure~
- [] ~Create css and get some nice formatting~
- [] ~Create and test timer~
- [] Make the background nicer
- [] Figure out why it won't auto-restart
- [] Figure out why the new question flashes the old question first

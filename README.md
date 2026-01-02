# Daruma – A Digital Goal Reminder

Daruma is a minimalist web app that turns a simple goal-setting ritual into a digital experience.
The app runs directly in the browser at https://tehes.github.io/daruma/.

## What a Daruma is

A Daruma is a Japanese wish doll. You set a goal, paint in one eye to mark the start, and fill the second eye when the goal is achieved.
The ritual turns intention into commitment by making the goal visible.

## What this app does

Create your own virtual Daruma, write down your wish or goal, paint the first eye, and return to complete the second eye when you succeed.
You can change the Daruma color and temporarily hide the wish if you want it to stay private on screen.

Unlike a physical Daruma, the digital version allows the goal text to be edited, hidden, and stored locally in the browser.

## Privacy

The app runs entirely in your browser.
There are no accounts and no server-side storage for your wish, eye state, or color; all of this is stored locally via browser localStorage.

Anonymous usage statistics are collected via Umami Analytics, but no personal data or the text you enter is collected.

## Tech stack

- Static site: HTML, CSS, and vanilla JavaScript
- SVG assets for the Daruma and UI icons
- Browser localStorage for persistence
- Web Share API when available

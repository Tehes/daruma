# Daruma

## Short introduction
Daruma is a minimalist web app that turns a simple goal-setting ritual into a digital experience. Run it here: https://tehes.github.io/daruma/.

## What a Daruma is
A Daruma is a Japanese wish doll. You set a goal, paint in one eye to mark the start, and fill the second eye when the goal is achieved. The ritual turns intention into commitment by making the goal visible.

## What this app does
Create your own virtual Daruma, write down your wish or goal, paint the first eye, and return to complete the second eye when you succeed. You can also change the Daruma color and temporarily hide the wish if you want it to stay private on screen.

## Privacy
The app runs entirely in your browser. There are no accounts and no server-side storage for your wish, eye state, or color; those are stored locally via browser `localStorage`. Anonymous usage is tracked with Umami Analytics, but no personal data or the text you enter is collected. Nothing else is sent anywhere unless you use the built-in share feature.

## Tech stack
- Static site: HTML, CSS, and vanilla JavaScript
- SVG assets for the Daruma and UI icons
- Browser `localStorage` for persistence
- Web Share API when available

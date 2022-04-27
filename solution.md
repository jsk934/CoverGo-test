# Test SPA

## # What we are building?

-   We are building a multi-step form (wizard) where user can fill in information, get price and buy an insurance policy

## Tech stack
- Vue3 (due to specs provided)
- Vue-Router (to handle base routing between main page and the form/wizard)
- Vite (due to its extreme speed)
- Tailwindcss (love its "functional css" nature, and how it works with components-based app structure)
- No tests. Sorry, ran out of time - your and mine.

## Architecture
2 pages - Home and Wizard, where the second one does all the job - handles user input, calculates and outputs the result. There's no store, the "Wizard" view handles all the data and calculates the result. WizardForm component is responsible for user input, while WizardSummary - for the final result output.

All components can be found in the "components" directory. I've found it's easier to navigate through the project when all comps are in single place.

If we'd need a fully funational "Buy" button integrated with a 3rd-party system, I'd add vuex store, due to increasing complexity of data structure we'd need to handle. Just like I did in one of my previous projects - [[https://github.com/pozh/readerfeeder]] (React/Redux front, PHP back)

## TODO
- Error handling. There's no warnings, no hints in the form right now, that's not good.
- Refactoring. There are places I'd optimize If only I had more time - in styles, styling (having a lot of experience in this field - from making html templates for [[https://gettemplate.com]]) in the past and from building a loyalty / e-commerce solution at my current position), and in js code of course. At the end, I didn't like the wizard's organization that much, it does work, but there's too many data transfers between components.
- Testing. testing-library/vue would help, if only I had time.

## Final thoughts
Thank you very much for giving a chance to join your company. I really enjoyed solving short coding exercises and making the app on your specs. Tight time limits are not something developers are facing every single day, so that was a good and helpful experience to me.

# Spring 2026 Intro to Internet Programming — Assignment 2

☞ **Plagiarism in any form will result in failing the entire course. You’ve been duly warned.** ☜

* **Do not start this project until you have read these instructions carefully.**
* **Read these instructions repeatedly until you understand, then begin your project. If something is not clear, ask.**

---

## ❖・Before You Begin・❖

1. Log in to GitHub.
2. Fork this repository. See [this video](http://code-warrior.github.io/tutorials/git/github/forking-and-cloning-at-the-github-web-site/) on how to carry out this step and step `3`.
3. Clone your fork, using either the website or the GitHub Desktop client.
4. Checkout your personalized branch, the one with your name and GitHub user handle.

---

## ❖・Introduction・❖

Your task is to create a *single* web page consisting of HTML, CSS, and JavaScript that creates a carousel of images whose data are sourced via JSONP from a local file system, much like how a full-stack app might read data from a database. A 26-second video of what the final implemented project must look like is available from [https://roy.vanegas.org/video/working-with-jsonp.mp4](https://roy.vanegas.org/video/working-with-jsonp.mp4).

**Note**: *You may **only** work within the confines of the included scaffold; no external files need to be added to this repo.*

---

## ❖・Rules・❖

Before you begin, **update Node, NPM, ESLint, and Stylelint** via `npm` from your CLI.

### General

* Do not alter the scaffold of this project, especially the `.gitignore` files. Should you need to defeat this rule, explain so in a comment in the code and in a commit message.
* The user interface of your project should approximate as close as possible the rendering in the video. Visual rules are defined under the **CSS** section below.
* Do alter any of the images in the `img` folder.
* Do not add any images to this scaffold.
* The final rendering of this project should not yield any scroll bars on the page, horizontal or vertical.
* Author your code according to the included `.editorconfig` rules. (**Do not alter**.)
* Validate/lint JavaScript according to the included `.eslintrc` rules. (**Do not alter**.)
* Validate/lint CSS according to the included `.stylelintrc.json` rules. (**Do not alter**.)

### HTML

* The included `index.html` contains all the HTML required for this project. **Do not** edit it.
* Any DOM manipulations *must* take place via JavaScript.

### CSS

* No CSS libraries may be used.
* Use *only* the *Open Sans* typeface, which is loaded in the `head` element of `index.html`.
* Use *only* the `300` and `600` weights of *Open Sans*.
* Keep the default font size to `16px`.
* Set the content leading to `1.4`, or 140%.
* Set the font size of the `h1` element to `2rem`.
* Set the leading of the `h1` element to `1.1875`.
* Set the width of each slide in your carousel to `640` pixels, with left/right padding of `20` pixels.
* Place *all* your styles in `main.css`.

### JavaScript

* No JavaScript libraries may be used.
* The included `data.json` file is *not* in JSONP format. Thus, you will need to make a slight edit to the file. **Note**: Your edit does *not* require changing any of the properties in `data.json`.
* Place *all* your JavaScript in `main.js`.
* Your code should not generate any ESLint errors, except warnings for line lengths.
* Use backticks exclusively for all variable interpolation and string manipulation. Should you need to defeat this rule, explain so in a comment and commit message.
* Avoid function hoisting; use only arrow functions. Should you need to defeat this rule, explain so in a comment and commit message.
* No variable hoisting; only `let` declarations. Again, should you need to defeat this rule, explain so in a comment and commit message.

### Task Running with Gulp

As mentioned in the introduction, you must employ Gulp as the task runner with workflows for development and production. **Employ *only* the tasks discussed below. You will lose points for implementing superfluous tasks.**

**Note**: Use Gulp v4.0.1, unless otherwise instructed.

#### Development

* Your CSS must validate using the enclosed `.stylelintrc.json` file.
* Your JavaScript must validate using the included `.eslintrc.json` file.
* Your JavaScript must be transpiled to ES5.
* Saving a file of type `.css`  or `.js` must lint/validate the respective language file. Recall that you needn’t validate HTML, because you’re not allowed to edit it. (It’s already been linted.)
* Saving any of the aforementioned source files should also refresh the browser, after linting.
* The entire development track must be triggered by typing `gulp`.

#### Production

* The production, or prod, track must compress all the aforementioned languages, including HTML. *Do not lint them*, as they have already been linted in the development track.
* Running `gulp build` must load the *entire* production environment into a folder called `prod`, which must be fully self-sufficient and contain all the required files — compressed and linted — of the web page. **Note**: Check that your entire project works as a standalone web app in the `prod` folder. You can do so by moving the `prod` folder elsewhere in your file system before submitting, then launching `index.html`.
* The entire production track must be triggered by typing `gulp build`.

---

## ❖・Tips・❖

1. Prepare the Gulp tracks *before* implementing this project. Doing this project in reverse defeats the role of Gulp in this assignment
2. The included CSS and JavaScript files contain errors and superfluous white space, on purpose. As you stand up the Gulp tracks, you can verify whether your linters and EditorConfig work, before you implement the project.
3. Before issuing your pull request, clone your final repo to a different folder, or even a different machine, then run your development and production tracks in Gulp. This will ensure that what you’ve cloned is precisely what is submitted in your pull request.

---

## ❖・Due・❖

Thursday, 26 March 2026, at 10:00 PM.

---

## ❖・Grading・❖

| Item                                                                     | Points |
|--------------------------------------------------------------------------|:------:|
| Assignment fully implemented according to directions and video rendering |   20   |
| Full Gulp development and production scaffolds in place                  |   20   |
| Professional code quality across all languages                           |   20   |
| No JavaScript syntax (via ESLint) errors or warnings                     |   20   |
| No CSS syntax (via Stylelint) errors or warnings                         |   05   |
| Only arrow functions used                                                |   03   |
| Only `let` and, if applicable, `const`, variables used                   |   03   |
| Formatting via EditorConfig rules followed                               |   03   |
| No superfluous Gulp tasks included                                       |   03   |
| Scaffold unaltered                                                       |   03   |

---

## ❖・Submission・❖

You will need to issue a pull request back into the original repo, the one from which your fork was created for this project. See the **Issuing Pull Requests** section of [this site](http://code-warrior.github.io/tutorials/git/github/index.html) for help on how to submit your assignment.

**Note**: This assignment may *only* be submitted via GitHub. **No other form of submission will be accepted**.

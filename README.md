# JavaScript Projects Collection

A comprehensive collection of JavaScript projects demonstrating various web development concepts, APIs, and interactive features.

## 📚 Projects List

### 🎮 Games

#### 1. **2D Platformer Game (Canvas)**
An engaging side-scrolling platformer game featuring realistic gravity physics, collectible gold coins, and a comprehensive scoring system. Navigate through multiple platforms, avoid falling, and reach the blue finish line to complete the level. The game includes smooth player controls with left/right movement and jumping capabilities, along with automatic game reset when falling off platforms.
- **Features**: Player movement with arrow keys, jumping mechanics with velocity-based physics, platform collision detection, coin collection system, score tracking, finish line goal, auto-reset on failure
- **Tech**: HTML5 Canvas API, Vanilla JavaScript, Game physics, Event listeners

#### 2. **Maze Game (Keyboard Control)**
An addictive puzzle game where players navigate through procedurally generated mazes using keyboard arrow keys. Each maze is unique, created using recursive backtracking algorithms, providing endless replayability. Successfully reach the green exit square to win and generate a new challenging maze. The game features smooth player movement represented by a red circle through the dynamically created pathways.
- **Features**: Procedural maze generation using recursive algorithms, smooth keyboard-based navigation controls, automatic win detection and maze regeneration, visual player representation, randomized maze layouts
- **Tech**: HTML5 Canvas API, Recursive backtracking maze generation, Keyboard event handling, Array-based maze data structure

#### 3. **Memory Card Matching Game**
A classic concentration-style memory game that challenges players to find matching pairs of cards. Flip cards to reveal their symbols and try to remember their positions to make matches. The game tracks your moves and provides visual feedback with smooth card-flipping animations. Perfect for improving memory and concentration skills while having fun.
- **Features**: Smooth card flipping animations with CSS transitions, intelligent match detection logic, move counter and score tracking, mismatch card auto-flip, game completion detection, restart functionality
- **Tech**: Vanilla JavaScript for game logic, CSS3 animations and transforms, DOM manipulation, Array shuffling algorithms

#### 4. **Rock-Paper-Scissors Game**
Enjoy the timeless hand game brought to digital life with an intelligent computer opponent. Make your choice from rock, paper, or scissors, and compete against random computer selections. The game maintains a running score of wins, losses, and ties, with clear visual indicators showing the outcome of each round. Simple, fun, and endlessly entertaining.
- **Features**: Random computer opponent using JavaScript Math.random(), persistent score tracking across rounds, visual outcome display (win/lose/tie), round-by-round result history, reset score functionality, responsive button interface
- **Tech**: Vanilla JavaScript, DOM manipulation for dynamic updates, Random number generation, Conditional game logic

#### 5. **Tic-Tac-Toe Game**
The classic two-player strategy game implemented with clean, responsive design. Players take turns placing X's and O's on a 3x3 grid, aiming to get three in a row horizontally, vertically, or diagonally. The game intelligently detects winning combinations and draw scenarios, with clear turn indicators and immediate win announcements. Perfect for quick strategic gameplay sessions.
- **Features**: Turn-based gameplay with alternating players, comprehensive win detection for all 8 possible winning combinations, draw game detection when board is full, visual turn indicator, game reset/restart button, winning line highlight
- **Tech**: Vanilla JavaScript for game logic, 2D array board representation, Win condition algorithms, DOM manipulation for board updates

### 🧮 Calculators & Converters

#### 6. **Calculator**
A fully-featured digital calculator mimicking the functionality of a standard handheld calculator. Perform all basic arithmetic operations with a clean, user-friendly interface. The calculator handles decimal numbers, supports chain calculations, and includes a clear button to reset operations. Features keyboard support for faster input and displays results in real-time.
- **Features**: Four basic arithmetic operations (add, subtract, multiply, divide), decimal point support for floating-point calculations, clear/reset functionality, keyboard input support, chain calculation capability, result display formatting, error handling for division by zero
- **Tech**: Vanilla JavaScript for calculation logic, Event handling for button clicks and keyboard input, String parsing and evaluation, Number formatting

#### 7. **Real-time Calculator**
An advanced calculator that evaluates mathematical expressions as you type, providing instant results without needing to press an equals button. Type complex expressions with multiple operations, and watch the result update in real-time. The calculator intelligently handles operator precedence and validates input to prevent syntax errors, making it perfect for quick calculations and learning mathematical operations.
- **Features**: Live calculation updates as you type, support for complex multi-operation expressions, automatic operator precedence handling (PEMDAS), input validation to prevent errors, expression history display, error handling with user-friendly messages, backspace/clear functionality
- **Tech**: JavaScript expression evaluation, Real-time input monitoring with event listeners, Regular expressions for input validation, String parsing and sanitization

#### 8. **BMI Calculator**
A comprehensive health tool that calculates your Body Mass Index (BMI) based on height and weight inputs. The calculator supports both metric (kg/cm) and imperial (lbs/inches) measurement systems and provides personalized health category feedback ranging from underweight to obese. Get instant insights into your health status with color-coded results and recommendations for healthy living.
- **Features**: BMI calculation using standard medical formula, dual measurement system support (metric and imperial), health category classification (underweight, normal, overweight, obese), color-coded result display for quick interpretation, input validation for realistic measurements, BMI chart reference, health tips based on results
- **Tech**: Form validation with error messaging, Mathematical calculations and conversions, Conditional logic for health categorization, Input sanitization

#### 9. **Age Converter**
Convert age to different time units (days, hours, minutes, seconds).
- **Features**: Date calculations, multiple unit conversions
- **Tech**: JavaScript Date API

#### 10. **Unit Converter (Length, Weight, Temp)**
Convert between different units of measurement.
- **Features**: Length, weight, and temperature conversions
- **Tech**: Conversion formulas, Dropdown selections

### 🎨 UI & Visual Effects

#### 11. **Custom Chat UI (Dummy Messages)**
A beautifully designed chat interface resembling popular messaging apps, complete with message bubbles, timestamps, and smooth animations. The app features pre-loaded dummy conversations and allows users to send new messages with automatic simulated responses. Messages are styled differently for sent and received states, with auto-scrolling to keep the latest message visible. Perfect for understanding chat UI design patterns.
- **Features**: Message bubble design with sent/received styling, auto-scroll to latest message, simulated response system with delays, timestamp display, message input with enter-key support, smooth message appearance animations, scrollable message history, typing indicators
- **Tech**: DOM manipulation for dynamic message creation, Event handling for send button and Enter key, CSS flexbox for message alignment, JavaScript timeouts for simulated responses

#### 12. **Button Ripple Effect**
Buttons with material design ripple effect on click.
- **Features**: Click animation, ripple spread effect
- **Tech**: CSS animations, JavaScript event handling

#### 13. **Dark Mode / Light Mode Toggle**
Toggle between light and dark themes.
- **Features**: Theme switching, LocalStorage persistence
- **Tech**: CSS variables, LocalStorage API

#### 14. **Image Slider / Carousel**
Responsive image carousel with navigation controls.
- **Features**: Auto-play, manual navigation, transition effects
- **Tech**: JavaScript intervals, CSS transitions

#### 15. **Drawing App (Canvas API)**
Draw and create art using canvas with different colors and brush sizes.
- **Features**: Freehand drawing, color picker, brush size, clear canvas
- **Tech**: HTML5 Canvas, Mouse events

#### 16. **Image Filters App (Canvas Manipulation)**
A powerful image editing tool that allows you to upload photos and apply professional-grade filters entirely in your browser. Transform your images with grayscale for a classic black-and-white look, sepia for vintage warmth, or invert colors for artistic effects. The app uses advanced pixel manipulation techniques on HTML5 Canvas to process images client-side, ensuring privacy and instant results. Reset to the original image at any time or try different combinations of filters.
- **Features**: Image file upload from local device, grayscale filter for black-and-white conversion, sepia tone filter for vintage effect, color inversion filter for negative effect, reset to original image functionality, real-time filter application, before/after comparison, canvas-based image processing, download filtered image capability
- **Tech**: HTML5 Canvas API for image rendering, Pixel-level manipulation of image data, File API for image upload, ImageData object processing, RGB color channel manipulation algorithms, Mathematical filter formulas

#### 17. **Image Compression UI (Client-side)**
Compress images directly in the browser.
- **Features**: Quality adjustment, file size reduction, preview
- **Tech**: Canvas API, File API

### 💻 Developer Tools

#### 18. **Code Editor with Live Preview**
A powerful browser-based code editor similar to CodePen or JSFiddle, featuring separate panes for HTML, CSS, and JavaScript with instant live preview. Write code in any of the three languages and watch your webpage come to life in real-time in the preview pane below. The editor supports all modern web technologies and provides an excellent learning environment for web development experimentation and prototyping.
- **Features**: Three separate code input areas for HTML, CSS, and JavaScript, real-time preview rendering without page refresh, live code execution in isolated iframe, syntax-aware text areas, auto-updating preview on code changes, default starter code examples, error-free sandbox environment, resizable editor panes
- **Tech**: IFrame rendering for isolated preview, Event listeners for input changes, Dynamic HTML/CSS/JavaScript injection, Document write for preview updates

#### 19. **Markdown Previewer**
A sophisticated Markdown editor with a split-screen interface showing your raw Markdown on the left and the beautifully rendered HTML output on the right. Write documentation, blog posts, or README files using Markdown syntax and see the formatted result instantly. Supports all standard Markdown features including headers, lists, code blocks, links, images, tables, and more. Includes helpful example content to get you started.
- **Features**: Live Markdown to HTML conversion, split-pane editor and preview layout, support for all Markdown syntax elements, code syntax highlighting in preview, table formatting, image embedding, hyperlink rendering, default example Markdown content, synchronized scrolling
- **Tech**: Marked.js library for Markdown parsing, Split-pane interface design, Real-time content synchronization, DOM manipulation for preview updates

#### 20. **Color Picker / Random Color Generator**
Generate random colors or pick custom colors.
- **Features**: HEX/RGB display, random generation, color picker
- **Tech**: Color conversion, Random generation

#### 21. **QR Code Generator**
Generate QR codes from text or URLs.
- **Features**: QR code generation, download capability
- **Tech**: QR code library, Canvas export

### 📱 Apps & Utilities

#### 22. **To-Do List App**
Manage your daily tasks with a simple to-do list.
- **Features**: Add/delete tasks, mark complete, LocalStorage
- **Tech**: LocalStorage API, CRUD operations

#### 23. **Sticky Notes App (LocalStorage)**
Create colorful sticky notes that persist in the browser.
- **Features**: Create/edit/delete notes, color selection, persistence
- **Tech**: LocalStorage, Draggable elements

#### 24. **Habit Tracker**
Track your daily habits and build streaks.
- **Features**: Habit management, streak tracking, visual progress
- **Tech**: LocalStorage, Date calculations

#### 25. **Weather UI (Hardcoded Sample Data)**
Display weather information with a clean UI.
- **Features**: Weather cards, temperature display, sample data
- **Tech**: Static data rendering, Responsive design

#### 26. **Dictionary App (Local Data)**
Look up word definitions from a local dictionary.
- **Features**: Word search, definitions display, local JSON data
- **Tech**: JSON data, Search functionality

#### 27. **Quote of the Day App (Local JSON)**
Display random inspirational quotes.
- **Features**: Random quote generation, local data
- **Tech**: JSON data, Random selection

#### 28. **Random Joke Generator (Local Data)**
Get random jokes from a local database.
- **Features**: Random joke display, category filtering
- **Tech**: JSON data, Random selection

#### 29. **Recipe App Using Local Data**
A comprehensive recipe management application that helps you discover and organize cooking recipes. Browse through a collection of recipes stored locally, search by name or ingredients, and view detailed cooking instructions. Each recipe includes a complete ingredient list, step-by-step instructions, and cooking images. The app features a clean card-based interface for browsing and a detailed view for reading recipes while cooking.
- **Features**: Recipe card grid layout with images, powerful search functionality by recipe name or ingredients, detailed recipe view with full instructions, ingredient list display, step-by-step cooking instructions, recipe filtering and sorting, back to browse functionality, responsive design for mobile cooking, recipe images and descriptions
- **Tech**: Local JSON data storage for recipes, Array filtering and search algorithms, Modal/detail view implementation, String matching for search, Dynamic template rendering

#### 30. **Movie Search UI (Local JSON)**
Search and browse movies from local data.
- **Features**: Movie cards, search, genre filtering
- **Tech**: JSON data, Search algorithms

#### 31. **Portfolio Generator (JSON to UI)**
An innovative tool that transforms structured JSON data into a beautiful, fully-functional portfolio website. Simply edit the JSON file with your personal information, projects, skills, and contact details, and the generator automatically creates a professional-looking portfolio with proper sections, styling, and layout. Perfect for developers who want a quick portfolio setup without writing repetitive HTML. The template is responsive and includes sections for about, projects, and contact information.
- **Features**: Automatic portfolio generation from JSON data, dynamic content injection into templates, project showcase with descriptions and links, about me section rendering, contact information display with clickable links, responsive grid layout for projects, easy content updates through JSON editing, reusable template system
- **Tech**: Fetch API for JSON data loading, Template literal rendering, Dynamic DOM element creation, JSON parsing and iteration, Responsive CSS grid/flexbox

### ⏱️ Time & Productivity

#### 32. **Digital Clock + Stopwatch + Timer**
Three-in-one time utility application.
- **Features**: Real-time clock, stopwatch, countdown timer
- **Tech**: JavaScript Date API, Intervals

#### 33. **Pomodoro Productivity Timer**
Focus timer using the Pomodoro Technique.
- **Features**: 25-minute work sessions, break reminders, task tracking
- **Tech**: Timer logic, Notifications

#### 34. **Typing Speed Test App**
Test and improve your typing speed.
- **Features**: WPM calculation, accuracy tracking, random texts
- **Tech**: Keyboard events, Time tracking

### 🎵 Media

#### 35. **Music Player (Using Local Audio Files)**
Play audio files with controls.
- **Features**: Play/pause, volume control, progress bar, playlist
- **Tech**: HTML5 Audio API

#### 36. **Custom Video Player (HTML5 Video Controls)**
Video player with custom controls.
- **Features**: Play/pause, seek, volume, fullscreen
- **Tech**: HTML5 Video API, Custom controls

### 📝 Form & Input

#### 37. **Form Validator**
Validate form inputs with real-time feedback.
- **Features**: Email/password validation, error messages, regex patterns
- **Tech**: Form validation, Regular expressions

#### 38. **Password Generator**
Generate strong random passwords.
- **Features**: Customizable length, character types, copy to clipboard
- **Tech**: Random generation, Clipboard API

#### 39. **Word Counter**
Count words, characters, and sentences in text.
- **Features**: Real-time counting, multiple metrics
- **Tech**: String manipulation, Text analysis

#### 40. **Automatic Text**
Auto-typing text effect animation.
- **Features**: Typewriter effect, customizable speed
- **Tech**: String manipulation, Intervals

### 🔧 Advanced Features

#### 41. **Draggable Kanban Board (Like Trello UI)**
Drag-and-drop task board for project management.
- **Features**: Drag-and-drop, multiple columns, task cards
- **Tech**: Drag and Drop API, LocalStorage

#### 42. **Sorting Visualizer (Bubble, Merge, Quick Sort)**
An educational tool that brings sorting algorithms to life through stunning visual animations. Watch as different sorting algorithms (Bubble Sort, Merge Sort, and Quick Sort) rearrange an array of bars in real-time, with color-coded highlighting to show comparisons and swaps. This project is perfect for computer science students learning about algorithm complexity and performance. Generate new random arrays and compare how different algorithms approach the same sorting problem.
- **Features**: Three classic sorting algorithm implementations (Bubble, Merge, Quick), visual representation of array elements as bars, color-coded animations showing comparisons (red) and swaps (green), adjustable animation speed, random array generation, algorithm performance comparison, step-by-step visualization, array size customization, pause/resume functionality
- **Tech**: Sorting algorithm implementations in JavaScript, Canvas or DOM-based bar visualization, Async/await for animation timing, Color-coded highlighting system, setTimeout delays for visible sorting steps

#### 43. **Github Profile**
Display GitHub profile information.
- **Features**: Profile stats, repositories, search
- **Tech**: GitHub API (or local data)

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone https://github.com/Amansingh0807/JS_Projects.git
```

2. Navigate to any project folder:
```bash
cd "Project Name"
```

3. Open `index.html` in your browser

Most projects are standalone and don't require any build process or dependencies.

## 🛠️ Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript
- Canvas API
- Local Storage API
- Various Web APIs

## 📁 Project Structure

Each project typically contains:
- `index.html` - Main HTML file
- `style.css` - Styling
- `script.js` - JavaScript logic

## 🎯 Purpose

This collection serves as:
- Learning resource for JavaScript concepts
- Reference for common web development patterns
- Portfolio showcase
- Practice projects for beginners

## 🤝 Contributing

Feel free to fork this repository and add your own projects or improvements!

## 📄 License

This project is open source and available for educational purposes.

## 👨‍💻 Author

**Aman Singh**
- GitHub: [@Amansingh0807](https://github.com/Amansingh0807)

---

⭐ If you find this repository helpful, please give it a star!

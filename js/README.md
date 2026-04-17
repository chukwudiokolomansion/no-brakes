# 🏍️ Bike Dodge Game

A browser-based arcade game where you ride a bike and dodge incoming obstacles. Survive as long as possible, protect your health, and rack up the highest score before time runs out.

---

-Gameplay

- Control a bike using the **Arrow Keys**
- Avoid falling obstacles (balls) that spawn randomly
- Each collision reduces your **health by 25**
- The game ends when your **health reaches 0** or the **timer runs out**
- Your score increases passively over time and with each obstacle that leaves the screen

-Controls

Key | Action |

`Arrow Left` | Move bike left |
`Arrow Right` | Move bike right |

---

-Game Structure

-Screens

Screen ID | Purpose |

`#start-screen` | Shown before the game begins |
`#game-screen` | Active during gameplay |
`#game-over-screen` | Shown when the game ends |

- Key DOM Elements
- Element ID | Purpose |

`#start-btn` | Starts the game |
`#game-box` | Container for all game objects |
`#health-fill` | Visual health bar (changes color based on HP) |
`#score` | Displays current score |
`#timeRemaining` | Countdown timer display |

---

- Core Mechanics

  -Health System

- Player starts with **100 HP**
- Each obstacle collision deducts **25 HP**
- Health bar color changes dynamically:
  - 🟢 **Green** — above 60%
  - 🟠 **Orange** — 31–60%
  - 🔴 **Red** — 30% and below
- Game over triggers when HP reaches **0**

  -Scoring

- Score increments each game loop tick (passive)
- **+20 points** when an obstacle despawns off-screen without hitting the player

  -Timer

- Game runs for **180 seconds (3 minutes)**
- Countdown displayed in `MM:SS` format
- Game ends automatically when timer reaches 0

Obstacle Spawning

- New obstacles spawn every **2 seconds**
- Spawn position is randomized within a 6400×6400 unit range
- Obstacles fall via gravity (`ballGravity()`) and are removed when they exit the play area

---

-Audio

| File | Usage |

`./audio/engine.wav` | Looping engine sound; volume increases when moving |
`./audio/crash.wav` | Played on collision |
`./audio/bgmusic.mp3` | Background music during gameplay |

> Audio requires a user interaction (click) to start due to browser autoplay policies.

---

-File Structure

```
project/
── index.html
── main.js           # Core game logic (this file)
── Bike.js           # Bike class (player)
── Balls.js          # Obstacle/ball class
── Time.js           # Timer object
── audio/
    ── engine.wav
    ── crash.wav
    ── bgmusic.mp3



 -Functions Reference

- Function | Description |

 `gameStart()` | Initializes and starts a new game session |
 `gameLoop()` | Main loop — moves objects, checks despawn, checks collisions, updates score |
 `spawnObj()` | Spawns a new `Balls` obstacle at a random position |
 `tubeDeSpawnCheck()` | Removes obstacles that have exited the play area; awards bonus score |
 `bikeCollisionCheck()` | Detects collisions between the bike and each obstacle |
 `collisionCheck(e1, e2)` | AABB rectangle collision detection between two game objects |
 `createExplosion(x, y)` | Appends a CSS explosion animation element at a given position |
 `updateUI()` | Refreshes score display and health bar appearance |
 `startTimer()` | Begins the countdown and triggers `gameOver()` at zero |
 `gameOver()` | Clears all intervals, stops audio, and shows the game-over screen |

---

- Known Issues / TODOs

- `createExplosion()` receives `bikeObj` (an object) instead of `bikeObj.x` as the X coordinate — explosion may not render at the correct position
- `score` variable is set twice on game start (`score = 0; score = 0;`)
- `lives` variable is declared and initialized but not currently used in game logic
- The `engineSound.play()` call in `gameOver()` should likely be `engineSound.pause()`
- Random spawn range (`6400`) may exceed visible game area depending on `#game-box` dimensions

---

- Getting Started

1. Clone or download the repository
2. Open `index.html` in a modern browser
3. Click the **Start** button to begin
4. Use **Arrow Left / Arrow Right** to dodge incoming obstacles
```

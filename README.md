# gta6-calling-in-vice-city

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/Rizrekt/gta6-calling-in-vice-city/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/Rizrekt/gta6-calling-in-vice-city/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

The joke is a launch-day one. Twelve years of waiting for GTA VI finally pay off, so the poster is not calling in sick today — he is calling in Vice City. The make.fun ghost mascot is worked into the neon-soaked street scene, hovering over the causeway like it booked the trip too.

The meme was posted on X by [@aktazi](https://x.com/aktazi/status/2123434324855067049). This repository only carries the post pointer: `POST.json` names that status, and `main.ts` copies it into `/output` for the bounty gate. That copy is the entire program — no other behavior, no generated assets.

## Verification

The meme image was rebuilt from its sources during this build — the base street scene, the official make.fun ghost mark and the three captions, composed by a small Pillow script — and the rebuild is byte-identical to the image that was posted.

- Meme image: `sha256 ae98cf7e4ff463be2736ec64af2290f22000388e2179906e33f360e3f7955d1f`, 2,321,750 bytes, 1920x1280
- 480-pixel-wide readability check copy: `sha256 f56183c2b6c57803dee42b06dbb17a05e9a0d9b86c88e07499d3381808f97a9f`
- Post named by `POST.json`: https://x.com/aktazi/status/2123434324855067049

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=t5qzbddk&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>

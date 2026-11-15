# CSS Grid Animation Playground

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/css-grid-animation-1/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

A runnable reconstruction of the 16.9-second screen recording. The video demonstrates five 3×3 CSS grid animation concepts.

## Effects in the video

1. **Ripple Effect** — grid tiles scale up and fade in/out.
2. **Snake Motion** — tiles move horizontally in a staggered sequence.
3. **3D Flip** — tiles rotate around the Y axis.
4. **Bounce Grid** — tiles move upward and return.
5. **Mouse 3D Tilt** — perspective-based tile rotation follows pointer movement.

## CSS transcribed from visible screen

### Ripple Effect

```css
.ripple div {
  animation: ripple 1.5s infinite;
}

@keyframes ripple {
  0%, 100% {
    transform: scale(1);
    opacity: 0.6;
  }
  50% {
    transform: scale(1.5);
    opacity: 1;
  }
}
```

### Snake Motion

```css
.snake div {
  animation: snake 1s infinite;
}

@keyframes snake {
  50% {
    transform: translateX(15px);
  }
}
```

### 3D Flip

```css
.flip div {
  animation: flip 1.2s infinite;
}

@keyframes flip {
  50% {
    transform: rotateY(180deg);
  }
}
```

### Bounce Grid

```css
.bounce div {
  animation: bounce 0.8s infinite;
}

@keyframes bounce {
  50% {
    transform: translateY(-25px);
  }
}
```

### Mouse 3D Tilt

```css
.tilt {
  perspective: 500px;
}

.tilt div {
  transition: transform 0.2s;
}
```

## Run locally

No dependencies or build step required.

```bash
python -m http.server 8000
```

Open http://localhost:8000

## Structure

```text
css-grid-animation/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Accuracy note

The five animation names, main CSS timing values, keyframe transforms, perspective value and visible page styling were read from the recording. The complete HTML layout, responsive styling, staggered animation delays and pointer tracking are implemented as a working reconstruction, not claimed to be the original author's complete source.

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)

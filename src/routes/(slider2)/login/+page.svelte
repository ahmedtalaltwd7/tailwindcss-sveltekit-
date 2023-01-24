<svelte:head>
<script src="./nf.js"></script>
<link rel="stylesheet" href="./s.css">
</svelte:head>


<div class="row">
    <div class="header">
      <h3 class="title">Title</h3>
      <div class="progress-bar"></div>
    </div>
    <div class="container2">
      <button class="handle left-handle">
        <div class="text">&#8249;</div>
      </button>
      <div class="slider">
        <img src="https://via.placeholder.com/210/00FF00?text=1">
        <img src="https://via.placeholder.com/220/00FF00?text=2">
        <img src="https://via.placeholder.com/230/00FF00?text=3">
        <img src="https://via.placeholder.com/240/00FF00?text=4">
        <img src="https://via.placeholder.com/250/00FF00?text=5">
        <img src="https://via.placeholder.com/260/00FF00?text=6">
        <img src="https://via.placeholder.com/270/00FF00?text=7">
        <img src="https://via.placeholder.com/280/00FF00?text=8">
        <img src="https://via.placeholder.com/250/00FF00?text=9">
        <img src="https://via.placeholder.com/260/00FF00?text=10">
        <img src="https://via.placeholder.com/270/00FF00?text=11">
        <img src="https://via.placeholder.com/280/00FF00?text=12">
        <img src="https://via.placeholder.com/270/00FF00?text=11">
        <img src="https://via.placeholder.com/280/00FF00?text=12">
       
      </div>
      <button class="handle right-handle">
        <div class="text">&#8250;</div>
      </button>
    </div>
  </div>


  <style>
    *, *::after, *::before {
  box-sizing: border-box;
}

:root {
  --handle-size: 3rem;
  --img-gap: .25rem;
}



.container2 {
  display: flex;
  justify-content: center;
  overflow: hidden;
}

.slider {
  --items-per-screen: 4;
  --slider-index: 0;
  display: flex;
  flex-grow: 1;
  margin: 0 var(--img-gap);
  transform: translateX(calc(var(--slider-index) * -100%));
  transition: transform 250ms ease-in-out;
}

.slider > img {
  flex: 0 0 calc(100% / var(--items-per-screen));
  max-width: calc(100% / var(--items-per-screen));
  aspect-ratio: 16 / 9;
  padding: var(--img-gap);
  border-radius: 1rem;
}

.handle {
  border: none;
  border-radius: 1rem;
  flex-grow: 0;
  flex-shrink: 0;
  background-color: rgba(255, 255, 255, .25);
  z-index: 10;
  margin: var(--img-gap) 0;
  width: var(--handle-size);
  cursor: pointer;
  font-size: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  line-height: 0;
  transition: background-color 150ms ease-in-out;
}

.left-handle {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.right-handle {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.handle:hover,
.handle:focus {
  background-color: rgba(255, 255, 255, .5);
}

.text {
  transition: transform 150ms ease-in-out;
}

.handle:hover .text,
.handle:focus .text {
  transform: scale(1.2);
}

.header {
  display: flex;
  justify-content: space-between;
  padding: .5rem calc(var(--img-gap) * 2 + var(--handle-size));
  align-items: center;
}

.title {
  font-size: 2rem;
  margin: 0;
}

.progress-bar {
  display: flex;
  gap: .25rem;
}

.progress-item {
  flex: 0 0 1.5rem;
  min-width: 1.5rem;
  height: .5rem;
  background-color: rgba(255, 255, 255, .5);
}

.progress-item.active {
  background-color: rgba(255, 255, 255, .9);
}

@media (max-width: 1000px) {
  .slider {
    --items-per-screen: 3;
  }
}

@media (max-width: 500px) {
  .slider {
    --items-per-screen: 2;
  }
}


  </style>
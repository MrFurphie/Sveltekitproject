<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>My Website</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdn.simplecss.org/simple.min.css">
  <link rel="layout" href="/global.css">
  <script defer src="/build/bundle.js"></script>
  <script>
    import { link } from '$app/navigation';
  </script>
  <script>
    import { slide } from 'svelte/transition'
    
    let isExpanded = false
  
    function clickHandler() {
      isExpanded = !isExpanded
    }
  </script>
</head>
<body>
  <header>
    <h1>My Website</h1>
    <nav>
      <button on:click={clickHandler}>Menu</button>
      {#if isExpanded}
      <ul  transition:slide>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
      {/if}
    </nav>
    <nav>
     <ul>
      <li>
        <button onclick="window.location.href = '/catpics';">Cat Pics Saying Specific Shit</button>
        <button onclick="window.location.href = '/catfacts';">Cat Pics Saying Random Shit</button>
      </li>
     </ul>
      <a href="/">Home</a>
    </nav>
  </header>
  <main>
   <!-- <svelte:slot /> -->
  </main>
  <footer>
    <p>&copy; 2023 My Website. All rights reserved.</p>
  </footer>
</body>
</html>
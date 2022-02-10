<main>
  <h1>Welcome to Netlify!</h1>
</main>

<style>
  :root {
    --primary-text-color: #c6c9ca;
    --secondary-text-color: #ffffff;
    --primary-page-color: #09171d;
    --accent-color: #5cebdf;
    --accent-color-alternate: #ff6b60;
  }

  :global(html),
  :global(body) {
    margin: 0;
    padding: 0;
  }

  :global(body) {
    text-align: center;
    color: var(--primary-text-color);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Helvetica, Arial, sans-serif;
    font-weight: normal;
    line-height: 28px;
    font-size: 14px;
    background-color: var(--primary-page-color);
    padding: 2rem;
    padding-bottom: 6rem;
    border-top: 5px solid var(--accent-color);
    @include bp(mid) {
    }
    @include bp(wide) {
      font-size: 18px;
    }
  }

  main {
    max-width: 90%;
    margin: 0 auto;
  }

  h1 {
    line-height: 1.4;
    margin-top: 1.5em;
    color: var(--secondary-text-color);
  }
</style>

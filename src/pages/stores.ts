export const StoresPage = (context?: any) => ({
  component: `
<h1 class="title">Hello Stores</h1>
<div class="title2">
    StoresPage
  <a href="/stores" rel="noopener noreferrer">Stores</a>
  <a href="/" rel="noopener noreferrer">Home</a>
  <a href="/dashboard" rel="noopener noreferrer">Dashboard</a>
</div>
`,
  mount: () => {
    const myLink = document.getElementsByTagName('a');

    for (let el of Array.from(myLink)) {
      el.addEventListener('click', (e: any) => {
        e.preventDefault()
        console.log('huhuhuh')
        window.history.pushState({}, '', el.href);
      });
    }
  }
});

// @ts-ignore
import { routes } from '../libs/routes';

// @ts-ignore
export const HomePage = (context?: any) => ({
  component: `
    <h1 class="title">Hello Vanilla!</h1>
    <div class="title2">
      We use the same configuration as Parcel to bundle this sandbox, you can find more
      info about Parcel hallo Weltwoooooooooooooo
      <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
      <button id="button" data-tut="/">HomePage</button>
      <button id="button2" data-tut="/stores">StoresPage</button>
      <button id="button3" data-tut="/dashboard">DashboardPage</button>
    </div>
`,
  mount: () => {
// @ts-ignore
    document.getElementById("button").addEventListener('click', (el) => {
      routes.push("/")
    });
// @ts-ignore
    document.getElementById("button2").addEventListener('click', (el) => {
      routes.push("/stores")
    });
// @ts-ignore
    document.getElementById("button3").addEventListener('click', (el) => {
      routes.push("/dashboard")
    });
  }
});

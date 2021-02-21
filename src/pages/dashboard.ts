export const DashboardPage = (context?: any) => ({
  component: `
<h1 class="title">Hello Vanilla!</h1>
<div class="title2">
Dashboard
  <a href="/stores" rel="noopener noreferrer">Stores</a>
  <a href="/" rel="noopener noreferrer">Home</a>
  <a href="/dashboard" rel="noopener noreferrer">Dashboard</a>
</div>
`, mount: () => {}
});

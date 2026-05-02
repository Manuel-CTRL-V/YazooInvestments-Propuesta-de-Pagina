
class SiteNavigation extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<header class="bg-white/95 dark:bg-stone-950/95 backdrop-blur-md fixed top-0 w-full z-50 shadow-sm border-b border-amber-100/30 dark:border-amber-900/30">
<div class="flex justify-between items-center px-12 h-20 max-w-full">
<div class="text-xl font-bold tracking-widest text-amber-700 dark:text-amber-500 uppercase">
                Yazoo Investment
            </div>
<nav class="hidden md:flex items-center gap-8">
<a class="font-['Epilogue'] tracking-tight text-sm font-medium uppercase text-amber-700 dark:text-amber-400 border-b-2 border-amber-600 pb-1" href="index.html" data-path="index.html">Home</a>
<a class="font-['Epilogue'] tracking-tight text-sm font-medium uppercase text-stone-600 dark:text-stone-400 hover:text-amber-600 transition-colors" href="who-we-are.html" data-path="who-we-are.html">Who We Are</a>
<a class="font-['Epilogue'] tracking-tight text-sm font-medium uppercase text-stone-600 dark:text-stone-400 hover:text-amber-600 transition-colors" href="services.html" data-path="services.html">Services</a>
<a class="font-['Epilogue'] tracking-tight text-sm font-medium uppercase text-stone-600 dark:text-stone-400 hover:text-amber-600 transition-colors" href="production.html" data-path="production.html">Production</a>
<a class="font-['Epilogue'] tracking-tight text-sm font-medium uppercase text-stone-600 dark:text-stone-400 hover:text-amber-600 transition-colors" href="social-impact.html" data-path="social-impact.html">Social Impact</a>
<a class="font-['Epilogue'] tracking-tight text-sm font-medium uppercase text-stone-600 dark:text-stone-400 hover:text-amber-600 transition-colors" href="contact.html" data-path="contact.html">Contact Us</a>
</nav>
<div class="flex items-center gap-4 text-amber-600 dark:text-amber-500 font-['Epilogue'] tracking-tight text-sm font-medium uppercase">
<span>EN | ES</span>
<span class="material-symbols-outlined hover:opacity-80 transition-all cursor-pointer" data-icon="call">call</span>
<span class="material-symbols-outlined hover:opacity-80 transition-all cursor-pointer" data-icon="public">public</span>
</div>
</div>
</header>`;

    // Active link logic
    const currentPath = window.location.pathname;
    const links = this.querySelectorAll('nav a');
    
    // Reset all to inactive style
    links.forEach(link => {
        link.className = "font-['Epilogue'] tracking-tight text-sm font-medium uppercase text-stone-600 dark:text-stone-400 hover:text-amber-600 transition-colors";
    });

    // Set active style
    links.forEach(link => {
      const path = link.getAttribute('data-path');
      if (path && (currentPath.endsWith(path) || (path === 'index.html' && currentPath.endsWith('/')))) {
        link.className = "font-['Epilogue'] tracking-tight text-sm font-medium uppercase text-amber-700 dark:text-amber-400 border-b-2 border-amber-600 pb-1";
      }
    });
  }
}
customElements.define('site-navigation', SiteNavigation);

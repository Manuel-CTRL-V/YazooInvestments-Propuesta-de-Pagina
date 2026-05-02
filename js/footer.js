
class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<footer class="bg-stone-50 dark:bg-stone-950 w-full py-16 border-t border-amber-100 dark:border-amber-900/30">
<div class="flex flex-col items-center gap-8 px-8 text-center">
<div class="text-lg font-semibold text-amber-800 tracking-tighter uppercase">
                Yazoo Investment
            </div>
<nav class="flex flex-wrap justify-center gap-x-8 gap-y-4">
<a class="font-['Epilogue'] text-[10px] uppercase tracking-[0.2em] text-stone-500 hover:text-amber-600 transition-colors" href="#">Who We Are</a>
<a class="font-['Epilogue'] text-[10px] uppercase tracking-[0.2em] text-stone-500 hover:text-amber-600 transition-colors" href="#">Services</a>
<a class="font-['Epilogue'] text-[10px] uppercase tracking-[0.2em] text-stone-500 hover:text-amber-600 transition-colors" href="#">Production</a>
<a class="font-['Epilogue'] text-[10px] uppercase tracking-[0.2em] text-stone-500 hover:text-amber-600 transition-colors" href="#">Social Impact</a>
<a class="font-['Epilogue'] text-[10px] uppercase tracking-[0.2em] text-stone-500 hover:text-amber-600 transition-colors" href="#">Contact Us</a>
<a class="font-['Epilogue'] text-[10px] uppercase tracking-[0.2em] text-stone-500 hover:text-amber-600 transition-colors" href="#">Privacy Policy</a>
<a class="font-['Epilogue'] text-[10px] uppercase tracking-[0.2em] text-stone-500 hover:text-amber-600 transition-colors" href="#">Terms of Service</a>
</nav>
<div class="flex gap-6">
<span class="material-symbols-outlined text-amber-700/60 hover:text-amber-700 transition-colors cursor-pointer" data-icon="share">share</span>
<span class="material-symbols-outlined text-amber-700/60 hover:text-amber-700 transition-colors cursor-pointer" data-icon="language">language</span>
<span class="material-symbols-outlined text-amber-700/60 hover:text-amber-700 transition-colors cursor-pointer" data-icon="info">info</span>
</div>
<p class="font-['Epilogue'] text-[10px] uppercase tracking-[0.2em] text-stone-400 max-w-lg">
                © 2024 Yazoo Investment Srl. Distilling Excellence Since 1982. Enjoy Responsibly.
            </p>
</div>
</footer>`;
  }
}
customElements.define('site-footer', SiteFooter);

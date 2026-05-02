// js/age-gate.js — Age Verification Gate (sessionStorage-based)
(function () {
  // Already verified this session? Skip.
  if (sessionStorage.getItem('yazoo_age_verified') === 'true') return;

  // --- Inject blur style ---
  const blurStyle = document.createElement('style');
  blurStyle.id = 'yazoo-age-gate-blur';
  blurStyle.textContent = `
    body > *:not(#age-gate-overlay) {
      filter: blur(8px);
      pointer-events: none;
      user-select: none;
    }
  `;
  document.head.appendChild(blurStyle);

  // --- Build overlay ---
  const overlay = document.createElement('div');
  overlay.id = 'age-gate-overlay';
  overlay.innerHTML = `
    <div id="age-gate-modal">
      <img src="img/yazoo-logo.png" alt="Yazoo Investment" class="age-gate-logo"
        onerror="this.style.display='none'">
      <div class="age-gate-tagline">Ron y Bebidas del Caribe</div>
      <div class="age-gate-divider"></div>
      <h2 class="age-gate-title">Are you of legal age in your country of residence?</h2>
      <p class="age-gate-body">You must be of legal drinking age to enter this site. By entering, you agree to our Terms of Service and Privacy Policy.</p>
      <form class="age-gate-form" id="age-gate-form">
        <div class="age-gate-dropdowns">
          <select class="age-gate-select" id="ag-month" required>
            <option value="" disabled selected>Month</option>
            <option value="1">Jan</option><option value="2">Feb</option>
            <option value="3">Mar</option><option value="4">Apr</option>
            <option value="5">May</option><option value="6">Jun</option>
            <option value="7">Jul</option><option value="8">Aug</option>
            <option value="9">Sep</option><option value="10">Oct</option>
            <option value="11">Nov</option><option value="12">Dec</option>
          </select>
          <select class="age-gate-select" id="ag-day" required>
            <option value="" disabled selected>Day</option>
          </select>
          <select class="age-gate-select" id="ag-year" required>
            <option value="" disabled selected>Year</option>
          </select>
        </div>
        <div class="age-gate-error" id="ag-error">Please select a valid date.</div>
        <button type="submit" class="age-gate-submit">Enter Site</button>
      </form>
    </div>
  `;

  // Prevent scrolling while modal is open
  document.body.style.overflow = 'hidden';
  document.body.appendChild(overlay);

  // Populate days
  const daySelect = document.getElementById('ag-day');
  for (let i = 1; i <= 31; i++) {
    const opt = document.createElement('option');
    opt.value = i; opt.textContent = i;
    daySelect.appendChild(opt);
  }

  // Populate years
  const yearSelect = document.getElementById('ag-year');
  const currentYear = new Date().getFullYear();
  for (let i = currentYear; i >= 1920; i--) {
    const opt = document.createElement('option');
    opt.value = i; opt.textContent = i;
    yearSelect.appendChild(opt);
  }

  // Handle submission
  document.getElementById('age-gate-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const m = parseInt(document.getElementById('ag-month').value);
    const d = parseInt(document.getElementById('ag-day').value);
    const y = parseInt(document.getElementById('ag-year').value);
    const errorEl = document.getElementById('ag-error');

    if (!m || !d || !y) {
      errorEl.textContent = 'Please select your full date of birth.';
      errorEl.style.display = 'block';
      return;
    }

    // Calculate age
    const today = new Date();
    const birthDate = new Date(y, m - 1, d);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    const LEGAL_AGE = 18;

    if (age < LEGAL_AGE) {
      // Show underage message — replace form with denial screen
      const modal = document.getElementById('age-gate-modal');
      modal.innerHTML = `
        <div style="text-align:center; padding: 20px 0;">
          <div style="font-size:48px; margin-bottom:16px;">🔞</div>
          <h2 class="age-gate-title">You must be ${LEGAL_AGE} or older to enter this site.</h2>
          <p class="age-gate-body">We're sorry, but this website contains content intended for adults of legal drinking age only. Please come back when you meet the age requirement in your country of residence.</p>
          <p style="font-size:12px; color:#aaa; margin-top:24px;">© Yazoo Investment Srl — Enjoy Responsibly</p>
        </div>
      `;
      // Keep blur and overlay locked — underage users cannot proceed
      return;
    }

    // Age is valid — grant access
    sessionStorage.setItem('yazoo_age_verified', 'true');
    overlay.remove();
    document.getElementById('yazoo-age-gate-blur').remove();
    document.body.style.overflow = '';
  });
})();

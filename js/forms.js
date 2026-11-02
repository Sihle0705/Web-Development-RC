/**
 * forms.js
 * Contact form + Volunteer/Sponsor enquiry form for Turning Point Church.
 * Needs main.js (uses clearErrors, isValidEmail, isValidSAPhone, escapeHTML).
 * Author: [Your Name] - [Student Number]
 */

/* ---------- EDIT THIS: an inbox you can actually check ---------- */
var FORM_EMAIL = 'info@turningpointchurch.co.za';
/* FormSubmit sends a one-time activation email to this address the
   first time a form is submitted. Click the link in it to switch it on. */

/* ---------- helpers ---------- */

function getField(form, name) {
  return form.querySelector('[name="' + name + '"]');
}

function fieldError(el, message) {
  if (!el) return;
  var span = document.createElement('span');
  span.className = 'error-message';
  span.setAttribute('role', 'alert');
  span.textContent = message;
  el.insertAdjacentElement('afterend', span);   // sits right under the field
  el.classList.add('error');
  el.setAttribute('aria-invalid', 'true');
}

function getStatusBox(form) {
  var box = form.parentElement.querySelector('.form-status');
  if (!box) {
    box = document.createElement('div');
    box.className = 'form-status';
    box.setAttribute('aria-live', 'polite');
    form.insertAdjacentElement('afterend', box);
  }
  return box;
}

function showStatus(box, type, html) {
  box.className = 'form-status ' + type;   // type: success | warning | info
  box.innerHTML = html;
  box.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

/* Validates name, email, optional phone and message. Returns true if OK. */
function validateForm(form) {
  clearErrors(form);
  form.querySelectorAll('[aria-invalid]').forEach(function (el) { el.removeAttribute('aria-invalid'); });
  var ok = true;
  var name = getField(form, 'name');
  var email = getField(form, 'email');
  var phone = getField(form, 'phone');
  var message = getField(form, 'message');
  var firstBad = null;

  function bad(el, msg) { fieldError(el, msg); ok = false; if (!firstBad) firstBad = el; }

  if (name && name.value.trim().length < 2) bad(name, 'Please enter your full name.');
  if (email && !isValidEmail(email.value.trim())) bad(email, 'Please enter a valid email address, e.g. name@example.com.');
  if (phone && phone.value.trim()) {
    if (!isValidSAPhone(phone.value.replace(/[\s-]/g, ''))) {
      bad(phone, 'Use a valid SA cell number, e.g. 0821234567 or +27821234567 (or leave it blank).');
    }
  }
  if (message && message.value.trim().length < 10) bad(message, 'Please write a message of at least 10 characters.');

  if (firstBad) firstBad.focus();
  return ok;
}

/* Remove an error as soon as the person starts correcting that field */
function enableLiveClear(form) {
  form.addEventListener('input', function (e) {
    var el = e.target;
    el.classList.remove('error');
    el.removeAttribute('aria-invalid');
    var next = el.nextElementSibling;
    if (next && next.classList.contains('error-message')) next.remove();
  });
}

/* Sends the form through FormSubmit. If that fails, opens the email app instead. */
function sendForm(form, data, subject, onSuccess) {
  var box = getStatusBox(form);
  var btn = form.querySelector('[type="submit"]');
  var original = btn ? (btn.value || btn.textContent) : '';

  function setBtn(text, disabled) {
    if (!btn) return;
    if (btn.tagName === 'INPUT') btn.value = text; else btn.textContent = text;
    btn.disabled = disabled;
  }

  setBtn('Sending...', true);
  showStatus(box, 'info', 'Sending your message...');

  data._subject = subject;
  data._template = 'table';
  data._captcha = 'false';

  fetch('https://formsubmit.co/ajax/' + encodeURIComponent(FORM_EMAIL), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify(data)
  })
    .then(function (r) { if (!r.ok) throw new Error('Request failed'); return r.json(); })
    .then(function () { onSuccess(box); form.reset(); })
    .catch(function () {
      showStatus(box, 'warning',
        'We could not send this online, so we are opening your email app instead. ' +
        'If nothing opens, email us at <a href="mailto:' + FORM_EMAIL + '">' + FORM_EMAIL + '</a>.');
      var body = Object.keys(data)
        .filter(function (k) { return k.charAt(0) !== '_'; })
        .map(function (k) { return k + ': ' + data[k]; }).join('\n');
      window.location.href = 'mailto:' + FORM_EMAIL +
        '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    })
    .finally(function () { setBtn(original, false); });
}

/* ---------------- CONTACT FORM ---------------- */
function initContactForm() {
  var form = document.getElementById('contact-form');
  if (!form) return;
  enableLiveClear(form);

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!validateForm(form)) return;

    var data = {
      name: getField(form, 'name').value.trim(),
      email: getField(form, 'email').value.trim(),
      message: getField(form, 'message').value.trim()
    };

    sendForm(form, data, 'Website contact message from ' + data.name, function (box) {
      showStatus(box, 'success',
        '<strong>Thank you, ' + escapeHTML(data.name) + '!</strong> Your message has been sent. ' +
        'We will reply to ' + escapeHTML(data.email) + ' soon.');
    });
  });
}

/* ---------------- ENQUIRY FORM (volunteer / sponsor) ---------------- */
function initEnquiryForm() {
  var form = document.getElementById('enquiry-form');
  if (!form) return;
  enableLiveClear(form);

  var replies = {
    volunteer: 'We are so glad you want to give your time. Someone from our volunteer team will contact you about where you can serve.',
    sponsor: 'Thank you for wanting to support our ministry and outreach. Someone from our team will contact you to talk about sponsorship options.',
    other: 'Thank you for getting in touch. We will read your message and reply as soon as we can.'
  };

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!validateForm(form)) return;

    var type = getField(form, 'enquiryType').value;
    var data = {
      name: getField(form, 'name').value.trim(),
      email: getField(form, 'email').value.trim(),
      enquiryType: type,
      message: getField(form, 'message').value.trim()
    };
    var phone = getField(form, 'phone');
    if (phone && phone.value.trim()) data.phone = phone.value.trim();

    sendForm(form, data, 'New ' + type + ' enquiry from ' + data.name, function (box) {
      showStatus(box, 'success',
        '<strong>Thank you, ' + escapeHTML(data.name) + '!</strong> ' +
        escapeHTML(replies[type] || replies.other) +
        ' We will reply to ' + escapeHTML(data.email) + '.');
    });
  });
}

/**
 * search.js
 * Site-wide search bar for Turning Point Church.
 * The bar is added to the navigation automatically on every page,
 * and searches the content listed in SEARCH_INDEX below.
 * Author: [Your Name] - [Student Number]
 */

/* If you change page text, update the matching entry here. */
var SEARCH_INDEX = [
  {
    "page": "Home",
    "url": "index.html",
    "heading": "Welcome to Turning Point Church",
    "text": "Turning Point Church is a Christian community based in the Woodlands area of Durban, KwaZulu-Natal. We are dedicated to helping people build a real relationship with Jesus Christ while offering a warm and supportive environment for individuals and families."
  },
  {
    "page": "Home",
    "url": "index.html",
    "heading": "Our Mission",
    "text": "We exist to encourage spiritual growth, strengthen families and equip our members to serve the wider community through fellowship, teaching and outreach."
  },
  {
    "page": "Home",
    "url": "index.html",
    "heading": "Upcoming Event",
    "text": "Join us for our next community outreach programme. Visit our Services page for more information on when we meet."
  },
  {
    "page": "Home",
    "url": "index.html",
    "heading": "Plan Your Visit",
    "text": "New to Turning Point Church? We would love to welcome you this Sunday."
  },
  {
    "page": "About Us",
    "url": "about.html",
    "heading": "Our History",
    "text": "Turning Point Church has its roots in the 1950s, when a couple living in the Woodlands area of Durban felt called to support children in their community. What started as small meetings in a garage grew into a full congregation, first known as Woodlands Baptist Church. In 1984 the church became New Covenant Fellowship Durban (NCF Durban), joining the wider New Covenant Ministries movement. It was officially registered as a non-profit organisation in 2004 and later became known as Turning Point Church, the name we carry today."
  },
  {
    "page": "About Us",
    "url": "about.html",
    "heading": "Our Mission",
    "text": "To help people build a meaningful relationship with Jesus Christ, while providing a friendly and supportive atmosphere for individuals and families through fellowship, teaching, leadership development and community outreach."
  },
  {
    "page": "About Us",
    "url": "about.html",
    "heading": "Our Vision",
    "text": "To be a church centred on Christ that strengthens families, develops responsible leaders and makes a genuine difference in the lives of our members and the community around us."
  },
  {
    "page": "About Us",
    "url": "about.html",
    "heading": "Who We Welcome",
    "text": "We serve individuals, families and young people across Durban who are looking for spiritual growth, real relationships and a supportive church community, no matter their background or stage of life."
  },
  {
    "page": "Services",
    "url": "services.html",
    "heading": "Our Services",
    "text": "We hold regular services throughout the week for worship, teaching and fellowship. All are welcome to attend, regardless of whether you are visiting for the first time or have been part of our church family for years."
  },
  {
    "page": "Services",
    "url": "services.html",
    "heading": "Sunday Worship Service",
    "text": "Time: 09:00 A time of worship, prayer and Biblical teaching for the whole family."
  },
  {
    "page": "Services",
    "url": "services.html",
    "heading": "Midweek Fellowship",
    "text": "Time: Wednesday, 18:00 Small group gatherings focused on prayer, discussion and building genuine relationships."
  },
  {
    "page": "Services",
    "url": "services.html",
    "heading": "Youth Service",
    "text": "Time: Friday, 17:30 A dedicated service for young people to grow in their faith alongside their peers."
  },
  {
    "page": "Services",
    "url": "services.html",
    "heading": "Plan Your Visit",
    "text": "Not sure what to expect? Get in touch and we will help you plan your first visit."
  },
  {
    "page": "Enquiry",
    "url": "enquiry.html",
    "heading": "Get Involved",
    "text": "Turning Point Church is a non-profit organisation and relies on the support of volunteers and sponsors to carry out our ministry and community work. If you would like to volunteer your time or support us as a sponsor, please fill in the form below."
  },
  {
    "page": "Enquiry",
    "url": "enquiry.html",
    "heading": "Volunteer / Sponsor Enquiry Form",
    "text": "Fill in the form to volunteer or become a sponsor."
  },
  {
    "page": "Contact",
    "url": "contact.html",
    "heading": "Get In Touch",
    "text": "We would love to hear from you. Whether you have a question, want to plan your first visit, or need more information about our church, feel free to reach out."
  },
  {
    "page": "Contact",
    "url": "contact.html",
    "heading": "Our Details",
    "text": "Address: Woodlands, Durban, KwaZulu-Natal, South Africa Email: info@turningpointchurch.co.za Phone: 031 000 0000"
  },
  {
    "page": "Contact",
    "url": "contact.html",
    "heading": "Find Us",
    "text": "Map and directions to the church in Woodlands, Durban."
  },
  {
    "page": "Contact",
    "url": "contact.html",
    "heading": "Contact Form",
    "text": "Send us a message using the contact form."
  }
];

function initSearch() {
  var nav = document.querySelector('nav ul');
  if (!nav || document.getElementById('site-search')) return;

  // Build the search bar and add it to the nav
  var li = document.createElement('li');
  li.className = 'nav-search';
  li.innerHTML =
    '<form id="search-form" role="search" autocomplete="off">' +
      '<label for="site-search" class="visually-hidden">Search this site</label>' +
      '<input type="search" id="site-search" placeholder="Search the site..." aria-controls="search-results">' +
    '</form>' +
    '<ul id="search-results" class="search-results" role="listbox" hidden></ul>';
  nav.appendChild(li);

  var input = document.getElementById('site-search');
  var form = document.getElementById('search-form');
  var results = document.getElementById('search-results');
  var current = [];

  function snippet(text, term) {
    var i = text.toLowerCase().indexOf(term);
    if (i === -1) return text.slice(0, 90) + (text.length > 90 ? '...' : '');
    var start = Math.max(0, i - 30);
    return (start > 0 ? '...' : '') + text.slice(start, start + 90) + (start + 90 < text.length ? '...' : '');
  }

  function search(query) {
    var terms = query.toLowerCase().split(/\s+/).filter(function (t) { return t.length > 1; });
    if (!terms.length) return [];
    return SEARCH_INDEX.map(function (item) {
      var head = item.heading.toLowerCase();
      var body = item.text.toLowerCase();
      var score = 0;
      terms.forEach(function (t) {
        if (head.indexOf(t) !== -1) score += 3;
        if (item.page.toLowerCase().indexOf(t) !== -1) score += 1;
        if (body.indexOf(t) !== -1) score += 1;
      });
      return { item: item, score: score, term: terms[0] };
    }).filter(function (r) { return r.score > 0; })
      .sort(function (a, b) { return b.score - a.score; })
      .slice(0, 6);
  }

  function render(query) {
    if (query.trim().length < 2) { results.hidden = true; results.innerHTML = ''; current = []; return; }
    current = search(query);
    if (!current.length) {
      results.innerHTML = '<li class="no-results">No results for "' + escapeHTML(query) + '"</li>';
    } else {
      results.innerHTML = current.map(function (r) {
        return '<li role="option"><a href="' + r.item.url + '">' +
          '<strong>' + escapeHTML(r.item.heading) + '</strong>' +
          '<span class="result-page">' + escapeHTML(r.item.page) + '</span>' +
          '<span class="result-text">' + escapeHTML(snippet(r.item.text, r.term)) + '</span>' +
          '</a></li>';
      }).join('');
    }
    results.hidden = false;
  }

  input.addEventListener('input', function () { render(input.value); });
  input.addEventListener('focus', function () { if (input.value.trim().length >= 2) render(input.value); });

  // Enter key: go to the best match
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    render(input.value);
    if (current.length) window.location.href = current[0].item.url;
  });

  // Escape closes the list; clicking elsewhere closes it too
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { results.hidden = true; input.blur(); }
  });
  document.addEventListener('click', function (e) {
    if (!li.contains(e.target)) results.hidden = true;
  });
}

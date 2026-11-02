/**
 * maps.js
 * Interactive Google Map of Turning Point Church on contact.html.
 * No library and no API key needed: JavaScript builds a Google Maps
 * embed from the address below.
 * Needs: <div id="map"></div> on the page.
 * Author: Siphesihle Gama - ST10534667
 */


var CHURCH = {
  name: 'Turning Point Church',
  query: 'Turning Point Church, Woodlands, Durban, KwaZulu-Natal, South Africa'
};

function initMap() {
  var el = document.getElementById('map');
  if (!el) return;

  var q = encodeURIComponent(CHURCH.query);

  var frame = document.createElement('iframe');
  frame.src = 'https://www.google.com/maps?q=' + q + '&z=15&output=embed';
  frame.title = 'Map showing the location of ' + CHURCH.name;
  frame.loading = 'lazy';
  frame.referrerPolicy = 'no-referrer-when-downgrade';
  frame.allowFullscreen = true;
  frame.style.cssText = 'width:100%;height:100%;border:0;';

  el.innerHTML = '';
  el.appendChild(frame);

  // "Get Directions" button opens the same place in the Google Maps app/site
  var link = document.getElementById('directions-link');
  if (link) link.href = 'https://www.google.com/maps/search/?api=1&query=' + q;
}

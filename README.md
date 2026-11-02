# Web-Development-RC
Turning Point Church
ST10534667 Siphesihle Gama

Project Overview
This project is a Portfolio of Evidence (POE) for the WEDE5020 Web Development module. It involves planning, designing and building a multi-page website for Turning Point Church, a non-profit Christian community based in Woodlands, Durban. The site is being developed in phases, starting with a written proposal and moving through website planning, HTML structure and content integration, with styling and interactivity to follow.

# Website Goals and Objectives
The goal of the website is to give Turning Point Church a professional, welcoming online presence that introduces visitors to the church and makes key information easy to find. The main objectives are to Share the church's history, mission, vision and values
Communicate service times, location and contact details
Create a friendly, community-focused design
Reach people who don't yet know the church
Encourage community involvement in events and outreach
Provide clear, easy navigation
Ensure the site works well on desktop, tablet and mobile

# Key Features and Functionality
Home Page – welcome message, hero banner, call-to-action buttons, featured upcoming event
About Us Page – church history, mission and vision statements
Services Page – service days/times and descriptions, plan-your-visit CTA
Enquiry Page – form for volunteer and sponsor enquiries
Contact Page – address, contact details, map and contact form
Navigation – consistent header/footer and working menu across all pages

# Timeline and Milestones
- Week 1 – Research and Planning: Analyse organisation needs, review existing site, finalise proposal, define KPIs
- Week 2 – Design and Wireframing: Confirm colour scheme and typography, create wireframes
- Week 3 – Technical Setup and Development: Confirm hosting/domain, select frameworks, start core pages
- Week 4 – Development and Content Integration: Complete pages, add content, integrate navigation
- Week 5 – Testing, Refinement and Submission: Test usability/responsiveness, proofread, submit POE



# Part 1 Details

Part 1 of the assignment is the written proposal, covering:
Organisation Overview – background, mission/vision, target audience
Website Goals and Objectives – objectives and KPIs
Current Website Analysis
Proposed Website Features and Functionality
Design and User Experience
Technical Requirements – hosting, domain, HTML/CSS/JS, CMS
Timeline and Milestones
Budget
References

# Part 2 Css Styling and Responsive Design
The second part involves transforming the basic HTML design from Part 1 into a properly designed website through the use of one external CSS file (css/style.css).

Design

- Color scheme: use of deep blue colors (#17364f,#234b6f,#36769f,#4f91bd) to create a calm, trustworthy mood, a light gray color for the background (#f5f7f8) against which white content cards will be well visible, and a - golden border (#f4c95d) for the keyboard focus.
- Font: Arial/Helvetica sans-serif for ease of readability on all devices, along with a defined font sizing hierarchy (h1: 2.5rem; h2: 1.8rem; h3: 1.3rem) and line height for the text content of 1.6.
- Header: a diagonal blue gradient (linear-gradient(135deg, #234b6f, #36769f)), white text in the centre.
- Content cards: all cards are white and have borders, rounded corners, and shadows which become darker when hovered.

CSS Techniques Used
Technique	Where it is used
CSS reset	* rule sets margin and padding to 0 and box-sizing: border-box so sizes are predictable
External stylesheet	css/style.css linked in the <head> of every page
Element, class, ID and descendant selectors	e.g. nav ul, section h2, main > section:first-child
Flexbox	Navigation menu (nav ul) and forms (form)
CSS Grid	main is a two-column grid on desktop, and the first section spans both columns
Pseudo-classes	:hover, :focus and :active on navigation links, buttons, form fields and submit buttons
Transitions	Smooth 0.2s colour change on nav links and submit buttons
Box model	Padding, borders, border-radius and margins on cards, inputs and buttons
Responsive images	max-width: 100%, height: auto and object-fit: cover so images never overflow
Media queries	Breakpoints at 768px (tablet) and 480px (mobile)
Smooth scrolling	scroll-behavior: smooth on html

Responsive Design
The site was designed to work on desktop, tablet and mobile (one of the project objectives).

-Desktop (above 768px): two-column grid of cards, horizontal centred navigation.
-Tablet (768px and below): the grid becomes a single column, headings and padding are reduced, and the navigation items are tighter.
-Mobile (480px and below): the navigation stacks vertically with full-width buttons, text and images are scaled down, submit buttons become full width, and the map is shortened.

Part 2 Testing

| Test | Expected result | Result |
| :--- | :--- | :--- |
| Open each page on desktop | Same header, navigation and footer styling on all five pages | |
| Hover over a nav link | Background changes to lighter blue | |
| Tab through links and form fields | Visible focus outline on each | |
| Resize the browser below 768px | Cards stack into one column | |
| Resize below 480px | Navigation stacks vertically, buttons full width | |
| Open on a real phone | No sideways scrolling, text readable, images fit | |


Part 3 Details – Adding JavaScript
Part 3 adds JavaScript so the site responds to visitors: working forms with validation, a search bar and an interactive map. The scripts live in the js/ folder and are loaded at the bottom of each page with defer.

JavaScript Files

| File | Purpose |
| :--- | :--- |
| **js/main.js** | Shared helper functions (email and South African phone validation, clearing error messages, escaping text for safe display) and starts all other features once the page loads. |
| **js/forms.js** | Validation and sending for the Contact form and the Volunteer / Sponsor Enquiry form. |
| **js/maps.js** | Builds the interactive map and Get Directions button on the Contact page. |
| **js/search.js** | Adds a search bar to the navigation on every page. |

# Site Map
Turning Point Church Website <br> 
│ <br> 
├── Home (index.html) <br> 
├── About Us (about.html) <br> 
├── Services (services.html) <br> 
├── Enquiry (enquiry.html) <br> 
│     └── Volunteer / Sponsor enquiry form <br> 
└── Contact (contact.html) <br> 
      └── Contact form, address, map <br> 
# Structure 
Web- Development-RC/ <br> 
│ <br> 
├── index.html <br> 
├── about.html <br> 
├── services.html <br> 
├── enquiry.html <br>
├── contact.html <br> 
│     <br>
├──css/ <br>
│    └── style.css <br>
├──images/ <br>
│    └── hero.jpg <br>
│    └── old people.jpg <br>
│    └── service.jpg <br>
└──README.md <br>
# Response testing
<img src="images/Screenshot%202026-09-18%20161810.png" alt="Screenshot Description" width="600">

# Changelog
- v0.1 – Written proposal drafted: Organisation Overview, Website Goals and Objectives, Proposed Features and Functionality, Technical Requirements, Timeline and Milestones, Budget
- v0.2 – Sitemap and file/folder structure created
- v0.3 – Basic HTML structure built for all five pages (index, about, services, enquiry, contact) with semantic tags and researched content integrated
- v0.4 – README file created to document project progress
- v0.5 – External stylesheet completed: colour palette, typography, header gradient, card layout, Flexbox navigation and forms, Grid layout, hover/focus/active states
- v0.6 – Responsive design added with media queries at 768px and 480px; responsive images and mobile navigation; response testing done
- v0.7 – JavaScript added: shared helper functions, Contact and Enquiry form validation with error and success messages
- v0.8 – JavaScript added: site search bar in the navigation and interactive Google Map with Get Directions button on the Contact page
- v0.9 – Navigation links and file names fixed (home page is index.html), search and form styles added to the stylesheet

# Referances
New Covenant Fellowship Durban (n.d.) A History of Turning Point Church. Available at: 
https://ncfdurban.wordpress.com/about/ (Accessed: 14 August 2026). <br> 
SenthySays SA Durban (2019) Turning Point Church Durban – A place to come home to, 
visit and feel like family. 
Available at: https://senthy.wordpress.com/2019/08/16/turning-point-church-durban
a-place-to-come-home-to-visit-and-feel-like-family/ (Accessed: 14 August 2026). <br> 
Turning Point Church (NCF Durban) (2019) Turning Point Church. Available at: 
https://ncfdurban.wordpress.com/ (Accessed: 14 August 2026). <br> 
Turning Point Church Durban (n.d.) Turning Point Durban | Facebook. Available at: 
https://www.facebook.com/turningpointchurchdbn/ (Accessed: 14 August 2026). <br> 
Afrihost, 2026. Shared hosting: Linux and Windows. [online] Available at: 
https://www.afrihost.com/shared-hosting [Accessed 12 August 2026]. <br> 
Xneelo, 2026. Web hosting. [online] Available at: https://xneelo.co.za/web
hosting/ [Accessed 12 August 2026]. <br>
Church Fuel, n.d. Warm Gradient Welcome Motion Background. [image/video online] Available at: sermoncentral.com [Accessed 18 September 2026]. <br> 
Turning Point Church (2026) About. Available at: https://turningpointchurch.tv/about/ (Accessed: 18 September 2026). <br>
Champions Church (2024) Top 12 benefits of live streaming online church services, Champions Church Blog, 5 January. Available at: https://championschurch.com/blog/top-12-benefits-of-live-streaming-online-church-services (Accessed: 18 September 2026). <br>
Garden Lakes Baptist Church (n.d.) Blue-welcome-church-video-poster-template-df977a81710d4201a1a2a6546958ea54_screen. Available at: https://gardenlakesbaptist.com/blue-welcome-church-video-poster-template-df977a81710d4201a1a2a6546958ea54_screen/ (Accessed: 18 September 2026).

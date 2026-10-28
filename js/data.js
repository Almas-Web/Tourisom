/* Demo data. Prices are sample values in AED, not real quotes. */
window.CATS = [
  { id: "all",      label: "All" },
  { id: "safari",   label: "Desert Safari" },
  { id: "dubai",    label: "Dubai City Tour" },
  { id: "abudhabi", label: "Abu Dhabi Tour" },
  { id: "transfer", label: "Airport Transfers" },
  { id: "chauffeur",label: "Chauffeur" },
  { id: "tickets",  label: "Activity Tickets" },
  { id: "uae",      label: "UAE Packages" }
];

window.SERVICES = [
  { id: "safari",   title: "Dubai Desert Safari", text: "Dune bashing, camel rides, BBQ dinner and live shows at a desert camp.", hue: "#F6B21B" },
  { id: "dubai",    title: "Dubai City Tour", text: "Burj Khalifa, Jumeirah, Old Dubai souks and the Palm in one guided day.", hue: "#0E7283" },
  { id: "abudhabi", title: "Abu Dhabi City Tour", text: "Sheikh Zayed Grand Mosque, Corniche and Qasr Al Watan with hotel pick-up.", hue: "#2A9D8F" },
  { id: "chauffeur",title: "Chauffeur Service", text: "Private driver by the hour or the day, in a sedan, SUV or van.", hue: "#10394A" },
  { id: "transfer", title: "Airport Transfers", text: "Meet-and-greet pick-ups from DXB, DWC and Abu Dhabi airports.", hue: "#E9852B" },
  { id: "tickets",  title: "Activity Tickets", text: "Burj Khalifa, Dubai Frame, dhow cruises, theme parks and water parks.", hue: "#5C7AEA" },
  { id: "uae",      title: "UAE Tour Packages", text: "Multi-day plans across Dubai, Abu Dhabi, Sharjah and Fujairah.", hue: "#B5446E" }
];

window.PACKAGES = [
  /* Desert safari */
  { id:"p1", cat:"safari", title:"Evening Desert Safari with BBQ Dinner", price:120, unit:"per person", duration:"6 hours", badge:"Most booked",
    desc:"Dune bashing in a 4x4, sunset photo stop, camel ride and a BBQ dinner at a desert camp with live entertainment.",
    incl:["Hotel pick-up and drop-off","Dune bashing 4x4","Camel ride and sandboarding","BBQ dinner and soft drinks","Belly dance and Tanoura show"] },
  { id:"p2", cat:"safari", title:"Morning Desert Safari", price:99, unit:"per person", duration:"4 hours",
    desc:"A cooler morning drive over the dunes with quad bike option and a visit to a Bedouin-style camp.",
    incl:["Hotel pick-up and drop-off","Dune bashing 4x4","Camel ride","Refreshments","Photo stops"] },
  { id:"p3", cat:"safari", title:"Private VIP Desert Safari", price:750, unit:"per vehicle (up to 6)", duration:"6 hours", badge:"Private",
    desc:"Your own 4x4 and driver with a private table at the camp. Good for families and small groups.",
    incl:["Private 4x4 vehicle","Private table at camp","BBQ dinner and drinks","Sunset photo stop","Hotel pick-up and drop-off"] },
  { id:"p4", cat:"safari", title:"Overnight Desert Camp", price:350, unit:"per person", duration:"Overnight",
    desc:"Stay in a desert camp under the stars. Dinner, evening show and breakfast the next morning.",
    incl:["Tent accommodation","Dinner and breakfast","Dune bashing","Camel ride","Stargazing"] },

  /* Dubai city */
  { id:"p5", cat:"dubai", title:"Dubai City Tour (Half Day)", price:110, unit:"per person", duration:"4 to 5 hours",
    desc:"A guided drive through modern and old Dubai with photo stops at the main landmarks.",
    incl:["Hotel pick-up and drop-off","Guide in your language","Burj Khalifa photo stop","Jumeirah Mosque and Burj Al Arab view","Palm Jumeirah viewpoint"] },
  { id:"p6", cat:"dubai", title:"Old and New Dubai Full Day", price:180, unit:"per person", duration:"8 hours", badge:"Full day",
    desc:"Souks, Dubai Creek abra ride, Dubai Frame, Downtown and Marina in one relaxed day.",
    incl:["Hotel pick-up and drop-off","Abra boat ride","Gold and Spice souks","Dubai Marina stop","Lunch break"] },
  { id:"p7", cat:"dubai", title:"Dubai Marina Dhow Dinner Cruise", price:140, unit:"per person", duration:"2 hours",
    desc:"Dinner on a traditional dhow with views of the Marina skyline.",
    incl:["Buffet dinner","Welcome drink","Live music","Hotel transfer option"] },

  /* Abu Dhabi */
  { id:"p8", cat:"abudhabi", title:"Abu Dhabi City Tour from Dubai", price:150, unit:"per person", duration:"9 hours", badge:"Popular",
    desc:"Full-day trip to the capital with the Grand Mosque, Corniche, Heritage Village and Emirates Palace photo stop.",
    incl:["Hotel pick-up and drop-off","Sheikh Zayed Grand Mosque","Corniche and Heritage Village","Qasr Al Watan or Emirates Palace stop","Guide and bottled water"] },
  { id:"p9", cat:"abudhabi", title:"Abu Dhabi Ferrari World Day", price:340, unit:"per person", duration:"Full day",
    desc:"Return transport from Dubai with a Ferrari World Abu Dhabi entry ticket.",
    incl:["Return transport from Dubai","Ferrari World entry ticket","Flexible return time"] },

  /* Transfers */
  { id:"p10", cat:"transfer", title:"Airport Transfer, Sedan (DXB)", price:100, unit:"per trip (up to 3)", duration:"One way",
    desc:"Meet-and-greet at arrivals with flight tracking and a fixed price.",
    incl:["Flight tracking","Meet and greet","Luggage assistance","Fixed price, no meter"] },
  { id:"p11", cat:"transfer", title:"Airport Transfer, Van (DXB)", price:180, unit:"per trip (up to 10)", duration:"One way",
    desc:"A spacious van for families and groups with extra luggage.",
    incl:["Flight tracking","Meet and greet","Space for large luggage","Child seats on request"] },
  { id:"p12", cat:"transfer", title:"Dubai to Abu Dhabi Airport Transfer", price:350, unit:"per trip (up to 3)", duration:"One way",
    desc:"Comfortable direct transfer between Dubai hotels and Abu Dhabi airport.",
    incl:["Door-to-door service","Flight tracking","Fixed price","Tolls included"] },

  /* Chauffeur */
  { id:"p13", cat:"chauffeur", title:"Chauffeur by the Hour", price:90, unit:"per hour (min. 4 hours)", duration:"Flexible",
    desc:"A private driver and car for shopping, meetings or sightseeing at your own pace.",
    incl:["Private driver","Air-conditioned sedan","Fuel included","Water on board"] },
  { id:"p14", cat:"chauffeur", title:"Full Day Chauffeur (10 hours)", price:650, unit:"per day", duration:"10 hours", badge:"Best value",
    desc:"Keep one driver for the whole day across Dubai and nearby emirates.",
    incl:["Private driver","Sedan or SUV","Fuel included","Up to 10 hours"] },
  { id:"p15", cat:"chauffeur", title:"Luxury Chauffeur (VIP)", price:1200, unit:"per day", duration:"10 hours",
    desc:"Premium vehicle with a uniformed driver for business and special occasions.",
    incl:["Premium vehicle","Uniformed driver","Complimentary water and Wi-Fi","Airport meet and greet"] },

  /* Tickets */
  { id:"p16", cat:"tickets", title:"Burj Khalifa At The Top Ticket", price:170, unit:"per person", duration:"1 to 2 hours",
    desc:"Skip-the-queue time slot for the observation deck. Sunset slots sell out early.",
    incl:["Entry ticket","Choice of time slot","Transfer add-on available"] },
  { id:"p17", cat:"tickets", title:"Dubai Frame Ticket", price:55, unit:"per person", duration:"1 hour",
    desc:"Walk the glass-floor sky bridge with views of old and new Dubai.",
    incl:["Entry ticket","Museum access","Transfer add-on available"] },
  { id:"p18", cat:"tickets", title:"Aquaventure or Wild Wadi Water Park", price:220, unit:"per person", duration:"Full day",
    desc:"Water park entry tickets with optional round-trip transfer.",
    incl:["Entry ticket","Optional round-trip transfer","Group discounts"] },

  /* UAE packages */
  { id:"p19", cat:"uae", title:"Dubai 3 Days / 2 Nights", price:1450, unit:"per person (twin share)", duration:"3 days",
    desc:"City tour, desert safari and airport transfers with 4-star hotel stay.",
    incl:["2 nights, 4-star hotel with breakfast","Airport transfers","Dubai city tour","Evening desert safari"] },
  { id:"p20", cat:"uae", title:"Dubai and Abu Dhabi 5 Days", price:2450, unit:"per person (twin share)", duration:"5 days", badge:"Family favourite",
    desc:"Five relaxed days covering both cities, the desert and a dhow cruise.",
    incl:["4 nights, 4-star hotel with breakfast","Airport transfers","Dubai and Abu Dhabi city tours","Desert safari and dhow cruise","Burj Khalifa ticket"] },
  { id:"p21", cat:"uae", title:"Seven Emirates Explorer 7 Days", price:3600, unit:"per person (twin share)", duration:"7 days",
    desc:"Dubai, Abu Dhabi, Sharjah, Ajman, Fujairah and Ras Al Khaimah with a private guide.",
    incl:["6 nights hotel with breakfast","All transfers and private vehicle","Guide in your language","Entry tickets as listed"] }
];

window.GALLERY = [
  { img:"images/gallery-1.jpg", cap:"Dune bashing at sunset", a:"#F6B21B", b:"#B7541E", tall:true },
  { img:"images/gallery-2.jpg", cap:"Burj Khalifa and Downtown", a:"#0E7283", b:"#10394A" },
  { img:"images/gallery-3.jpg", cap:"Sheikh Zayed Grand Mosque", a:"#CFE8E4", b:"#2A9D8F" },
  { img:"images/gallery-4.jpg", cap:"Camel ride at the camp", a:"#E9852B", b:"#7A3A18" },
  { img:"images/gallery-5.jpg", cap:"Dhow cruise in Dubai Marina", a:"#5C7AEA", b:"#10264A", tall:true },
  { img:"images/gallery-6.jpg", cap:"Airport meet and greet", a:"#2A9D8F", b:"#0B5563" },
  { img:"images/gallery-7.jpg", cap:"Private chauffeur SUV", a:"#10394A", b:"#0F2A33" },
  { img:"images/gallery-8.jpg", cap:"Old Dubai abra ride", a:"#F29F4B", b:"#0E7283" }
];

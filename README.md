# Waheed Murad Tourism & Transportation - Demo Website (frontend only)

Static site: HTML + CSS + JavaScript. No build step, no npm, no backend.

## Deploy on Vercel (no code change needed)
Option A - Drag and drop
1. Extract this zip into a folder.
2. Go to vercel.com/new and drag the folder in (or use "Add New > Project" with the folder uploaded to GitHub).
3. Framework Preset: "Other". Build Command: empty. Output Directory: empty (or "."). Deploy.

Option B - Vercel CLI
    npm i -g vercel
    cd <extracted-folder>
    vercel --prod

## Change client details (only file to edit)
js/config.js -> WhatsApp number, phone, email, address, social links.

## How features work
- Booking form, quick enquiry and contact form open WhatsApp with the details pre-filled (no backend needed).
- Tour cards, prices and filters come from js/data.js.
- Optional real photos: see images/README.txt.
- Prices, reviews and contact numbers are demo placeholders.

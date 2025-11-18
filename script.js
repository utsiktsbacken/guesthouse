// Lightweight bilingual switcher (English default) + mobile nav + smooth scroll
(function(){
  const translations = {
    en: {
      site_title: "Welcome to our cottage in the Blekinge archipelago",
      site_sub: "A charming fisherman's cottage with sea breeze and character.",
      nav_about: "About the cottage",
      nav_checkout: "Check-out",
      nav_guide: "Travel guide",
      nav_contact: "Contact",
      hero_title: "A peaceful spot by the sea",
      hero_text: "Enjoy sunrises, starry nights and short walks to the swimming spot.",
      book_now: "Book / Contact us",
      airbnb_book: "Book on Airbnb",
      about_title: "About the cottage",
      about_text: "The cottage is an old fisherman's home with modern comforts. There's a sofa bed, kitchenette, toilet and a small deck.",
      bed_label: "Sofa bed:",
      bed_text: "Pull out the lower part and fold down the backrest.",
      tv_label: "TV:",
      tv_text: "Press the red button on the remote. Choose HDMI1 for streaming.",
      wifi_label: "Wi‑Fi:",
      wifi_text: "Network: \"Stugan\", Password: blekinge2024",
      checkout_title: "Check-out",
      checkout_intro: "Before you leave, please:",
      checkout_1: "Wash dishes and do a light clean",
      checkout_2: "Dispose of rubbish in the bin by the driveway",
      checkout_3: "Lower the heat to 15°C (thermostat by the door)",
      checkout_4: "Leave the key in the red mailbox",
      guide_title: "Travel guide",
      guide_intro: "Explore the surroundings:",
      beach_label: "Beach:",
      beach_text: "300 m below the cottage",
      cafe_label: "Café Skärgården:",
      cafe_text: "open daily during summer",
      hike_label: "Hiking:",
      hike_text: "Listerby nature reserve — 2 km away",
      boat_label: "Boat rental:",
      boat_text: "Available in the harbour, 500 m",
      contact_title: "Contact",
      contact_text: "Have questions? Contact us:",
      phone_label: "Phone:",
      email_label: "Email:",
      map_link: "View on map",
      footer_name: "The Cottage in the Blekinge archipelago"
    },
    sv: {
      site_title: "Välkommen till vår stuga i Blekinge skärgård",
      site_sub: "En charmig fiskarstuga med själ och havsdoft.",
      nav_about: "Om stugan",
      nav_checkout: "Utcheckning",
      nav_guide: "Reseguide",
      nav_contact: "Kontakt",
      hero_title: "En lugn plats nära havet",
      hero_text: "Njut av soluppgångar, stjärnklara kvällar och korta promenader till badplatsen.",
      book_now: "Boka / Kontakta oss",
      airbnb_book: "Boka på Airbnb",
      about_title: "Om stugan",
      about_text: "Stugan är en gammal fiskarbostad med modern komfort. Här finns bäddsoffa, trinettkök, toalett och en liten altan.",
      bed_label: "Bäddsoffa:",
      bed_text: "Dra ut underdelen och fäll ner ryggstödet.",
      tv_label: "TV:",
      tv_text: "Tryck på röd knapp på fjärrkontrollen. Välj HDMI1 för streaming.",
      wifi_label: "Wi‑Fi:",
      wifi_text: "Nätverk: \"Stugan\", Lösen: blekinge2024",
      checkout_title: "Utcheckning",
      checkout_intro: "Innan du lämnar, vänligen:",
      checkout_1: "Diska och städa ytorna lätt",
      checkout_2: "Släng sopor i tunnan vid infarten",
      checkout_3: "Sänk värmen till 15°C (termostaten vid dörren)",
      checkout_4: "Lägg nyckeln i den röda brevlådan",
      guide_title: "Reseguide",
      guide_intro: "Utforska omgivningen:",
      beach_label: "Badplats:",
      beach_text: "300 m nedanför stugan",
      cafe_label: "Café Skärgården:",
      cafe_text: "öppet dagligen sommartid",
      hike_label: "Vandring:",
      hike_text: "Listerby naturreservat – 2 km bort",
      boat_label: "Båtuthyrning:",
      boat_text: "Finns i hamnen, 500 m",
      contact_title: "Kontakt",
      contact_text: "Har du frågor? Kontakta oss:",
      phone_label: "Telefon:",
      email_label: "E-post:",
      map_link: "Visa på karta",
      footer_name: "Stugan i Blekinge skärgård"
    }
  };

  // set year in footer
  const setYear = () => {
    const el = document.getElementById('year');
    if (el) el.textContent = new Date().getFullYear();
  };

  // apply translations to elements with data-i18n
  const applyTranslations = (lang) => {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const value = translations[lang] && translations[lang][key];
      if (value !== undefined) el.textContent = value;
    });

    // ensure document language attribute
    document.documentElement.lang = (lang === 'sv') ? 'sv' : 'en';
  };

  const setActiveLangButton = (lang) => {
    const btnSv = document.getElementById('btn-sv');
    const btnEn = document.getElementById('btn-en');
    if (!btnSv || !btnEn) return;
    if (lang === 'sv') {
      btnSv.classList.add('active'); btnSv.setAttribute('aria-pressed','true');
      btnEn.classList.remove('active'); btnEn.setAttribute('aria-pressed','false');
    } else {
      btnEn.classList.add('active'); btnEn.setAttribute('aria-pressed','true');
      btnSv.classList.remove('active'); btnSv.setAttribute('aria-pressed','false');
    }
  };

  const changeLang = (lang) => {
    localStorage.setItem('site_lang', lang);
    applyTranslations(lang);
    setActiveLangButton(lang);
  };

  const initLang = () => {
    const saved = localStorage.getItem('site_lang');
    const defaultLang = saved || 'en'; // English is first by default
    applyTranslations(defaultLang);
    setActiveLangButton(defaultLang);
    document.getElementById('btn-sv')?.addEventListener('click', ()=>changeLang('sv'));
    document.getElementById('btn-en')?.addEventListener('click', ()=>changeLang('en'));
  };

  // mobile nav toggle
  const initNav = () => {
    const toggle = document.querySelector('.nav-toggle');
    const navList = document.getElementById('nav-list');
    if (!toggle || !navList) return;
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      navList.classList.toggle('show');
    });
    navList.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        navList.classList.remove('show');
        toggle.setAttribute('aria-expanded','false');
      });
    });
  };

  // smooth anchor scrolling
  const initSmoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', (e) => {
        const id = a.getAttribute('href').slice(1);
        const target = document.getElementById(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({behavior:'smooth', block:'start'});
        }
      });
    });
  };

  document.addEventListener('DOMContentLoaded', () => {
    setYear();
    initLang();
    initNav();
    initSmoothScroll();
  });
})();

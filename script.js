// Lightweight bilingual switcher (English default) + mobile nav + smooth scroll
(function(){
  const translations = {
    en: {
      nav_about: "About the cottage",
      nav_checkout: "Check-out",
      nav_guide: "Travel guide",
      nav_contact: "Contact",
      hero_title: "A peaceful spot by the sea",
      hero_text: "Enjoy sunrises, starry nights and short walks to the swimming spot.",
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
      guide_walk_title: "Within walking distance",
      walk_promenadrunda_label: "Promenadrunda",
      walk_promenadrunda_text: "[Add details here]",
      walk_runsten_label: "Runsten",
      walk_runsten_text: "[Add details here]",
      walk_vastra_label: "Västra skällöns naturreservat",
      walk_vastra_text: "[Add details here]",
      guide_bike_title: "Within biking distance",
      bike_andrens_label: "Andréns bageri",
      bike_andrens_text: "A bakery where barely anything has changed for the last 100 years, even the owners are the same family now as when they started. Bread and sweet treats, and children always get a free cinnamon bun with every purchase!",
      bike_uttorp_label: "Uttorps naturreservat",
      bike_uttorp_text: "[Add details here]",
      bike_kvarnen_label: "Kvarnen",
      bike_kvarnen_text: "Once an active windmill for making flour, now renovated to a restaurant and café. You can climb to the top for views — try local dishes like kroppkakor or take a pizza to bring home.",
      bike_skargardskraft_label: "Skärgårdskraft",
      bike_skargardskraft_text: "Museum, second hand shopping, café and local crafts. Learn about Tjurkö's long history of stonecutting.",
      bike_bibbis_label: "Bibbis skärgårdscafé",
      bike_bibbis_text: "Summer café serving classic Swedish treats and lighter foods — and even a wine made locally on Tjurkö.",
      badplatser_title: "Badplatser",
      badplatser_intro: "Beach/swimming locations — map with pins will be added here (coordinates editable later).",
      bad_senorens_camping: "Senorens camping",
      bad_senorens_text: "[Add details here]",
      bad_senorens_badplats: "Senorens badplats",
      bad_senorens_badplats_text: "[Add details here]",
      bad_hangnan: "Hängnan på Tjurkö",
      bad_hangnan_text: "[Add details here]",
      bad_sturko: "Sturkö camping",
      bad_sturko_text: "[Add details here]",
      guide_city_title: "In the city of Karlskrona",
      city_glassiaren_label: "Glassiären",
      city_glassiaren_text: "Ice cream shop known for generous portions. Expect lines on hot summer days.",
      city_marinmuseum_label: "Marinmuseum",
      city_marinmuseum_text: "[Add details here]",
      city_stadsvandring_label: "Stadsvandring",
      city_stadsvandring_text: "Guided or self-guided walks through Karlskrona's historic centre. [Add meeting points / tips]",
      guide_near_title: "Near Karlskrona",
      near_aspo_label: "Aspö",
      near_aspo_text: "The only large island not connected by bridge. Ferry from Handelshamnen — frequent and free for foot, bike or car.",
      near_kristianopel_label: "Kristianopel",
      near_kristianopel_text: "[Add details here]",
      near_yttre_label: "Yttre skärgården",
      near_yttre_text: "Passenger ferry to outer islands — recommended: Stenshamn or Ungskär. Closest ferry stop: Brofästet on Senoren. Check timetables carefully.",
      guide_food_title: "Food to try / Mat att testa",
      food_kalles_label: "Kalles kaviar med smör och knäckebröd",
      food_kalles_text: "Smoked cod roe in a tube — try it on crisp bread with butter.",
      food_kroppkakor_label: "Kroppkakor",
      food_kroppkakor_text: "Potato dumplings filled with pork and onion — served with melted butter, cream and lingonberry jam.",
      footer_name: "The Cottage in the Blekinge archipelago",
      contact_title: "Contact",
      contact_text: "Have questions? Contact us:",
      phone_label: "Phone:",
      email_label: "Email:",
      map_link: "View on map"
    },
    sv: {
      // Keep UI translations, but the travel guide is intentionally unavailable in Swedish.
      nav_about: "Om stugan",
      nav_checkout: "Utcheckning",
      nav_guide: "Reseguide",
      nav_contact: "Kontakt",
      hero_title: "En lugn plats nära havet",
      hero_text: "Njut av soluppgångar, stjärnklara kvällar och korta promenader till badplatsen.",
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
      guide_unavailable_sv: "Reseguide på svenska finns för närvarande inte. Växla till engelska för att se guiden.",
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

    // Show/hide the English guide depending on language selection.
    const guideEnglish = document.getElementById('guide-english');
    const guideUnavailable = document.getElementById('guide-unavailable');

    if (lang === 'sv') {
      if (guideEnglish) guideEnglish.classList.add('hidden');
      if (guideUnavailable) guideUnavailable.classList.remove('hidden');
    } else {
      if (guideEnglish) guideEnglish.classList.remove('hidden');
      if (guideUnavailable) guideUnavailable.classList.add('hidden');
    }

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
    const defaultLang = saved || 'en'; // English by default
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

  // Persist checklist state to localStorage (nice-to-have)
  const initChecklist = () => {
    const items = document.querySelectorAll('.check-list input[type="checkbox"]');
    items.forEach(input => {
      const id = input.id;
      const saved = localStorage.getItem(`chk_${id}`);
      if (saved === 'true') input.checked = true;
      input.addEventListener('change', () => {
        localStorage.setItem(`chk_${id}`, input.checked ? 'true' : 'false');
      });
    });
  };

  document.addEventListener('DOMContentLoaded', () => {
    setYear();
    initLang();
    initNav();
    initSmoothScroll();
    initChecklist();
  });

  // Expose changeLang for debugging in console if needed
  window.changeLang = changeLang;

  // Map marker helper:
  // You can populate window.BAD_MAP_MARKERS in index.html before the Google Maps script loads.
  // Example:
  // window.BAD_MAP_MARKERS = [
  //   { title: 'Senorens camping', lat: 56.16, lng: 15.58, description: 'Nice beach' },
  //   { title: 'Senorens badplats', lat: 56.162, lng: 15.582 }
  // ];
  //
  // initMap() is defined in index.html so Google Maps callback will find it.
})();

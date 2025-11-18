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
      // Walking distance
      guide_walk_title: "Within walking distance",
      walk_promenadrunda_label: "Promenadrunda",
      walk_promenadrunda_text: "[Add details here]",
      walk_runsten_label: "Runsten",
      walk_runsten_text: "[Add details here]",
      walk_vastra_label: "Västra skällöns naturreservat",
      walk_vastra_text: "[Add details here]",
      // Biking distance
      guide_bike_title: "Within biking distance",
      bike_andrens_label: "Andréns bageri",
      bike_andrens_text: "A bakery where barely anything has changed for the last 100 years, even the owners are the same family now as when they started. Bread and sweet treats, and children always get a free cinnamon bun with every purchase!",
      bike_uttorp_label: "Uttorps naturreservat",
      bike_uttorp_text: "[Add details here]",
      bike_kvarnen_label: "Kvarnen",
      bike_kvarnen_text: "Once an active windmill for making flour, now renovated to a restaurant and café. You can even climb all the way to the top of the windmill for views over the area. Enjoy local dishes like kroppkakor, or take a pizza to bring home.",
      bike_skargardskraft_label: "Skärgårdskraft",
      bike_skargardskraft_text: "Museum, second hand shopping, café and local crafts all in the same place! Learn more about Tjurkö's history of stonecutting — a massive local industry for centuries.",
      bike_badplatser_label: "Badplatser",
      bike_badplatser_text: "Senorens camping • Senorens badplats • Hängnan på Tjurkö • Sturkö camping",
      bike_bibbis_label: "Bibbis skärgårdscafé",
      bike_bibbis_text: "Summer café serving classic Swedish treats and lighter foods - and even a wine made locally on Tjurkö. The climate here is ideal for growing grapes.",
      // City of Karlskrona
      guide_city_title: "In the city of Karlskrona",
      city_glassiaren_label: "Glassiären",
      city_glassiaren_text: "Ice cream shop known for generous portions. Expect lines on hot summer days.",
      city_marinmuseum_label: "Marinmuseum",
      city_marinmuseum_text: "[Add details here]",
      city_stadsvandring_label: "Stadsvandring",
      city_stadsvandring_text: "Guided or self-guided walks through Karlskrona's historic centre. [Add meeting points / tips]",
      city_bjorkholmen_label: "Promenera på Björkholmen",
      city_bjorkholmen_text: "[Add details here]",
      city_brendaholm_label: "Brändaholm och Dragsö",
      city_brendaholm_text: "[Add details here]",
      city_tip_label: "Tip",
      city_tip_text: "Take the boat from Sturkö to Karlskrona for a scenic route.",
      // Near Karlskrona
      guide_near_title: "Near Karlskrona",
      near_aspo_label: "Aspö",
      near_aspo_text: "The only large island in the archipelago not connected by bridge. Ferry from Handelshamnen — frequent crossings, free for foot, bike or car.",
      near_kristianopel_label: "Kristianopel",
      near_kristianopel_text: "[Add details here]",
      near_yttre_label: "Yttre skärgården",
      near_yttre_text: "A passenger ferry goes to the outer islands (sparse population, no car traffic). Recommended: Stenshamn (connected to Ytterön) or Ungskär. Closest ferry stop: Brofästet on Senoren — check timetables carefully.",
      near_kungholm_label: "Kungholms fort",
      near_kungholm_text: "[Add details here]",
      near_barnens_label: "Barnens gård",
      near_barnens_text: "Water park and outdoor playground loved by local children for generations — best for ages ~5–12.",
      // Food
      guide_food_title: "Food to try / Mat att testa",
      food_kalles_label: "Kalles kaviar med smör och knäckebröd",
      food_kalles_text: "Smoked cod roe in a tube — try it on crisp bread with butter. Many Swedes love or hate it; it's a must-try if you want to taste local flavours.",
      food_saltlakrits_label: "Saltlakrits",
      food_saltlakrits_text: "[Add details or favourite shops here]",
      food_sill_label: "Inlagd sill",
      food_sill_text: "Pickled herring in many flavours — traditionally eaten at Christmas, Midsummer and Easter.",
      food_lax_label: "Kallrökt lax / Gravad lax",
      food_lax_text: "[Add details here]",
      food_kroppkakor_label: "Kroppkakor",
      food_kroppkakor_text: "Potato dumplings filled with pork and onion — served with melted butter, cream and lingonberry jam. A regional favourite (Blekinge / Småland / Öland debates welcome!).",
      food_princess_label: "Prinsesstårta",
      food_princess_text: "Sponge cake with custard, jam and whipped cream under a thin green marzipan layer — a very Swedish classic.",
      food_rak_label: "Räkmacka",
      food_rak_text: "Open sandwich with mayo, egg and a generous pile of shrimp — often finished with lemon, cucumber and dill.",
      food_losgodis_label: "Lösgodis",
      food_losgodis_text: "Pick-and-mix candy sold by weight — available at most grocery stores and stations. Pick what you like and have it weighed at the checkout.",
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
      guide_intro: "Utforska omgivningarna:",
      // Walking distance (sv placeholders)
      guide_walk_title: "Inom gångavstånd",
      walk_promenadrunda_label: "Promenadrunda",
      walk_promenadrunda_text: "Lägg till information här.",
      walk_runsten_label: "Runsten",
      walk_runsten_text: "Lägg till information här.",
      walk_vastra_label: "Västra skällöns naturreservat",
      walk_vastra_text: "Lägg till information här.",
      // Biking distance
      guide_bike_title: "Inom cykelavstånd",
      bike_andrens_label: "Andréns bageri",
      bike_andrens_text: "Ett traditionellt bageri där nästan ingenting förändrats på 100 år. Bröd och sötsaker; barn får ofta en kanelbulle gratis.",
      bike_uttorp_label: "Uttorps naturreservat",
      bike_uttorp_text: "Lägg till information här.",
      bike_kvarnen_label: "Kvarnen",
      bike_kvarnen_text: "Tidigare kvarn, nu restaurang och café. Möjlighet att klättra upp för utsikt. Prova lokala rätter som kroppkakor.",
      bike_skargardskraft_label: "Skärgårdskraft",
      bike_skargardskraft_text: "Museum, second hand, café och lokalt hantverk — lär om Tjurkös stenbrytning.",
      bike_badplatser_label: "Badplatser",
      bike_badplatser_text: "Senorens camping • Senorens badplats • Hängnan på Tjurkö • Sturkö camping",
      bike_bibbis_label: "Bibbis skärgårdscafé",
      bike_bibbis_text: "Sommarcafé med klassiska svenska godsaker och lättare mat; lokalt vin finns ibland.",
      // City of Karlskrona
      guide_city_title: "I Karlskrona stad",
      city_glassiaren_label: "Glassiären",
      city_glassiaren_text: "Glassbutik känd för stora portioner — köer kan förekomma i värmen.",
      city_marinmuseum_label: "Marinmuseum",
      city_marinmuseum_text: "Lägg till information här.",
      city_stadsvandring_label: "Stadsvandring",
      city_stadsvandring_text: "Guidad eller självguidad promenad genom stadens historiska delar. Lägg till mötesplats/tips.",
      city_bjorkholmen_label: "Promenera på Björkholmen",
      city_bjorkholmen_text: "Lägg till information här.",
      city_brendaholm_label: "Brändaholm och Dragsö",
      city_brendaholm_text: "Lägg till information här.",
      city_tip_label: "Tips",
      city_tip_text: "Ta båten från Sturkö till Karlskrona för en fin resa.",
      // Near Karlskrona
      guide_near_title: "Nära Karlskrona",
      near_aspo_label: "Aspö",
      near_aspo_text: "Den enda större ön i skärgården som inte är förbunden med bro. Färja från Handelshamnen; ofta frekvent och gratis.",
      near_kristianopel_label: "Kristianopel",
      near_kristianopel_text: "Lägg till information här.",
      near_yttre_label: "Yttre skärgården",
      near_yttre_text: "Passagerarfärjor till yttre öar med få bofasta och ingen biltrafik. Rekommenderas: Stenshamn eller Ungskär. Närmaste avstigning: Brofästet på Senoren. Kolla tidtabeller noga.",
      near_kungholm_label: "Kungholms fort",
      near_kungholm_text: "Lägg till information här.",
      near_barnens_label: "Barnens gård",
      near_barnens_text: "Vattenpark och utomhuslekplats, omtyckt av lokala barn i åldern cirka 5–12 år.",
      // Food
      guide_food_title: "Mat att testa",
      food_kalles_label: "Kalles kaviar med smör och knäckebröd",
      food_kalles_text: "Rökt tångrom i tub — prova på knäckebröd med smör.",
      food_saltlakrits_label: "Saltlakrits",
      food_saltlakrits_text: "Lägg till information här.",
      food_sill_label: "Inlagd sill",
      food_sill_text: "Inlagd sill i många smaker — vanligt vid högtider som jul, midsommar och påsk.",
      food_lax_label: "Kallrökt lax / Gravad lax",
      food_lax_text: "Lägg till information här.",
      food_kroppkakor_label: "Kroppkakor",
      food_kroppkakor_text: "Potatisdumpling fylld med fläsk och lök — serveras ofta med smält smör, grädde och lingonsylt.",
      food_princess_label: "Prinsesstårta",
      food_princess_text: "Sockerkaka med vaniljkräm, sylt och grädde täckt i grön marsipan.",
      food_rak_label: "Räkmacka",
      food_rak_text: "Smörgås med majonnäs, ägg och rikligt med färska räkor — ofta med citron och dill.",
      food_losgodis_label: "Lösgodis",
      food_losgodis_text: "Plockgodis köpt i vikt — finns i de flesta butiker.",
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

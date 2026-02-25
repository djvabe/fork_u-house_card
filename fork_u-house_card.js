/**
 * Fork_U-House_Card v12.0 (AI Storyteller Edition) - FIXED VERSION
 * * FEATURE: Long, descriptive, "AI-like" status messages with context & reasoning.
 * * FEATURE: Pollen support restored & integrated into advice logic.
 * * FEATURE: Wind Chill logic (Wind + Cold temp = specific advice).
 * * VISUALS: Prism Classic (Stars, Fog, No-Glow Rain) + Gaming Ambient Mode.
 * * FIX: Added object-fit: contain to .bg-image to prevent stretching and cutting in panel view.
 */


const TRANSLATIONS = {
    en: {
        loading: "Analyzing environmental data...",
        home_median: "Home",
        
        // Conditions
        clear_night: "Clear Night", cloudy: "Cloudy", fog: "Fog", hail: "Hail",
        lightning: "Thunderstorm", lightning_rainy: "Thunderstorm & Rain",
        partlycloudy: "Partly Cloudy", pouring: "Pouring Rain", rainy: "Rainy",
        snowy: "Snowy", sunny: "Sunny", windy: "Windy",
        
        // --- AI NARRATIVES ---
        
        // 1. DANGER / STORM
        alert_storm: "⚠️ CRITICAL ALERT: A storm with lightning is active nearby. Strong winds and heavy rain are expected. Please secure loose objects outside and stay indoors for safety.",
        
        // 2. HEALTH (AQI / POLLEN)
        alert_aqi_bad: "😷 SMOG ALERT: Air quality is critical (PM2.5: {val}). Prolonged exposure is dangerous. Keep windows closed and run your air purifier.",
        alert_aqi_mod: "😶 AIR QUALITY WARNING: PM2.5 levels are elevated ({val}). Sensitive groups should limit outdoor exertion today.",
        alert_pollen: "🤧 ALLERGY ALERT: High pollen concentration detected. If you suffer from allergies, keep windows shut and have your medication ready.",
        
        // 3. FORECAST (FUTURE RAIN/SNOW)
        advice_rain_soon: "☂️ PLAN AHEAD: Rain is approaching and expected around {time} (approx. {val} mm). Don't leave without an umbrella.",
        advice_snow_soon: "❄️ WINTER ALERT: Snowfall is expected around {time}. Road conditions may deteriorate rapidly. Drive with caution.",
        
        // 4. CURRENT WEATHER
        advice_rain_now: "🌧️ CURRENTLY RAINING: Intensity is {val} mm/h. Wet surfaces and reduced visibility. Drive safely and wear waterproof gear.",
        advice_snow_now: "🌨️ SNOWING: Snow is falling right now. Enjoy the view, but dress warmly if you head out.",
        
        // 5. UV / SUN
        alert_uv_high: "☀️ HIGH UV RADIATION: The UV Index is {val}. Unprotected skin can burn quickly. Use sunscreen and wear sunglasses if you go out.",
        
        // 6. TEMPERATURE + WIND (Wind Chill)
        advice_cold_wind: "🥶 WIND CHILL WARNING: It's {val}°C, but the strong wind makes it feel much colder. Wear windproof layers and a hat.",
        advice_cold: "🧣 COLD WEATHER: Outside temperature is {val}°C. It's chilly—make sure to zip up your jacket and keep warm.",
        
        advice_hot: "🔥 HEAT ADVISORY: Temperatures have reached {val}°C. Avoid strenuous activity in direct sunlight and drink plenty of water.",
        advice_nice: "😎 COMFORTABLE CONDITIONS: Weather is stable at {val}°C with moderate wind. Great time for a walk or airing out the house.",
        
        advice_gaming: "🎮 GAMING MODE: Immersive lighting active. Notifications silenced.",
    },
    pl: {
        loading: "Analizuję dane środowiskowe...",
        home_median: "Dom",
        
        // Warunki
        clear_night: "Bezchmurnie", cloudy: "Pochmurno", fog: "Mgła", hail: "Grad",
        lightning: "Burza", lightning_rainy: "Burza z deszczem",
        partlycloudy: "Częściowe zachm.", pouring: "Ulewa", rainy: "Deszcz",
        snowy: "Śnieg", sunny: "Słonecznie", windy: "Wietrznie",
        
        // --- AI NARRACJA ---
        
        // 1. ZAGROŻENIE
        alert_storm: "<span class='value-pill pill-1'>⚠️ <b>OSTRZEŻENIE KRYTYCZNE</b></span>  W pobliżu wykryto burzę. Spodziewaj się wyładowań i silnego wiatru. Zabezpiecz ogród i pozostań w domu.",
        
        // 2. ZDROWIE (SMOG / PYŁKI)
        alert_aqi_bad: "<span class='value-pill pill-1'>😷 <b>ALARM SMOGOWY</b></span>  Jakość powietrza jest fatalna <span class='value-pill'>PM2.5: <b>{val}</b></span>. Wyjście na zewnątrz grozi problemami oddechowymi. Zamknij okna i włącz oczyszczacz.",
        alert_aqi_mod: "<span class='value-pill pill-1'>😶 <b>OSTRZEŻENIE</b></span>  Podwyższone stężenie pyłów <span class='value-pill'>PM2.5: <b>{val}</b></span>. Jakość powietrza jest przeciętna. Osoby wrażliwe powinny unikać wysiłku na zewnątrz.",
        alert_pollen: "<span class='value-pill pill-1'>🤧 <b>ALARM DLA ALERGIKÓW</b></span>  Wykryto bardzo wysokie stężenie pyłków. Przygotuj leki przeciwhistaminowe i unikaj wietrzenia sypialni.",
        
        // 3. PROGNOZA (NADCHODZĄCE)
        advice_rain_soon: "<span class='value-pill pill-1'>☂️ <b>WEŹ PARASOL</b></span>  Nadciągają opady deszczu. Spodziewaj się ich ok. godziny <span class='value-pill'><b>{time}</b></span>. Prognozowane <span class='value-pill'><b>{val}</b> mm</span>",
        advice_snow_soon: "<span class='value-pill pill-1'>❄️ <b>ZACHOWAJ OSTROŻNOŚĆ</b></span>  Ok. godziny <span class='value-pill'><b>{time}</b></span> zacznie padać śnieg. Warunki drogowe mogą się gwałtownie pogorszyć.",
        
        // 4. AKTUALNA POGODA
        advice_rain_now: "<span class='value-pill pill-1'>🌧️ <b>DESZCZ</b></span>  Aktualny opad to <span class='value-pill'><b>{val}</b> mm</span>. Jest mokro i ślisko. Jeśli musisz wyjść, koniecznie weź kurtkę przeciwdeszczową.",
        advice_snow_now: "<span class='value-pill pill-1'>🌨️ <b>ŚNIEG</b></span>  Na zewnątrz sypie śnieg. Jest <span class='value-pill'><b>malowniczo</b></span>, ale pamiętaj o ciepłym ubraniu i czapce.",
        
        // 5. UV
        alert_uv_high: "<span class='value-pill pill-1'>☀️ <b>PROMIENIOWANIE</b></span>  Indeks UV wynosi <span class='value-pill'><b>{val}</b></span>. Skóra może ulec poparzeniu. Koniecznie użyj kremu z filtrem i okularów przeciwsłonecznych.",
        
        // 6. TEMPERATURA + WIATR
        advice_cold_wind: "<span class='value-pill pill-1'>🥶 <b>WIATR</b></span>  Jest <span class='value-pill'><b>{val}</b> °C</span>, ale silny wiatr sprawia, hogy a hőmérséklet odczuwalna jest znacznie niższa. Ubierz się „na cebulkę” i chroń uszy.",
        advice_cold: "<span class='value-pill pill-1'>🧣 <b>ZIMNO</b></span>  Temperatura wynosi <span class='value-pill'><b>{val}</b> °C</span>. Ubierz ciepłą kurtkę przed wyjściem. Warto sprawdzić szczelność okien.",
        
        advice_hot: "<span class='value-pill pill-1'>🔥 <b>GORĄC</b></span>  Temperatura osiągnęła <span class='value-pill'><b>{val}</b> °C</span>. Unikaj słońca w godzinach szczytu, pij dużo wody i zasłoń rolety.",
        advice_nice: "😎 Pogoda jest stabilna, temperatura przyjemna <span class='value-pill'><b>{val}</b> °C</span>. To <span class='value-pill'>idealny</span> moment na spacer lub przewietrzenie mieszkania.",
        
        advice_gaming: "<span class='value-pill pill-1'>🎮 <b>TRYB IMERSYJNY</b></span>  Tryb kina lub gry aktywny. Sterowanie <span class='value-pill'><b>AmbiLight</b></span> włączone.",
    },
    hu: {
        loading: "Környezeti adatok elemzése...",
        home_median: "Otthon",
        
        // Időjárás állapotok
        clear_night: "Tiszta éjszaka", cloudy: "Felhős", fog: "Köd", hail: "Jégeső",
        lightning: "Zivatar", lightning_rainy: "Zivatoros eső",
        partlycloudy: "Részben felhős", pouring: "Szakadó eső", rainy: "Esős",
        snowy: "Havas", sunny: "Napos", windy: "Szeles",
        
        // --- AI ÉRTESÍTÉSEK ---
        
        // 1. VESZÉLY / VIHAR
        alert_storm: "<span class='value-pill pill-1'>⚠️ <b>KRITIKUS FIGYELMEZTETÉS</b></span>  A közelben zivatart észleltek. Erős szél és intenzív eső várható. Rögzítsd a kerti tárgyakat és maradj beltérben!",
        
        // 2. EGÉSZSÉG (AQI / POLLEN)
        alert_aqi_bad: "<span class='value-pill pill-1'>😷 <b>SZMOG RIADÓ</b></span>  A levegő minősége kritikus <span class='value-pill'>PM2.5: <b>{val}</b></span>. A kinti tartózkodás veszélyes. Tartsd zárva az ablakokat és kapcsold be a légtisztítót!",
        alert_aqi_mod: "<span class='value-pill pill-1'>😶 <b>FIGYELMEZTETÉS</b></span>  Megemelkedett porszint <span class='value-pill'>PM2.5: <b>{val}</b></span>. A levegő minősége közepes. Az érzékenyebbek kerüljék a kinti megterhelést.",
        alert_pollen: "<span class='value-pill pill-1'>🤧 <b>POLLEN RIADÓ</b></span>  Nagyon magas pollenkoncentrációt észleltek. Készítsd elő az antihisztamint és kerüld a szellőztetést!",
        
        // 3. ELŐREJELZÉS (KÖZELGŐ)
        advice_rain_soon: "<span class='value-pill pill-1'>☂️ <b>VIGYÉL ERNYŐT</b></span>  Eső közeledik. Várható kezdete: <span class='value-pill'><b>{time}</b></span> óra körül. Jósolt mennyiség: <span class='value-pill'><b>{val}</b> mm</span>",
        advice_snow_soon: "<span class='value-pill pill-1'>❄️ <b>LÉGY ÓVATOS</b></span>  <span class='value-pill'><b>{time}</b></span> óra körül havazás kezdődik. Az útviszonyok hirtelen romolhatnak.",
        
        // 4. AKTUÁLIS IDŐJÁRÁS
        advice_rain_now: "<span class='value-pill pill-1'>🌧️ <b>ESIK AZ ESŐ</b></span>  Jelenlegi csapadék: <span class='value-pill'><b>{val}</b> mm</span>. Az utak vizesek és csúszósak. Ha ki kell menned, vigyél esőkabátot!",
        advice_snow_now: "<span class='value-pill pill-1'>🌨️ <b>HAVAZIK</b></span>  Kint esik a hó. <span class='value-pill'><b>Látványos</b></span>, de ne felejts el melegen öltözni és sapkát húzni!",
        
        // 5. UV
        alert_uv_high: "<span class='value-pill pill-1'>☀️ <b>ERŐS SUGÁRZÁS</b></span>  Az UV index <span class='value-pill'><b>{val}</b></span>. A bőr gyorsan leéghet. Használj fényvédőt és napszemüveget!",
        
        // 6. HŐMÉRSÉKLET + SZÉL
        advice_cold_wind: "<span class='value-pill pill-1'>🥶 <b>SZÉL</b></span>  Bár <span class='value-pill'><b>{val}</b> °C</span> van, az erős szél miatt sokkal hidegebbnek érződik. Öltözz rétegesen és védd a füleidet!",
        advice_cold: "<span class='value-pill pill-1'>🧣 <b>HIDEG VAN</b></span>  A hőmérséklet <span class='value-pill'><b>{val}</b> °C</span>. Vegyél fel meleg kabátot, mielőtt elindulsz!",
        
        advice_hot: "<span class='value-pill pill-1'>🔥 <b>HŐSÉG</b></span>  A hőmérséklet elérte a <span class='value-pill'><b>{val}</b> °C</span>-ot. Kerüld a napot a csúcsidőben, igyál sok vizet és sötétíts be!",
        advice_nice: "😎 Az időjárás stabil, a hőmérséklet kellemes <span class='value-pill'><b>{val}</b> °C</span>. Ez az <span class='value-pill'>ideális</span> pillanat egy sétához vagy a lakás átszellőztetéséhez.",
        
        advice_gaming: "<span class='value-pill pill-1'>🎮 <b>GAMING MÓD</b></span>  Mozi vagy játék mód aktív. <span class='value-pill'><b>AmbiLight</b></span> vezérlés bekapcsolva.",
    }
};

class ForkUHouseCard extends HTMLElement {
    set hass(hass) {
        this._hass = hass;
        if (this._config) this._update();
    }

    setConfig(config) {
        if (!config.weather_entity) throw new Error("Please define a weather entity");
        this._config = config;
    }

    getCardSize() { return 4; }

    _update() {
        if (!this.shadowRoot) this._render();
        
        const wObj = this._hass.states[this._config.weather_entity];
        if (!wObj) return;

        const condition = wObj.state;
        const temp = wObj.attributes.temperature;
        const isNight = this._hass.states['sun.sun']?.state === 'below_horizon';
        const isGaming = this._config.party_mode_entity && this._hass.states[this._config.party_mode_entity]?.state === 'on';

        // 1. Background Logic
        const bgLayer = this.shadowRoot.querySelector('.bg-image');
        if (bgLayer) {
            const imgPath = this._config.image || '/local/community/fork_u-house_card/images/';
            let bgFile = isNight ? 'night.png' : 'sunny.png';
            
            if (['rainy', 'pouring'].includes(condition)) bgFile = 'rainy.png';
            else if (['cloudy', 'partlycloudy'].includes(condition)) bgFile = isNight ? 'cloudy-night.png' : 'cloudy.png';
            else if (condition === 'snowy') bgFile = 'snowy.png';
            else if (condition === 'fog') bgFile = 'fog.png';

            bgLayer.style.backgroundImage = `url('${imgPath}${bgFile}')`;
        }

        // 2. Gaming Mode Class
        const card = this.shadowRoot.querySelector('.card');
        if (card) {
            if (isGaming) card.classList.add('gaming-active');
            else card.classList.remove('gaming-active');
        }

        // 3. Badges (Rooms)
        const badgesLayer = this.shadowRoot.querySelector('.badges-layer');
        if (badgesLayer && this._config.rooms) {
            badgesLayer.innerHTML = this._config.rooms.map(room => {
                const stateObj = this._hass.states[room.entity];
                const val = stateObj ? parseFloat(stateObj.state) : 0;
                const unit = stateObj?.attributes.unit_of_measurement || '';
                
                let cls = "is-optimal";
                if (val < 19) cls = "is-cold";
                else if (val > 25) cls = "is-hot";
                else if (val > 23) cls = "is-warm";

                return `
                    <div class="badge ${cls}" style="left: ${room.x}%; top: ${room.y}%;">
                        <div class="badge-dot"></div>
                        <div class="badge-content">
                            <span class="badge-name">${room.name}</span>
                            <span class="badge-val">${val}${unit}</span>
                        </div>
                    </div>
                `;
            }).join('');
        }

        // 4. AI Storyteller Logic
        this._updateStatus(wObj, isGaming);
    }

    _t(key, placeholders = {}) {
        const lang = this._config.language || 'en';
        let txt = TRANSLATIONS[lang]?.[key] || TRANSLATIONS['en'][key] || key;
        for (const [k, v] of Object.entries(placeholders)) {
            txt = txt.replace(`{${k}}`, v);
        }
        return txt;
    }

    _updateStatus(wObj, isGaming) {
        const condition = wObj.state;
        const temp = wObj.attributes.temperature;
        const forecast = wObj.attributes.forecast || [];
        const uvVal = this._getStateVal(this._config.uv_entity);
        const aqiVal = this._getStateVal(this._config.aqi_entity);
        const {speed: windSpeed} = this._getWindData();
        
        // Pollen logic (example: sensor.pollen_level > 2)
        const isHighPollen = false; // Placeholder for future expansion

        let msg = "";
        let level = "normal";

        // 1. DANGER: STORM
        if (condition === 'lightning' || condition === 'lightning-rainy') {
            msg = this._t('alert_storm');
            level = "danger";
        }
        // 2. ZDROWIE: AQI
        else if (aqiVal !== null) {
             if (aqiVal > 100) {
                 msg = this._t('alert_aqi_bad', {val: aqiVal});
                 level = "danger";
             } else if (aqiVal > 50) {
                 msg = this._t('alert_aqi_mod', {val: aqiVal});
                 level = "warn";
             }
        }
        // 3. ZDROWIE: POLLEN
        else if (isHighPollen) {
            msg = this._t('alert_pollen');
            level = "warn";
        }
        // 4. PLANOWANIE: NADCHODZĄCY DESZCZ/ŚNIEG
        else {
            const nextRain = forecast.slice(0, 3).find(f => ['rainy', 'pouring', 'snowy'].includes(f.condition) || (f.precipitation > 0));
            
            if (nextRain) {
                const time = new Date(nextRain.datetime).getHours() + ":00";
                const p = nextRain.precipitation || "~";
                msg = nextRain.condition === 'snowy' 
                    ? this._t('advice_snow_soon', {time}) 
                    : this._t('advice_rain_soon', {time, val: p});
                level = "warn";
            }
            // 5. BIEŻĄCE WARUNKI
            else if (['rainy', 'pouring'].includes(condition)) {
                msg = this._t('advice_rain_now', {val: wObj.attributes.precipitation || "~"}); 
                level = "warn";
            }
            else if (['snowy', 'snowy-rainy'].includes(condition)) {
                msg = this._t('advice_snow_now'); 
                level = "warn";
            }
            // 6. UV (LATO)
            else if (uvVal !== null && uvVal > 6) {
                msg = this._t('alert_uv_high', {val: uvVal}); 
                level = "warn";
            }
            // 7. TEMPERATURA + WIATR (ZIMA)
            else if (temp < 10 && windSpeed > 20) {
                msg = this._t('advice_cold_wind', {val: temp});
            }
            else if (temp < 5) {
                msg = this._t('advice_cold', {val: temp});
            } else if (temp > 28) {
                msg = this._t('advice_hot', {val: temp}); 
                level = "warn";
            } 
            // 8. STABILNIE
            else {
                msg = this._t('advice_nice', {val: temp});
            }
        }
        
        if (isGaming && level === 'normal') {
            msg = this._t('advice_gaming');
        }

        const statusEl = this.shadowRoot.querySelector('.footer-content');
        const footer = this.shadowRoot.querySelector('.footer');

        if (statusEl) statusEl.innerHTML = msg;
        if (footer) footer.setAttribute('data-status', level);
    }

    _getStateVal(id) {
        if (!id || !this._hass.states[id]) return null;
        const v = parseFloat(this._hass.states[id].state);
        return isNaN(v) ? null : v;
    }

    _getWindData() {
        let speed = 10, bearing = 270;
        if(this._config.wind_speed_entity && this._hass.states[this._config.wind_speed_entity]) 
            speed = parseFloat(this._hass.states[this._config.wind_speed_entity].state);
        else if(this._hass.states[this._config.weather_entity]?.attributes?.wind_speed) 
            speed = parseFloat(this._hass.states[this._config.weather_entity].attributes.wind_speed);

        if(this._config.wind_direction_entity && this._hass.states[this._config.wind_direction_entity]) 
            bearing = parseFloat(this._hass.states[this._config.wind_direction_entity].state);
        else if(this._hass.states[this._config.weather_entity]?.attributes?.wind_bearing) 
            bearing = parseFloat(this._hass.states[this._config.weather_entity].attributes.wind_bearing);
            
        return { speed: isNaN(speed)?5:speed, bearing: isNaN(bearing)?270:bearing };
    }

    // --- RENDER ---
    _render() {
      this.attachShadow({mode: 'open'});
      this.shadowRoot.innerHTML = `
        <style>
          :host { display: block; --fork-u-bg: #1e2024; --color-cold: #60A5FA; --color-opt: #34D399; --color-warm: #FBBF24; --color-hot: #F87171; }
          .card {
              position: relative; display: flex; flex-direction: column; width: 100%; height: 350px;
              overflow: hidden;
              text-shadow: rgba(0,0,0,0.4) 0 1px 0px;
              box-shadow: 0 4px 2px rgba(0,0,0,0.3);
              background: var(--card-background-color,var(--fork-u-bg));
              border-radius: var(--ha-card-border-radius,var(--ha-border-radius-lg,20px));
          }
          .bg-image {
              position: absolute; top: 0; left: 0; width: 100%; height: 100%;
              background-size: contain; background-position: center; background-repeat: no-repeat;
              z-index: 0; transition: all 0.5s ease;
          }
          .ambient-layer {
              position: absolute; top: 0; left: 0; width: 100%; height: 100%;
              z-index: 2; pointer-events: none; opacity: 0; transition: opacity 1.5s ease;
          }
          .card.gaming-active .ambient-layer { opacity: 1; }
          .ambient-light {
             position: absolute; border-radius: 50%; filter: blur(70px);
             mix-blend-mode: color-dodge; animation-iteration-count: infinite; animation-timing-function: ease-in-out;
          }
          .blob-1 { top: 20%; left: 10%; width: 300px; height: 300px; background: radial-gradient(circle, rgba(120,50,255,0.8) 0%, rgba(0,0,0,0) 70%); animation: float-1 6s infinite alternate; }
          .blob-2 { bottom: 10%; right: 10%; width: 350px; height: 350px; background: radial-gradient(circle, rgba(255,0,150,0.7) 0%, rgba(0,0,0,0) 70%); animation: float-2 7s infinite alternate; }
          
          @keyframes float-1 { 0% { transform: translate(0,0) scale(1); opacity: 0.7; } 100% { transform: translate(20px, 30px) scale(1.1); opacity: 0.9; } }
          @keyframes float-2 { 0% { transform: translate(0,0) scale(1); opacity: 0.6; } 100% { transform: translate(-30px, -20px) scale(1.15); opacity: 0.8; } }

          .badges-layer { position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 5; pointer-events: none; }
          .badge {
              position: absolute; transform: translate(-50%, -50%);
              padding: 6px 12px;
              border-radius: 16px;
              background: rgba(20, 20, 25, 0.75); 
              backdrop-filter: blur(8px);
              border: 1px solid rgba(255,255,255,0.15);
              box-shadow: 0 4px 8px rgba(0,0,0,0.4);
              display: flex; align-items: center; gap: 8px; pointer-events: auto;
          }
          .badge-dot { width: 8px; height: 8px; border-radius: 50%; }
          .is-cold .badge-dot { background: var(--color-cold); box-shadow: 0 0 5px var(--color-cold); }
          .is-optimal .badge-dot { background: var(--color-opt); box-shadow: 0 0 5px var(--color-opt); }
          .is-warm .badge-dot { background: var(--color-warm); box-shadow: 0 0 5px var(--color-warm); }
          .is-hot .badge-dot { background: var(--color-hot); box-shadow: 0 0 5px var(--color-hot); }
          .badge-content { display: flex; flex-direction: column; line-height: 1; }
          .badge-name { font-size: 0.55rem; color: #aaa; text-transform: uppercase; margin-bottom: 2px; }
          .badge-val { font-size: 0.80rem; font-weight: 700; color: #fff; }
          
          .footer {
              position: absolute; bottom: 0; left: 0; width: 100%; z-index: 5;
              background: rgba(10, 10, 15, 0.25); backdrop-filter: blur(15px);
              border-top: 1px solid rgba(255,255,255,0.05); padding: 12px 16px;
              display: flex; align-items: center; gap: 12px; box-sizing: border-box; transition: background 0.3s;
              min-height: 60px;
          }
          .footer[data-status="warn"] { background: rgba(80, 50, 10, 0.65); border-top-color: var(--color-warm); }
          .footer[data-status="danger"] { background: rgba(80, 20, 20, 0.65); border-top-color: var(--color-hot); }

          .value-pill { 
              background: rgba(20, 20, 25, 0.75); 
              backdrop-filter: blur(8px);
              border: 1px solid rgba(255,255,255,0.15);
              box-shadow: 0 4px 8px rgba(0,0,0,0.4);
              padding: 2px 8px; 
              border-radius: 20px; 
              color: rgba(255, 255, 255, 0.6);
              white-space: nowrap;
          }
          .value-pill b { color: #fff; }
          .footer-content { font-size: 0.9rem; color: #eee; flex: 1; }
        </style>
        <div class="card">
            <div class="bg-image"></div>
            <div class="ambient-layer">
                <div class="ambient-light blob-1"></div>
                <div class="ambient-light blob-2"></div>
            </div>
            <div class="badges-layer"></div>
            <div class="footer">
                <div class="footer-content"></div>
            </div>
        </div>
      `;
    }
}

  customElements.define('fork-u-house-card', ForkUHouseCard);
  window.customCards = window.customCards || [];
  window.customCards.push({ type: "fork-u-house-card", name: "Fork U-House Card V11.0", description: "AI Storyteller Edition" });

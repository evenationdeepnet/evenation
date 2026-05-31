/* E.V.E.N Radio
   Standalone JavaScript for /radio/radio.html
*/

const stations = {
  glitchwave: {
    name: "Glitchwave FM",
    shortName: "Glitchwave",
    subtitle: "EDM // drum and bass // melodic techno",
    description: "Fast relay music for tunnel runners, midnight coders, and anyone pretending the bassline is a survival strategy.",
    status: "high-energy relay",
    tracks: [
      {
        title: "Run Until Morning",
        artist: "VOLT//SAINT",
        album: "Runners",
        tag: "melodic techno",
        source: "Relay 18A",
        duration: "6:00",
        mood: "momentum",
        src: "../radio/glitchwavefm/Run_Until_Morning.mp3",
      },
      {
        title: "Right Here in the Light",
        artist: "CIRCUITFLOWER",
        album: "Liquid Ghosts",
        tag: "liquid drum and bass",
        source: "Lower East Tunnel",
        duration: "3:21",
        mood: "rain bass / soft speed",
        src: "../radio/glitchwavefm/Right_Here_in_the_Light.mp3",
      },
      {
        title: "Underwave",
        artist: "Ash Memory",
        album: "Packet Loss Romance",
        tag: "EDM bootleg",
        source: "Scrap Gardens",
        duration: "4:36",
        mood: "club static / stolen voltage",
        src: "../radio/glitchwavefm/Underwave.mp3",
      },
             {
        title: "Sector Echo",
        artist: "LOWLIGHT KIDS",
        album: "Hearts on Fire",
        tag: "Liquid drum and bass",
        source: "Light Well 35",
        duration: "3:24",
        mood: "energetic, chill",
        src: "../radio/glitchwavefm/Sector_Echo.mp3",
      },
      {
        title: "Ghost Voltage",
        artist: "HEX",
        album: "Bad Angel",
        tag: "industrial techno",
        source: "Relay 14",
        duration: "3:24",
        mood: "industrial, thumpy",
        src: "../radio/glitchwavefm/Ghost_Voltage.mp3",
      },
    {
        title: "Satellite Rain",
        artist: "Nova Sleep",
        album: "Gardens",
        tag: "edm, trance",
        source: "Relay 2",
        duration: "3:09",
        mood: "dreamy",
        src: "../radio/glitchwavefm/Satellite_Rain.mp3",
      },
    ],
  },

  ghostlines: {
    name: "Ghostlines Broadcast",
    shortName: "Ghostlines",
    subtitle: "rebel pop // tunnel favourites",
    description: "The main pirate channel. Accessible enough for the surface to hum along, dangerous enough for NuYu to notice.",
    status: "public-facing signal",
    tracks: [
      {
        title: "Teethmarks",
        artist: "E.V.E.N",
        album: "Foundations",
        tag: "alt-rock, alternative pop",
        source: "Relay 7B",
        duration: "4:47",
        mood: "cinematic",
        src: "../radio/ghostlinesbroadcast/Teethmarks.mp3",
      },
      {
        title: "After the Party",
        artist: "Nyelle",
        album: "Bootleg Transfer",
        tag: "alt-pop",
        source: "private relay",
        duration: "2:41",
        mood: "introspective",
        src: "../radio/ghostlinesbroadcast/After_the_Party.mp3",
      },
      {
        title: "Sleep on the Skytrain Home",
        artist: "Glass Youth",
        album: "Distance",
        tag: "archival cut",
        source: "Echo Hole",
        duration: "3:06",
        mood: "movement, light",
        src: "../radio/ghostlinesbroadcast/Sleep_on_the_Skytrain_Home.mp3",
      },
             {
        title: "Skyscrapers",
        artist: "Hollow Avenue",
        album: "Citylife",
        tag: "indie, electronic",
        source: "Topside",
        duration: "3:04",
        mood: "emotionally uplifting",
        src: "../radio/ghostlinesbroadcast/Skyscrapers.mp3",
      },
             {
        title: "Your Presence",
        artist: "Lunei II",
        album: "When Tomorrow Comes",
        tag: "leaked signal",
        source: "Topside",
        duration: "3:01",
        mood: "introspective, lonely",
        src: "../radio/ghostlinesbroadcast/Your_Presence.mp3",
      },
             {
        title: "The Weight of Rooms",
        artist: "E.V.E.N",
        album: "Foundations",
        tag: "alt-rock",
        source: "Relay 7B",
        duration: "3:06",
        mood: "emotional, irrevocable",
        src: "../radio/ghostlinesbroadcast/The_Weight_of_Rooms.mp3",
      },
             {
        title: "Submerged",
        artist: "Waltz Lens",
        album: "Faithful",
        tag: "chillstep",
        source: "Topside",
        duration: "2:36",
        mood: "drifting, chill",
        src: "../radio/ghostlinesbroadcast/Submerged.mp3",
      },
             {
        title: "Burn Through",
        artist: "Nyelle",
        album: "Bootleg Transfer",
        tag: "alt-pop",
        source: "private relay",
        duration: "3:27",
        mood: "emotionally explosive",
        src: "../radio/ghostlinesbroadcast/Burn_Through.mp3",
      },
             {
        title: "Runaway Lights",
        artist: "Shoal",
        album: "We Are All That's Left",
        tag: "synth-pop",
        source: "Relay 16D",
        duration: "3:32",
        mood: "uplifting",
        src: "../radio/ghostlinesbroadcast/Runaway_Lights.mp3",
      },
             {
        title: "Nefarious Maze",
        artist: "L2",
        album: "Cuts",
        tag: "progressive rap",
        source: "Topside",
        duration: "2:13",
        mood: "raw",
        src: "../radio/ghostlinesbroadcast/Nefarious_Maze.mp3",
      },
            {
        title: "Light Wells",
        artist: "Silent Cartographers",
        album: "The Last Warm Thing",
        tag: "post-rock",
        source: "Relay 22",
        duration: "4:48",
        mood: "atmospheric, cinematic",
        src: "../radio/ghostlinesbroadcast/LightWells.mp3",
      },

            {
        title: "Zoo",
        artist: "Wrong Ideas Club",
        album: "Predictable Weather",
        tag: "pop-punk",
        source: "Relay 13",
        duration: "3:48",
        mood: "upbeat, off the wall",
        src: "../radio/ghostlinesbroadcast/Zoo.mp3",
      },

           {
        title: "Out of Order (But Thinking of You)",
        artist: "The Static Hearts",
        album: "Machine Language",
        tag: "pop-punk",
        source: "Light Well 32",
        duration: "3:08",
        mood: "upbeat, absurd",
        src: "../radio/ghostlinesbroadcast/Out_of_Order.mp3",
      },
    ],
  },

  subculture: {
    name: "Subculture",
    shortName: "Subculture",
    subtitle: "darkwave // experimental // Signal Chapel favourites",
    description: "Stranger songs for the ones who meet under broken stained glass and call distortion a devotional practice.",
    status: "chapel-approved weirdness",
    tracks: [
      {
        title: "Night Religion",
        artist: "Mothbyte",
        album: "Low Light Saints",
        tag: "darkwave, gothic post-punk",
        source: "Signal Chapel 12",
        duration: "3:54",
        mood: "sinuous, melancholic",
        src: "../radio/subculture/Night_Religion.mp3",
      },
      {
        title: "No Saints Below",
        artist: "Velvet Ache",
        album: "Underpass Gospel",
        tag: "darkwave",
        source: "Signal Chapel 8",
        duration: "3:44",
        mood: "hypnotic",
        src: "../radio/subculture/No_Saints_Below.mp3",
      },
      {
        title: "Rain Between Buildings",
        artist: "VANTA",
        album: "Pretty System Failure",
        tag: "darkwave",
        source: "Light Well 6",
        duration: "3:23",
        mood: "hypnotic",
        src: "../radio/subculture/Rain_Between_Buildings.mp3",
      },
             {
        title: "Teeth Under Neon",
        artist: "Black Velvet Casino",
        album: "Beautiful Things Break Quietly",
        tag: "darkwave, cybervampires",
        source: "Relay 39",
        duration: "4:21",
        mood: "seductive, threatening",
        src: "../radio/subculture/Teeth_Under_Neon.mp3",
      },
                    {
        title: "Ghosts Don't Sleep",
        artist: "Lux Noir",
        album: "Come Closer, Signal Lost",
        tag: "darkwave, ebm",
        source: "Relay 18",
        duration: "3:32",
        mood: "atmospheric, ethereal",
        src: "../radio/subculture/Ghosts_Dont_Sleep.mp3",
      },
       {
        title: "Cathedral Cinema",
        artist: "MOURNING TV",
        album: "Pretty Little Catastrophe",
        tag: "darkwave, post-punk",
        source: "Signal Chapel 5",
        duration: "4:48",
        mood: "atmospheric, hypnotic",
        src: "../radio/subculture/Cathedral_Cinema.mp3",
      },
      {
        title: "Silver Tongue",
        artist: "Mothbyte",
        album: "Low Light Saints",
        tag: "darkwave, post-punk",
        source: "Signal Chapel 5",
        duration: "3:57",
        mood: "hypnotic, dangerous",
        src: "../radio/subculture/SilverTongue.mp3",
      },
       
    ],
  },
};

const bulletins = [
  "02:14 UTC // KAIRO says the left speaker is haunted but only during bridges.",
  "01:32 UTC // ONYX has repaired the relay. Again. He is requesting fewer experiments.",
  "00:55 UTC // RAYNE uploaded a 9-second harmony loop. The tunnels went quiet after.",
  "00:06 UTC // MINJAE says this is not a fan forum. The fan forum disagrees.",
];

const state = {
  activeStationKey: "ghostlines",
  currentTrackIndex: 0,
  isPlaying: false,
  shuffle: true,
};

let audioEl = null;

function getActiveStation() {
  return stations[state.activeStationKey];
}

function getActiveTracks() {
  return getActiveStation().tracks;
}

function getCurrentTrack() {
  return getActiveTracks()[state.currentTrackIndex];
}

function iconPlay() {
  return '<span class="play-icon" aria-hidden="true"></span>';
}

function iconPause() {
  return '<span class="pause-icon" aria-hidden="true"></span>';
}

function iconHeadphones() {
  return `
    <span class="simple-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M4 13a8 8 0 0 1 16 0" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        <path d="M5 13h3v7H5a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2Z" stroke="currentColor" stroke-width="2"/>
        <path d="M19 13h-3v7h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2Z" stroke="currentColor" stroke-width="2"/>
      </svg>
    </span>
  `;
}

function iconRadio() {
  return `
    <span class="simple-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M5 8h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2Z" stroke="currentColor" stroke-width="2"/>
        <path d="M8 8 17 3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        <circle cx="8" cy="14" r="2" stroke="currentColor" stroke-width="2"/>
        <path d="M13 13h5M13 17h5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>
    </span>
  `;
}

function iconSignal() {
  return `
    <span class="simple-icon good" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M2 20h.01M7 20a5 5 0 0 0-5-5M12 20A10 10 0 0 0 2 10M17 20A15 15 0 0 0 2 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>
    </span>
  `;
}

function iconZap() {
  return `
    <span class="simple-icon pink" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M13 2 3 14h8l-1 8 11-13h-8l0-7Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
      </svg>
    </span>
  `;
}

function iconNext() {
  return `
    <span class="simple-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none">
        <path d="m5 5 10 7-10 7V5Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
        <path d="M19 5v14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>
    </span>
  `;
}

function iconShuffle() {
  return `
    <span class="simple-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M16 3h5v5M4 17h2.5c2.2 0 4-1.2 5.3-3.1l1.2-1.8C14.2 10.2 16 9 18.2 9H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16 21h5v-5M4 7h2.5c1.6 0 3 .6 4.1 1.8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </span>
  `;
}

function iconVolume() {
  return `
    <span class="simple-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M4 9v6h4l5 4V5L8 9H4Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
        <path d="M17 9.5a4 4 0 0 1 0 5M19.5 7a7.5 7.5 0 0 1 0 10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>
    </span>
  `;
}

function createBars() {
  const bars = [];

  for (let i = 0; i < 54; i += 1) {
    const height = 12 + ((i * 17) % 38);
    const delay = (i % 9) * 80;
    bars.push(`<span class="${state.isPlaying ? "is-active" : ""}" style="height:${height}px; animation-delay:${delay}ms;"></span>`);
  }

  return bars.join("");
}

function renderApp() {
  const app = document.getElementById("radio-app");

  if (!app) return;

  const activeStation = getActiveStation();
  const activeTracks = getActiveTracks();
  const track = getCurrentTrack();
  const queue = activeTracks
    .map((item, index) => ({ item, index }))
    .filter(({ index }) => index !== state.currentTrackIndex)
    .slice(0, 4);

  app.innerHTML = `
    <div class="topbar">
      <div class="topbar-inner">
        <a class="brand" href="../home.html">
          <span class="mark">E.V.E.N</span>
          <span class="tag">Encrypted Virtual Echo Network</span>
        </a>

        <nav class="nav" aria-label="Main navigation">
          <a href="../signals/">/signals</a>
          <a href="../ghost-threads.html">/ghost-threads</a>
          <a
            href="https://www.youtube.com/@EncryptedVirtualEchoNetwork"
            target="_blank"
            rel="noopener noreferrer"
            class="cta-link"
          >
            Join the broadcast
          </a>
        </nav>
      </div>
    </div>

    <div class="wrap">
      <section class="hero">
        <div class="card hero-left">
          <div class="card-inner">
            <div class="kicker"><span class="pulse"></span> Signal acquired // ${activeStation.name}</div>

            <h1><span class="glitch" data-text="E.V.E.N Radio">E.V.E.N Radio</span></h1>

            <p class="lede">${activeStation.description}</p>

            <div class="hero-actions">
              <button type="button" class="btn primary" data-action="toggle-play">
                ${state.isPlaying ? "Pause Broadcast" : "Start Broadcast"}
              </button>
              <button type="button" class="btn" data-action="next-track">Skip Signal</button>
            </div>
          </div>
        </div>

        <aside class="card hero-right">
          <div class="card-inner mini-grid">
            <div class="mini">
              <h3>Now Broadcasting // ${activeStation.shortName}</h3>
              <p class="track-title">${track.title}</p>
              <p class="track-artist">${track.artist} // ${track.album}</p>

              <div class="status">
                <span class="pill"><span class="dot good"></span> ${activeStation.status}</span>
                ${iconRadio()}
              </div>
            </div>

            <div class="mini">
              <h3>Signal Notes</h3>
              <p>source: <span style="color:rgba(120,255,255,.78)">${track.source}</span></p>
              <p>mood: <span style="color:rgba(255,90,225,.78)">${track.mood}</span></p>

              <div class="status">
                <span>${track.tag}</span>
                <span>${track.duration}</span>
              </div>
            </div>
          </div>
        </aside>
      </section>

      <section class="section">
        <div class="section-inner section-grid">
          <div>
            <div class="section-header">
              <div>
                <h2>Live Player</h2>
                <p class="sub">Click start. Pretend the tunnels have excellent Wi‑Fi. They absolutely do not.</p>
              </div>
              <span class="pill" style="font-family:var(--mono); font-size:12px;">${track.duration}</span>
            </div>

            <div class="player-shell">
              <div class="track-row">
                <button
                  type="button"
                  class="play-button"
                  data-action="toggle-play"
                  aria-label="${state.isPlaying ? "Pause broadcast" : "Start broadcast"}"
                >
                  ${state.isPlaying ? iconPause() : iconPlay()}
                </button>

                <div>
                  <p class="track-title">${track.title}</p>
                  <p class="track-artist">${track.artist}</p>
                </div>
              </div>

              <audio id="radio-audio" preload="metadata">
                <source src="${track.src}" type="audio/mpeg">
              </audio>

              <div class="radio-bars">
                ${createBars()}
              </div>

              <div class="control-row">
                <button type="button" class="tiny-btn" data-action="next-track">${iconNext()} next</button>
                <button type="button" class="tiny-btn ${state.shuffle ? "is-active" : ""}" data-action="toggle-shuffle">${iconShuffle()} shuffle</button>
                <span class="tiny-btn static">${iconVolume()} tunnel volume 74%</span>
              </div>
            </div>
          </div>

          <div>
            <h3 class="section-kicker">Up Next</h3>
            <p class="small-copy" style="margin-bottom:12px;">new artists // strange frequencies</p>

            <div class="queue-list">
              ${queue.map(({ item, index }, queueIndex) => `
                <button type="button" class="queue-item" data-track-index="${index}">
                  <div class="queue-top">
                    <span>0${queueIndex + 1} // ${item.title}</span>
                    ${iconHeadphones()}
                  </div>
                  <p class="queue-artist">${item.artist}</p>
                </button>
              `).join("")}
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="section-inner section-grid">
          <div>
            <div class="feed">
              <div class="feed-head">
                <div class="title">Station Feed</div>
                <span class="small-copy" style="font-family:var(--mono); font-size:12px;">refresh: 00:02</span>
              </div>

              <ul>
                ${bulletins.map((item) => `<li>${item}</li>`).join("")}
              </ul>
            </div>
          </div>

          <div>
            <h3 class="section-kicker">Frequency Menu</h3>

            <div class="frequency-grid">
              ${Object.entries(stations).map(([key, station]) => `
                <button
                  type="button"
                  class="frequency-btn ${state.activeStationKey === key ? "active" : ""}"
                  data-station-key="${key}"
                >
                  ${station.name}
                  <span>${station.subtitle}</span>
                </button>
              `).join("")}
            </div>

            <div class="icon-line">${iconSignal()} signal strength: ${activeStation.status}</div>
            <div class="icon-line">${iconZap()} currently tuned to ${activeStation.name}</div>
          </div>
        </div>
      </section>

      <footer class="radio-footer">
        <a href="../home.html" class="return-network-btn">Return to Network</a>

        <div class="footer-divider"></div>

        <p class="footer-signal">
          E.V.E.N // radio endpoint • integrity pending • “Thank you for listening.” — Soahn
        </p>
      </footer>
    </div>
  `;

  setupAudio();
  bindEvents();
}

function setupAudio() {
  audioEl = document.getElementById("radio-audio");

  if (!audioEl) return;

  audioEl.addEventListener("ended", nextTrack);

  if (state.isPlaying) {
    audioEl.play().catch(() => {
      state.isPlaying = false;
      renderApp();
    });
  }
}

function bindEvents() {
  document.querySelectorAll("[data-action='toggle-play']").forEach((button) => {
    button.addEventListener("click", toggleBroadcast);
  });

  document.querySelectorAll("[data-action='next-track']").forEach((button) => {
    button.addEventListener("click", nextTrack);
  });

  document.querySelectorAll("[data-action='toggle-shuffle']").forEach((button) => {
    button.addEventListener("click", () => {
      state.shuffle = !state.shuffle;
      renderApp();
    });
  });

  document.querySelectorAll("[data-station-key]").forEach((button) => {
    button.addEventListener("click", () => {
      changeStation(button.dataset.stationKey);
    });
  });

  document.querySelectorAll("[data-track-index]").forEach((button) => {
    button.addEventListener("click", () => {
      state.currentTrackIndex = Number(button.dataset.trackIndex);
      renderApp();
    });
  });
}

function toggleBroadcast() {
  if (!audioEl) return;

  if (state.isPlaying) {
    audioEl.pause();
    state.isPlaying = false;
    renderApp();
    return;
  }

  audioEl.play()
    .then(() => {
      state.isPlaying = true;
      renderApp();
    })
    .catch(() => {
      state.isPlaying = false;
      renderApp();
    });
}

function changeStation(stationKey) {
  if (!stations[stationKey]) return;

  state.activeStationKey = stationKey;
  state.currentTrackIndex = 0;
  state.isPlaying = false;

  renderApp();
}

function nextTrack() {
  const tracks = getActiveTracks();

  if (!tracks.length) return;

  if (tracks.length === 1) {
    state.currentTrackIndex = 0;
  } else if (state.shuffle) {
    let next = Math.floor(Math.random() * tracks.length);

    if (next === state.currentTrackIndex) {
      next = (next + 1) % tracks.length;
    }

    state.currentTrackIndex = next;
  } else {
    state.currentTrackIndex = (state.currentTrackIndex + 1) % tracks.length;
  }

  renderApp();
}

document.addEventListener("DOMContentLoaded", renderApp);

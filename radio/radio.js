/* E.V.E.N Radio
   Standalone JavaScript for /radio/radio.html

   To add your real tracks:
   1. Put MP3 files in the matching /music/ folder.
   2. Replace each src value with the correct path.
      Example: "../music/subculture/your-track-name.mp3"
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
        title: "Teethmarks",
        artist: "E.V.E.N",
        album: "Foundations",
        tag: "alt-rock, alternative pop",
        source: "Relay 7B",
        duration: "4:47",
        mood: "cinematic",
        src: "../music/glitchwavefm/XXX.mp3",
      },
      {
        title: "Rainline Runner",
        artist: "ASH MEMORY",
        album: "Liquid Ghosts",
        tag: "liquid drum and bass",
        source: "Lower East Tunnel",
        duration: "4:18",
        mood: "rain bass / soft speed",
        src: "../music/glitchwavefm/XXX.mp3",
      },
      {
        title: "Signal Sprint",
        artist: "LOWLIGHT SYSTEMS",
        album: "Packet Loss Romance",
        tag: "EDM bootleg",
        source: "Scrap Gardens",
        duration: "2:57",
        mood: "club static / stolen voltage",
        src: "../music/glitchwavefm/XXX.mp3",
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
        src: "../music/ghostlinesbroadcast/Teethmarks.mp3",
      },
      {
        title: "Upper Sector Heartbreak",
        artist: "NYELLE",
        album: "Bootleg Transfer",
        tag: "surface leak",
        source: "private relay",
        duration: "3:24",
        mood: "polished pop / hidden teeth",
        src: "../music/ghostlinesbroadcast/XXX.mp3",
      },
      {
        title: "Remember Me Wrong",
        artist: "E.V.E.N",
        album: "Echo Memory",
        tag: "archival cut",
        source: "Echo Hole",
        duration: "3:39",
        mood: "soft harmony / old machines",
        src: "../music/ghostlinesbroadcast/XXX.mp3",
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
        title: "Soft Error Halo",
        artist: "VANTA//GIRL",
        album: "Low Light Saints",
        tag: "darkwave",
        source: "Signal Chapel",
        duration: "3:18",
        mood: "neon grief / late-night shimmer",
        src: "../music/subculture/XXX.mp3",
      },
      {
        title: "We Were Here First",
        artist: "LOWLIGHT KIDS",
        album: "Underpass Gospel",
        tag: "ghostline experimental",
        source: "Signal Chapel",
        duration: "4:02",
        mood: "choir dust / stubborn hope",
        src: "../music/subculture/XXX.mp3",
      },
      {
        title: "Emergency Glitter Protocol",
        artist: "MOTHBYTE",
        album: "Pretty System Failure",
        tag: "experimental hyperpop",
        source: "Light Wells",
        duration: "2:23",
        mood: "spark damage / sugar static",
        src: "../music/subculture/XXX.mp3",
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
        <a class="brand" href="../index.html">
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
        <a href="../index.html" class="return-network-btn">Return to Network</a>

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

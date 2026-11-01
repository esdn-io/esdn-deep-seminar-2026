/* ESDN seminar deck — edit this file, not index.html.
   Everything here is optional; the deck runs with the defaults. */
window.DECK_CONFIG = {
  /* Live uplink demo (slide "Live uplink").
     Get a JWT: log into ThingsBoard → Security → JWT token (PE), or POST /api/auth/login.
     deviceId: the UUID of the device to watch (Devices → device → Copy Id).
     If host is empty the slide runs in simulated mode so you can rehearse offline. */
  thingsboard: {
    host: '',                 // e.g. 'https://iot.esdn.example.edu'  (no trailing slash)
    token: '',                // JWT (Bearer) token — keep this file private on your server
    deviceId: '',             // device UUID
    deviceName: 'Weather station · ECU campus',
    keys: ['temperature', 'humidity', 'battery', 'rssi'],   // telemetry keys to show as tiles
    units: { temperature: '°C', humidity: '%', battery: 'V', rssi: 'dBm', pressure: 'hPa', water_level: 'cm', ec: 'µS/cm' },
  },

  /* A public ThingsBoard dashboard URL to embed full-screen (slide "The dashboard").
     Leave empty to skip that slide. Public links look like
     https://HOST/dashboard/UUID?publicId=UUID */
  dashboardUrl: '',

  /* Background video on the title slide: a local, silent .mp4 next to this deck (works offline).
     Set to '' to turn it off. */
  titleVideo: 'media/title-bg.mp4',

  /* URL people should open on their phones for the simulator (QR code on the last slide).
     Leave empty to use the simulator next to this deck (index.html → simulator.html). */
  simulatorUrl: '',

  /* Field photo gallery (slide "In the field"). Drop files in img/field/ and list them here.
     Each entry: [filename, caption]. */
  fieldPhotos: [
    ['gal-team.jpg', 'The ESDN field crew, Hyde County, February 2025'],
    ['gal-maprig.jpg', 'Six nodes on one pole: the rig we drive around to map real LoRaWAN coverage'],
    ['gal-corn.jpg', 'Monitoring wells in the June corn, Hyde County'],
    ['gal-wading.jpg', 'Surveying a drainage canal, Hyde County'],
    ['gal-survey.jpg', 'Total-station survey of ditch cross-sections'],
    ['gal-residents.jpg', 'Talking wells and water with Hyde County residents'],
    ['gal-acoustic.jpg', 'Acoustic water-level sensor over the sound at CSI'],
    ['gal-phone.jpg', 'Field check: live readings on a phone before leaving the site'],
    ['gal-powertools.jpg', 'Station maintenance at CSI'],
    ['gal-spider.jpg', 'Found during maintenance: a resident spider inside an acoustic sensor'],
    ['gal-dog.jpg', 'Local QA/QC inspector, Hyde County'],
    ['gal-aerial1950.jpg', 'Hyde County from the air in 1950 (Roger Meekins) — the same ditches are in our data today'],
  ],
};

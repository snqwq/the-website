import Webamp from "https://unpkg.com/webamp@^2/butterchurn";
const webamp = new Webamp({
  enableMediaSession: true,
  initialTracks: [
    {
      url: "./assets/espial.mp3",
    },
  ],
});

// Returns a promise indicating when it's done loading.
webamp.renderWhenReady(document.getElementById("webamp")).then(() => {
  // webamp.play();
  // console.log('playing')
})
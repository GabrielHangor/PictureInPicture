const videoElement = document.querySelector("#video");
const button = document.querySelector("#button");

// Prompt to select media stream and pass it to the video element using the mediaDevices Web API
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => videoElement.play();
  } catch (error) {}
}

button.addEventListener("click", async () => {
  button.disabled = true;
  await videoElement.requestPictureInPicture();
  button.disabled = false;
});

// On load
selectMediaStream();

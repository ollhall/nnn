export function isVideoPlayer() {
  var dialogOpen = false,
  lastFocus,
  dialog,
  closebutton,
  player;

function showDialogWithVideoId(videoId) {
  lastFocus = document.activeElement;
  toggleDialog("show");
  if (document.getElementById("player")) {
    loadVideo(videoId);
  }
}

function hideDialog() {
  toggleDialog("hide");
  stopVideo();
}

function toggleDialog(sh) {
  dialog = document.getElementById("box");
  closebutton = document.getElementById("close");
  overlay = document.getElementById("overlay");

  if (sh === "show") {
    dialogOpen = true;

    // Show the dialog
    dialog.style.display = "block";
    overlay.style.display = "block";

    // After displaying the dialog, focus an element inside it
    closebutton.focus();

    // Only hide the background *after* you've moved focus out of the content that will be "hidden"
  } else {
    dialogOpen = false;
    dialog.style.display = "none";
    overlay.style.display = "none";
    lastFocus.focus();
  }
}

function loadVideo(videoId) {
  if (player) {
    player.destroy();
  }

  player = new YT.Player("player", {
    height: "100%",
    width: "100%",
    videoId: videoId,
    playerVars: {
      autoplay: 0, // Set autoplay to 0 (disabled)
      controls: 1,
      rel: 0,
      showinfo: 0,
    },
    events: {
      onReady: onPlayerReady,
    },
  });
}

function onPlayerReady(event) {
  // Remove the line event.target.playVideo(); to prevent autoplay
}

function stopVideo() {
  if (player) {
    player.stopVideo();
    player.destroy();
  }
}

document.addEventListener(
  "focus",
  function (event) {
    var d = document.getElementById("box");
    if (dialogOpen && !d.contains(event.target)) {
      event.stopPropagation();
      d.focus();
    }
  },
  true
);

document.addEventListener(
  "keydown",
  function (event) {
    if (dialogOpen && event.keyCode === 27) {
      toggleDialog("hide");
      stopVideo();
    }
  },
  true
);

// Проверка наличия videoId перед выполнением кода
// if (videoId) {
//   showDialogWithVideoId(videoId);
// }

}

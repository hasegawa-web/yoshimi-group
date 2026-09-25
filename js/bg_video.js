(() => {
  const video = document.querySelector(".bg-video");
  if (!video) return;

  const pc = video.dataset.srcPc;
  const sp = video.dataset.srcSp;
  if (!pc || !sp) return;

  const mq = window.matchMedia("(max-width: 640px)");
  let current = "";

  const apply = () => {
    const next = mq.matches ? sp : pc;
    if (next === current) return;
    current = next;
    video.src = next;
    const play = video.play();
    if (play && typeof play.catch === "function") play.catch(() => {});
  };

  apply();
  mq.addEventListener("change", apply);
})();

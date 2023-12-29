let cursor = document.querySelector(".cursor");
let blur = document.querySelector(".cursor_blur");
document.addEventListener("mousemove", function (dets) {
  cursor.style.left = dets.x + "px";
  cursor.style.top = dets.y + "px";
  blur.style.left = dets.x - 200 + "px";
  blur.style.top = dets.y - 200 + "px";
});

gsap.to(".nav", {
  backgroundColor: "black",
  duration: 0.5,
  height: "100px",
  scrollTrigger: {
    trigger: ".nav",
    scroller: "body",
    markers: true,
    start: "top -10%",
    end: "top -11%",
    scrub: true,
  },
});
gsap.to(".main", {
  backgroundColor: "black",
  scrollTrigger: {
    trigger: ".main",
    scroller: "body",
    markers: true,
    start: "top -30%",
    end: "top -80%",
    scrub: 2,
  },
});

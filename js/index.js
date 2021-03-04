const t1 = new TimelineMax();
const t2 = new TimelineMax();
const t3 = new TimelineMax();
const tp = new TimelineMax();
const controller = new ScrollMagic.Controller();

tp.from(".cards", 1, {
  x: "40vw",
  width: "300px",
});
t1.from("#skills", 1, {
  rotationX: 60,
  rotationY: 30,
  x: "150%",
});
t2.from("#banking", 1, {
  rotationX: 60,
  rotationY: 30,
});
t3.from("#banking_anroid", 1, {
  rotationX: 60,
  rotationY: 30,
  x: "-150%",
});
const scene = new ScrollMagic.Scene({
  triggerElement: "#trigger",
})
  .setTween(t1)
  .addTo(controller);
const scene1 = new ScrollMagic.Scene({
  triggerElement: "#trigger",
})
  .setTween(t2)
  .addTo(controller);
const scene2 = new ScrollMagic.Scene({
  triggerElement: "#trigger",
})
  .setTween(t3)
  .addTo(controller);
const scene3 = new ScrollMagic.Scene({
  triggerElement: "#trigger",
})
  .setTween(tp)
  .addTo(controller);

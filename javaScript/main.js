/*

    Hello There I'm Ichiri Imad
    If Ther is anything wrong in this template please feel free to contact me
    
    ⭐ fb: Imad Ichiri
    ⭐ insta: imad_ichiri
    ⭐ whatsApp: +212-677-628-617
    ⭐ gmail: ichiri02imad@gmail.com

*/

gsap.from("#main_header", { duration: 1, x: "-100%" });

gsap.from(".list_item", { duration: 0.8, opacity: 0, delay: 1, stagger: 0.2 });

gsap.fromTo(
  ".fade_in_btn",
  { opacity: 0 },
  { duration: 0.8, opacity: 0.8, delay: 1.8 }
);

gsap.from(".home_text", { duration: 1, x: "-200%", delay: 0.8 });

gsap.from(".home_image", { duration: 1, x: "200%", delay: 0.8 });

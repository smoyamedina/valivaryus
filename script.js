//locomotive scroll

//watch the free video on how this demo was made
// https://www.snorkl.tv/scrolltrigger-smooth-scroll/


const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".container"),
    smooth: true
  }); 
  
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);
  
// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".container", {
        scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) :    locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    // pinType: document.querySelector(".container").style.transform ? "transform" : "fixed"
});

//gsap



//---hero blobs parallax
gsap.to ('.blob-top', {
    ease: "circ.out",
    y: '-30',
    scrollTrigger: {
        scroller: '.container',
        trigger: '.hero',
        scrub: true,
        // markers: true,
        start: '40% 40%',
        end: 'bottom 50%',
        toggleActions: 'play reverse play reverse'
    }
})

gsap.to ('.blob-right', {
    ease: "circ.out",
    y: '-80',
    scrollTrigger: {
        scroller: '.container',
        trigger: '.hero',
        scrub: true,
        // markers: true,
        start: '40% 40%',
        end: 'bottom 40%',
        toggleActions: 'play reverse play reverse'
    }
})

gsap.to ('.blob-left', {
    ease: "ease",
    y: '-200',
    scrollTrigger: {
        scroller: '.container',
        trigger: '.hero',
        scrub: true,
        // markers: true,
        start: '0% 0%',
        end: '100% 30%',
        toggleActions: 'play reverse play reverse'
    }
})

gsap.to ('.hero-text', {
    ease: "circ.out",
    opacity: '0',
    // duration: 2,
    scrollTrigger: {
        scroller: '.container',
        trigger: '.hero',
        scrub: true,
        // markers: true,
        start: '40% top',
        end: '90% 20%',
        toggleActions: 'play reverse play reverse'
    }
})

//---/---ppl images anim
let tl = gsap.timeline({ease: 'circ.out', scrollTrigger: {
    scroller: '.container',
    trigger: '.hero',
    scrub: true,
    // markers: true,
    start: '50% 35%',
    end: '90% 20%',
    toggleActions: 'play reverse play reverse'
    }
})

gsap.from ('.hero-img', {
    ease:  'power4.out',
    "clipPath": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    opacity: 0,
    // y: '50',
    delay: .5,
    duration: 1.3,
    clearProps: 'all'
})

tl.to ('.hero-img', {
    // ease:  'circ.out',
    "clipPath": "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
    opacity: 0,
})
//---/---/---picA
gsap.to('.pic-a', {
    y: '-200',
    ease: 'circ.out', 
    scrollTrigger: {
        scroller: '.container',
        trigger: '.hero',
        scrub: true,
        // markers: true,
        start: '50% 50%',
        end: 'bottom 60%',
        toggleActions: 'play reverse play reverse'
        }
})

gsap.to('.pic-b', {
    y: '-45',
    ease: 'circ.out', 
    scrollTrigger: {
        scroller: '.container',
        trigger: '.hero',
        scrub: true,
        // markers: true,
        start: '50% 50%',
        end: 'bottom 60%',
        toggleActions: 'play reverse play reverse'
        }
})

gsap.to('.pic-c', {
    y: '-125',
    ease: 'circ.out', 
    scrollTrigger: {
        scroller: '.container',
        trigger: '.hero',
        scrub: true,
        // markers: true,
        start: '50% 50%',
        end: 'bottom 60%',
        toggleActions: 'play reverse play reverse'
        }
})

gsap.to('.pic-d', {
    y: '-75',
    ease: 'circ.out', 
    scrollTrigger: {
        scroller: '.container',
        trigger: '.hero',
        scrub: true,
        // markers: true,
        start: '50% 50%',
        end: 'bottom 60%',
        toggleActions: 'play reverse play reverse'
        }
})
//default container exluding things outside polygon(0 0, 100% 0, 100% 100%, 0% 100%)
//to for out from bottom polygon(0 0, 100% 0, 100% 0, 0 0)
//from for in from load polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)
// close container from right to left polygon(0 0, 0 0, 0 100%, 0% 100%)

//---ds-types anim

let typesAnimTimeline = gsap.timeline({
    ease: 'power4.out',     
    scrollTrigger: {
        trigger: '.ds-types',
        scroller: '.container',
        scrub: true,
        // markers: true,
        pin: true,
        // pinSpacing: true,
        // pinType: "fixed",
        start: 'top top',
        end: '+=100%',
        // toggleActions: 'play reverse play reverse'
    }
})    
typesAnimTimeline.to('#tris-blobs', {
    "fill": "#7F8AC3",
})
typesAnimTimeline.to('.text-tri mark', {
    "clipPath": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
}, "<")
typesAnimTimeline.to('#mosaic', {
    "fill": "#F3C471",
})
typesAnimTimeline.to('.text-mos mark', {
    "clipPath": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
}, "<")
typesAnimTimeline.to('#translocation', {
    "fill": "#F297BA",
})
typesAnimTimeline.to('.text-tlo mark', {
    "clipPath": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
}, "<")

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

//---interact w footer
gsap.to ('.dsacc', {
    ease: "circ.out",
    opacity: '0',
    scrollTrigger: {
        scroller: '.container',
        trigger: '.footer',
        // markers: true,
        start: 'top: 90%',
        end: 'bottom 95%',
        toggleActions: 'play reverse play reverse'
    }
})

gsap.to ('.header', {
    ease: "circ.out",
    opacity: '0',
    scrollTrigger: {
        scroller: '.container',
        trigger: '.footer',
        // markers: true,
        start: 'top: 90%',
        end: 'bottom 95%',
        toggleActions: 'play reverse play reverse'
    }
})
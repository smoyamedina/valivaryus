//kristian if you're reading this im sorry i just had to get this out on time aksdjhfaksdhfaskjdf


//locomotive scroll

gsap.registerPlugin(CSSRulePlugin);

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

gsap.fromTo('.ds-types-svg',{
    y: 250,
    x: -250
    }, {
    y: -250,
    x: 250,
    ease: "power2.in",
    scrollTrigger: {
        trigger: '.ds-types',
        scroller: '.container',
        // markers: true,
        scrub: true,
        start: "top bottom", 
        end:"bottom -10%",
        toggleActions: 'play reverse play reverse'
    }}, '0'
)

typesAnimTimeline.to('#tris-blobs', {
    "fill": "#7F8AC3",
}, 0)
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



let txtWallTimeline = gsap.timeline({
    ease: 'power4.out',     
    scrollTrigger: {
        trigger: '.exp-wall',
        scroller: '.container',
        scrub: .5,
        // markers: true,
        pin: true,
        // pinSpacing: false,
        // pinType: "fixed",
        start: 'top top',
        end: '+=100%',
        // toggleActions: 'play reverse play reverse'
    }
})

txtWallTimeline.to('.text-wall',{y:"-45vh"})

let wallParall = (imgDiv, start, end) => {
    gsap.fromTo(`${imgDiv}`, {
        y:`${start}`
    },{
        y: `${end}`,
        ease: 'power3.in', 
        scrollTrigger: {
            scroller: '.container',
            trigger: '.exp-wall',
            scrub: .2,
            // markers: true,
            start: 'top bottom',
            end: 'bottom top',
            toggleActions: 'play reverse play reverse'
            }
    })
}



wallParall('.linda','200', '-200')
wallParall('.jamie','300', '-300')
wallParall('.karen','600', '-600')
wallParall('.model','600', '-600')
wallParall('.isa','200', '-200')
wallParall('.fam','300', '-300')

gsap.to('.person', {
    ease: "linear",
    y: '-=350',
    immediateRender: false,
    scrollTrigger: {
        scroller: '.container',
        trigger: '.rights',
        scrub: true,
        // markers: true,
        start: 'top bottom',
        end: 'bottom top',
        toggleActions: 'play reverse play reverse'
    }
})
///---/---animated hover link with img reveal

let selectSubject = (soloName) => {
    let subjectName = soloName;
    let subjSelector = document.querySelector(`.${subjectName}`)
    let subjLinkClass = document.querySelector(`.${subjectName[0]}link`)

    let imgRevealEvent = (link, subjectClass) => {
        link.addEventListener('mouseenter', enterAnim => {
            subjectClass.classList.add("reveal")
        } )

        link.addEventListener('mouseleave', exitAnim => {
            subjectClass.classList.remove("reveal")
        } )
    }

    return imgRevealEvent(subjLinkClass, subjSelector)
}

// selectSubject('linda')
selectSubject('jamie')
selectSubject('karen')
selectSubject('isa')
selectSubject('model')
selectSubject('fam')

//---/---pin rights text and scroll thrublobs info

let rightsPinTL = gsap.timeline({
    ease: 'power4.out',     
    scrollTrigger: {
        trigger: '.rights',
        scroller: '.container',
        scrub: 1.5,
        // markers: true,
        pin: true,
        // pinSpacing: false,
        // pinType: "fixed",
        start: 'top top',
        end: '+=100%',
    }
})

rightsPinTL.to('.rights-text-contain', {
    ease: 'power4.out'
})

rightsPinTL.to('.rights-action-contain', {ease: 'linear', y: "-260vh"}, '<')

//---EXPERTS ANIMATION

let expertsTL = gsap.timeline({     
    scrollTrigger: {
        trigger: '.experts',
        scroller: '.container',
        scrub: true,
        // markers: true,
        pin: true,
        // pinSpacing: false,
        // pinType: "fixed",
        start: 'top top',
        end: '+=100%',
        // toggleActions: 'play reverse play reverse'
    }
})


expertsTL.from('.imgbg-contain', {
    // y: "50%",
    ease: "power1.out",
    "transform": "scale(1.5)",
    duration: 4,
    opacity: 0,
})
expertsTL.from('.text-wall-exp', {
    y: "150%",
    ease: "circ.out",
    duration: 2,
}, "-=1")
expertsTL.to('.imgbg-contain', {
    // y:"-50%",
    opacity: 0,
    ease: "power1.in",
    "transform": "scale(.3)",
    delay: 3,
    duration: 4,
})
expertsTL.to('.text-wall-exp', {
    y: "-150%",
    ease: "circ.in",
    duration: 2,
    // delay: .5,
}, '<')

//---FROMATOZ ANIM
const mark = document.querySelector('.atoztext span mark')

let atozTL = gsap.timeline({
    duration: 2,     
    scrollTrigger: {
        trigger: '.fromatoz',
        scroller: '.container',
        scrub: true,
        // markers: true,
        pin: true,
        // pinSpacing: false,
        // pinType: "fixed",
        start: 'top top',
        end: '+=100%',
        // toggleActions: 'play reverse play reverse'
    }
})
//default opac is .4
atozTL.from('.gfilter' , {
    "clipPath": "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
    // y: "-110%",
    opacity: 0,
    ease: "circ.out",
})
atozTL.from('.ifilter' , {
    "clipPath": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    // y: "110%",
    opacity: 0,
    ease: "circ.out",
}, '<')
atozTL.to('.gfilter' , {
    "clipPath": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    // y: "110%",
    opacity: 0,
    ease: "circ.in",
})
atozTL.to('.ifilter' , {
    "clipPath": "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
    // y: "110%",
    opacity: 0,
    ease: "circ.in",
}, '<')
atozTL.from(mark, {
    opacity: 0,
    ease: "circ.in",
    "clipPath": "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
}, "-=.75")


//shutter on top--------- polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)
//shutter open, default-- polygon(0 0, 100% 0, 100% 100%, 0% 100%)
//shutter on bottom------ polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)

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
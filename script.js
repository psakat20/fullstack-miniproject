gsap.from('.container-first .first h2',{
    x:'-400px',
    opacity:0,
    scrollTrigger:{
        trigger:'.container-first .first h2',
        scroller:'body',
        start:'top center',
        end:'+=100px',
        scrub:2,
        
    }
})
gsap.from('.circle-container .text ',{
    x:'400px',
    opacity:0,
    scrollTrigger:{
        trigger:'.circle-container .text',
        scroller:'body',
        start:'top 90%',
        end:'+=100px',
        scrub:2,
       
    }
})
gsap.from('.btn-container p ',{
    x:'-400px',
    opacity:0,
    scrollTrigger:{
        trigger:'.btn-container p',
        scroller:'body',
        start:'top 90%',
        end:'+=100px',
        scrub:2,
    
    }
})
gsap.from('.btn-container button',{
    x:'200px',
    opacity:0,
    scrollTrigger:{
        trigger:'.btn-container button',
        scroller:'body',
        start:'top 90%',
        end:'+=400px',
        scrub:2,
        markers:true,
    }
})


let services = [];
(async function(){
    try{
        let response = await fetch("https://semicode.tech/api/v1/l10nhouse/services");
        services = await response.json();
        $.each(services, function(index, service){
            $("#Services .row").append(`
                <div class="col-md-6 part wow ${(index % 2 == 0)? 'animate__fadeInLeft' : 'animate__fadeInRight'}" data-wow-delay="${index * 0.2}s" data-wow-duration="1s">
                   <div class="item text-center p-3">
                        <img src="./Images/${service?.icon}" alt="icon 1" class="img-fluid icon mb-3">
                        <h4 class="firstColor h5Clamp fw-bolder mb-3">${service?.title}</h4>
                        <p class="text-info-emphasis pClamp">${prepareDesc(service?.description?.slice(0, 150))}<span class="more secondColor fw-bolder" onclick="showPopupDetails(${index})">...Read More</span></p>
                    </div> 
                </div>
                `);
        });
    }catch(error){

}
})();
$(window).scroll(function(){
    let $navHeight = $("nav.navbar").outerHeight();
    $("nav.navbar").toggleClass("scrolled", window.scrollY >= $navHeight );

    $("section").each(function(index, section){
        scrollNavLink(section);
    });
});
wow = new WOW({
    animateClass: 'animated__animated',
    });
wow.init();
(async function(){
    try{
        let response = await fetch("https://semicode.tech/api/v1/l10nhouse/sectors");
        sectors = await response.json();
        $.each(sectors, function(index, sector){
            $(".sectors .row").append(`
                <div class="col-lg-3 col-sm-6 col-md-4">
                    <div class="item text-center rounded-4">
                        <img src="./Images/sec/${sector.icon}" alt="sectors image" class="img-fluid">
                        <p class="subColor pClamp rounded-2">${sector.name}</p>
                    </div>
                </div>
                `);
        });
    }catch(error){

}
})();
(async function(){
    try{
        let response = await fetch("https://semicode.tech/api/v1/l10nhouse/sectors");
        sectors = await response.json();
        $.each(sectors, function(index, sector){
            $(".sectors .row").append(`
                <div class="col-lg-3 col-sm-6 col-md-4">
                    <div class="item text-center rounded-4">
                        <img src="./Images/sec/${sector.icon}" alt="sectors image" class="img-fluid">
                        <p class="subColor pClamp rounded-2">${sector.name}</p>
                    </div>
                </div>
                `);
        });
    }catch(error){

}
})();
(async function(){
    try{
        let response = await fetch("https://semicode.tech/api/v1/l10nhouse/languages");
        languages = await response.json();
        console.log(response)
        console.log(languages)
        $.each(languages, function(index, language){
            $(".popupLanguages .Languages").append(`
                <section class="mt-4">
                    <div class="title special mb-4 w-auto text-start animate__fadeInRightBig" data-wow-duration="2s"> 
                        <h2 class="fw-semibold h4Clamp">${language.continent}</h2>
                    </div>
                    <ul class="list-unstyled">
                        ${prepareLanguages(language.languages)}
                    </ul>
                </section>
                `);
        });
    }catch(error){

}
})();
$('.owl-carousel').owlCarousel({
    loop: true,          
    margin: 10,       
    autoplay: false,   
    slideBy: 4,
    dots: true,   
    dotsEach: 3,
    items: 5,
    responsive:{
        350:{
            items:1
        },
        650:{
            items:3
        },
        850:{
            items:5
        }
    }
})






function prepareDesc(desc){
    let regex = /L10N House/gmi;
    return desc.replace(regex, `<span class="fw-bolder"><span class="firstColor">L10N</span> <span class="secondColor">House</span></span>`)
}
function showPopupDetails(index){
    let service = services[index];
    console.log(service)
    $(".popupService .body").html(`
        <h4 class="fw-bold text-center my-4 subColor">${service?.title}</h4>
        <div class="container">
            <div class="row mb-4 mb-md-0">
                <div class="col-md-6 part1 d-flex align-items-center">
                    <div class="item">
                        <p class="pClamp text-success-emphasis">${prepareDesc(service?.description)}</p>
                    </div>
                </div>
                <div class="col-md-6 part2">
                    <div class="item">
                        <img src="./Images/${service?.img}" alt="image service" class="img-fluid">
                    </div>
                </div>
            </div>
        </div>
        ${prepareSectionTitles(service.sections)}
        `);
    openPopup('popupService');
}
function prepareSectionTitles(sections){
    return sections.map(function(section){
        return `<ol class="mt-4">
                    <h4 class="subColor">${section.title}</h4>
                    ${prepareSectionPoints(section.points)}
                </ol>
                `;
    }).join("");
}
function prepareSectionPoints(points){
    return points.map(function(point){
        return `<li class="pClamp">${point}</li>`;
    }).join("");
}
function openPopup(popupName){
    $("body").css("overflow-y", 'hidden')
    if(popupName == "popupLanguages"){
        $(`.${popupName}`).fadeIn(300, function(){
            $(this).find(".box").addClass("show");
        }); 
    }else{
        $(`.${popupName}`).fadeIn(1000);
    }
}
function closePopup(popupName){
    $("body").delay(705).css("overflow-y", 'initial');
   if(popupName == "popupLanguages"){
       $(`.${popupName}`).find(".box").removeClass("show");
       $(`.${popupName}`).delay(705).fadeOut(1);
    }else{
        $(`.${popupName}`).fadeOut(500);
    }
}

/****************nav************/
function scrollNavLink(section){
    let $section = $(section),
        $sectionId = $section.attr('id'),
        $sectionTop = $section.offset().top,
        $sectionBottom = $sectionTop + $section.outerHeight(),
        $navHeight =$("nav.navbar").outerHeight();

    if (scrollY > $sectionTop - $navHeight && scrollY < $sectionBottom) {
        $(".nav-link.active").removeClass("active");
        $(`.nav-link[href='#${$sectionId}']`).addClass("active");   
    }
}
function prepareLanguages(languages){
    return languages.map(function(language){
        return `<li class="pClamp"><i class="far fa-dot-circle me-1"></i>${language}</li>`;
    }).join("");
}
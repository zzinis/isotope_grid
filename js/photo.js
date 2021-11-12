
$("body").on("click", "section .item", function(e){
    e.preventDefault();

    let imgSrc = $(this).children("a").attr("href");

    $("body").append(
        $("<div class = 'pop'>")
            .append(
                $("<img>").attr({src: imgSrc}),
                $("<span>").text("close")
            )
    )
});

$("body").on("click", "section .video", function(e){
    e.preventDefault();

    let imgSrc = $(this).children("a").attr("href");

    $("body").append(
        $("<div class = 'pop'>")
                .append(
                    $("<iframe>")
                        .attr({
                            src : "./img/frozen.mp4",
                            frameborder : 0,
                            width:"100%",
                            height:800
                        }),
                    $("<span>").text("close")    
                )
    )
});

$("body").on("click", ".pop span", function(){
    $(".pop").fadeOut(800,function(){
        $(this).remove();
    })
});
$(".menu").click(function(){
$(".target").each(function() {
    $( this ).toggleClass("change");
});
})

$(".video-element").each(function(){
    $(this).mouseenter(function(){
        this.play()
    });
    $(this).mouseout(function(){
        this.pause()
    })
})

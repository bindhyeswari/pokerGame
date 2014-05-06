$(function(){
    /*$('a.image').each(function(){
        console.log($(this).attr('href'));
        $(this).children('img').eq(0).attr('src');
    });*/

    $('a.image > img').each(function(){
        var splits = $(this).attr('src').split('/');
        console.log('curl http:' + $(this).attr('src') + ' > img/' + splits[splits.length - 1]);
    });



    $('li').children('div').each(function(){
        $(this).each()
    })
});
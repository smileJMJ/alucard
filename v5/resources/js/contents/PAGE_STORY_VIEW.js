var PAGE_STORY_VIEW;
(function(){
    var container;
    var inner;
    var makeContents;

    makeContents = function(url){
        var dir;
        var idx;
        var data;

        inner = Alucard.Dom('div').S(
            '@className', 'inner',
            '>', Alucard.Dom('button').S(
                'html', '목록',
                'click', function(){
                    PAGE_STORY_VIEW.destroy();
                    PAGE_STORY.init();
                }
            )
        );
        container = Alucard.Dom('div').S(
            '@id', 'container',
            '>', inner,
            'padding-top', 60
        );

        dir = '/story/view/';
        idx = Number(url.split(dir)[1]);
        Alucard.ajaxGet(function(d){
            data = JSON.parse(d)['story_view'];
            data.forEach(function(v, i){
                if(v.seq === idx){
                    inner.S(
                        '>', Alucard.Dom('figure').S(
                            '>', Alucard.Dom('img').S(
                                '@src', v.img,
                                '@alt', ''
                            )
                        ),
                        '>', Alucard.Dom('h2').S('html', v.tit)
                    )
                }
            });
        }, CONST.STORY_VIEW_URL());


        return container;
    };

    PAGE_STORY_VIEW = {
        init: function(url){
            var contents;

            contents = makeContents(url);

            Alucard.Dom('div').S(
                '@id', 'wrap',
                '>', contents,
                '<', 'body'
            );
        },
        destroy:function(){
            //HEADER.destroy();
            container.remove();
        }
    };
})();
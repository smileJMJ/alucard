var PAGE_STORY;
(function(){
    var container;
    var makeContents;

    // contents 생성
    makeContents = function(){
        var data;

        container = Alucard.Dom('div').S('@id', 'container');
        Alucard.ajaxGet(function(d){
            data = JSON.parse(d);

            container.S(
                // visual_slide
                '>', VISUAL_SLIDE.init(data['visual_slide']),

                //filter_area
                '>', Alucard.Dom('div').S(
                    '@className', 'filter_area',
                    '>', Alucard.Dom('div').S(
                        '@className', 'inner',
                        '>', UI.select.init(data['select1']),
                        '>', UI.select.init(data['select2']),
                        '>', UI.search.init(data['search'])
                    ),
                    'padding', '20px 0',
                    'transition', 'all .3s cubic-bezier(0.4,0.77,0.6,0.88)'
                ),

                // list_area
                '>', Alucard.Dom('div').S(
                    '@className', 'list_area',
                    '>', Alucard.Dom('div').S(
                        '@className', 'inner',
                        '>', LIST.init({
                            data: data['filterList'],
                            type: 'filter',
                            keyword: 'name',
                            col: 3,
                            cnt: 'all',
                            thumb: true,
                            hashtag: true,
                            clickCallback: function(e){
                                //ROUTER.init('PAGE_STORY_VIEW');
                                PAGE_STORY.destroy();
                                PAGE_STORY_VIEW.init(e.target.dataset.url);
                            }
                        })
                    ),
                    'padding', '4.375rem 0 4.875rem',
                    'background', '#f5f7fa'
                ),
                'padding-top', 60
            );

        }, CONST.STORY_URL());

        Alucard.Css('.filter_area::after').S('display', 'block', 'content', '""', 'clear', 'both');

        return container;
    };

    PAGE_STORY = {
        init: function(){
            var header;
            var contents;

            header = HEADER.init();
            contents = makeContents();

            Alucard.Dom('div').S(
                '@id', 'wrap',
                '>', header,
                '>', contents,
                '<', 'body'
            );
        },
        destroy: function(){
            HEADER.destroy();
            container.remove();
            VISUAL_SLIDE.destroy();
            LIST.destroy();
        }
    };
})();
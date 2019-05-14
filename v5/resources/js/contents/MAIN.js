var MAIN;
(function(){
    var wrap;

    MAIN = {
        init: function(){
            wrap = Alucard.Dom('div').S(
                '@id', 'wrap',
                '<', 'body'
            );

            Alucard.Dom('button').S(
                '@html', 'story list로 이동',
                'click', function(){
                    ROUTER.go('PAGE_STORY');
                },
                'width', 100,
                'height', 20,
                'background', '#f5f5f5',
                '<', wrap
            );

            Alucard.Dom('button').S(
                '@html', 'story view로 이동',
                'click', function(){
                    ROUTER.go('PAGE_STORY_VIEW');
                },
                'width', 100,
                'height', 20,
                'background', '#f5f5f5',
                '<', wrap
            );

            Alucard.Dom('button').S(
                '@html', 'contact로 이동',
                'click', function(){
                    ROUTER.go('PAGE_CONTACT');
                },
                'width', 100,
                'height', 20,
                'background', '#f5f5f5',
                '<', wrap
            );
        },
        destroy: function(){
            console.log('main_destroy')
            if(wrap !== undefined) wrap.dom.remove();
        }
    };
})();
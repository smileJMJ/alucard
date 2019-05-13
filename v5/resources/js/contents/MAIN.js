var MAIN;
(function(){
    var wrap;

    MAIN = {
        init: function(){
            if(Alucard.query('#wrap') !== null) Alucard.query('#wrap').dom.remove();
            wrap = Alucard.Dom('div').S(
                '@id', 'wrap',
                '<', 'body'
            );

            Alucard.Dom('button').S(
                '@html', 'story list로 이동',
                'click', function(){
                    ROUTER.init('PAGE_STORY');
                },
                'width', 100,
                'height', 20,
                'background', '#f5f5f5',
                '<', wrap
            );

            Alucard.Dom('button').S(
                '@html', 'story view로 이동',
                'click', function(){
                    ROUTER.init('PAGE_STORY_VIEW');
                },
                'width', 100,
                'height', 20,
                'background', '#f5f5f5',
                '<', wrap
            );

            Alucard.Dom('button').S(
                '@html', 'contact로 이동',
                'click', function(){
                    ROUTER.init('PAGE_CONTACT');
                },
                'width', 100,
                'height', 20,
                'background', '#f5f5f5',
                '<', wrap
            );
        },
        destroy: function(){
            var body = Alucard.query('body').dom;
            var wrap = Alucard.query('#wrap').dom;

            body.removeChild(wrap);
        }
    };
})();
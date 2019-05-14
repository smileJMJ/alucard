var PAGE_CONTACT;
(function(){
    var wrap;

    PAGE_CONTACT = {
        init: function(){
            var header;

            wrap = Alucard.Dom('div').S('@id', 'wrap', '<', 'body');
            header = HEADER.init();
            wrap.S(
                '>', header
            );
        },
        destroy:function(){
            wrap.dom.remove();
        }
    };
})();
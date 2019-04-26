var ROUTER;

(function(){
    ROUTER = {
        init: function(page){
            var self;
            self = this;

            switch(page){
                case 'PAGE_STORY':
                    PAGE_STORY.init();
                    break;

                case 'PAGE_STORY_VIEW':
                    PAGE_STORY_VIEW.init();
                    break;

                default:
                    break;
            }
        }
        /*jsLoad: function(jsFile, callback){
            Alucard.get(function(v){
                callback();
            }, jsFile);
        }*/
    };
})();
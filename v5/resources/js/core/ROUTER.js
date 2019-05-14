/*
    플로우/화면 전환 담당
*/

var ROUTER;
(function(){
    var hostname = '/study/v5';
    var status = {};
    var popState;

    ROUTER = {
        getStatus: function(page){
            switch(page){
                case ('MAIN' || '' || undefined):
                    status = {
                        name: 'MAIN',
                        url: '/index.html',
                        tit: '메인',
                        cb: function(){
                            MAIN.init();
                        }
                    };
                    break;

                case 'PAGE_STORY':
                    status = {
                        name: 'PAGE_STORY',
                        url: '/story/list',
                        tit: '성공스토리 리스트',
                        cb: function(){
                            PAGE_STORY.init();
                        }
                    };
                    break;

                case 'PAGE_STORY_VIEW':
                    status = {
                        name: 'PAGE_STORY_VIEW',
                        url: '/story/view',
                        tit: '성공스토리 콘텐츠',
                        cb: function(){
                            PAGE_STORY_VIEW.init();
                        }
                    };
                    break;

                case 'PAGE_CONTACT':
                    status = {
                        name: 'PAGE_CONTACT',
                        url: '/contact',
                        tit: '문의하기',
                        cb: function(){
                            var body = Alucard.query('body').dom;
                            var wrap = Alucard.query('#wrap').dom;
                            console.log(wrap)
                            if(wrap.length > 0) body.removeChild(wrap);

                        }
                    };
                    break;

                default:
                    break;
            }
        },
        init: function(page){
            var self = this;

            self.getStatus(page);
            if(status.url !== undefined){
                popState = false;

                window.onpopstate = function(e){
                    popState = true;
                    self.getStatus(e.state);
                    status.cb();
                }

                if(!popState){
                    history.pushState(status.name, status.tit, hostname + status.url);
                    status.cb();
                }
            }
        }
    };
})();
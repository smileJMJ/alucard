/*
    플로우/화면 전환 담당
*/

var ROUTER;
(function(){
    var hostname = 'http://localhost:63342/study/v5';
    var status = {};

    ROUTER = {
        init: function(page){
            var self;
            self = this;

            switch(page){
                case ('MAIN' || '' || undefined):
                    status = {
                        name: 'MAIN',
                        url: '/index.html',
                        tit: '메인',
                        cb: function(){
                            /*if(arguments.length > 0) MAIN.destroy();
                            else MAIN.init();*/
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
                            if(Alucard.query('#wrap') !== null) Alucard.query('#wrap').dom.remove();
                            document.write('PAGE_CONTACT');
                        }
                    };
                    break;

                default:
                    break;
            }

            if(status.url !== undefined){
                window.onpopstate = function(e){
                    //status = JSON.parse(sessionStorage.getItem(e.state));
                    ROUTER.init(e.state);
                    status.cb('destroy');
                    console.log(status)
                };

                //sessionStorage.setItem(status.name, JSON.stringify(status));
                history.pushState(status.name, status.tit, hostname + status.url);
                status.cb();
            }
        }
    };
})();
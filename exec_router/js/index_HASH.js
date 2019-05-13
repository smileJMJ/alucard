(function(){
    const root = document.querySelector('.app-root');

    function render(data){
        const json = JSON.parse(data);
        root.innerHTML = "<h1>"+json.title+"</h1><p>"+json.content+"</p>";
    }

    function renderHtml(html){
        root.innerHTML = html;
    }

    function get(url){
        return new Promise(function(resolve, reject){
            const req = new XMLHttpRequest();
            req.open('GET', url);
            req.send();

            req.onreadystatechange = function(){
                if(req.readyState === XMLRequest.DONE){
                    if(req.status === 200) resolve(req.response);
                    else reject(req.statusText);
                }
            };
        });
    }

    const routes = {
        '': function(){
            get('./data/home.json')
                .then(function(res){render(res);});
        },
        'service': function(){
            get('./data/service.json')
                .then(function(res){render(res)});
        },
        'about': function(){
            get('./data/about.html')
                .then(function(res){renderHtml(res)});
        }
    };

    function router(){
        const hash = location.hash.replace('#', '');
        (routes[hash]);
    }

    window.addEventListener('hashchange', router);          // hashchange 이벤트 작동 X
    window.addEventListener('DOMContentLoaded', router);
})();
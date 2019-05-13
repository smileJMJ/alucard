// AJAX
(function(){
    const root = document.querySelector('.app-root');
    const navigation = document.getElementById('navigation');

    function render(data){
        const json = JSON.parse(data);
        //root.innerHTML = `<h1>${json.title}</h1><p>${json.content}</p>`;
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
                if(req.readyState === XMLHttpRequest.DONE){
                    if(req.status === 200) resolve(req.response);
                    else reject(req.statusText);
                }
            }
        });
    }

    const routes = {
        'home': function(){
            get('./data/home.json')
                .then(function(res){render(res)});
        },
        'service': function(){
            get('./data/service.json')
                .then(function(res){render(res)});
        },
        'about': function(){
            get('./data/about.html')
                .then(function(res){renderHtml(res)});
        }
    }

    function router(page){
        (routes[page])(page);
    }

    navigation.addEventListener('click', function(e){
        if(!e.target || e.target.nodeName !== 'A') return;
        e.preventDefault();
        router(e.target.id);
    });

    window.addEventListener('DOMContentLoaded', function(){router('home')});
})();
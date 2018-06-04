(function(){
    function hitoko(){
        let h = '一言: 我们所度过的每个平凡的日常，也许就是连续发生的奇迹';
        let dom = document.getElementById('hitokoto')
        fetch('https://v1.hitokoto.cn/?c=a').then(response=>{
            return response.json();
        }).then(data=>{
            let text = data.hitokoto.length > 55 ? h : '一言: ' + data.hitokoto;
            dom.textContent = text;
        }).catch(e=>{
            console.log('一言获取失败： '+e)
            dom.textContent = h;
        });
    };hitoko();
}())
/*
 * @Author: Ice-Hazymoon 
 * @Date: 2018-06-04 15:41:56 
 * @Last Modified by: Ice-Hazymoon
 * @Last Modified time: 2018-06-04 16:59:35
 */
(function(){
    function hitoko(){
        let h = '—— Hitoko: 我们所度过的每个平凡的日常，也许就是连续发生的奇迹';
        let dom = document.getElementById('hitokoto');
        fetch('https://v1.hitokoto.cn/?c=e').then(response=>{
            return response.json();
        }).then(data=>{
            let text = data.hitokoto.length > 55 ? h : '—— Hitoko: ' + data.hitokoto;
            dom.textContent = text;
        }).catch(e=>{
            console.log('一言获取失败： '+e);
            dom.textContent = h;
        });
    };hitoko();

    document.getElementById('refresh-hitokoto').addEventListener('click', function(e){
        hitoko();
        this.classList.add('re');
        this.addEventListener('transitionend', function(e){
            this.classList.remove('re');
        })
    })
}())
/*
 * @Author: Ice-Hazymoon 
 * @Date: 2018-06-04 15:41:56 
 * @Last Modified by: Ice-Hazymoon
 * @Last Modified time: 2018-06-05 10:14:20
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

    function toggleClass(el, classname){
        if(el.classList.contains(classname)){
            el.classList.remove(classname)
            return false;
        }else{
            el.classList.add(classname)
            return true;
        }
    }

    document.getElementsByClassName('contact')[0].addEventListener('click', function(e){
        e.preventDefault();
        if(document.body.clientWidth < 450){
            if(toggleClass(this, 'show-c')){
                document.getElementsByClassName('m')[0].style.display="block";
                window.scrollTo(0,document.querySelector('.contact.cs').offsetTop + 55);
            }else{
                document.getElementsByClassName('m')[0].style.display="none"
            }
        }else{
            toggleClass(this, 'show-c')
        }
    })
}())
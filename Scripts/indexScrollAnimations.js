var folderOpened = false;
let folderElements;

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
    return;
}

window.addEventListener('load', function(){
    folderElements = [
        document.getElementById('folder'), document.getElementById('folder-bg')
    ];
    setInterval(() => {
        quickAnimations()
    }, 50);
})

function quickAnimations() {
    let title = document.getElementById('title').children[0];

    if (window.scrollY >= 300) {
        $('#routing').css({
            'opacity' : '1'
        });

        if (title.innerHTML != '') {
            title.innerHTML = title.innerHTML.slice(0,-1);
        } else {$('#title div').css({'display':'none'})}
        if (!folderOpened) {
            folderOpened = true;
            folderElements.forEach(element => {
                $(element).css({
                    "bottom" : '-30px',
                })
            });
            $('#folder').css({
                'transform': 'rotate(4deg) translate(-45%, 50px)'
            })
        }
    } 
    
    else if (window.scrollY < 300) {
        $('#title div').css({'display':'block'})
        $('#routing').css({
            'opacity' : '0'
        });

        if (title.innerHTML != 'shadow_aya') {
            title.innerHTML = 'shadow_aya'.slice(0, title.innerHTML.length + 1);
        }
        if (folderOpened) {
            folderOpened = false;
            $('#folder').css({
                'transform': 'rotate(0) translate(-50%, 0)'
            })
        }
        folderElements.forEach(element => {
            $(element).css({
                "bottom" : `${-100+(Math.round(window.scrollY*0.2))}px`
            })
        });
    }
}
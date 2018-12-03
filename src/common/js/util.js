let docEle = document.documentElement

// 获取元素距离页面顶部的高度
function getElementTop(ele){
    let currentTop = ele.offsetTop
    let currentParent = ele.offsetParent

    if(currentParent !== null){
        currentTop += currentParent.offsetTop
        currentParent = currentParent.offsetParent
    }

    return currentTop
}

// 图片懒加载
export function lazyLoad(imgs) {
    const scrollTop = docEle.scrollTop || document.body.scrollTop
    const clientHeight = docEle.clientHeight
    const imgsArr = [...imgs]

    imgsArr.forEach(function (img) {
        if(!img.getAttribute('data-src')){
            return
        }
        if(scrollTop + clientHeight + 50 > getElementTop(img)){
            img.src = img.getAttribute('data-src')
            img.removeAttribute('data-src')
        }
    })
}

// 上拉加载更多
export function loadMore(cb){
    let startY, endY, moveY
    let moreTips = document.getElementById('moreTips')

    let startFn = function(e){
        startY = e.touches[0].pageY
    }

    let moveFn = function (e) {
        moveY = e.changedTouches[0].pageY
        if((startY + 200) > docEle.scrollHeight && (startY - moveY) > 100){
            moreTips.style.display = 'block'
        }
    }

    let endFn = function (e) {
        endY = e.changedTouches[0].pageY
        if((startY + 200) > docEle.scrollHeight && (startY - endY) > 100){
            cb()
        }
    }

    return {
        startFn: startFn,
        moveFn: moveFn,
        endFn: endFn
    }
}

// 下拉刷新
export function loadRefresh(cb){
    let startY, endY, moveY
    let refreshTips = document.getElementById('refreshTips')

    let startFn = function(e){
        startY = e.touches[0].pageY
    }

    let moveFn = function (e) {
        moveY = e.changedTouches[0].pageY
        if(moveY - startY > 50){
            refreshTips.innerHTML = '释放刷新'
            refreshTips.style.display = 'flex'
            refreshTips.style.height = Math.min(100, moveY - startY) + 'px'
        }
    }
    
    let endFn = function (e) {
        endY = e.changedTouches[0].pageY
        if(endY - startY > 50){
            refreshTips.style.height = '40px'
            refreshTips.innerHTML = '加载中...'
            cb()
        }
    }

    return {
        startFn: startFn,
        moveFn: moveFn,
        endFn: endFn
    }
}
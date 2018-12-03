import Vue from 'vue'

export function getMovieList(start){
    const url = "https://api.douban.com/v2/movie/top250"

    let config = Object.assign({}, {
        count: 10,
        start: start
    })
    return Vue.http.jsonp(url, {params: config})

    // mock本地数据
    // const url = "/mock/beauty.json"
    // let config = Object.assign({}, {
    //     count: 10,
    //     start: start
    // })
    // return Vue.http.get(url)
}
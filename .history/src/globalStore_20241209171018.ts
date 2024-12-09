import { makeAutoObservable } from "mobx"

export class GlobalStore {
    constructor() {
        makeAutoObservable(this)

        ///主题设置
        // 从 localStorage 读取主题设置，如果没有则默认返回 dark
        this._Dark_themeState = (localStorage.getItem('theme') as 'light' | 'dark') || 'dark'
        // 初始化时设置 body 的 data-theme 属性
        document.body.setAttribute('data-theme', this._Dark_themeState)
    }
    
    // 测试用状态
    public _counter = 0

    // 主题状态
    _Dark_themeState: 'light' | 'dark' = 'dark' // 夜间/日间主题


    // 无障碍状态
    _Visually_impaired_Mode = false //视障模式
    
    // 黑暗主题设置
    public set Dark_themeState(v : 'light' | 'dark'){
        this._Dark_themeState = v
        // 设置 body 的 data-theme 属性
        document.body.setAttribute('data-theme', v)
        // 保存到 localStorage
        localStorage.setItem('theme', v)
    }
    public get Dark_themeState(){
        return this._Dark_themeState
    }

    // 测试用计数器
    public set Counter(v : number){
        this._counter = v
    }
    public get Counter() {
        return this._counter
    }

}

export const Store = new GlobalStore()
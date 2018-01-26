// 简化 console.log
const log = function() {
    console.log.apply(console, arguments)
}
// 简化 DOM 中的元素选择器，e 是 element 的缩写
const e = function(selector, s = document) {
    return s.querySelector(selector)
}
const eAll = function(selector, s = document) {
    return s.querySelectorAll(selector)
}


// 定义用于生成自定义格式当前时间的函数 now
const now = function() {
    var d = new Date()
    var nm = d.getFullYear()
    var yt = d.getMonth() + 1
    var ri = d.getDate()
    var ui = d.getHours()
    var ff = d.getMinutes()
    var mc = d.getSeconds()

    return `${nm}/${yt}/${ri} ${ui}:${ff}:${mc}`
}
// 定义点击按钮 add 时的动画
const animationAddPaper = function() {
    var h1 = e('.jumbotron > h1')
    h1.innerHTML = '添加成功！'
    h1.classList.add('tada', 'animated')
    setTimeout(`
        var h1 = e('.jumbotron > h1')
        h1.classList.remove('tada', 'animated')
        h1.innerHTML = '新创建的TODO块的名称:'
        h1.classList.add('bounceIn', 'animated')
        `, 1500)
    setTimeout(`
        var h1 = e('.jumbotron > h1')
        h1.classList.remove('bounceIn', 'animated')
        `, 2000)
}

// 定义打开页面时执行的函数 loadTodos
const loadTodos = function() {
    var todospa = e('#id-div-todospa')
    // 第一次使用时
    if (localStorage.todo == undefined) {
        localStorage.todo = "[]"
    }
    var data = JSON.parse(localStorage.todo)
    for (var i = 0; i < data.length; i++) {
        // 提取数据
        var c = data[i]
        var h = c[0]
        var t = c[1]
        var todoSectionList = c[2]
        var todoSection = listToTodoSection(todoSectionList)
        // 将 todoSection 传入 paper 后，插入 paper 到页面
        var paper = templatedPaper(t, h, todoSection)
        todospa.insertAdjacentHTML('beforeend', paper)
    }
    // 根据地址栏信息显示对应的页面，默认显示 page list
    var s = location.search
    if (s === '?page=add#') {
        showPageAdd()
        // 保存浏览记录信息，并更新 url
        var query = {
            page: 'add',
        }
        history.pushState(query, 'title', 'index.html?page=add#')
    } else {
        showPageList()
        // 保存浏览记录信息，并更新 url
        var query = {
            page: 'list',
        }
        history.pushState(query, 'title', 'index.html?page=list#')
    }

}
// 从存有 todo 信息的数组中提取出数据，返回拼接好的模板化字符串
const listToTodoSection = function(array) {
    var s = ''
    for (var i = 0; i < array.length; i++) {
        var todo = array[i]
        // 从 todo 对象中提取数据
        var c = todo.content
        var t = todo.time
        var status = todo.status
        s += templatedTodoDiv(t, c, status)
    }
    return s
}
// 定义保存 todo 的函数 saveTodos
const saveTodos = function() {
    var data = []
    var papers = eAll('.todo-paper')
    for (var i = 0; i < papers.length; i++) {
        var a = []
        var p = papers[i]
        // 分别取出 container 中的标题、时间
        var h = e('h2', p).innerHTML
        var ct = e('time', p).innerHTML
        // 取出 p 中的子元素 section
        var todoSection = e('.paper-todo-section', p)
        var list = todoSectionToList(todoSection)
        a.push(h, ct, list)
        data.push(a)
    }
    // 转换为 JSON 格式，并用 localStorage 存储
    localStorage.todo = JSON.stringify(data)
}
// 取出一个 section 中的所有 todo 信息，用数组保存并返回
// element 是一个 paper-todo-section 元素
const todoSectionToList = function(element) {
    var list = []
    var todoDivs = eAll('.div-todo', element)
    for (var i = 0; i < todoDivs.length; i++) {
        var todoDiv = todoDivs[i]
        // 取出一条 tododiv 中的信息
        var c = e('content', todoDiv).innerHTML
        var t = e('time', todoDiv).innerHTML
        var status = e('content', todoDiv).classList.contains('done')
        // 用对象保存信息
        var todo = {
            content: c,
            time: t,
            status: status,
        }
        list.push(todo)
    }
    return list
}


// 给页面左上角的两个 page 按钮绑定事件
const bindEventPageButtons = function() {
    // 用 事件委托 的方式，监听 page 按钮和 add 按钮
    document.getElementById("id-a-add").addEventListener("click", function(event) {
        const query = {
            page: 'add',
        }
        history.pushState({page: "add"}, '1', '#add')
        showPageAdd()
    })
    document.getElementById("id-a-list").addEventListener("click", function(event) {
        const query = {
            page: 'list',
        }
        history.pushState({page: "list"}, '2', '#list')
        showPageList()
    })

    // e('body').addEventListener('click', function(event) {
    //     var target = event.target
    //     // 只响应按钮部分的点击
    //     if (target.id === 'id-a-add') {
    //         const query = {
    //             page: 'add',
    //         }
    //         history.pushState(query, '1', '#add')
    //         // showPageAdd()
    //         // 保存浏览记录信息，并更新 url
    //
    //     } else if (target.id === 'id-a-list') {
    //
    //         // 保存浏览记录信息，并更新 url
    //
    //     } else if (target.id === 'id-button-add'){
    //         addPaper()
    //     }
    // })
}
// 定义点击按钮 Page Add Todo 时响应的函数 showPageAdd
const showPageAdd = function() {
    // 切换 page 按钮的 class
    e('#id-a-add').parentElement.classList.add('active')
    e('#id-a-list').parentElement.classList.remove('active')
    // 动画
    e('#id-div-todospa').classList.remove('zoomIn', 'animated')
    e('#id-div-todospa').classList.add('zoomOut', 'animated')
    e('.jumbotron').classList.remove('zoomOut', 'animated')
    e('.jumbotron').classList.add('zoomIn', 'animated')
    // 改变标题
    e('title').innerHTML = 'Todo Add'
    // 输入框自动获得焦点
    e('#id-input-add').focus()
}
// 定义点击按钮 Page Todo List 时响应的函数 showpagelist
const showPageList = function() {
    // class 相关操作
    e('#id-a-add').parentElement.classList.remove('active')
    e('#id-a-list').parentElement.classList.add('active')
    // 动画
    e('.jumbotron').classList.remove('zoomIn', 'animated')
    e('.jumbotron').classList.add('zoomOut', 'animated')
    e('#id-div-todospa').classList.remove('zoomOut', 'animated')
    e('#id-div-todospa').classList.add('zoomIn', 'animated')
    // 改变标题
    e('title').innerHTML = 'Todo List'
}


// 通过 事件委托 为 Paper 中的三个按钮绑定事件
const bindEventPaperButtons = function() {
    // 给 Paper 父元素 id-div-todospa 添加 事件委托
    e('#id-div-todospa').addEventListener('click', function(event) {
        var target = event.target
        // Paper 中的三个按钮 Update Done Del，分别对应各自的响应函数
        // Update 按钮会在 Update 和 Submit 之间切换
        // Done 按钮会在 Done 和 unDone 之间切换
        var list = target.classList
        if (list.contains('glyphicon-pencil')) {
            update(target)
        } else if (list.contains('glyphicon-remove')) {
            done(target)
        } else if (list.contains('glyphicon-trash')) {
            del(target)
        } else if (list.contains('glyphicon-send')) {
            submit(target)
        } else if (list.contains('glyphicon-ok')) {
            unDone(target)
        }
    })
}
// 定义点击按钮 update 时调用的函数 update
const update = function(target) {
    var todoDiv = target.parentElement
    var content = e('content', todoDiv)
    // 切换图标显示
    target.classList.toggle('glyphicon-pencil')
    target.classList.toggle('glyphicon-send')
    // 内容区添加可修改属性并获得焦点
    content.setAttribute('contenteditable', true)
    content.focus()
}
// 定义点击按钮 done 时调用的函数 done
const done = function(target) {
    var todoDiv = target.parentElement
    // 获得 todoDiv 中的子元素 time 和 content
    var time = e('time', todoDiv)
    var content = e('content', todoDiv)
    // 给这两个子元素切换 class
    time.classList.add('done')
    content.classList.add('done')
    // 切换图标显示
    target.classList.toggle('glyphicon-remove')
    target.classList.toggle('glyphicon-ok')
    // 保存
    saveTodos()
}
// 定义点击按钮 delete 时调用的函数 del
const del = function(target) {
    var todoDiv = target.parentElement
    // 删除 todoDiv
    todoDiv.remove()
    // 保存
    saveTodos()
}
// 定义点击按钮 submit 时调用的函数 submit
const submit = function(target) {
    var todoDiv = target.parentElement
    // submit 按钮变为 update
    target.classList.toggle('glyphicon-send')
    target.classList.toggle('glyphicon-pencil')
    // 失去焦点并更新内容
    var content = e('content', todoDiv)
    content.setAttribute('contenteditable', false)
    content.blur()
    // 将时间更新为提交时间
    var time = e('time', todoDiv)
    time.innerHTML = now()
    // 保存更新
    saveTodos()
}
// 定义点击按钮 undone 时调用的函数 unDone
const unDone = function(target) {
    var todoDiv = target.parentElement
    // 获得 todoDiv 中的子元素 time 和 content
    var time = e('time', todoDiv)
    var content = e('content', todoDiv)
    // 给这两个子元素切换 class
    time.classList.remove('done')
    content.classList.remove('done')
    // 切换图标显示
    target.classList.toggle('glyphicon-remove')
    target.classList.toggle('glyphicon-ok')
    // 保存
    saveTodos()
}


// 监听输入框的按键 enter 事件
const bindEventEnter = function() {
    var body = e('body')
    body.addEventListener('keydown', function(event) {
        // enter 键对应的 keyCode 是 13
        if (event.keyCode === 13) {
            var target = event.target
            // 分别响应 add 输入框，container 输入框，content元素
            if (target.id === 'id-input-add') {
                addPaper()
            } else if (target.classList.contains('container-input')) {
                addTodoDiv(target)
            } else if (target.tagName === 'CONTENT') {
                var t = e('.glyphicon-send', target.parentElement.parentElement)
                submit(t)
            }
        }
    })
}
// 定义在 add 页面时点击按钮 Add 后的响应函数 addPaper
const addPaper = function() {
    // 获得 id-input-add 的输入值
    var input = e('#id-input-add').value
    // 根据输入值生成 todoContainer 模板
    var paper = templatedPaper(now(), input)
    // 将 paper 添加到页面 list
    e('#id-div-todospa').insertAdjacentHTML('beforeend', paper)
    // 保存 todo
    saveTodos()
    // 调用动画，用于提示成功添加
    animationAddPaper()
}
// 生成 todoContainer，time 为字符串类型，表示时间
const templatedPaper = function(time, input, section='') {
    var t = `
    <div class="todo-paper well">
    <h2>${input}</h2>
    <time>${time}</time>
    <br>
    <input class="container-input form-control" type="text">
    <div class="paper-todo-section">
    ${section}
    </div>
    </div>
    `
    return t
}
// Paper 中输入框的响应函数
const addTodoDiv = function(target) {
    // 取出输入框的值，生成 todoDiv 模板
    var s = target.value
    var t = templatedTodoDiv(now(), s)
    // 取出放置 todoDiv 的区域，然后插入模板
    var paper = target.parentElement
    var section = e('.paper-todo-section', paper)
    section.insertAdjacentHTML('afterbegin', t)
    // 动画

    // 保存
    saveTodos()
}
// 根据输入值生成 todo 模板 todoDiv
// 参数 time 是时间字符串
// 参数 s 是 #id-input-add 的 value
// 参数 status 是 todoDiv 的状态，默认为未完成即 false
const templatedTodoDiv = function(time, s, status = false) {
    // 根据传入的 status 设置对应的 class
    var i = ''
    if (status === true) {
        i = 'done'
    }
    var t = `
    <div class="div-todo">
        <span class="glyphicon glyphicon-pencil"></span>
        <span class="glyphicon glyphicon-remove"></span>
        <span class="glyphicon glyphicon-trash"></span>
        <time class="${i}">${time}</time>
        <content class="${i}" contenteditable="false">${s}</content>
    </div>
    `
    return t
}


// 监听 window 的 popstate 事件
const bindEventPopstate = function() {
    window.addEventListener('popstate', function(event) {
        // state 是调用 pushState 函数时的第一个实参
        var value = event.state.page;
        // var value = state.page
        if (value === 'add') {
            showPageAdd()
        } else if (value === 'list') {
            showPageList()
        }
    })
}


// 统一调用
const __main = function() {
    loadTodos()
    bindEventPageButtons()
    bindEventPaperButtons()
    bindEventEnter()
    bindEventPopstate()
}
// 统一入口
__main()
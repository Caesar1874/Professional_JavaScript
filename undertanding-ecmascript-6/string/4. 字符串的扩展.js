"use strict"
// 字符的Unicode表示法
    // utf-16
        // 不超过\uffff的字符, ffff表示码点
        console.log("\u0061");

        // 超过\uffff的字符
        //原来使用两个双字节表示
        console.log("\uD842\uDFB7"); //\uD842\uDFB7是\u20BB7的两个双字节表示

        //不能理解：
        console.log("\u20BB7")
        // 理解为\u20BB + 7

    //ES6：将unicode码点放入{}
    console.log("\u{20BB7}");
    console.log("\u{20BB7}" === "\uD842\uDFB7"); // true

    console.log("\u0041\u0042\u0043"); // ABC
    console.log("\u{41}\u{42}\u{43}");// ABC

// codePointAt()
    // js将码点超过\xFFFF的字符认为是两个字符
        // "𠮷"的码点是0x20BB7, 十进制是134071， UTF-16编码是0xD842 0xDFB7， 十进制是55362 57271
        var str = "𠮷";

        console.log(str.length); //2

        console.log(str.charAt(0)); //�
        console.log("\uD842"); //�

        console.log(str.charCodeAt(0)); //55362

    //codePointAt(): 字符的码点
        console.log(str.codePointAt(0)); // 134071
        console.log(str.codePointAt(1)); // 57271
    //codePointAt()参数仍然是不对的，for of可以识别32字符
    var str = "𠮷a";
    for (var char of str) {
        console.log(char.codePointAt().toString(16));
    }
    // 20bb7
    // 61

    //测试字符是否是32位
    function is32Bit(char) {
        return char.codePointAt(0) > 0xffff;
    }
    console.log(is32Bit("𠮷")); // true

// String.fromCodePoint()
    // String.fromCharCode不能识别32为字符
    console.log(String.fromCharCode(0x20BB7));
        //理解为0BB7

    // String.fromCodePoint(): 与codePointAt()相反
    console.log(String.fromCodePoint(0x20BB7)); //𠮷
    console.log(String.fromCodePoint(0x78, 0x1f680, 0x79)); //多个字符合并为字符串

// 字符串的遍历器接口
    //for of循环
    for( let char of "foo"){
        console.log(char);
    }

    //for of循环可是识别32的字符
    var text = String.fromCodePoint(0x20BB7);

    // for循环
    for(let i =0; i < text.length; i++) {
        console.log(text[i]);
    }
    // �
    // �

    // for of循环
    for(let char of text) {
        console.log(char);
    }
    // 𠮷

// at()
    // 对应ES5的charAt方法，能够识别323位的字符
    // console.log(text.at(0));
    // 提案方法，未实现

// normalize()

// includes, startsWith(), endsWith()
    var str = "Hello world!";

    console.log(str.indexOf("w")); // 指定字符的索引
    console.log(str.includes("o")); // 是否含指定字符
    console.log(str.startsWith("Hello")); // 是否以指定字符开始
    console.log(str.endsWith("!")); // 是否以指定字符结尾

    // 第二个参数，指定开始搜索的位置
    console.log(str.includes("0", 7)); //false
    console.log(str.startsWith("wor", 6)) //true
        // endsWith()的第二个参数表示结束位置
    console.log(str.endsWith("lo", 5)) //true

//repeat()
    //将字符串重复指定次数
    var str = "abc";
    console.log(str.repeat(3));
    //次数为小数向下取整
    console.log(str.repeat(2.9)) //abcabc

    //次数为0
    console.log(str.repeat(0)); //""

    //0~-1之间的小数取整后等于-0，相当于0
    console.log(str.repeat(-0.5));

    //参数是 <=-1 的负数或 Infinity报错
    // console.log(str.repeat( -1 ));
    // console.log(str.repeat(Infinity));

    // NaN相当于0
    console.log(str.repeat(NaN));

    // 字符串转换为数字
    console.log(str.repeat("abc")); //NaN，相当于0
    console.log(str.repeat("3"));

// 模板字符串
// 用``标记模板字符串
    //表示普通字符串
    console.log(`JavaScript`);
    //表示多行字符串
    console.log(`HTML
    css
    JavaScript`);

    // 用${}在模板字符串中嵌入js表达式，并求值，其结果应是字符串，否则转化为字符串(调用对应的toString方法)
        // 变量
        var name = "qinghe";
        console.log(`Hello, ${name}`);

        // 进行运算， 注意3个${}的结果实际上转化为字符串
        var x = 1;
        var y = 2;
        console.log(`${x} + ${y} = ${x + y}`);

        //引用对象属性
        var obj = {x: 1, y: 2};
        console.log(`${obj.x + obj.y}`);

        //调用函数
        function fn(){
            return "Hello";
        }
        console.log(`${fn()}, qinghe`);

        //对象
        var obj = {x: 1, y: 2};
        console.log(`${obj}`); // [object, Object]
        console.log(obj.toString()); // [object Object]

    // 模板字符串的嵌套
    const tmpl = addrs =>`
        <table>
            ${addrs.map(addr =>`
                <tr><td>${addr.first}</td></tr>
                <tr><td>${addr.last}</td></tr>
            `).join("")
            }
        </table>
         `
        //  tmpl函数，参数addrs是一个数组,
        // 函数体是一个模板字符串，table内的内容: 由map()方法返回数组再由join()方法拼接而成
        // map()内，箭头函数的参数addr表示addrs的当前元素，此处是一个对象，箭头函数内通过${}插入变量
        // map返回包含各个重复模块的字符串的数组

    // 使用
        const data = [
            {first: "<Jane>", last: "Bond"},
            {first: "Lars", last: "<Croft>"}
        ]
        console.log(tmpl(data));
        // <table>
        //
        //     <tr><td><Jane></td></tr>
        //     <tr><td>Bond</td></tr>
        //
        //     <tr><td>Lars</td></tr>
        //     <tr><td><Croft></td></tr>
        //
        // </table>

    // 引用模板字符串本身，使用`需要转义
    console.log("\`Hello ${name}\`");

//实例：模板编译
    var template = `
        <ul>
        <% for(var i = 0; i < data.supplies.length; i++) { %>
            <li><%= data.supplies[i] %></li>
        <% } %>
        </ul>  
    `
        //<% %>表示js代码，<%= %>输出js表达式

    //js表达式字符串 *
    /*echo("<ul>");
    for( var i = 0; i < data.supplies.length; i++){
        echo("<li>");
        echo("data.supplies[i]");
        echo("</li>");
    };
    echo("</ul>");*/


/*// 测试
    var evalExpr = /<%=(.+?)%>/g; //匹配表达式
    var expr = /<%([\s\S]+?)%>/g; //匹配语句
    template = template
        .replace(evalExpr, '`); \n echo($1); \n echo(`')
        .replace(expr, '`); \n $1 \n echo(`');

    template = "echo(`" + template + "`);";
    console.log(template);*/


    // 编译
    function compile(template){
        //template = { supplies: [ "broom", "mop", "cleaner" ] }

        //将模板编译为js表达式字符串
        var evalExpr = /<%=(.+?)%>/g; //匹配表达式
        var expr = /<%([\s\S]+?)%>/g; //匹配语句
        template = template
            .replace(evalExpr, '`); \n echo($1); \n echo(`')
            .replace(expr, '`); \n $1 \n echo(`');
        template = "echo(`" + template + "`);"; //此时结果如 * 所示

        //将template封装在函数中，并返回
        var script = `
            (function parse(data) {
                var output = "";
            
                function echo(html){
                    output += html;
                    }
                ${template}
                return output; 
            })`;
        return script;
    }

    // 调用compile
    var parse = eval(compile(template));
    //div.innerHTML = parse({suplies: ["broom", "mop", "cleaner"]})
    console.log( parse({supplies: ["broom", "mop", "cleaner"]}));

// 标签模板
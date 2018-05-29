# Promise Prototype

Promise实例(类，或者说函数)具有then方法，也就是说，then方法是定义在原型对象Promise.prototype上的。它的作用是为Promise实例添加状态改变时的回调函数。前面说过，then方法的第一个参数是resolved状态的回调函数，第二个参数（可选）是rejected状态的回调函数。

Promise.prototype.catch方法是.then(null, rejection)的别名，用于指定发生错误时的回调函数。

finally方法用于指定不管 Promise 对象最后状态如何，都会执行的操作。该方法是 ES2018 引入标准的。


## 参考文档

* [Promise 对象](http://es6.ruanyifeng.com/#docs/promise)
* [JavaScript学习总结（五）原型和原型链详解](https://segmentfault.com/a/1190000000662547)

## Example

```HTML
<html>
    <head>
    </head>
    <body>
        <script>
            function timeout(ms) {
                return new Promise((resolve, reject) => {
                    // setTimeout(function, milliseconds, param1, param2, ...)
                    setTimeout(resolve, ms, 'done');
                });
            }

            timeout(100).then((value) => {
                console.log(value);
            }).finally(() => {
                console.log("finally");
            });

            console.log("run over");
        </script>
    </body>
</html>
```

**output**

```
10:07:24.709 test.html:19 run over
10:07:24.809 test.html:14 done
10:07:24.810 test.html:16 finally
```

## prototype

```HTML
<script type="text/javascript">
    var Browser = function(){};
    Browser.prototype.run = function(){
        alert("I'm Gecko,a kernel of firefox");
    }
    
    var Bro = new Browser();
    Bro.run();
</script>
```

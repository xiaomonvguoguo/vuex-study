# 这个主要介绍vuex的使用方法。

## 我们在src文件夹下面编写了一个store文件。 这里主要存放一些vuex的使用

-----------
> index.js  这里主要负责vuex的引用，不负责任何的逻辑编写。


> state.js  这里只负责保存值，不负责vuex的逻辑操作

> getters.js 这里负责导出state里面的值。 
####注意：在我们页面使用的时候，不能直接对它进行任何的事件操作，这样的话会报错。 如果你想改变state的值，那么尽可能的去执行mutations或者actions动作吧。

> actions.js 这里负责事件操作。 我们可以在页面的事件中去监听它，同时如果有赋值参数， 那么参数同时传递过去

> mutations  上面在getters的时候我们提到过改变值的时候不能去直接去页面使用getters来改变值。

> mutations-type 这里管理的主要是因为在actions中我们引用了这个文件，同时在mutations中我们一样引入了这个文件。那么这个文件就代表于我们不直接去进行操作mutations，而是使用了mutations-type变量来进行改变。

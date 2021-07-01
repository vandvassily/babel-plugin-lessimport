# babel插件

babel按需加载插件demo

## 目标

lodash可以按需加载

```
import { uniq, extend, flatten, cloneDeep } from "lodash";
// 转换为
// import uniq from "lodash/uniq";
// import extend from "lodash/extend";
// import flatten from "lodash/flatten";
// import cloneDeep from "lodash/cloneDeep";
```

## 参考

[编写自己的Babel插件（一）](https://juejin.cn/post/6844903731088064525)
[babel 插件手册](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/plugin-handbook.md)

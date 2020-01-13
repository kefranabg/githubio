# JS utils

[[toc]]
## 随机打乱数组
``` js
const shuffle = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const randomIndex = Math.round(Math.random() * (arr.length - 1 - i)) + i;
    [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]]
  }
  return arr
};
```

## 字母排序
``` js
let arr = ['B', 'a', 'c', 'Z', 'e']
const letterCompareUtil = (a, b) => a.toLowerCase() > b.toLowerCase() ? 1 : -1;
arr.sort(letterCompareUtil);
```
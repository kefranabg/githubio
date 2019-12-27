# 一个原生js压缩图片的功能

## 前言

在上传图片文件的时候，有些地方可能会限制大小，但是如果只限制20m的话，网络或者设备因素，上传速度还是会比较慢。所以的话这个功能是根据图片的大小来进行图片模糊度，不改变分辨率的压缩。

## 1.选择文件时判断是否需要进行图片压缩
``` js
chooseFile(e) {
  const file = e.target.files[0]
  if (file.size > 1048576) { // 如果大于1m
    let ready = new FileReader();
    ready.readAsDataURL(file);
    ready.onload = (res) => { // 拿到最初始的base64
      this.canvasDataURL(res, base64 => { // 压缩后的base64
        let bl = this.convertBase64UrlToBlob(base64) // 开始转为bolb文件
        this.bolbFile = bl
      })
    }
  } else {
    this.bolbFile = file
  }
  e.target.value = null // 清除之前选择的文件内容
}
```

## 2.图片转base64，通过canvas压缩
``` js
canvasDataURL(file, callback) {
  let quality = 0.7; // 压缩值，quality值越小，所绘制出的图像越模糊
  if (file > 3145728 && file < 6291456) { // 3-6m之内压缩0.4
    quality = 0.4
  } else if (file > 6291456) {
    quality = 0.1
  }
  const path = file.currentTarget.result
  let img = new Image()
  img.src = path;
  let self = this;
  img.onload = (e) => {
    const that = e.path[0];
    // 默认按比例压缩
    let w = that.width,
      h = that.height,
      scale = w / h;
    h = w / scale;
    //生成canvas
    let canvas = document.createElement('canvas')
    let ctx = canvas.getContext('2d');
    // 创建属性节点
    let anw = document.createAttribute('width')
    anw.nodeValue = w
    let anh = document.createAttribute('height')
    anh.nodeValue = h
    canvas.setAttributeNode(anw);
    canvas.setAttributeNode(anh);
    ctx.drawImage(that, 0, 0, w, h)
    // quality值越小，所绘制出的图像越模糊
    let base64 = canvas.toDataURL('image/jpeg', quality)
    // 回调函数返回base64的值
    callback(base64)
  }
}
```

## 3.通过Bolb转为file文件格式
``` js
/**
 * 将以base64的图片url数据转换为Blob
 * @param urlData 用url方式表示的base64图片数据
 */
convertBase64UrlToBlob(urlData) {
  let arr = urlData.split(','),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new Blob([u8arr], {
    type: mime
  })
}
```

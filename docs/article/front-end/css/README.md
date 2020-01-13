# CSS样式重置

## PC端默认样式
``` css
html{font-family:"Microsoft YaHei UI","Microsoft YaHei",sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}  
pre{font-family: "Microsoft YaHei" ;}
html,body,div,object,iframe,applet,object,h1,h2,h3,h4,h5,h6,p,blockquote,pre,address,dl,dt,dd,ol,ul,li,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,menu,nav,output,ruby,section,summary,time,mark,audio,video,progress{margin:0;padding:0;border:0;vertical-align:baseline}  
li{list-style:none}  
article,aside,details,figcaption,figure,footer,header,main,menu,nav,section,summary{display:block}  
audio,canvas,progress,video{display:inline-block}  
audio:not([controls]){display:none;height:0}  
[hidden],template{display:none}  
a{background-color:transparent;text-decoration:none}  
a:active,a:hover{outline:0}  
abbr[title]{border-bottom:1px dotted}  
b,strong{font-weight:bold}  
dfn{font-style:italic}  
h1{font-size:2em;margin:.67em 0}  
mark{background:#ff0;color:#000}  
small{font-size:80%}  
sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}  
sup{top:-0.5em}  
sub{bottom:-0.25em}  
img{border:0}  
svg:not(:root){overflow:hidden}  
figure{margin:1em 40px}  
hr{-moz-box-sizing:content-box;box-sizing:content-box;height:0}  
pre{overflow:auto}  
code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}  
button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0;outline:none;line-height:normal}  
button{overflow:visible}  
button,select{text-transform:none}  
button,html input[type="button"],input[type="reset"],input[type="submit"]{-webkit-appearance:button;cursor:pointer}  
button[disabled],html input[disabled]{cursor:default}  
button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}  
input{line-height:normal}  
input[type="checkbox"],input[type="radio"]{box-sizing:border-box;padding:0}  
input[type="number"]::-webkit-inner-spin-button,input[type="number"]::-webkit-outer-spin-button{height:auto}  
input[type="search"]{-webkit-appearance:textfield;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box}  
input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-decoration{-webkit-appearance:none}  
fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}  
legend{border:0;padding:0}  
textarea{overflow:auto}  
optgroup{font-weight:bold}  
table{border-collapse:collapse;border-spacing:0}  
td,th{padding:0}  
/* 清除ie表单自带icon*/
::-ms-clear,::-ms-reveal{display:none;}
 
/* 选择历史记录的文字颜色和背景颜色 */
input:-webkit-autofill {
    -webkit-animation: autofill-fix 1s infinite!important;
    /* 选择历史记录的文字颜色*/
    -webkit-text-fill-color: #666;
    -webkit-transition: background-color 50000s ease-in-out 0s!important;
    transition: background-color 50000s ease-in-out 0s!important;
    background-color: transparent!important;
    background-image: none !important;
    /* 选择历史记录的背景颜色 */
    -webkit-box-shadow: 0 0 0 1000px transparent inset!important;
}
[role=button], a, area, button, input:not([type=range]), label, select, summary, textarea {
    -ms-touch-action: manipulation;
    touch-action: manipulation;
}
input[type=number], input[type=password], input[type=text], textarea {
    -webkit-appearance: none;
}
```

## 移动端样式重置
```css
html{font-family: "Helvetica Neue", Helvetica, STHeiTi, sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}
html,body{-webkit-user-select:none;user-select:none;}
html,body,div,object,iframe,applet,object,h1,h2,h3,h4,h5,h6,p,blockquote,pre,address,dl,dt,dd,ol,ul,li,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,menu,nav,output,ruby,section,summary,time,mark,audio,video,progress{margin:0;padding:0;border:0;vertical-align:baseline}
a{text-decoration:none;-webkit-touch-callout:none;background-color:transparent}
li{list-style:none}
article,aside,details,figcaption,figure,footer,header,main,menu,nav,section,summary{display:block}
audio,canvas,progress,video{display:inline-block}
audio:not([controls]){display:none;height:0}
[hidden],template{display:none}
a:active,a:hover{outline:0}
 
/* 不同部分自行添加 */
a{text-decoration: none;}
blockquote, q { quotes: none;  }
blockquote:before, blockquote:after,
q:before, q:after {  content: '';  content: none;  }
table {  border-collapse: collapse;  border-spacing: 0;  }
 
abbr[title]{border-bottom:1px dotted}
b,strong{font-weight:bold}
dfn{font-style:italic}
h1{font-size:2em;margin:.67em 0}
small{font-size:80%}
sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}
sup{top:-0.5em}
sub{bottom:-0.25em}
img{border:0;-webkit-touch-callout:none;}
svg:not(:root){overflow:hidden}
figure{margin:1em 40px}
hr{-moz-box-sizing:content-box;box-sizing:content-box;height:0}
pre{overflow:auto}
code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}
a,button,input,optgroup,select,textarea{-webkit-tap-highlight-color:rgba(0,0,0,0);}
button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0;-webkit-appearance:none;outline:none;line-height:normal}
button{overflow:visible}
button,select{text-transform:none}
button,html input[type="button"],input[type="reset"],input[type="submit"]{-webkit-appearance:button;cursor:pointer}
button[disabled],html input[disabled]{cursor:default}
button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}
input{line-height:normal}
input[type="checkbox"],input[type="radio"]{box-sizing:border-box;padding:0}
input[type="number"]::-webkit-inner-spin-button,input[type="number"]::-webkit-outer-spin-button{height:auto}
input[type="search"]{-webkit-appearance:textfield;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box}
input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-decoration{-webkit-appearance:none}
fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}
legend{border:0;padding:0}
textarea{overflow:auto}
optgroup{font-weight:bold}
table{border-collapse:collapse;border-spacing:0}
td,th{padding:0}
```

版权声明：本文为CSDN博主「muzidigbig」的原创文章，遵循 CC 4.0 BY-SA 版权协议  
非商用，侵删，转自: [pc端和移动端默认样式重置](https://blog.csdn.net/muzidigbig/article/details/80585821)
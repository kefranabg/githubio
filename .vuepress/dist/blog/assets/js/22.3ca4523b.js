(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{210:function(t,e,a){"use strict";a.r(e);var s=a(0),r=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),a("p",[t._v("commit可以一次提交缓冲区的所有文件")]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._m(11),t._v(" "),t._m(12),t._m(13),t._v(" "),t._m(14),t._m(15),t._v(" "),t._m(16),t._m(17),t._v(" "),t._m(18),t._m(19),t._v(" "),t._m(20),t._m(21),t._v(" "),t._m(22),t._m(23),t._v(" "),a("p",[t._v("查看分支的情况，前面带*号的就是当前分支")]),t._v(" "),t._m(24),t._m(25),t._v(" "),t._m(26),a("p"),t._v(" "),t._m(27),t._v(" "),t._m(28),t._m(29),t._v(" "),t._m(30),t._m(31),t._v(" "),t._m(32),t._m(33),t._v(" "),t._m(34),t._m(35),t._v(" "),a("p",[t._v("如果两个分支同时进行了同一个文件的修改和提交，在merge时就会产生冲突，首先要手动打开文件解决冲突，再提交，就相当于进行了merge")]),t._v(" "),a("p",[t._v("从下图可以看到，红色和绿色的虚线分别代表两个分支，两个分支分别进行了commit，最新的一次提交将两个分支内容进行了合并")]),t._v(" "),t._m(36),t._v(" "),t._m(37),t._m(38),t._v(" "),t._m(39),t._m(40),t._v(" "),t._m(41),t._m(42),t._v(" "),t._m(43),t._m(44),t._v(" "),t._m(45),t._m(46),t._v(" "),t._m(47),t._m(48),t._v(" "),t._m(49),a("p",[t._v("将本地仓库内容推送到远端仓库(-u 表示第一次推送master分支的所有内容，后面再推送就不需要-u了)，跟commit的区别在于一个是提交到本地仓库，一个是提交到远程仓库")]),t._v(" "),t._m(50),t._m(51),t._v(" "),t._m(52),a("p",[t._v("tips:如果push的时候，本地和文件和远端文件有冲突，就要先pull、然后手动解决冲突，才能继续push")]),t._v(" "),t._m(53),t._v(" "),a("p",[t._v("push的时候默认每次都需输入GitHub的用户名和密码，在git仓库根目录下.git文件夹的config文件末尾增加如下内容，即可记住用户名密码，无需每次推送都输入了")]),t._v(" "),t._m(54),a("p",[t._v("非商用，侵删，转自: "),a("a",{attrs:{href:"https://blog.csdn.net/lxw198902165221/article/details/89228458",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://blog.csdn.net/lxw198902165221/article/details/89228458"),a("OutboundLink")],1)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"git常用命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git常用命令","aria-hidden":"true"}},[this._v("#")]),this._v(" Git常用命令")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"_1-初始化-：创建一个git仓库，创建之后就会在当前目录生成一个-git的文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-初始化-：创建一个git仓库，创建之后就会在当前目录生成一个-git的文件","aria-hidden":"true"}},[this._v("#")]),this._v(" 1.初始化 ：创建一个git仓库，创建之后就会在当前目录生成一个.git的文件")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("git init\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"_2-添加文件-：把文件添加到缓冲区"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-添加文件-：把文件添加到缓冲区","aria-hidden":"true"}},[this._v("#")]),this._v(" 2.添加文件 ：把文件添加到缓冲区")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("git add filename\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("添加所有文件到缓冲区（从目前掌握的水平看，和后面加“.”的区别在于，加all可以添加被手动删除的文件，而加“.”不行）：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("git add .\ngit add --all\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"_3-提交-：提交缓冲区的所有修改到仓库-注意：如果修改了文件但是没有add到缓冲区，也是不会被提交的"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-提交-：提交缓冲区的所有修改到仓库-注意：如果修改了文件但是没有add到缓冲区，也是不会被提交的","aria-hidden":"true"}},[this._v("#")]),this._v(" 3.提交 ：提交缓冲区的所有修改到仓库(注意：如果修改了文件但是没有add到缓冲区，也是不会被提交的)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('git commit -m "提交的说明"\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"_4-查看git库的状态-，未提交的文件，分为两种，add过已经在缓冲区的，未add过的"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-查看git库的状态-，未提交的文件，分为两种，add过已经在缓冲区的，未add过的","aria-hidden":"true"}},[this._v("#")]),this._v(" 4.查看git库的状态 ，未提交的文件，分为两种，add过已经在缓冲区的，未add过的")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("git status \n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"_5-比较-：如果文件修改了，还没有提交，就可以比较文件修改前后的差异"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-比较-：如果文件修改了，还没有提交，就可以比较文件修改前后的差异","aria-hidden":"true"}},[this._v("#")]),this._v(" 5.比较 ：如果文件修改了，还没有提交，就可以比较文件修改前后的差异")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("git diff filename\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"_6-查看日志"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-查看日志","aria-hidden":"true"}},[this._v("#")]),this._v(" 6.查看日志")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("git log\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"_7-版本回退-：可以将当前仓库回退到历史的某个版本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-版本回退-：可以将当前仓库回退到历史的某个版本","aria-hidden":"true"}},[this._v("#")]),this._v(" 7.版本回退 ：可以将当前仓库回退到历史的某个版本")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("git reset \n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("第一种用法：回退到上一个版本（HEAD代表当前版本，有一个^代表上一个版本，以此类推）")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("git reset --hard HEAD^\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("第二种用法：回退到指定版本(其中d7b5是想回退的指定版本号的前几位)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("git reset --hard d7b5\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"_8-查看命令历史：查看仓库的操作历史"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8-查看命令历史：查看仓库的操作历史","aria-hidden":"true"}},[this._v("#")]),this._v(" 8.查看命令历史：查看仓库的操作历史")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("git reflog\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"_9-git分支管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-git分支管理","aria-hidden":"true"}},[this._v("#")]),this._v(" 9.git分支管理")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("git branch\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("创建分支")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("git branch 分支名\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("切换当前分支到指定分支")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("git checkout 分支名\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("创建分支并切换到创建的分支")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("git checkout  -b 分支名\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("合并某分支的内容到当前分支")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("git merge 分支名\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("删除分支")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("git branch -d 分支名\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"_10-解决冲突"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_10-解决冲突","aria-hidden":"true"}},[this._v("#")]),this._v(" 10.解决冲突")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("查看分支合并图")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("git log --graph\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"_11-标签，默认为最新版本，后面加上版本号参数则可指定版本增加标签"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_11-标签，默认为最新版本，后面加上版本号参数则可指定版本增加标签","aria-hidden":"true"}},[this._v("#")]),this._v(" 11.标签，默认为最新版本，后面加上版本号参数则可指定版本增加标签")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("git tag 标签名 版本号\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("查看所有标签：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("git tag\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("查看标签的详细信息")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("git show 标签名\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("p",[this._v("将tag提交到远端仓库")])]),this._v(" "),e("li",[e("p",[this._v("推送所有tag:")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("git push origin --tags\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("推送某个tag：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("git push origin v1.0 \n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"_12-git远端库相关"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_12-git远端库相关","aria-hidden":"true"}},[this._v("#")]),this._v(" 12.git远端库相关")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("git remote add origin git://127.0.0.1/abc.git 这样就增加了远程仓库abc。\n\ngit remote remove origin移除远端仓库\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("git push -u origin master\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"_13-从远端库更新内容到本地（相当于svn的update）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_13-从远端库更新内容到本地（相当于svn的update）","aria-hidden":"true"}},[this._v("#")]),this._v(" 13.从远端库更新内容到本地（相当于svn的update）")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("git pull\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"_14-git记住用户名密码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_14-git记住用户名密码","aria-hidden":"true"}},[this._v("#")]),this._v(" 14.git记住用户名密码")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("[credential]\nhelper = store\n")])])])}],!1,null,null,null);r.options.__file="README.md";e.default=r.exports}}]);
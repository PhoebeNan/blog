(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{302:function(s,n,a){"use strict";a.r(n);var t=a(0),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",[s._v("在我们完成项目开发后，提交到git，当监听提交后，自动进行编译，并进行项目的部署，是不是一想就很爽，所以下面引入我们的主角 —— gitlab-CI，"),a("a",{attrs:{href:"https://fennay.github.io/gitlab-ci-cn/",target:"_blank",rel:"noopener noreferrer"}},[s._v("中文文档"),a("OutboundLink")],1),s._v("。")])]),s._v(" "),a("h2",{attrs:{id:"gitlab-ci"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gitlab-ci"}},[s._v("#")]),s._v(" Gitlab CI")]),s._v(" "),a("p",[s._v("Gitlab-CI 是 GitLab Continuous Integration（Gitlab持续集成）的简称。\n从Gitlab的8.0版本开始，gitlab就全面集成了Gitlab-CI,并且对所有项目默认开启。\n只要在项目仓库的根目录添加.gitlab-ci.yml文件，并且配置了Runner（运行器），那么每一次合并请求（MR）或者push都会触发CI pipeline。")]),s._v(" "),a("h2",{attrs:{id:"gitlab-runner"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gitlab-runner"}},[s._v("#")]),s._v(" Gitlab-Runner")]),s._v(" "),a("h4",{attrs:{id:"安装gitlab-ci-multi-runner（linux）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装gitlab-ci-multi-runner（linux）"}},[s._v("#")]),s._v(" 安装gitlab-ci-multi-runner（linux）")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加yum源")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -L https://packages.gitlab.com/install/repositories/runner/gitlab-ci-multi-runner/script.rpm.sh "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装")]),s._v("\nyum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" gitlab-ci-multi-runner\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h4",{attrs:{id:"使用-gitlab-ci-multi-runner-注册-specific-runners"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-gitlab-ci-multi-runner-注册-specific-runners"}},[s._v("#")]),s._v(" 使用 gitlab-ci-multi-runner 注册 Specific Runners")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/4660406-23e31a052864a7a0.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"runners.jpg"}})]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ gitlab-ci-multi-runner register\nRunning "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" system-mode.\n\nPlease enter the gitlab-ci coordinator URL "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("e.g. https://gitlab.com/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" 你的URL\n\nPlease enter the gitlab-ci token "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" this runner:\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" 你的Token\n\nPlease enter the gitlab-ci description "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" this runner:\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" 你对该runner的描述\n\nPlease enter the gitlab-ci tags "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" this runner "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("comma separated"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" 该runner的标签\n\nWhether to run untagged builds "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("true/false"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(":\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("false"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" 是否运行没有标记的项目（后期可以改）\n\nWhether to lock Runner to current project "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("true/false"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(":\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("false"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(":\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" 是否锁定只运行当前项目（后期可以改）\n\nRegistering runner"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". succeeded                     "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("runner")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("9e48baqx\n\nPlease enter the executor: parallels, docker+machine, ssh, virtualbox, docker-ssh+machine, kubernetes, docker, docker-ssh, shell:\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" 选择runner的类型（根据你的需求选择，我选择的shell，我的项目是node项目）\n\nRunner registered successfully. Feel "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("free")]),s._v(" to start it, but "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" it's running already the config should be automatically reloaded"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br")])]),a("div",{staticClass:"custom-block warning"},[a("ol",[a("li",[s._v("首先你的项目中的 "),a("code",[s._v("getlab-runner.yml")]),s._v(" 文件中的命令需要的环境，你的runner所在的服务器是必须要搭好的，必须你需要执行 "),a("code",[s._v("npm install")]),s._v(" 和 "),a("code",[s._v("npm run build")]),s._v(" ，那你的服务器必须要有node环境；")]),s._v(" "),a("li",[s._v("runner的类型比较重要，你必须要清楚你需要一个什么类型的runner。比如，开始我是需要一个能够运行node项目的runner，但是网上的很多教程统一都是都选择docker，这个时候你电脑上必须要安装了docker才可以，因为这相当于在docker里面又安装了一个docker（docker in docker），所以对于我的需求来说，我选择shell就可以了；")]),s._v(" "),a("li",[s._v("通过Gitlab中某个项目的 "),a("code",[s._v("Settings")]),s._v(" 下的 "),a("code",[s._v("CI/CD Pipelines")]),s._v(" 按钮进入的页面中得到的URL和Token所注册的runner只服务于本项目，当你在其他项目的当前页面时，可以选择让这个runner为当前项目开启服务。")])])]),s._v(" "),a("h2",{attrs:{id:"配置-gitlab-runner-yml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置-gitlab-runner-yml"}},[s._v("#")]),s._v(" 配置 gitlab-runner.yml")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("mage: node:9.11.1\n\npages:\n cache:\n   paths:\n   - node_modules/\n\n script:\n - cnpm "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n - "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run build\n - "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf /data/ftp/http/files/scfAdminDoc\n - "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" ./scfAdminDoc /data/ftp/http/files/\n artifacts:\n   paths:\n   - public\n only:\n - master\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("p",[s._v("具体配置见"),a("a",{attrs:{href:"https://fennay.github.io/gitlab-ci-cn/gitlab-ci-yaml.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("文档"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"其他"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[s._v("#")]),s._v(" 其他")]),s._v(" "),a("h4",{attrs:{id:"代码推送到gitlab上之后，一直是pending状态，要等很久才pick到一个runner来执行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码推送到gitlab上之后，一直是pending状态，要等很久才pick到一个runner来执行"}},[s._v("#")]),s._v(" 代码推送到gitlab上之后，一直是pending状态，要等很久才pick到一个runner来执行")]),s._v(" "),a("p",[s._v("这个现象一般发生在本机注册了多个runner，之前的都删除了，只留下一个，但是当我们在gitlab管理平台移除了某个runner的时候，并没有完全删除记录，当执行的 "),a("code",[s._v("gitlab-ci-multi-runner list")]),s._v(" 的时候你会发现它仍然还在，如果需要彻底删除它，还应该这样做：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /etc/gitlab-runner\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 你会看到config.toml文件，打开它并删除已有的那些runner记录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" config.toml\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h4",{attrs:{id:"配置node环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置node环境"}},[s._v("#")]),s._v(" 配置node环境")]),s._v(" "),a("ol",[a("li",[s._v("下载node-v9.11.1-linux-x64.tar.xz文件")]),s._v(" "),a("li",[s._v("例如放在 "),a("code",[s._v("/home")]),s._v(" 文件夹"),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入所在目录，解压")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -xvf node-v9.11.1-linux-x64.tar.xz\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重命名文件夹")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" node-v9.11.1-linux-x64 nodejs\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 建立软链接，配置全局环境变量（源路径和目标路径为相对路径）")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -s /home/nodejs/bin/npm /usr/local/bin/\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -s /home/nodejs/bin/node /usr/local/bin/\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检查是否配置成功")]),s._v("\nnode -v\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" -v\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])])])]),s._v(" "),a("h4",{attrs:{id:"scp上上传"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scp上上传"}},[s._v("#")]),s._v(" scp上上传")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 普通")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" ./public/* root@192.168.0.226:/data/ftp/http/files/\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" 源路径/源文件 用户名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("@服务器IP:目标路径\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 免密码")]),s._v("\nyum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" sshpass\nsshpass -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("111111")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" ./public/* root@192.168.0.226:/data/ftp/http/files/\nsshpass -p 密码 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" 源路径/源文件 用户名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("@服务器IP:目标路径\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("如果是下载，调换顺序")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" root@192.168.0.226:/data/ftp/http/files/ ./public/*\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" 用户名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("@服务器IP:目标路径 源路径/源文件\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("个人博客："),a("a",{attrs:{href:"http://recoluan.gitlab.io",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[s._v("午后南杂")]),a("OutboundLink")],1)])])}),[],!1,null,null,null);n.default=e.exports}}]);
# IFIT文档

### 关于IFIT

<b>IFIT是一款健身类APP，从各大健身网站爬取健身资讯进行整合提供给用户。用户可以收藏喜欢的文章，方便下次观看。除此之外还提供了健身笔记的功能，帮助用户记录每天的心情、饮食、训练和心得。</b>

### 如何直接编译运行源代码

* #### 安装必需的软件
    这个可以参考React-Native官网，[官网地址](https://reactnative.cn/docs/0.43/getting-started.html)

* #### 获取代码

  代码地址： *git@github.com:cctv1005s/iFit.git* 

* #### 运行代码

  进入代码目录，在CMD中运行 *npm install*

  用数据线将手机连上电脑，在CMD中输入*adb devices* 检查是否连接成功

  在项目根目录下的CMD中输入*react-native run-android*或者*react-native run-ios*（看你手机是安卓版本的还是ios版本的），需要编译几分钟。如果不出什么问题应该会在手机上直接安装运行了。如果屏幕上出现红色，首先请保证你的手机和电脑在同一wifi环境下，然后摇晃手机，会出现设置，进入*Dev Settings - Debug server host & port for device*，然后输入你电脑的IP地址(cmd中输入ipconfig可获取)和端口号(8081)，如*123.123.123.123:8081*，点击确定之后再次摇晃手机并点击最上面的*Reload JS*，就可以了。

  > #### 编译
  >
  > ![](https://raw.githubusercontent.com/dogloving/iFit/master/src/assets/img/compile.png)

  > #### APP内容
  >
  > ![](https://raw.githubusercontent.com/dogloving/iFit/master/src/assets/img/weiboview.jpg)
    
  > #### 界面加载
  >
  > ![](https://raw.githubusercontent.com/dogloving/iFit/master/src/assets/img/loading.jpg)
  
  > #### 功能切换
  >
  > ![](https://raw.githubusercontent.com/dogloving/iFit/master/src/assets/img/switch.jpg)
  
  > #### 健身笔记
  >
  > ![](https://raw.githubusercontent.com/dogloving/iFit/master/src/assets/img/note1.jpg)

  > #### 查看文章（点击右上角的五角星可以收藏文章）
  >
  > ![](https://raw.githubusercontent.com/dogloving/iFit/master/src/assets/img/collection1.jpg)

  > #### 所有收藏的文章
  >
  > ![](https://raw.githubusercontent.com/dogloving/iFit/master/src/assets/img/collection2.jpg)
  
## 还有疑惑

请登陆React-Native中文官网查看文档，[官网链接](https://reactnative.cn/docs/0.43/getting-started.html)
# IFIT文档

### 关于IFIT

IFIT是一款健身类APP，从各大健身网站爬取健身资讯进行整合提供给用户。

### 如何直接编译运行源代码

* #### 安装

  #### 必需的软件：Node,NPM,React Native

  安装Node：根据自己机器[下载](https://nodejs.org/download/release/v7.6.0/)对应版本，下载安装完成之后将安装目录添加到环境变量中，然后在CMD中输入node -v检查是否安装成功

  安装npm：[下载地址](https://nodejs.org/download/release/v7.6.0/)，下载前先在CMD中输入 *npm -v* 检查是否已经安装了（有些版本的Node自带npm），如果报错就自己下载一个

  安装React Native: CMD中输入 *npm install -g yarn react-native-cli* 安装yarn（facebook提供的代替npm的工具）和react-native-cli

* #### 获取代码

  代码地址： *git@github.com:cctv1005s/iFit.git* 

* #### 运行代码

  进入代码目录，在CMD中运行 *npm install*

  用数据线将手机连上电脑，在CMD中输入*adb devices* 检查是否连接成功

  在代码根目录下的CMD中输入*react-native run-android*或者*react-native run-ios*（看你手机是安卓版本的还是ios版本的），需要编译几分钟。如果不出什么问题应该会在手机上直接安装运行了。如果屏幕上出现红色，请保证你的手机和电脑在同意wifi下，然后摇晃手机，会出现设置，进入*Dev Settings - Debug server host & port for device*，然后输入你电脑的IP地址(cmd中输入ipconfig可获取)和端口号(8081)，确定之后再次摇晃手机点击最上面的*Reload JS*，然后就可以了。

## 还有疑惑

请登陆React-Native中文官网查看文档，[官网链接](https://reactnative.cn/docs/0.43/getting-started.html)
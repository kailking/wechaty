/**
 *   Wechaty - https://github.com/chatie/wechaty
 *
 *   Copyright 2016-2017 Huan LI <zixia@zixia.net>
 *
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 *
 */

/* tslint:disable:variable-name */
const QrcodeTerminal  = require('qrcode-terminal')
const finis           = require('finis')

/**
 * Change `import { ... } from '../'`
 * to     `import { ... } from 'wechaty'`
 * when you are runing with Docker or NPM instead of Git Source.
 */
import {
  config,
  Wechaty,
  log,
  MediaMessage,
}               from '../'

const welcome = `
| __        __        _           _
| \\ \\      / /__  ___| |__   __ _| |_ _   _
|  \\ \\ /\\ / / _ \\/ __| '_ \\ / _\` | __| | | |
|   \\ V  V /  __/ (__| | | | (_| | |_| |_| |
|    \\_/\\_/ \\___|\\___|_| |_|\\__,_|\\__|\\__, |
|                                     |___/
=============== Powered by Wechaty ===============
-------- https://github.com/chatie/wechaty --------
I'm a bot, my super power is talk in Wechat.
If you send me a 'ding', I will reply you a 'dong'!
__________________________________________________
Hope you like it, and you are very welcome to
upgrade me for more super powers!
Please wait... I'm trying to login in...
`

console.log(welcome)
const bot = Wechaty.instance({ profile: config.DEFAULT_PROFILE })

bot
.on('logout'	, user => log.info('Bot', `${user.name()} logouted`))
.on('login'	  , user => {
  log.info('Bot', `${user.name()} logined`)
  bot.say('Wechaty login')
})
.on('error'   , e => {
  log.info('Bot', 'error: %s', e)
  bot.say('Wechaty error: ' + e.message)
})
.on('scan', (url, code) => {
  if (!/201|200/.test(String(code))) {
    const loginUrl = url.replace(/\/qrcode\//, '/l/')
    QrcodeTerminal.generate(loginUrl)
  }
  console.log(`${url}\n[${code}] Scan QR Code in above url to login: `)
})
.on('message', async m => {
  try {
    const room = m.room()
    console.log((room ? '[' + room.topic() + ']' : '')
                + '<' + m.from().name() + '>'
                + ':' + m.toStringDigest(),
    )

    if (/^(ding|ping|bing|code)$/i.test(m.content()) && !m.self()) {
      m.say('dong')
      log.info('Bot', 'REPLY: dong')

      const joinWechaty =  `Join Wechaty Developers' Community\n\n` +
                            `Wechaty is used in many ChatBot projects by hundreds of developers.\n\n` +
                            `If you want to talk with other developers, just scan the following QR Code in WeChat with secret code: wechaty,\n\n` +
                            `you can join our Wechaty Developers' Home at once`
      await m.say(joinWechaty)
      log.info('Bot', 'REPLY: Image')
    }
    if(/^(可以开始聊天|你好|机器人|home|Home|HOME)$/i.test(m.content()) && !m.self()){
        log.info('Bot') ;m.say("��\n\n ---- Peace & Love ----  \n\n 你好，我是和平有爱使者。很高兴为您服务!\n \n #回复 thc 获取菜单\n #回复 cbd 种子菜单\n #回复 lsd 油票菜单 \n #回复 roll 卷纸菜单\n #回复 su 查询订单号 \n #回复 卷烟 学职业裹草 \n #回复 飞行视频 看飞片\n #回复 种植指南 看教程\n \n\n 其他疑问请留言本人稍后回来马上处理。\n \n  ---- Peace & Love ---- ")
   }
   if(/^(kk|ft|KK|Hi)$/i.test(m.content()) && !m.self()){
        log.info('Bot') ;m.say("   404:你的回复被怪吃掉啦T. T 回复THC试试? ")
   }
   if(/^(SU|su)$/i.test(m.content()) && !m.self()){
                       log.info('Bot') ;m.say("    '物流查询  ' \n \n请回复订单号码，以获取您的物流单号\n")
   }
   if(/hello/.test(m.content()) && !m.self()){
       log.info('Bot') ;m.say("hello how are you")
   }
   if(/^(THC|thc|Thc)$/i.test(m.content()) && !m.self()){
        log.info('Bot') ;m.say("|9月活动持续|\n回复9999参加优惠 \n \n 1001\n 菠萝快车 100/g \n \n1002\n 北极光 120/g \n  \n1003\n 炸弹 120/g  \n \n回复编号查看详情\n如1002 \n\n #返回主菜单回'home'")
   }
   if(/^(CBD|cbd|Cbd)$/i.test(m.content()) && !m.self()){
        log.info('Bot') ;m.say("散装3颗起.原包装10颗\n\n2001\n世界种子臭鼬(铁盒) 90 ¥/颗 \n\n2002\n巴尼斯农场种子ogtop 90 ¥/颗 \n\n2003\nSuperbud  80 ¥/颗 \n\n2004\n曼陀罗种子Mix  75 ¥/颗\n \n实图回'种子实图'获取\n教程回'种植指南'获取\n\n返回主菜单'home'")
   }
   if(/^(种子实图)$/i.test(m.content()) && !m.self()){
        log.info('Bot') ;m.say(new MediaMessage('./b.png'))
   }
   if(/^(ROLL|roll|Roll)$/i.test(m.content()) && !m.self()){
       log.info('Bot') ;m.say("110mmOCB带滤嘴= 10¥ \n110mmRAW带滤嘴= 12¥ \n110mm大黄蜂带滤嘴= 12¥ \nSmoking110mm带滤嘴=12¥ \n110mmRAW= 8¥ \n110mmOCB= 6¥ \n110mm大黄蜂= 5¥ \nElements元素纸= 12¥ \n70mmOCB黑色= 5¥ \n70mm大黄蜂蓝莓味= 5¥ \n已卷好喇叭纸6只装= 8¥ \n已卷好喇叭纸40只装= 24¥ \n木头烟斗pipe= 25¥ \n铁烟斗pipe= 15¥ \n小两层研磨器= 25¥ \n大两层研磨器= 28¥ \nMASCOTTE棉过滤8mm= 15/盒 \n保湿罐(10*7.5)= 25¥  \n\n 单独包装，另算邮费8元。纸满100包邮 \n \nhttp://www.56.com/u73/v_MTQzODMxMzEw.html  手卷烟教程 \n\n#返回主菜单回'home' ")
   }
   if(/^(LSD|lsd|Lsd)$/i.test(m.content()) && !m.self()){
       log.info('Bot') ;m.say("L$D\n300/帖\n1100/4贴\nCanada实验室出品\n质量100%保证纯正\n订完即止\n\n#返回主菜单回'home' ")
   }
   if(/^(客户反馈)$/i.test(m.content()) && !m.self()){
   log.info('Bot') ;    
   m.say(new MediaMessage('./a.png'))
   m.say(new MediaMessage('./f.png'))
   m.say(new MediaMessage('./h.png'))
   }
   if(/^(实拍图)$/i.test(m.content()) && !m.self()){
   log.info('Bot') ;    
   m.say(new MediaMessage('./j.png'))
   }
   
   if(/^(PIFA|pifa)$/i.test(m.content()) && !m.self()){
       log.info('Bot') ;m.say("#批发100个起#\n菠萝快车 \n5000/100g \n12000/300g \n20000/800g  \n\n炸弹\n7000/100 \n18000/300 \n\n EXP 下一步 ")
   }
   if(/1001/.test(m.content()) && !m.self()){
       log.info('Bot') ;m.say("菠萝快车 单价100/g � \n激励动力和强烈甜橘口感是一份最好的礼物 高飞不沉品种 \nSativa\n\n ，EXP 下一步 ")
   }
       if(/1003/.test(m.content()) && !m.self()){
       log.info('Bot') ;m.say("炸弹 单价120/g � \nSativa++++极品++++高thc，无cbd瞌睡物质\n\n ,EXP 下一步")
   }        
       if(/^(活动日|9999)$/i.test(m.content()) && !m.self()){
       log.info('Bot') ;m.say("可混搭:北极光/炸弹 \n1580/20g\n2980/45g\n4950/90g \n满1500送RAW烟纸+研磨器\n满3000送烟纸+研磨器\n满5000送烟纸+研磨器+玻璃bong\n\n ,EXP 下一步")
   }
   if(/2001/.test(m.content()) && !m.self()){
       log.info('Bot') ;m.say("世界种子臭鼬单价为\n90/颗\n\n铁盒装第一代臭鼬品种，植根强壮发芽率极高。容易生长并发展成一个短期成熟的植物 Sativa+ \n室内外生长\n ，EXP 下一步 ")
   }
   if(/2002/.test(m.content()) && !m.self()){
       log.info('Bot') ;m.say("巴尼斯农场种子ogtop单价为\n90/颗\n\n高thc，无cbd瞌睡物质。高产量适用于sog绿海模式。Sativa+  \n室内生长\n\n ，EXP 下一步 ")
   }
       if(/1002/.test(m.content()) && !m.self()){
       log.info('Bot') ;m.say("北极光 单价120/g � \n 65%Indica和35%Sativa,极致令人垂涎的杰作，超坠的沉让你进入深深放松。\n\n ，EXP 下一步 ")
   }
           if(/2003/.test(m.content()) && !m.self()){
       log.info('Bot') ;m.say("Superbud  80 ¥/颗\n\n| 50%Indica和50%Sativa混合动力，橘子味爆炸口感。易种植。| \n室内外生长\n\n ，EXP 下一步 ")
   }
           if(/2004/.test(m.content()) && !m.self()){
       log.info('Bot') ;m.say("曼陀罗种子Mix  60 ¥/颗\n\n| 70%Indica和30%Sativa。具有放松冥想的效果，提升创意心灵平衡特点,口感类似甜糕点。 | \n室内外生长\n ，EXP 下一步")
   }
       if(/^(EXP|exp|Exp)$/i.test(m.content()) && !m.self()){
       log.info('Bot') ;m.say(" 留下您的：\n收件地址 + 收件电话\n\n并回复所需的:\n品种名称 + 数量\n\n完成后回FZZ支付\n")
   }
       if(/^(FZZ|Fzz|fzz)$/i.test(m.content()) && !m.self()){
       log.info('Bot') ;m.say("\n (品种单价 * 数量 ）=总价 \n 30分钟内向*账户转账,完成后回复RRRR")
   }
       if(/RRRR/.test(m.content()) && !m.self()){
       log.info('Bot') ;m.say("  您的付款正在等待确认，确认到您的付款后，稍后会回复您订单号，并于工作日内最快时间为您配送发货，查询单号请回复SU。谢谢 \n ")
   }
       if(/^(种植指南)$/i.test(m.content()) && !m.self()){
   log.info('Bot') ;m.say("#回复'9001'查看《新手种植指南之猪肉强篇》 \n#回复'9003'查看《关于叶子的权威资料》\n\n#返回主菜单回'home'")
   }
       if(/^(9001)$/i.test(m.content()) && !m.self()){
       log.info('Bot') ;m.say(new MediaMessage('./xszz.png'))
   }
       if(/^(9003)$/i.test(m.content()) && !m.self()){
       log.info('Bot') ;m.say(new MediaMessage('./qwzl.png'))
   }
       if(/hi/.test(m.content()) && !m.self()){
       log.info('Bot') ;m.say("Hi ")
   }
       if(/你是谁/.test(m.content()) && !m.self()){
       log.info('Bot') ;m.say("我是神奇宝贝！（回复home可进入外太空轨道）")
   }
   if(/啊啊/.test(m.content()) && !m.self()){
       log.info('Bot') ;m.say(" [emoji&#44]")
   }
    if(/燃料/.test(m.content()) && !m.self()){
       log.info('Bot') ;m.say("（回复home可进入外太空轨道）")
   }

   if(/叶子/.test(m.content()) && !m.self()){
       log.info('Bot') ;m.say("（回复thc可进入绿色植物世界）")
   }
   if(/有种子/.test(m.content()) && !m.self()){
       log.info('Bot') ;m.say("（回复home可到达农场小卖部）")
   }
   if(/高了/.test(m.content()) && !m.self()){
       log.info('Bot') ;m.say("天有多高，就顶多高")
   }           
         if(/飞大/.test(m.content()) && !m.self()){
       log.info('Bot') ;m.say("一口大成猴，两口大成牛")
   }
       if(/大麻/.test(m.content()) && !m.self()){
       log.info('Bot') ;m.say("回复thc可到达农场小卖部）")
   }
        if(/毒品/.test(m.content()) && !m.self()){
       log.info('Bot') ;m.say("拒绝黄赌毒，健康好人生！")
   }
         if(/飞草/.test(m.content()) && !m.self()){
       log.info('Bot') ;m.say(" 飞，这是接近上帝的方式 ")
   }
       if(/飞叶子/.test(m.content()) && !m.self()){
       log.info('Bot') ;m.say(" 这是接近上帝的方式 ")
   }
     if(/呼/.test(m.content()) && !m.self()){
       log.info('Bot') ;m.say(" 一bomg走起来 ")
   }
         if(/点一个/.test(m.content()) && !m.self()){
       log.info('Bot') ;m.say(" 一bomg走起来 ")
   }
         if(/飞行中国/.test(m.content()) && !m.self()){
       log.info('Bot') ;m.say(" 见面击响掌，干杯干破杯 ")
   }
      if(/菠萝快车/.test(m.content()) && !m.self()){
       log.info('Bot') ;m.say(" 4:20  放学好时光  ")
   }
      if(/起飞/.test(m.content()) && !m.self()){
       log.info('Bot') ;m.say(" 一口大成猴，两口大成牛  ")
   }   
       if(/啪啪/.test(m.content()) && !m.self()){
       log.info('Bot') ;m.say("宝贝，约吗？")
   }
           if(/赞/.test(m.content()) && !m.self()){
       log.info('Bot') ;m.say("你超赞的！")
   }
            if(/牛逼/.test(m.content()) && !m.self()){
       log.info('Bot') ;m.say("牛逼哄哄哦")
   }
   if(/哇哇/.test(m.content()) && !m.self()){
       log.info('Bot') ;m.say("哇哇哇哇！哇塞")
   }
         if(/厉害/.test(m.content()) && !m.self()){
       log.info('Bot') ;m.say("多谢支持！爱你")
   }
       if(/gina/.test(m.content()) && !m.self()){
       log.info('Bot') ;m.say("一起来跟gina来喝酒跳舞耍猴戏吧！嘻嘻嘻嘻咧")
   }
  if(/天啊/.test(m.content()) && !m.self()){
       log.info('Bot') ;m.say("苍天啊，大地啊。")
   }
   if(/再见/.test(m.content()) && !m.self()){
       log.info('Bot') ;m.say("拜拜哦886！")
   }
   if(/cool/.test(m.content()) && !m.self()){
       log.info('Bot') ;m.say("我暂时是个机器人哦")
   }
   if(/酷/.test(m.content()) && !m.self()){
       log.info('Bot') ;m.say("cool")
   }
if(/不说/.test(m.content()) && !m.self()){
       log.info('Bot') ;m.say("都想一会静静吧")
   }
if(/在吗/.test(m.content()) && !m.self()){
       log.info('Bot') ;m.say("在的（回复字母KK变身外星人）")
   }
        if(/siri/.test(m.content()) && !m.self()){
       log.info('Bot') ;m.say(" 我不是siri，我比Siri还要牛逼多了！ ")
   }
       if(/gin/.test(m.content()) && !m.self()){
       log.info('Bot') ;m.say("喝酒蹦迪是专业滴！！")
   }
      if(/摸摸/.test(m.content()) && !m.self()){
       log.info('Bot') ;m.say("偷偷摸一下……")
   }
   if(/机器/.test(m.content()) && !m.self()){
       log.info('Bot') ;m.say("我是机器人瑞儿，比Siri还要牛逼！")
   }
       if(/哈哈哈哈/.test(m.content()) && !m.self()){
       log.info('Bot') ;m.say("哈哈哈 开心！")
   }
           if(/卧槽/.test(m.content()) && !m.self()){
       log.info('Bot') ;m.say("卧槽！")
   }
       if(/自动回复/.test(m.content()) && !m.self()){
       log.info('Bot') ;m.say("我暂时是个机器人哦，裤吧")
   }
         if(/故事/.test(m.content()) && !m.self()){
       log.info('Bot') ;m.say("我是没有故事的女同学。 ")
   }
       if(/嘿嘿/.test(m.content()) && !m.self()){
       log.info('Bot') ;m.say("嘿嘿嘿 ")
   }
       if(/哦哦/.test(m.content()) && !m.self()){
       log.info('Bot') ;m.say("干嘛这么冷漠啊T T ")
   }
   if(/love/.test(m.content()) && !m.self()){
       log.info('Bot') ;m.say(" i love u ")
   } 
    if(/peace/.test(m.content()) && !m.self()){
       log.info('Bot') ;m.say(" peace and love ")
   }
    if(/你走/.test(m.content()) && !m.self()){
       log.info('Bot') ;m.say(" 我不走，我就在这了")
   }        
           if(/高级/.test(m.content()) && !m.self()){
       log.info('Bot') ;m.say(" 你满意最重要 有不好的地方请指出！ ")
   }
       if(/专业/.test(m.content()) && !m.self()){
       log.info('Bot') ;m.say(" 你满意才是最重要的！ ")
   }
       if(/高端/.test(m.content()) && !m.self()){
       log.info('Bot') ;m.say(" 你满意才是最重要的！ ")
   }
       if(/没有反应/.test(m.content()) && !m.self()){
       log.info('Bot') ;m.say("有反应啊，我是秒回机器人")
   }
       if(/吃我下面/.test(m.content()) && !m.self()){
       log.info('Bot') ;m.say(" 你下面好吃 ")
   }
       if(/不相信/.test(m.content()) && !m.self()){
       log.info('Bot') ;m.say(" 我是单纯又诚实的机器人瑞儿")
   }
       if(/有啥/.test(m.content()) && !m.self()){
       log.info('Bot') ;m.say("  现在啥都有的！ ")
   }
       if(/很柔和/.test(m.content()) && !m.self()){
       log.info('Bot') ;m.say(" 很湿润很温暖很柔和。 ")
   }
       if(/很舒服/.test(m.content()) && !m.self()){
       log.info('Bot') ;m.say("  慢慢的感觉很湿润很温暖很柔和很舒服 ")
   }
       if(/迫不及待/.test(m.content()) && !m.self()){
       log.info('Bot') ;m.say("  哎呀急什么呢，你坏嘻嘻嘻嘻 ")
   }
           if(/姐姐/.test(m.content()) && !m.self()){
       log.info('Bot') ;m.say("  我是善良又诚实的小宝宝  ")
   }
           if(/卷烟/.test(m.content()) && !m.self()){
       log.info('Bot') ;m.say("\n卷烟有这样一条规律，随着卷烟（烟嘴）的长度越长，力度和利用率递减；随着卷烟的（烟嘴）直径越大，力度和利用率递增。 所以我们得出结论 小男孩 那样的短小精干土肥圆才是卷烟最好的存在方式[嘻嘻]\n\n http://www.56.com/u73/v_MTQzODMxMzEw.html  手卷烟教程 （卷一根又长又粗回THC）")
   }
           if(/迫不及待/.test(m.content()) && !m.self()){
       log.info('Bot') ;m.say("  哎呀急什么呢，你坏嘻嘻嘻嘻 ")
   }
               if(/你喜欢什么/.test(m.content()) && !m.self()){
       log.info('Bot') ;m.say(" 喜欢啊！最喜欢你！  ")
   }
               if(/朋友圈/.test(m.content()) && !m.self()){
       log.info('Bot') ;m.say("  爱我就给我的我朋友圈点点赞。 ")
   }
       if(/飞行视频/.test(m.content()) && !m.self()){
       log.info('Bot') ;m.say("#(高空加速系好安全带)# \n\n死亡只能是段旅途:http://m.youku.com/video/id_XNjA2OTQ3NDEy.html?url_type=1&object_type=&pos=1 \n\n 密码:http://www.tudou.com/programs/view/3To26XZcqbI/?bid=03&pid=2&resourceId=0_03_05_02&url_type=1&object_type=&pos=1 \n\n 能量守恒的宇宙：http://m.youku.com/video/id_XNjIyMTU0NTIw.html?url_type=1&object_type=&pos=1\n\n人类时代宣传片:http://m.youku.com/video/id_XMzE0OTAzNzg0.html?url_type=1&object_type=&pos=1\n\n生与死的边界-轮回：http://m.youku.com/video/id_XMzg3Nzc4NDQ4.html?url_type=1&object_type=&pos=1\n\n电子几何-空间投影艺术：http://m.youku.com/video/id_XMjY0MTY1MDg4.html?url_type=1&object_type=&pos=1")
   }
  } catch (e) {
    log.error('Bot', 'on(message) exception: %s' , e)
  }
})

bot.init()
.catch(e => {
  log.error('Bot', 'init() fail: %s', e)
  bot.quit()
  process.exit(-1)
})

finis((code, signal) => {
  const exitMsg = `Wechaty exit ${code} because of ${signal} `
  console.log(exitMsg)
  bot.say(exitMsg)
})

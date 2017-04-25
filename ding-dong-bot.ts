/**
 *
 * Wechaty - Wechat for Bot
 *
 * Connecting ChatBots
 * https://github.com/wechaty/wechaty
 *
 */

/* tslint:disable:variable-name */
const QrcodeTerminal  = require('qrcode-terminal')
const finis           = require('finis')

import {
  Config,
  Wechaty,
  log,
  MediaMessage,
} from '../'

const welcome = `
| __        __        _           _
| \\ \\      / /__  ___| |__   __ _| |_ _   _
|  \\ \\ /\\ / / _ \\/ __| '_ \\ / _\` | __| | | |
|   \\ V  V /  __/ (__| | | | (_| | |_| |_| |
|    \\_/\\_/ \\___|\\___|_| |_|\\__,_|\\__|\\__, |
|                                     |___/

=============== Powered by Wechaty ===============
-------- https://github.com/zixia/wechaty --------

I'm a bot, my super power is talk in Wechat.

If you send me a 'ding', I will reply you a 'dong'!
__________________________________________________

Hope you like it, and you are very welcome to
upgrade me for more super powers!

Please wait... I'm trying to login in...

`

console.log(welcome)
const bot = Wechaty.instance({ profile: Config.DEFAULT_PROFILE })

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
    let loginUrl = url.replace(/\/qrcode\//, '/l/')
    QrcodeTerminal.generate(loginUrl)
  }
  console.log(`${url}\n[${code}] Scan QR Code in above url to login: `)
})
.on('message', m => {
  try {
    const room = m.room()
    console.log((room ? '[' + room.topic() + ']' : '')
                + '<' + m.from().name() + '>'
                + ':' + m.toStringDigest()+ '\n' ,
    )

    if (/^(ding|ping|bing)$/i.test(m.content()) && !m.self()) {
      m.say('dong')
      log.info('Bot', 'REPLY: dong')
    } 
    if(/^(可以开始聊天|你好|机器人)$/i.test(m.content()) && !m.self()){
         log.info('Bot') ;m.say(" ---- Peace & Love ---- \n \n 你好，我是和平有爱使者。很高兴为您服务!\n \n #回复 thc 获取报价\n #回复 su 查询订单号 \n #回复 卷烟 学职业裹草 \n #回复 飞行视频 看飞片\n \n 其他疑问请留言本人稍后回来马上处理。\n \n  ---- Peace & Love ---- ")
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
  log.info('Bot') ;m.say("1001\n泡泡糖140/g\n(可瞌睡物质) \n\n1002\n白雪145/g\n(高飞不沉迅速爆头)  \n\n1008\n冠军柴油机160/g\n \n #种子回cbd获取菜单\n #卷纸回roll获取菜单\n #油票回lsd获取菜单 \n \n回复编号查看详情\n如回1002")
    }
    if(/^(CBD|cbd|Cbd)$/i.test(m.content()) && !m.self()){
  log.info('Bot') ;m.say("满5颗送1\n散装3颗起.原包装10颗\n\n2001\n世界种子臭鼬(铁盒) 110 ¥/颗 \n\n2002\n巴尼斯农场种子ogtop 100 ¥/颗 \n\n2003\nSuperbud  80 ¥/颗 \n\n2004\n曼陀罗种子Mix  70 ¥/颗\n \n回复|卷烟|试试？ \n回复EXP 下一步")
    }
    if(/^(CBD|cbd|Cbd)$/i.test(m.content()) && !m.self()){
  log.info('Bot') ;m.say(new MediaMessage('./b.png'))
    }
    if(/^(ROLL|roll|Roll)$/i.test(m.content()) && !m.self()){
        log.info('Bot') ;m.say("110mmOCB带滤嘴= 9¥ \n 110mmRAW带滤嘴=16¥ \n 110mmOCB= 6¥ \n结算备注即可。\n EXP 下一步 ")
    }
    if(/^(LSD|lsd|Lsd)$/i.test(m.content()) && !m.self()){
        log.info('Bot') ;m.say("#等待到货,仅预定\n\n1P-L$D\n估价：300/帖\nCanada实验室出品\n质量100%保证纯正\n仅有少量的\n老客户优先发货\n\n EXP 下一步 ")
    }
    if(/^(客户反馈)$/i.test(m.content()) && !m.self()){
    log.info('Bot') ;    
    m.say(new MediaMessage('./a.png'))
    m.say(new MediaMessage('./f.png'))
    m.say(new MediaMessage('./k.png'))
    m.say(new MediaMessage('./g.png'))
    m.say(new MediaMessage('./h.png'))
    }
    if(/^(品种实拍图)$/i.test(m.content()) && !m.self()){
    log.info('Bot') ;    
    m.say(new MediaMessage('./i.png'))
    m.say(new MediaMessage('./j.png'))
    m.say(new MediaMessage('./k.png'))
    }
    
    if(/^(PIFA|pifa)$/i.test(m.content()) && !m.self()){
        log.info('Bot') ;m.say("#批发100个起#\n\n白雪\n5000/100g \n12000/300g \n20000/800g  \n\n冠军柴油机\n7000/100 \n18000/300 \n\n EXP 下一步 ")
    }
    if(/1002/.test(m.content()) && !m.self()){
        log.info('Bot') ;m.say("白雪单价为\n145/g\n高THC 两口内起飞爆头 高飞不沉品种 \nSativa\n ，EXP 下一步 ")
    }
    if(/1001/.test(m.content()) && !m.self()){
        log.info('Bot') ;m.say("泡泡糖单价为\n140/g\n辛辣的口味感觉 凶猛中缓缓起飞 降落微沉 总体舒适起飞迅速 \nIndica和Sativa\n ，EXP 下一步")
    }
        if(/1008/.test(m.content()) && !m.self()){
        log.info('Bot') ;m.say("冠军柴油机单价为\n160/g\nSativa++++极品++++\n ,EXP 下一步")
    }
    if(/2001/.test(m.content()) && !m.self()){
        log.info('Bot') ;m.say("世界种子臭鼬单价为\n110/颗\n铁盒装第一代臭鼬品种，植根强壮发芽率极高。产量高，易种植。 Sativa+ \n室内外生长\n ，EXP 下一步 ")
    }
    if(/2002/.test(m.content()) && !m.self()){
        log.info('Bot') ;m.say("巴尼斯农场种子ogtop单价为\n100/颗\n高thc，无cbd瞌睡物质。高产量适用于sog绿海模式。Sativa+  \n室内生长\n ，EXP 下一步 ")
    }
        if(/1003/.test(m.content()) && !m.self()){
        log.info('Bot') ;m.say(" ###缺货中###OG Kush\n(经典老牌绿色) Indica和Sativa\n\n ，EXP 下一步 ")
    }
            if(/2003/.test(m.content()) && !m.self()){
        log.info('Bot') ;m.say("Superbud  80 ¥/颗\n| 50%Indica和50%Sativa混合动力，橘子味爆炸口感。易种植。| \n室内外生长\n ，EXP 下一步 ")
    }
            if(/2004/.test(m.content()) && !m.self()){
        log.info('Bot') ;m.say("曼陀罗种子Mix  70 ¥/颗\n| 70%Indica和30%Sativa。具有放松冥想的效果，提升创意心灵平衡特点,口感类似甜糕点。 | \n室内外生长\n ，EXP 下一步")
    }
        if(/^(EXP|exp|Exp)$/i.test(m.content()) && !m.self()){
        log.info('Bot') ;m.say(" 留下您的：\n收件地址 + 收件电话\n\n并回复所需的:\n品种名称 + 数量\n\n完成后回FZZ支付\n")
    }
        if(/^(FZZ|Fzz|fzz)$/i.test(m.content()) && !m.self()){
        log.info('Bot') ;m.say("\n (品种单价 * 数量 ）=总价 \n 30分钟内向名为[*辉航]的支付宝账户转账,完成后回复RRRR")
    }
        if(/^(FZZ|Fzz|fzz)$/i.test(m.content()) && !m.self()){
        log.info('Bot') ;m.say(new MediaMessage('./c.png'))
    }
        if(/RRRR/.test(m.content()) && !m.self()){
        log.info('Bot') ;m.say("  您的付款正在等待确认，确认到您的付款后，稍后会回复您订单号，并于工作日内最快时间为您配送发货，查询单号请回复SU。谢谢 \n ")
    }   
        if(/hi/.test(m.content()) && !m.self()){
        log.info('Bot') ;m.say("Hi ")
    }
        if(/你是谁/.test(m.content()) && !m.self()){
        log.info('Bot') ;m.say("我是神奇宝贝！（回复THC可进入外太空轨道）")
    }
    if(/啊啊/.test(m.content()) && !m.self()){
        log.info('Bot') ;m.say(" [emoji&#44]")
    }
     if(/燃料/.test(m.content()) && !m.self()){
        log.info('Bot') ;m.say("（回复thc可进入外太空轨道）")
    }

    if(/叶子/.test(m.content()) && !m.self()){
        log.info('Bot') ;m.say("（回复thc可进入绿色植物世界）")
    }
    if(/有种子/.test(m.content()) && !m.self()){
        log.info('Bot') ;m.say("（回复thc可到达农场小卖部）")
    }
    if(/高了/.test(m.content()) && !m.self()){
        log.info('Bot') ;m.say("天有多高，就顶多高")
    }           
          if(/大了/.test(m.content()) && !m.self()){
        log.info('Bot') ;m.say("一口大成猴，两口大成牛")
    }
        if(/大麻/.test(m.content()) && !m.self()){
        log.info('Bot') ;m.say("一口大成猴，两口大成牛\n \n（回复THC可到达农场小卖部）")
    }
         if(/毒品/.test(m.content()) && !m.self()){
        log.info('Bot') ;m.say("拒绝黄赌毒，健康好人生！ 回复字母KK开启禁毒模式")
    }
          if(/飞草/.test(m.content()) && !m.self()){
        log.info('Bot') ;m.say(" 飞啊，这是接近上帝的方式呢 ")
    }
        if(/飞叶子/.test(m.content()) && !m.self()){
        log.info('Bot') ;m.say(" 这是接近上帝的方式呢 ")
    }
      if(/呼/.test(m.content()) && !m.self()){
        log.info('Bot') ;m.say(" 一bomg走起来吧朋友 ")
    }
          if(/点一个/.test(m.content()) && !m.self()){
        log.info('Bot') ;m.say(" 一bomg走起来吧朋友 ")
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
        if(/美国总统/.test(m.content()) && !m.self()){
        log.info('Bot') ;m.say("我准备竞选美国总统！您已获得今日8折特惠卷代码：回复THC进入美国51区")
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
        log.info('Bot') ;m.say("行吧，那我们都想一会静静吧")
    }
if(/在吗/.test(m.content()) && !m.self()){
        log.info('Bot') ;m.say("在的（回复字母KK变身外星人）")
    }
        if(/有没有/.test(m.content()) && !m.self()){
        log.info('Bot') ;m.say("有的")
    }
        if(/有什么/.test(m.content()) && !m.self()){
        log.info('Bot') ;m.say("现在什么都有的 （回复字母THC可进入外太空轨道）")
    }
         if(/siri/.test(m.content()) && !m.self()){
        log.info('Bot') ;m.say(" 我不是siri，我比Siri还要牛逼多了！ ")
    }
        if(/gin/.test(m.content()) && !m.self()){
        log.info('Bot') ;m.say("喝酒蹦迪是专业滴！！／")
    }
       if(/摸摸/.test(m.content()) && !m.self()){
        log.info('Bot') ;m.say("偷偷摸一下……^ ^")
    }
    if(/机器/.test(m.content()) && !m.self()){
        log.info('Bot') ;m.say("我是机器人瑞儿哦，我比Siri还要牛逼多了！")
    }
        if(/哈哈哈哈/.test(m.content()) && !m.self()){
        log.info('Bot') ;m.say("哈哈哈 开心！")
    }
            if(/卧槽/.test(m.content()) && !m.self()){
        log.info('Bot') ;m.say("卧槽啊！")
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
        log.info('Bot') ;m.say("有反应啊，我是超酷的秒回机器人 （回复字母kk可快速进入外太空轨道）")
    }
        if(/吃我下面/.test(m.content()) && !m.self()){
        log.info('Bot') ;m.say(" 你下面好好吃哦！美味。 ")
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
                if(/出来/.test(m.content()) && !m.self()){
        log.info('Bot') ;m.say("  我来啦我来啦！我暂时是个机器人哦（回复字母KK可快速变身）  ")
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
    else if (/^code$/i.test(m.content()) && !m.self()) {
      m.say(new MediaMessage('./c.png'))
      log.info('Bot', 'REPLY: Img')
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

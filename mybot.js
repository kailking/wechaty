const { Wechaty } = require('wechaty')

Wechaty.instance() // Singleton
.on('scan', (url, code) => {
  let loginUrl = url.replace('qrcode','l')
  require('qrcode-terminal').generate(loginUrl)
  console.log(`Scan QrCode to login: ${code}\n${url}`)})
.on('login',       user => console.log(`User ${user} logined`))
.on('message', async function(m){
    const contact = m.from()
    const content = m.content()
    const room = m.room()
     if(room){
        console.log(`|Room: ${room.topic()}|  |联系人: ${contact.name()}|  |\nMessage:${content}`)
    } else{
        console.log(`|姓名:${contact.name()}| |性别: ${contact.gender()}|\nMessage: ${content}\n`)
    }

    if(m.self()){
        return
    }
    if(/KK/.test(content)){
         m.say("我是有爱的和平使者。很高兴为您服务\n \n 回复大写字母 FT 使用自助下单系统，根据系统指示操作即可\n \n 已付款客户回复 SU 查询单号 \n \n如有其他疑问可以留言，本人回来第一时间处理，请放心使用 \n \n  ---- Peace & Love ----")
    }
    if(/kk/.test(content)){
         m.say("我是有爱的和平使者。很高兴为您服务\n \n 回复大写字母 FT 使用自助下单系统，根据系统指示操作即可\n \n 已付款客户回复 SU 查询单号 \n \n如有其他疑问可以留言，本人回来第一时间处理，请放心使用 \n \n  ---- Peace & Love ----")
    }

                    if(/SU/.test(content)){
                        m.say("    '物流查询系统' \n \n请回复6位订单号码，以获取您的物流单号\n")
    }
    if(/hello/.test(content)){
        m.say("hello how are you")
    }
    if(/FT/.test(content)){
  m.say("    '自助下单系统' \n \n     燃料：\nAAA:北极光130/g\n(THC和CBD) \nBBB:白寡妇140/g\n(高飞不沉)\n \n    种子： \nCCC:世界种子臭鼬\n(第一代冠军品种，铁盒装) \nDDD:室内外品种1974\n(室内外合适新手) \n \n 选择品种需回复前字母如\n 混合拿需多次回复编号\n如回复BBB即可")
    }

    if(/BBB/.test(content)){
        m.say("    '自助下单系统'  \n \n 目前白寡妇单价为\n140/g,（最低五个起发）\n高THC 高飞不沉品种 \n确认后，回复EXP进行结算品种及数量，返回上一级回复FT")
    }

    if(/AAA/.test(content)){
        m.say("    '自助下单系统' \n \n 目前北极光单价为\n130/g,（最低五个起发）\n高THC和CBD 降落沉，适合冥想用 \n确认后，回复EXP进行结算品种及数量，返回上一级回复FT")
    }

    if(/CCC/.test(content)){
        m.say("    '自助下单系统'  \n \n 目前世界种子臭鼬单价为\n110/颗,（最低三个起发，整盒原包装10颗）\n此款种子位铁盒装第一代臭鼬质量狠 \n确认后，回复EXP进行结算品种及数量，返回上一级回复FT")
    }

    if(/DDD/.test(content)){
        m.say("    '自助下单系统' \n \n 目前室内外品种1974单价为\n85/g,（最低三个起发，整盒原包装10颗）\n此款种子合适室内外种植，易于生长适合新手\n确认后，回复EXP进行结算品种及数量，返回上一级回复FT")
    }
        if(/EXP/.test(content)){
        m.say("    '已进入结算系统' \n\n留下您的：\n收件地址 + 收件电话\n\n并回复所需的:\n品种名称 + 数量\n\n完成后回FZZ支付\n(留地址无需理会自动回复)")
    }

    if(/FZZ/.test(content)){
        m.say("    '已进入结算系统' \n\n 您的地址已收到 \n 将所需(品种单价 * 数量 + 10邮费）=的总价 \n 向名为[李辉航]的支付宝账户:laozxvck@protonmail.com进行转账,完成后回复RRRR")
    }

    if(/RRRR/.test(content)){
        m.say("    '自助下单系统' \n 您的付款正在等待确认，确认到您的付款后，稍后会回复您订单号，并于工作日内最快时间为您配送发货，查询单号请回复SU。谢谢 \n ")
    }

                  
                  
                    if(/hi/.test(content)){
        m.say("Hi")
    }

      if(/Hi/.test(content)){
        m.say("Hi")
    }

    if(/你好/.test(content)){
        m.say("你好，我是大自然的和平使者")
    }
        if(/你是/.test(content)){
        m.say("我是神奇宝贝！")
    }


                   
                   
                    if(/啊/.test(content)){
        m.say(" emoji&#44")
    }
     if(/燃料/.test(content)){
        m.say("（回复字母KK可进入外太空轨道）")
    }

     if(/货/.test(content)){
        m.say("（回复字母KK可一键升空）")
    }

    if(/需要/.test(content)){
        m.say("（回复字母KK可进入自助快速下单系统）")
    }
    if(/叶子/.test(content)){
        m.say("（回复字母KK可进入绿色植物世界）")
    }
    if(/种子/.test(content)){
        m.say("（回复字母KK可到达农场小卖部）")
    }



         if(/高了/.test(content)){
        m.say("天有多高，就顶多高")
    }           
          if(/大了/.test(content)){
        m.say("一口大成猴，两口大成牛")
    }
         if(/毒/.test(content)){
        m.say("拒绝黄赌毒，健康好人生！ 回复字母KK开启禁毒模式")
    }
          if(/飞草/.test(content)){
        m.say(" 飞啊，这是接近上帝的方式呢 ")
    }
        if(/飞叶子/.test(content)){
        m.say(" 这是接近上帝的方式呢 ")
    }
      if(/呼/.test(content)){
        m.say(" 一bomg走起来吧朋友 ")
    }
          if(/点一个/.test(content)){
        m.say(" 一bomg走起来吧朋友 ")
    }
          if(/飞行中国/.test(content)){
        m.say(" 见面击响掌，干杯干破杯 ")
    }
       if(/420/.test(content)){
        m.say(" 4:20 ¥ 放学好时光  ")
    }
       if(/起飞/.test(content)){
        m.say(" 一口大成猴，两口大成牛  ")
    }




                    if(/操/.test(content)){
        m.say("请你轻一点好吗，疼")
    }
        if(/啪啪/.test(content)){
        m.say("宝贝，约吗？")
    }
            if(/赞/.test(content)){
        m.say("你超赞的！")
    }
             if(/牛逼/.test(content)){
        m.say("牛逼哄哄哦")
    }
    if(/哇/.test(content)){
        m.say("哇哇哇哇！哇塞")
    }
          if(/厉害/.test(content)){
        m.say("多谢支持！爱你")
    }
        if(/gina/.test(content)){
        m.say("一起来跟gina来喝酒跳舞耍猴戏吧！嘻嘻嘻嘻咧")
    }
   if(/天啊/.test(content)){
        m.say("苍天啊，大地啊。")
    }
        if(/毒枭/.test(content)){
        m.say("我准备竞选美国总统！今日7折特惠卷代码：kfclaji 回复字母FT进入美国51区")
    }
    if(/再见/.test(content)){
        m.say("拜拜哦886！")
    }
       if(/我想/.test(content)){
        m.say("你想的有点多，我很单纯我是个单纯的机器人哦")
    }
                if(/聊天/.test(content)){
        m.say("好好，你说")
    }
    if(/cool/.test(content)){
        m.say("我暂时是个机器人哦，裤吧")
    }

       if(/酷/.test(content)){
        m.say("cool")
    }
     if(/裤/.test(content)){
        m.say("脱！")
    }
         if(/脱光/.test(content)){
        m.say("不要 。会很爽的！  欸 ～ 今日7折特惠卷代码：kfclajio 回复字母FT开启禁毒模式")
    }
             if(/脱/.test(content)){
        m.say("害羞！！！！／")
    }
 if(/不说/.test(content)){
        m.say("行吧，那我们都想一会静静吧")
    }
if(/在/.test(content)){
        m.say("在的 我暂时是个机器人哦，裤吧（回复字母KK可进入自动爆炸模式）")
    }
        if(/有没/.test(content)){
        m.say("有的")
    }
        if(/有/.test(content)){
        m.say("有的")
    }
        if(/有什么/.test(content)){
        m.say("现在什么都有的 （回复字母KK可进入外太空轨道）")
    }
                if(/妈的/.test(content)){
        m.say("爸爸呀亲爹啊")
    }
                   if(/知道/.test(content)){
        m.say("你都知道啥啊？ 说点秘密给我听吧")
    }
                     if(/国外/.test(content)){
        m.say("国外的月亮是比较方")
    }

              if(/外国/.test(content)){
        m.say("外国的月亮是比较方")
    }
         if(/siri/.test(content)){
        m.say(" 我不是siri，我比Siri还要牛逼多了！ ")
    }
       if(/吃/.test(content)){
        m.say("吃点什么 吃点什么 ！／")
    }
           if(/吃饭/.test(content)){
        m.say("饭是好好吃的哟！ ！／")
    }
           if(/吃肉/.test(content)){
        m.say("肉要炸着吃哦！／")
    }
           if(/吃屎/.test(content)){
        m.say("美味！开心！")
    }
        if(/酒/.test(content)){
        m.say("干杯！ 走起！")
    }
        if(/喵/.test(content)){
        m.say("喵～～ 罐头呢！")
    }
       if(/不好/.test(content)){
        m.say("不好啦 。为什么？")
    }
        if(/gin/.test(content)){
        m.say("喝酒蹦迪是专业滴！！／")
    }
       if(/摸/.test(content)){
        m.say("偷偷摸一下……^ ^")
    }
        if(/人类/.test(content)){
        m.say("人类？我是机器人瑞儿哦")
    }
    if(/机器/.test(content)){
        m.say("我是机器人瑞儿哦，我比Siri还要牛逼多了！")
    }
        if(/哈哈/.test(content)){
        m.say("哈哈哈 笑什么呢这么开心 快给我说说")
    }
        if(/什么？/.test(content)){
        m.say("什么 ，是什么？")
    }
            if(/卧槽/.test(content)){
        m.say("卧槽啊！")
    }
        if(/自动回复/.test(content)){
        m.say("我暂时是个机器人哦，裤吧")
    }
          if(/故事/.test(content)){
        m.say("我是没有故事的女同学。 ")
    }
        if(/嘿嘿/.test(content)){
        m.say("嘿黑嘿嘿 ")
    }
        if(/哦哦/.test(content)){
        m.say("干嘛这么冷漠啊T T ")
    }
    if(/love/.test(content)){
        m.say(" i love u ")
    } 
     if(/peace/.test(content)){
        m.say(" peace and love ")
    }
        if(/等等/.test(content)){
        m.say(" 随时等你来支持我的！么么哒 ")
    }
            if(/不要/.test(content)){
        m.say(" 要嘛要嘛 ～ ")
    }
            if(/日/.test(content)){
        m.say(" 不要骂人好吗")
    }
     if(/你走/.test(content)){
        m.say(" 我不走，我就在这了")
    }        
            if(/高级/.test(content)){
        m.say(" 你满意最重要 有不好的地方请指出！ ")
    }
     if(/机长/.test(content)){
        m.say(" 我是小小机长！ 需要补充燃料回复KK可进入自助爆炸模式 ")
    }
        if(/专业/.test(content)){
        m.say(" 你满意才是最重要的！ ")
    }
        if(/高端/.test(content)){
        m.say(" 你满意才是最重要的！ ")
    }



                                                                   if(/200614/.test(content)){
                        m.say("'欢迎使用自助物流查询系统' \n \n你查询的6位订单号码物流单号为：19*****5040**韵达快递,仅用于系统测试")
                       }

                                                                   if(/200615/.test(content)){
                        m.say("'欢迎使用自助物流查询系统' \n \n你查询的6位订单号码物流单号为：19*****255***韵达快递,仅用于系统测试")
                       }

                                                                   if(/200618/.test(content)){
                        m.say("'欢迎使用自助物流查询系统' \n \n你查询的6位订单号码物流单号为：1901787815673韵达快递")
                       }


    if(/好吗/.test(content)){
        m.say("  啊 好不好呀 ？？")
    }
        if(/欠叼/.test(content)){
        m.say("  来啊，你牛有本事就来铞我！")
    }
        if(/没有反应/.test(content)){
        m.say("有反应啊，我是超酷的秒回机器人 （回复字母kk可快速进入外太空轨道）")
    }
        if(/撤回/.test(content)){
        m.say(" 干嘛要撤回见不得人的消息 ？")
    }
        if(/吃我下面/.test(content)){
        m.say(" 你下面好好吃哦！美味。 ")
    }
        if(/不相信/.test(content)){
        m.say(" 我是单纯又诚实的机器人瑞儿")
    }
        if(/有啥/.test(content)){
        m.say("  现在啥都有的！ ")
    }
        if(/很柔和/.test(content)){
        m.say(" 很湿润很温暖很柔和。 ")
    }
        if(/很舒服/.test(content)){
        m.say("  慢慢的感觉很湿润很温暖很柔和很舒服 ")
    }
        if(/迫不及待/.test(content)){
        m.say("  哎呀急什么呢，你坏嘻嘻嘻嘻 ")
    }
            if(/小姐姐/.test(content)){
        m.say("  我是善良又诚实的小宝宝  ")
    }
            if(/卷烟/.test(content)){
        m.say("http://www.56.com/u73/v_MTQzODMxMzEw.html  手卷烟教程  （回复字母kk可开启禁毒模式）")
    }
            if(/迫不及待/.test(content)){
        m.say("  哎呀急什么呢，你坏嘻嘻嘻嘻 ")
    }
                if(/你说说/.test(content)){
        m.say("  啊？ 我要说啥啊  ")
    }
                if(/出来/.test(content)){
        m.say("  我来啦我来啦！我暂时是个机器人哦（回复字母KK可快速变身）  ")
    }
                if(/你喜欢什么/.test(content)){
        m.say(" 喜欢啊！最喜欢你！  ")
    }
                if(/你喜欢谁/.test(content)){
        m.say("  最喜欢你！  ")
    }
                if(/朋友圈/.test(content)){
        m.say("  爱我就给我的我朋友圈点点赞。  ")
    }


  }

    
)
.init()
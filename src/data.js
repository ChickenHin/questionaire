if(!window.localStorage.Data) {
    let data = [];

    let add = (obj) => {
        data.push({
            "title": obj.title,
            "time": obj.time,
            "state": obj.state,
            "content": obj.content
        });
    };
    // 添加第一个问卷数据
    add({
        title: "饲养宠物情况问卷调查",//题目
        time: "2017-8-30",//截止日期
        state: 1,//状态 未发布：0 已发布：1 已结束：2
        content:[//主要内容
            {
                type: "checkbox",//问题类型
                question: "如果饲养宠物，您会选择",//问题
                required: false,//是否必填
                options: [
                    {
                        answer: "猫",//选项
                        num: 21//选项被选择的次数
                    },
                    {
                        answer: "狗",
                        num: 21
                    },
                    {
                        answer: "兔子",
                        num: 40
                    },
                    {
                        answer: "其他",
                        num: 30
                    }
                ]
            },
            {
                type: "radio",
                question: "您会给宠物买衣服吗",
                required: false,
                options: [
                    {
                        answer: "是",
                        num: 25
                    },
                    {
                        answer: "否",
                        num: 23
                    }
                ]
            },
            {
                type: "textarea",
                question: "为什么喜欢／不喜欢宠物",
                required: false,
                options: []
            }
        ]
    },
    );
    // 添加第二个问卷数据
    add({
        title: "关于手机品牌问卷调查",
        time: "2017-8-30",
        state: 0,
        content: [
        {
            type: "checkbox",
            question: "您使用的手机品牌为",
            required: false,
            options: [
            {
                answer: "苹果",
                num: 21
            },
            {
                answer: "华为",
                num: 21
            },
            {
                answer: "OPPO",
                num: 40
            },
            {
                answer: "其他",
                num: 30
            }
            ]
        }
        ]
    });
    // 把问卷数据存到缓存里
    localStorage.setItem('Data', JSON.stringify(data));
}
export default {
    // 返回数据对象
    show() {
        return JSON.parse(localStorage.getItem("Data"))
    },
    // 添加问卷
    add(obj) {
        let addArr = JSON.parse(localStorage.getItem('Data'));
        addArr.push(obj)
        localStorage.setItem('Data', JSON.stringify(addArr));
    },
    // 删除问卷
    del(index) {
        let delArr = JSON.parse(localStorage.getItem('Data'));
        delArr.splice(index,1);
        localStorage.setItem('Data', JSON.stringify(delArr));
    },
    // 更新问卷
    update(index,data) {
        let upArr = JSON.parse(localStorage.getItem('Data'));
        upArr.splice(index,1);
        upArr.splice(index,0,data);
        localStorage.setItem('Data', JSON.stringify(upArr));
    }
}
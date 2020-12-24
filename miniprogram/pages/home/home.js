// miniprogram/pages/home/home.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log('初始化数据')
        this.getMenuList()
    },
    getMenuList(){
        // 调用云函数[get_menu_list]
        wx.cloud.callFunction({
            name:'get_menu_list',
            success:result=>{
                console.log('get_menu_list',result)
            }
        })
    },





    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {
        // 停止下拉动作
        wx.stopPullDownRefresh()
    },




})
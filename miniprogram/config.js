// 家庭点餐 —— 全局配置（要切换模式，只改这一个文件即可）
module.exports = {
  // 家庭免支付模式：
  //   true  = 下单不收钱、也不需要扫桌码（适合家庭内部点餐）
  //   false = 恢复原商用模式（微信支付 + 必须扫桌码）
  familyFreeMode: true,

  // 是否显示价格：false = 隐藏菜单/结算/订单里所有 ¥ 价格（家庭免费点餐推荐）
  showPrice: false,

  // 是否显示「堂食/打包」选择：false = 隐藏（家庭点餐用不到）
  showOrderType: false
}

/**
 *
 * @author 
 *
 */
class DuiHuanItem extends eui.ItemRenderer {
    //    单例模式
    private static instance: DuiHuanItem = null;
    public static getInstance() {
        if(DuiHuanItem.instance == null) {
            DuiHuanItem.instance = new DuiHuanItem();
        }
        return DuiHuanItem.instance;
    }
    public good_img:eui.Group;
    public wupin_left:eui.Group;
    public wupin_right:eui.Group;
    public goods_cont:eui.Group;
    public constructor() {
        super();
        this.skinName = "DuiHuanSkin";
        // this.addEventListener(eui.UIEvent.CREATION_COMPLETE,this.eventListen,this);
    }
    // public eventListen(){
    //     // 兑换的物品
    //     this.good_img.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.showInstro,this);
    //     this.good_img.addEventListener(egret.TouchEvent.TOUCH_END,this.hideInstro,this);
    //     // 兑换所需的材料
    //     this.wupin_left.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.showInstro,this);
    //     this.wupin_left.addEventListener(egret.TouchEvent.TOUCH_END,this.hideInstro,this);
    //     this.wupin_right.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.showInstro,this);
    //     this.wupin_right.addEventListener(egret.TouchEvent.TOUCH_END,this.hideInstro,this);
    // }
    // // 显示物品使用说明
    // public showInstro(evt:TouchEvent){

    //     this.goods_cont.visible = true;
    //     egret.Tween.get(this.goods_cont).to({visible:true,scaleX:1.1,scaleY:1.1},200,egret.Ease.backOut);
    // }
    // // 隐藏物品使用说明
    // public hideInstro(){
    //     egret.Tween.get(this.goods_cont).to({visible:false,scaleX:0,scaleY:0},200,egret.Ease.backIn);
    // }
}
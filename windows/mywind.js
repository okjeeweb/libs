/**
 * User: Near
 * Date: 13-2-1
 * Time: 上午10:06
 * To change this template use File | Settings | File Templates.
 */
(function(){
window.myWin=function(o){
    var _t=this;
    var opt={
        WinTitle:"弹个痛快",
        DefaultBar:true,
        Css:"mywin.css",
        Dragable:false,
        BgShow:true,
        SourceHtml:"default Weclome!",
        BgClickable:true
    }

    for(var i in o)
    {
        if(typeof opt[i] !== undefined)
        {
            opt[i] = o[i];
        }
    }

    _t._css=document.createElement("link");
    _t._css.setAttribute("href",opt.Css);
    _t._css.setAttribute("rel","stylesheet");

    _t._self=document.createElement("div");
    _t._self.className="my-win";
    document.body.appendChild(this._self);

    _t._win=document.createElement("div");
    _t._win.className="my-win-container";

    _t._self.appendChild(this._win);

    if(opt.DefaultBar){

        _t._titlebar=document.createElement("div");
        _t._titlebar.className="my-win-title";
        _t._titlebar.innerHTML=opt.WinTitle;
        _t._win.appendChild(this._titlebar);

        _t._closebtn=document.createElement("div");
        _t._closebtn.className="my-win-close";
        _t._win.appendChild(this._closebtn);
        _t._closebtn.onclick=function(){
            _t.close();
        }
    }

    if(opt.BgShow){
        _t._bg=document.createElement("div");
        _t._bg.className="my-win-bg";
        _t._self.appendChild(this._bg);
        if(opt.BgClickable){
            _t._bg.onclick=function()
            {
                _t.close();
            }
        }
    }
    document.getElementsByTagName("head")[0].appendChild(this._css);

    if(typeof opt.SourceHtml === "object")
    {
        _t._win.appendChild(opt.SourceHtml);
        _t._win.style.width=opt.SourceHtml.clientWidth+"px";
    }
    else if( typeof opt.SourceHtml === "string")
    {
        _t._win.innerHTML += opt.SourceHtml;
    }
    else
    {
        alert("SourceHtml Error!");
        return;
    }

    this.close = function (){
        _t._self.style.display = "none";
    }

    this.open = function (){
        _t._self.style.display = "block";
    }

    this.close();

}
})()
/**
 * Created with JetBrains WebStorm.
 * User: Near
 * Date: 13-1-31
 * Time: 上午10:18
 * Ver 1.0
 */
(function(){
    window.browersFilter=function(userList,CallBack)
    {
        var List = {
            firefox:8,
            chrome:12,
            safari:2,
            ie:6,
            opera:6
        };

        for(var i in userList)
        {
            if (undefined == typeof List[i]) {
                List.prototype[i] = userList[i];
            }
            else {
                List[i] = userList[i];
            }
        }

        var currentBrower={
            brower:"",
            version:0,
            entery:true
        }

        var info=window.navigator.userAgent,k;

        if(info.indexOf("AppleWebKit")>0)
        {
            if(/Chrome/.test(info))
            {
                currentBrower.brower="chrome";
                currentBrower.version=/Chrome\/(\d+)/.exec(info)[1];
            }
            else
            {
                currentBrower.brower="safari";
                currentBrower.version=/Version\/(\d+)/.exec(info)[1];
            }
        }
        else
        {
            var m=info.match(/(MSIE\s\d+)|(Firefox\/\d+)|(Opera\/\d+)/);

            m=m[0];
            m.toString();

            if(typeof m == null)
            {
                currentBrower.brower="unkown";
                currentBrower.version=0;
            }
            else if(/MSIE/.test(m))
            {
                currentBrower.brower="ie";
                currentBrower.version=/MSIE\s(\d+)/.exec(m)[1];
            }
            else if(/Firefox/.test(m))
            {
                currentBrower.brower="firefox";
                currentBrower.version=/Firefox\/(\d+)/.exec(m)[1];
            }
            else if(/Opera/.test(m))
            {
                currentBrower.brower="opera";
                currentBrower.version=/Opera\/(\d+)/.exec(m)[1];
            }
        }

        if(currentBrower.brower!=="unkown")
        {
            currentBrower.entery=Result();
        }

        if(typeof CallBack == "function")
        {
            CallBack(currentBrower);
        }

        function Result()
        {
            return currentBrower.version>=List[currentBrower.brower];
        }
    }
})()

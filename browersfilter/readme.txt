1、
browersFilter浏览器过滤器
browersFilter(List,callback)
List为许可列表
默认为 firefox 版本 等于或高于8
ie 版本 等于或高于 6
chrome 版本 等于或高于 12
safari 版本 等于或高于 2
opera 版本 等于或高于 6
callback回调函数，附带参数
{
    brower：//浏览器名称 eg:firefox\chrome\ie\opera\safari
    version://浏览器版本 int
    entery: //是否验证通过
}
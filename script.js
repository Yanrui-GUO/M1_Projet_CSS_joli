function switch_style ( css_title ) {
var i ;
var link_tag = document.getElementsByTagName("link");
for (i = 0; i < link_tag.length ; i++ ) {
if ((link_tag[i].rel.indexOf( "stylesheet" ) != -1) ) {
link_tag[i].href = css_title;
}
}
}
let editor;
function init(storname){
    editor = ace.edit("editor");
    editor.session.setMode("ace/mode/html");
    editor.setTheme("ace/theme/twilight");
    editor.setOptions({
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: true
    });
    let htm=localStorage.getItem(storname);
    if(htm){
        editor.setValue(htm,-1);
    }
    sucaitrun(storname)
    editor.on('change', function() {
        sucaitrun(storname)            
    });

}

function sucaitrun(storname){
    var bianji=document.getElementById("iframe").contentWindow;
    var txt1     = editor.getValue();
    let basurl="<base href="+storname+"/ />";
    bianji.document.write(basurl+txt1); 
    bianji.document.close();
}

function sucatit(storname,url){
    $(".baocun").click(function() {
        localStorage.setItem(storname, editor.getValue());
        sucaitrun(storname)
        $('#iframe').innerHTML=editor.getValue();
        layer.msg("已保存,刷新或关闭网页数据不丢失！");
    });
    
    
    $(".nobaocun").click(function() {
        localStorage.removeItem(storname);
        layer.msg("已清除,刷新或重新打开将调用默认模板");
    });
    
    $(".xz").click(function() {
        window.open(url,"_blank");

    });
    
    $(".fuzhi").mouseover(function() {
        $(this).attr('data-clipboard-text',editor.getValue())
    });
    var clipboard = new ClipboardJS('.fuzhi')
    // 显示用户反馈/捕获复制/剪切操作后选择的内容
    clipboard.on('success', function (e) {
        layer.msg("已复制");
    })
    clipboard.on('error', function (e) {
        console.error('Action:', e.action);
        console.error('Trigger:', e.trigger);
    });
}

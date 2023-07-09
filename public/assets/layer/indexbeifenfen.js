let editor;
let page=1;
let currhist=0;
let selectemplates=1;
let islog="";
let vuehtml='<!DOCTYPE html>\n';
vuehtml+='<html>\n';
vuehtml+='<head>\n';
vuehtml+='<title>vue开发模板</title>\n';
vuehtml+='<meta charset="utf-8">\n';
vuehtml+='<link rel="stylesheet" href="https://www.sucait.cn/assets/soupath/reset2.css" >\n';
vuehtml+='</head>\n';
vuehtml+='<body>\n';
vuehtml+='	<div class="box" id="app">\n';
vuehtml+='		<div class="box-lt">\n';
vuehtml+='			<div class="box-one">\n';
vuehtml+='				<p class="box-one-p">点击格子</p>\n';
vuehtml+='				<div class="box-one-num">\n';
vuehtml+='					<span :class="{active:allselec.indexOf(index) != -1 }" v-for="index of aa" :key="index" @click="changeNum(index)">{{ setNumber(index) }}</span>\n';
vuehtml+='				</div>\n';
vuehtml+='			</div>\n';
vuehtml+='		</div>\n';
vuehtml+='	</div>\n';
vuehtml+='\n';
vuehtml+='	<script src="https://www.sucait.cn/assets/soupath/vue.min.js"></script>\n';
vuehtml+='	<script type="text/javascript">\n';
vuehtml+='		var app4 = new Vue({\n';
vuehtml+='			 el: "#app",\n';
vuehtml+='			 data: {\n';
vuehtml+='				aa:49,\n';
vuehtml+='				allselec:[],\n';
vuehtml+='			},\n';
vuehtml+='			methods:{\n';
vuehtml+='				changeNum(val){\n';
vuehtml+='					let arr = this.allselec;\n';
vuehtml+='					let index = arr.indexOf(val);\n';
vuehtml+='					if(index != -1){\n';
vuehtml+='						this.allselec.splice(index,1)\n';
vuehtml+='						return;\n';
vuehtml+='					}\n';
vuehtml+='					this.allselec.push(val);\n';
vuehtml+='				},\n';
vuehtml+='				setNumber(val){\n';
vuehtml+='					if(val < 10){\n';
vuehtml+='						val = "0"+val;\n';
vuehtml+='						return val;\n';
vuehtml+='					}\n';
vuehtml+='					return val;\n';
vuehtml+='				},\n';
vuehtml+='\n';
vuehtml+='			}\n';
vuehtml+='		})\n';
vuehtml+='	</script>\n';
vuehtml+='\n';
vuehtml+='<style>\n';
vuehtml+='	.box{\n';
vuehtml+='		width:100%;\n';
vuehtml+='		height:auto;\n';
vuehtml+='		display: table;\n';
vuehtml+='		margin:0 auto;\n';
vuehtml+='	}\n';
vuehtml+='	.box-one{\n';
vuehtml+='		width:240px;\n';
vuehtml+='		margin:0 auto;\n';
vuehtml+='		text-align:center;\n';
vuehtml+='	}\n';
vuehtml+='	.box-two{\n';
vuehtml+='		width:50%;\n';
vuehtml+='		float:right;	\n';
vuehtml+='	}\n';
vuehtml+='	.box-one-num>span{\n';
vuehtml+='		cursor:pointer;\n';
vuehtml+='		display:inline-block;\n';
vuehtml+='		width:30px;\n';
vuehtml+='		height:30px;\n';
vuehtml+='		border:1px solid #666;\n';
vuehtml+='		text-align:center;\n';
vuehtml+='		line-height:30px;\n';
vuehtml+='	}\n';
vuehtml+='	.box-one-num>.active{\n';
vuehtml+='		background:red;\n';
vuehtml+='		color:#fff;\n';
vuehtml+='		\n';
vuehtml+='	}\n';
vuehtml+='	.box-one-p{\n';
vuehtml+='		text-align:center;\n';
vuehtml+='		padding:20px 0;\n';
vuehtml+='	}\n';
vuehtml+='</style>\n';
vuehtml+='\n';
vuehtml+='\n';
vuehtml+='</body>\n';
vuehtml+='</html>\n';
var chunhtml='<!DOCTYPE html>\n';
chunhtml+='<html>\n';
chunhtml+='<head>\n';
chunhtml+='<meta charset="utf-8">\n';
chunhtml+='<title>纯净开发模板</title>\n';
chunhtml+='<script>\n';
chunhtml+='function myFunction() {\n';
chunhtml+='    document.getElementById("demo").innerHTML = "段落已被更改。";\n';
chunhtml+='}\n';
chunhtml+='</script>\n';
chunhtml+='<style>\n\n';
chunhtml+='</style>\n';
chunhtml+='</head>\n';
chunhtml+='\n';
chunhtml+='<body>\n';
chunhtml+='\n';
chunhtml+='<h2>Head 中的 JavaScript</h2>\n';
chunhtml+='\n';
chunhtml+='<p id="demo">一个段落。</p>\n';
chunhtml+='\n';
chunhtml+='<button type="button" onclick="myFunction()">试一试</button>\n';
chunhtml+='\n';
chunhtml+='</body>\n';
chunhtml+='</html>\n';
chunhtml+='\n';

var jqueryhtml='<!DOCTYPE html>\n';
jqueryhtml+='<html>\n';
jqueryhtml+='<head>\n';
jqueryhtml+='<meta charset="utf-8">\n';
jqueryhtml+='<title>jquery开发模板</title>\n';
jqueryhtml+='<script src="https://www.sucait.cn/assets/libs/jquery/dist/jquery.min.js"></script>\n';
jqueryhtml+='<script> \n';
jqueryhtml+='\n';
jqueryhtml+='$(document).ready(function(){\n';
jqueryhtml+='  $("button").click(function(){\n';
jqueryhtml+='    $("div").animate({left:"250px"});\n';
jqueryhtml+='  });\n';
jqueryhtml+='});\n';
jqueryhtml+='\n';
jqueryhtml+='</script> \n';
jqueryhtml+='\n';
jqueryhtml+='</head>\n';
jqueryhtml+='\n';
jqueryhtml+='<body>\n';
jqueryhtml+='\n';
jqueryhtml+='<button>开始动画</button>\n';
jqueryhtml+='<p>默认情况下，所有 HTML 元素的位置都是静态的，并且无法移动。如需对位置进行操作，记得首先把元素的 CSS position 属性设置为 relative、fixed 或 absolute。</p>\n';
jqueryhtml+='<div style="background:#98bf21;height:100px;width:100px;position:absolute;">\n';
jqueryhtml+='</div>\n';
jqueryhtml+='\n';
jqueryhtml+='</body>\n';
jqueryhtml+='\n';
jqueryhtml+='</html>\n';
jqueryhtml+='\n';

var boottem='<!DOCTYPE html>\n';
boottem+='<html>\n';
boottem+='<head>\n';
boottem+='<meta charset="utf-8">\n';
boottem+='<title>bootstrap开发模板</title>\n';
boottem+='    \n';
boottem+='<script src="https://www.sucait.cn/assets/libs/jquery/dist/jquery.min.js"></script>\n';
boottem+='<link rel="stylesheet" href="https://www.sucait.cn/assets/libs/bootstrap/dist/css/bootstrap.min.css" >\n';
boottem+='<script src="https://www.sucait.cn/assets/libs/bootstrap/dist/js/bootstrap.min.js"></script>\n';
boottem+='<script>\n';
boottem+='\n';
boottem+='</script>\n';
boottem+='</head>\n';
boottem+='\n';
boottem+='<body>\n';
boottem+='<div class="container">\n';
boottem+='    <div class="row" style="padding:15px;">\n';
boottem+='    \n';
boottem+='        <button type="button" class="btn btn-primary">Primary</button>\n';
boottem+='        <button type="button" class="btn btn-secondary">Secondary</button>\n';
boottem+='        <button type="button" class="btn btn-success">Success</button>\n';
boottem+='        <button type="button" class="btn btn-danger">Danger</button>\n';
boottem+='        <button type="button" class="btn btn-warning">Warning</button>\n';
boottem+='        <button type="button" class="btn btn-info">Info</button>\n';
boottem+='        <button type="button" class="btn btn-light">Light</button>\n';
boottem+='        <button type="button" class="btn btn-dark">Dark</button>\n';
boottem+='        <button type="button" class="btn btn-link">Link</button>\n';
boottem+='\n';
boottem+='    </div>\n';
boottem+='</div>\n';
boottem+='\n';
boottem+='\n';
boottem+='</body>\n';
boottem+='</html>\n';
boottem+='\n';

let lastClick = 0;
function lockClick(){
    var nowClick = new Date();
    if (lastClick === 0) {
        lastClick = nowClick;
        return true;
    } else {
        if (Math.round((nowClick.getTime() - lastClick.getTime())) > 1000) {
            lastClick = nowClick;
            return true;
        }
        else {
            lastClick = nowClick;
            return false
        }
    }
};


function init(id,codeid){
    if(codeid){
        localStorage.removeItem("wwww.sucait.cn");
    }
    currhist=id;
    getinitData(page,"")
    editor = ace.edit("editor");
    editor.session.setMode("ace/mode/html");
    editor.setTheme("ace/theme/twilight");
    editor.setOptions({
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: true
    });
    let htm=localStorage.getItem("wwww.sucait.cn");
    if(htm){
        editor.setValue(htm,-1);
    }
    sucaitrun()
    editor.on('change', function() {
        sucaitrun()            
    });
}

function getinitData(page,key=""){
    let html="<tr>";
    let pagehtml="";
    $.ajax({
        type:'post',
        url:"/index/Index/getPluginss",
        data:{page:page,key:key},
        success:function(res){

            let ress=JSON.parse(res);
            for(let i =0;i<ress.data.length;i++){
                
                html+="<th scope='row'>"+ress.data[i].title+"</th>";
                html+="<td>"+ress.data[i].descr+"</td>";
                html+="<td><pre>"+ress.data[i].linklinks+"</pre></td>";
                html+="<td><button class='btn page-link getscrlink' data-linshicon='"+ress.data[i].links+"'>插入</button></td></tr>";
            }

            for(let j =1;j<=ress.pagecount;j++){
                if(j==page){
                    pagehtml+="<li class='page-item active' data-page="+j+"><a class='page-link' href='javascript:void(0);'>"+String(j)+"</a></li>";
                    continue;
                }
                pagehtml+="<li class='page-item' data-page="+j+"><a class='page-link' href='javascript:void(0);'>"+String(j)+"</a></li>";
            }
            $("#plugdata").empty();
            $("#plugdata").append(html);

            $('#pagedata').empty();
            $('#pagedata').append(pagehtml);

        },
        error:function(XMLHttpRequest){
            
          console.log("网络不稳定或站内流量过大,请稍后再试！");
        },
      },'json');

}

function sucaitrun(){
    let bianji=document.getElementById("iframe").contentWindow;
    let txt1     = editor.getValue();
    bianji.document.write(txt1);
    bianji.document.close();
}

function savecode(){
    $.ajax({
        type:'post',
        url:"/index/Index/savenewCode",
        data:{content:JSON.stringify(editor.getValue())},
        success:function(res){
            console.log(res)
        },
        error:function(XMLHttpRequest){
          console.log("网络不稳定或站内流量过大,请稍后再试！");
        },
      },'json');

}

function updadownnum(type,id){
    $.ajax({
        type:'post',
        url:"/index/Index/updadownnum",
        data:{type:type,id:id},
        success:function(res){
            console.log(res)
        },
        error:function(XMLHttpRequest){
          console.log("网络不稳定或站内流量过大,请稍后再试！");
        },
      },'json');

}


function selectemplate(){
    let index=$('#selectemplate').val();
    if(index == 0){
        return;
    }
    $('#selecthis').val(0)
    selectemplates=index;
    if(index == 1){
        editor.setValue(chunhtml,-1);
    }
    if(index == 2){
        editor.setValue(vuehtml,-1);
    }
    if(index == 3){
        editor.setValue(jqueryhtml,-1);
    }
    if(index == 4){
        editor.setValue(boottem,-1);
    }
    
}



function selecopt(){
    let currselect=$('#selecthis').val();
    if(currselect==0){
        return;
    }
    $('#selectemplate').val(0)
    if(parseInt(currselect)!=parseInt(currhist)){
        currhist=currselect;
        $.ajax({
            type:'post',
            data:{id:currselect},
            url:"/index/Index/getHistCode",
            success:function(res){
                if(res.statu == 1){
                    editor.setValue(res.data,-1);
                    layer.msg("获取成功");
                }
            },
            error:function(XMLHttpRequest){
                layer.msg("网络不稳定或站内流量过大,请稍后再试！");
            },
        },'json');
    }

}

function sucatit(islogin,types){
    islog=islogin;
    $(".baocun").click(function() {
        localStorage.setItem("wwww.sucait.cn", editor.getValue());
        sucaitrun()
        $('#iframe').innerHTML=editor.getValue();
        layer.msg("已保存,刷新或关闭网页数据不丢失！",{time:3000});
        if(!islogin){
            setTimeout(function(){
                layer.msg('登录后，再点击保存是永久保存，下次在任意地<br>点登录仍然可以看到本次保存的记录', {
                    time: 9000000,
                    offset:"rb",
                    btn: ['去登录', '明白了'],
                    yes: function(){
                        window.open("/index/user/login.html","_blank");
                    }
                    ,btn2: function(){
                    layer.closeAll();
                    }
                });

            },3000)
        }else{
            savecode();
        }

    });
    
    
    $(".nobaocun").click(function() {
        localStorage.removeItem("wwww.sucait.cn");
        layer.msg("已清除,刷新或重新打开将调用默认模板");
    });
    
    $(".xz").click(function() {
        let blob = new Blob([editor.getValue()],{type:"text/plain;charset=utf-8"}); 
        saveAs(blob,"index.html");

        // 更新已发布的代码的下载记录
        if(types == 2){
            updadownnum(types,currhist);
        }

    });
    
    $(".fuzhi").mouseover(function() {
        $(this).attr('data-clipboard-text',editor.getValue())
    });

    $(".subkey").click(function(){

        getinitData(1,$('#keys').val())
    })



    $("body").on("click",".getscrlink",function(){

        let links =$(this).data("linshicon");

        let status=editor.find('<head>');
        if(status){
            editor.replace('<head>\n'+links);
        }else{
            status=editor.find('</body>');
            editor.replace(links+'\n</body>');
        }
        

    });
    
    $('body').on("click",'.page-item',function(){
        page =$(this).data("page");
        getinitData($(this).data("page"),$('#keys').val())
    })
    
    $('.impor-plu').click(function(){
        $('#myModalss').modal('show');
    })

    $('.subonline').click(function(){
        if(islogin){
            $('#myModalsss').modal('show');
        }else{
            layer.msg('请登录', {
                time: 9000000,
                offset:"center",
                btn: ['去登录', '明白了'],
                yes: function(){
                    window.open("/index/user/login.html","_blank");
                }
                ,btn2: function(){
                layer.closeAll();
                }
            });
        }
    })

    $('.subonlinecode').click(function(){

        if(!lockClick()){
            return false;
        }
        
        let htm=editor.getValue();
        let tit=$('#c-bios').val();
        let biaoq=$('#c-biao').val();
        let desc=$('#c-desc').val();
        let remark=$('#c-remark').val();

        if(!tit || !biaoq || !desc){
            layer.msg("请填写完整内容再提交");
        }

        if(islogin){
            $.ajax({
                type:'post',
                data:{htm:JSON.stringify(htm),tit:tit,biaoq:biaoq,desc:desc,remark:remark},
                url:"/index/Index/subcode",
                success:function(res){
                    if(res.statu == 1){
                        layer.msg(res.msg);
                    }else{
                        layer.msg(res.msg);
                    }
                },
                error:function(XMLHttpRequest){
                    layer.msg("网络不稳定或站内流量过大,请稍后再试！");
                },
            },'json');
            $('#myModalsss').modal('hide');
        }else{
            layer.msg('请登录后发布', {
                time: 9000000,
                offset:"rb",
                btn: ['去登录', '明白了'],
                yes: function(){
                    window.open("/index/user/login.html","_blank");
                }
                ,btn2: function(){
                layer.closeAll();
                }
            });
        }
    });



    $('.subsource').click(function(){
        layer.msg("新功能，正在内测中");
    })

    
    let clipboard = new ClipboardJS('.fuzhi')
    clipboard.on('success', function (e) {
        layer.msg("已复制");
    })
    clipboard.on('error', function (e) {
        console.error('Action:', e.action);
        console.error('Trigger:', e.trigger);
    });


    editor.commands.addCommand(
        {
            name: 'myCommand',//命令名称
            bindKey: {win: 'Ctrl-S',  mac: 'Command-S'},//快捷键
            exec: function(editor) {
                localStorage.setItem("wwww.sucait.cn", editor.getValue());
                layer.msg("已保存,刷新或关闭网页数据不丢失！",{time:3000});
                if(islogin){
                    savecode();
                }else{

                    if(!islogin){
                        setTimeout(function(){
                            layer.msg('登录后，再点击保存是永久保存，下次在任意地<br>点登录仍然可以看到本次保存的记录', {
                                time: 9000000,
                                offset:"rb",
                                btn: ['去登录', '明白了'],
                                yes: function(){
                    
                                    window.open("/index/user/login.html","_blank");
                                }
                                ,btn2: function(){
                                layer.closeAll();
                                }
                            });
            
                        },3000)
                    }

                }
            },
            readOnly: true // false 只读模式
        }

    );


    editor.commands.addCommand(
        {
            name: 'myCommands',//命令名称
            bindKey: {win: 'Ctrl-X',  mac: 'Command-X'},//快捷键
            exec: function(editor) {
                localStorage.removeItem("wwww.sucait.cn");
                layer.msg("已清除,刷新或重新打开将调用默认模板");

            },
            readOnly: true // false 只读模式
        }
    
    );

    $(document).keyup(function(event){
        if(event.keyCode ==13){
            getinitData(1,$('#keys').val()); 
        }
    });


}
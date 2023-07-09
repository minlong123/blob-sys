<?php

namespace app\index\controller;

use app\common\controller\Frontend;

use think\request;
use think\Config;
use think\Log;
use think\Db;

class Index extends Frontend
{

    protected $noNeedLogin = '*';
    protected $noNeedRight = '*';
    protected $layout = '';

    public function index()
    {

        return $this->view->fetch();
    }

    // public function tttaa(){
        
    //     $artlist=Db::name('arttt')
    //     ->order("createtime desc")
    //     ->select();
        
    //     foreach($artlist as $k=>$v){
                
    //           $newcon=str_replace("http://43.138.31.252:88","",$v['content']);
    //             Db::name('arttt')->where('id',$v['id'])->update(['content'=>$newcon]);
    //     }
        
        
    // }
    
    

    public function list()
    {
        $firstid=input("id")?intval(input("id")):"";
        $whee="deletetime is NULL ";
        $artlist=Db::name('arttt')
        ->field('id,name,desction')
        ->where($whee)
        ->order("createtime desc")
        ->select();

        // 获取当前页文章详情
        if(empty($firstid) && !empty($artlist)){
            $firstid=$artlist[0]['id'];
        }
        
        if(!empty($firstid)){

            $artcon=Db::name('arttt')->where("id",$firstid)->find();
            $artcon['day']=$this->getTiemss(date("Y-m-d H:i:s",$artcon['createtime']));
            $this->view->assign("artcon",$artcon);

            // 获取该文章的所有评论
            $othwhe="arttt_id = '$firstid' and types = 2 ";
            $comment=Db::name('message')
            ->where($othwhe)
            ->order("createtime desc")
            ->select();
            if(!empty($comment)){
                foreach($comment as $k=>$v){
                    $comment[$k]['createtime']=$this->getTiemss(date("Y-m-d H:i:s",$v['createtime']));
                }
            }

            Db::name('arttt')->where("id",$firstid)->update(['readnum'=>$artcon['readnum']+1]);
            $this->view->assign("comment",$comment);


        }else{
            $this->view->assign("artcon","");
            $this->view->assign("comment","");
        }
        $this->view->assign("artlist",$artlist);
        return $this->view->fetch();
    }



    public function getTiemss($ptime){

        $ptime = strtotime($ptime);
        $etime = time() - $ptime;
        if($etime < 1) return '刚刚';
        $interval = array (
            12 * 30 * 24 * 60 * 60  =>  '年前 ('.date('Y-m-d', $ptime).')',
            30 * 24 * 60 * 60       =>  '个月前 ('.date('m-d', $ptime).')',
            7 * 24 * 60 * 60        =>  '周前 ('.date('m-d', $ptime).')',
            24 * 60 * 60            =>  '天前',
            60 * 60                 =>  '小时前',
            60                      =>  '分钟前',
            1                       =>  '秒前'
        );

        foreach ($interval as $secs => $str) {
            $d = $etime / $secs;
            if ($d >= 1) {
                $r = round($d);
                return $r . $str;
            }
        };

    }


    // 留言
    public function setmessage(){

        $retdata=[
            'msg'=>'评论成功，待审核中',
            'url'=>'',
            'statu'=>'0',
            'data'=>'',
        ];
        if(request()->isAjax()){
            
            if(empty(input('username')) || empty(input('emails')) || empty(input('content'))){
                $retdata['statu']=0;
                $retdata['msg']="评价内容不完整";
                return $retdata;
            }


            $idssss=$this->auth->id;
            $request = Request::instance();
            $data=[
                'arttt_id'=>intval(input('id')),
                'name'=>input('username'),
                'emails'=>input('emails'),
                'types'=>1,
                'content'=>input('content'),
                'requstip'=>$request->ip(),
                'createtime'=>intval(time()),
                'updatetime'=>intval(time()),
            ];
            $result=Db::name('message')->insert($data);
            if($result){
                $retdata['statu']=1;
            }else{
                $retdata['statu']=0;
                $retdata['msg']="提交失败，请稍后再试";
            }
            return $retdata;
        }

    }




    public function about(){
        return $this->view->fetch();
    }


    // 手机端详情页
    public function detail(){

        $firstid=input("id")?intval(input("id")):"";
        if(!empty($firstid)){

            $artcon=Db::name('arttt')->where("id",$firstid)->find();
            $artcon['day']=$this->getTiemss(date("Y-m-d H:i:s",$artcon['createtime']));
            $this->view->assign("artcon",$artcon);

            // 获取该文章的所有评论
            $othwhe="arttt_id = '$firstid' and types = 2 ";
            $comment=Db::name('message')
            ->where($othwhe)
            ->order("createtime desc")
            ->select();
            if(!empty($comment)){
                foreach($comment as $k=>$v){
                    $comment[$k]['createtime']=$this->getTiemss(date("Y-m-d H:i:s",$v['createtime']));
                }
            }
            Db::name('arttt')->where("id",$firstid)->update(['readnum'=>$artcon['readnum']+1]);
            $this->view->assign("comment",$comment);

        }else{
            $this->view->assign("artcon","");
            $this->view->assign("comment","");
        }
        return $this->view->fetch();

    }


}

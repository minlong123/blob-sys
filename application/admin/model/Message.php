<?php

namespace app\admin\model;

use think\Model;


class Message extends Model
{

    

    

    // 表名
    protected $name = 'message';
    
    // 自动写入时间戳字段
    protected $autoWriteTimestamp = 'integer';

    // 定义时间戳字段名
    protected $createTime = 'createtime';
    protected $updateTime = 'updatetime';
    protected $deleteTime = false;

    // 追加属性
    protected $append = [
        'types_text'
    ];
    

    
    public function getTypesList()
    {
        return ['1' => __('Types 1'), '2' => __('Types 2')];
    }


    public function getTypesTextAttr($value, $data)
    {
        $value = $value ? $value : (isset($data['types']) ? $data['types'] : '');
        $list = $this->getTypesList();
        return isset($list[$value]) ? $list[$value] : '';
    }




}

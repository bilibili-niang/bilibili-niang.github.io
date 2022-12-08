单人流程:  
* 一,准备工作(只做一次):   
> 在工作区中打开git终端    
> 通过git init指令,初始化版本库    
> 通过git config user.name "姓名"  通过git config user.email "邮箱"  设置用户名和邮箱(不设置要挨骂)  
> 通过git config -l查看设置情况  
  
* 二,开发阶段(反复执行):  
> 编写代码  
> 通过git add 文件名称"/"git add ."添加文件到版本库的暂缓区中  
> 通过git commit -m "说明" 将暂缓区的文件添加到HEAD指针指向的分支中(默认只有一个分支,master分支,也成之为主分支 )  
注意点:    
> 不是写一句代码就add commit一次,应该是完成一个功能之后再add commit  
> commit时-m注释一定要认真编写,与当前提交内容保持一致,否则要挨骂  


单人使用git管理项目的好处:  
> 可以通过git status查看那些文件没有被管理,修改了哪些文件:红色(没有被管理或者被修改了),绿色(在暂缓区)  
> 可以通过git diff查看具体修改了那些代码  
> 可以通过git log/git reflog 查看项目演变历史  
> 可以通过git reset --hard 版本号 在任意版本之间切换  
> 无需备份多个文件,每次commit提交git会自动备份   

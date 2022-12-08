> 在`packagr.json`中,scripts里面写的是命令,可以方便我们在控制台中快捷操作,而非一个一个打出来,如:  
```json
{
  "name": "nj777",
  "version": "1.0.0",
  "description": "",
  "keywords": [],
  "main": "nj.js",
  "scripts": {
    "dev": "node nj.js name=lnj age=34"
  },
  "author": "",
  "license": "ISC"
}
```
如果写的是`dev`,那么在命令行中运行:
> npm run dev   
如果写的是`test`,那么运行时,不需要加`run`  
> npm test  
如果是`start`,那么也是不需要加run的:  
>  npm start











X
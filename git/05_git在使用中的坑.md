> 在项目中查看分支:

```shell
PS D:\githubClone\vue-tea> git branch -r
  origin/HEAD -> origin/master
  origin/master
```

或者:

```shell
PS D:\githubClone\vue-tea> git branch
* develop
  master
```

> 创建分支:

```shell
PS D:\githubClone\vue-tea> git branch develop
```

> 切换到指定分支:

```shell
PS D:\githubClone\vue-tea> git checkout develop
Switched to branch 'develop'
```

> 提交分支:

```shell
PS D:\githubClone\vue-tea>  git push --set-upstream origin develop
Total 0 (delta 0), reused 0 (delta 0), pack-reused 0
remote: Powered by GITEE.COM [GNK-6.4]
remote: Create a pull request for 'develop' on Gitee by visiting:
remote:     https://gitee.com/icestone9/vue-tea/pull/new/icestone9:develop...icestone9:master
To https://gitee.com/icestone9/vue-tea.git
 * [new branch]      develop -> develop
branch 'develop' set up to track 'origin/develop'.
PS D:\githubClone\vue-tea>  git push --set-upstream origin develop
Everything up-to-date
branch 'develop' set up to track 'origin/develop'.
PS D:\githubClone\vue-tea>
```


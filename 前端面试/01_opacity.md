#### 分析比较 opacity: 0、visibility: hidden、display: none 优劣和适用场景


- display: none (不占空间，不能点击)（场景，显示出原来这里不存在的结 构） 
- visibility: hidden（占据空间，不能点击）（场景：显示不会导致页面结 构发生变动，不会撑开） 
- opacity: 0（占据空间，可以点击）（场景：可以跟 transition 搭配）



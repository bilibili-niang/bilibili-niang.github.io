---
title: Lock(锁)

author: IceStone
created: '2020-04-08T15:00:08.144Z'
tags: java多线程

---

# Lock(锁)

* 从JDK5.0开始,java提供了更强大的线程同步机制--通过显式定义同步锁对象来实现同步.同步锁使用lock对象充当.
* java.util.concurrent.locks.Lock接口是控制多个线程对共享资源进行访问的工具.锁提供了对共享资源的独占访问,每次只能有一个线程对lock对象加锁,线程开始访问共享资源之前应当获得lock对象.
* ReentrantLock(可重入锁)类实现了Lock,它拥有与synchronized相同的并发性和内存语义,在实现线程安全的控制中,比较常用的是ReentrantLock,可以显示加锁,释放锁.
 
 
* synchronized与Lock的对比:

    * lock锁是显示锁(手动开启和关闭锁,别忘记关闭锁)synchronized是隐式锁,出了作用域自动释放
    * Lock只有代码块锁,synchronized有代码块锁和方法锁
    * 使用Lock锁,jvm将花费较少的时间来调度线程,性能更好.并且具有更好的扩展性(提供更多子类)
    * 优先使用顺序:

        * Lock >同步代码块(已经进入方法体,分配了相应资源) >同步方法(在方法体之外)



#!/bin/sh

# author: Mr.Jor
# date: 2023-06-25
# description: autostart 管理脚本


# source /etc/init.d/functions

# 判断参数是否合法
if [ $# -ne 1 ];then
	echo "输入参数不合法"
	echo "usage: ./lanuch.sh <start|stop|restart|status>"
	exit
fi

pwd_dir=$(cd $(dirname $0);pwd)
dir=$HOME/.cache/bspwm_init

# 启动停止函数
start() {
  bash $pwd_dir/bspwminit.sh &
  rm -rf $dir
  mkdir -p $dir
  sleep 3
  echo $(pgrep -f bspwminit.sh) > $dir/bspwminit.pid
}

stop() {
  kill -9 $(cat $dir/bspwminit.pid)
	rm -rf $dir
}

# 执行命令
case $1 in
	start)
		if [ -ne $dir/bspwminit.pid ];then
      start
    fi ;;
	stop)
		if [ -e $dir/bspwminit.pid ];then
			stop
		fi
	;;
	restart)
		if [ -e $dir/bspwminit.pid ];then
			stop
		fi
		start
	;;
	status)
		if [ -e $dir/bspwminit.pid ];then
      echo "bspwminit 脚本运行中, 进程编号: $(cat $dir/bspwminit.pid)"
		else
			echo "bspwminit 脚本没有运行"
		fi
	;;
	*)
		echo "参数错误"
		echo "usage: ./launch.sh <start|stop|restart|status>"
		exit
esac


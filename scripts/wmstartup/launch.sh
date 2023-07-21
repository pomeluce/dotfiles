#!/bin/sh

# author: Mr.Jor
# date: 2023-06-25
# description: wminit 管理脚本


# 判断参数是否合法
if [ $# -ne 1 ];then
	echo "输入参数不合法"
	echo "usage: ./lanuch.sh <start|stop|restart|status>"
	exit
fi

pwd_dir=$(cd $(dirname $0);pwd)
dir=$HOME/.cache/wminit

# 启动停止函数
start() {
  bash $pwd_dir/wminit.sh &
  rm -rf $dir
  mkdir -p $dir
  sleep 3
  echo $(pgrep -f wminit.sh) > $dir/wminit.pid
}

stop() {
  kill -9 $(cat $dir/wminit.pid)
	rm -rf $dir
}

# 执行命令
case $1 in
	start)
		if [ -ne $dir/wminit.pid ];then
      start
    fi ;;
	stop)
		if [ -e $dir/wminit.pid ];then
			stop
		fi
	;;
	restart)
		if [ -e $dir/wminit.pid ];then
			stop
		fi
		start
	;;
	status)
		if [ -e $dir/wminit.pid ];then
      echo "wminit 脚本运行中, 进程编号: $(cat $dir/wminit.pid)"
		else
			echo "wminit 脚本没有运行"
		fi
	;;
	*)
		echo "参数错误"
		echo "usage: ./launch.sh <start|stop|restart|status>"
		exit
esac


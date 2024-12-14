#echo "此PC所有终端严禁运行rm -rf /*" | cowsay | lolcat

case $- in
  *i*) ;;  # 交互式 shell，继续执行
  *) return ;;  # 非交互式 shell，退出
esac

source ~/.config/dzs/init.zsh

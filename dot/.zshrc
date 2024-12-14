#echo "此PC所有终端严禁运行rm -rf /*" | cowsay | lolcat

# 配置 tty 配色
if [ "$TERM" = "linux" ]; then
  echo -en "\e]P01F2229" #black
  echo -en "\e]P88C42AB" #darkgrey
  echo -en "\e]P1D41919" #darkred
  echo -en "\e]P9EC0101" #red
  echo -en "\e]P25EBDAB" #darkgreen
  echo -en "\e]PA47D4B9" #green
  echo -en "\e]P3FEA44C" #brown
  echo -en "\e]PBFF8A18" #yellow
  echo -en "\e]P4367bf0" #darkblue
  echo -en "\e]PC277FFF" #blue
  echo -en "\e]P5BF2E5D" #darkmagenta
  echo -en "\e]PDD71655" #magenta
  echo -en "\e]P649AEE6" #darkcyan
  echo -en "\e]PE05A1F7" #cyan
  echo -en "\e]P7E6E6E6" #lightgrey
  echo -en "\e]PFFFFFFF" #white
fi

case $- in
  *i*) ;;  # 交互式 shell，继续执行
  *) return ;;  # 非交互式 shell，退出
esac

source ~/.config/dzs/init.zsh

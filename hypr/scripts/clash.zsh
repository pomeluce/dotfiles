# 启动 clash-verge 进程
/usr/bin/clash-verge &

# 等待进程启动
max_wait=30  # 最长等待时间(秒)
elapsed=0

# 循环检查直到检测到进程或超时
while [[ -z $(pgrep -x clash-verge) && $elapsed -lt $max_wait ]]; do
  sleep 1
  elapsed=$((elapsed + 1))
done

if [[ -n $(pgrep -x clash-verge) ]]; then
  sleep 1
  killall clash-verge
fi

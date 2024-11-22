# 设置图片目录
IMAGE_DIR="$HOME/.config/wallpapers/"

# 默认时间间隔(秒)
DEFAULT_INTERVAL=300

# 获取时间间隔参数, 并确保传入的是正整数
if [[ -n "$1" && "$1" =~ ^[0-9]+$ ]]; then
    INTERVAL="$1"
else
    INTERVAL="$DEFAULT_INTERVAL"
fi

# 初始化 swww-daemon
if pgrep -x "swww-daemon" > /dev/null; then
    echo "swww-daemon is already running."
else
    echo "Starting swww-daemon..."
    swww-daemon &
fi

# 循环随机显示图片
while true; do
    # 获取随机图片
    RANDOM_IMAGE=$(find "$IMAGE_DIR" -type f \( -name "*.jpg" -o -name "*.png" -o -name "*.jpeg" \) | shuf -n 1)

    # 如果找不到图片，退出循环
    if [[ -z "$RANDOM_IMAGE" ]]; then
        echo "No images found in $IMAGE_DIR"
        exit 1
    fi

    # 获取光标位置
    CURSOR_POS=$(hyprctl cursorpos | awk '{print $1, $2}' | sed 's/ //g')

    # 执行 swww img 命令
    swww img --transition-type grow --transition-fps 165 --transition-pos "$CURSOR_POS" "$RANDOM_IMAGE"

    # 等待指定时间
    sleep $INTERVAL
done

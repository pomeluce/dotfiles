![dotfile](https://readme-typing-svg.demolab.com/?font=Fira+Code&size=30&pause=1000&color=000000&vCenter=true&width=435&height=45&lines=Dotfiles)

---

## 1: Dotfile 备份管理

* dotfile 文件备份管理, 备份 ideavim nvim zsh 等常用软件的配置文件

## 2: Dotfile 目录结构

```
.
├── ideavim/
└── nvim/
```

## 3: Nvim 目录结构

```
.
├── init.lua
├── lua                         -- lua 配置目录
│   ├── pack/                   -- 所有插件的配置目录
│   ├── G.lua                   -- Global: 配置文件工具类
│   ├── autocmd.lua             -- 自动配置
│   ├── keymap.lua              -- 快捷键配置
│   ├── packinit.lua            -- packer 配置
│   └── profile.lua             -- nvim 基本环境配置
├── colors/                     -- vim 配色
├── snippets/                   -- 代码片段
├── coc-settings.json           -- coc 配置
└── README.md                   -- README
```

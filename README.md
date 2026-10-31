# 用 GitHub Pages 托管「刷题总台」· 零基础教程

把本仓库里的 `index.html`（刷题总台网页）变成一个**谁都能打开、不用登录**的公开网址，形如：

```
https://你的用户名.github.io/shuati/
```

---

## 先看清一件事（很重要，别白忙）

| 事实 | 说明 |
|---|---|
| GitHub Pages **功能还在**，能出真网址 | 这点比 Gitee 强——Gitee Pages 2024 年已下线 |
| 但 `*.github.io` 的网址**在国内访问不稳定** | 有时秒开、有时转圈、有时打不开，跟时段和网络有关 |
| 你自己的 Gitee 仓库已经跑通了 | `gitee.com/lin-yuan-t/shuati`，Git 全流程你练过了 |

**所以这条路的真实定位**：练手 + 攒一个「我做过网站」的作品，申请研究生时可以对导师说「我自己写了个刷题工具，托管在 GitHub 上」。**日常刷题还是用资料库那个链接**（我更新、你刷新，最省事）。

---

## 你现在已经有的东西（省一大截功夫）

你电脑上的 `D:\shuati` **已经是一个 Git 仓库了**，而且已经提交过、已经推到了 Gitee。

**所以这次不用 `git init`，不用重新 `add` 一遍。** 只需要：

1. 换掉里面旧的 `index.html`（换成最新版，1662 张卡）
2. 加一个 GitHub 的远程地址（叫 `github`，跟 `origin` 并存）
3. 推上去

这样你一个本地仓库同时推两个平台，这是真实工作里的常见做法，比重新建仓库更值得学。

---

## 第一步：注册 GitHub（这步只能你自己做）

1. 浏览器打开 **https://github.com** → 右上 **Sign up**
2. 填邮箱 → 设密码 → 起用户名
3. **用户名要想清楚**，它会变成你网址的前缀，而且**基本改不了**：
   - 只能英文、数字、短横线
   - 建议 `linyuantong`、`yuantong-lin`、`lyt-bio` 这种，别用 `abc123`
4. 收验证邮件（**翻一下垃圾邮件箱**），点激活

> 打不开 github.com 就先放着，等你网络顺的时候再试。注册这步没有任何技巧，纯看网络。

---

## 第二步：建仓库

1. 登录后右上角 **`+`** → **New repository**
2. **Repository name** 填 `shuati`
3. 选 **Public**（Pages 免费版只支持公开仓库）
4. 下面三个初始化选项（Add a README / .gitignore / license）**全部不勾**
5. **Create repository**

---

## 第三步：生成 Personal Access Token（推送的密码）

GitHub 从 2021 年起就不允许用账号密码推代码了，必须用令牌。

1. 右上角头像 → **Settings**
2. 左侧拉到最底 **Developer settings**
3. **Personal access tokens** → **Tokens (classic)** → **Generate new token (classic)**
4. Note 随便写 `push`；Expiration 选 90 days
5. 权限勾 **`repo`**（这一项就够）
6. **Generate token** → 页面显示 `ghp_xxxxxxxx` 一串 → **立刻复制**，关掉页面就再也看不到

> ⚠️ 令牌 = 你账号的钥匙。别发截图、别提交进仓库。**泄露了就去同一个页面 Revoke 掉重新生成。**

---

## 第四步：更新本地的 index.html（关键一步，别跳）

你 `D:\shuati` 里的 `index.html` 是**旧版（556 张卡）**，现在题库已经涨到 **1662 张（16 个题库）**。

1. 下载本目录下的 `index.html`
2. 覆盖 `D:\shuati\index.html`（同名的直接替换）
3. 在 `D:\shuati` 空白处右键 → **Git Bash Here**

---

## 第五步：加一个 GitHub 远程，推上去

在 Git Bash 里，**逐条敲**（把用户名换成你 GitHub 的）：

```bash
git status
```

应该看到 `modified: index.html`（说明替换生效了）。接着：

```bash
git add .
git commit -m "题库更新到 1662 张（16 个题库）+ 手写笔作答"
```

然后加远程（**两个远程并存，`origin` 还是 Gitee，`github` 是新加的**）：

```bash
git remote add github https://github.com/你的用户名/shuati.git
```

最后推（令牌我留了占位，**换成你那串 `ghp_...`**）：

```bash
git remote set-url github https://你的用户名:ghp_你的令牌@github.com/你的用户名/shuati.git
git push -u github main
```

成功的样子：

```
To https://github.com/你的用户名/shuati.git
 * [new branch]      main -> main
```

> 为什么直接把令牌写进地址？因为 Git 凭据管理器的弹窗经常不听话（你上次在 Gitee 就踩过这个坑），写进 URL 最省事。**代价是令牌明文存在 `.git/config` 里**，这台电脑是你自己的，问题不大；哪天不想留了，执行 `git remote set-url github https://github.com/你的用户名/shuati.git` 就清掉了。

---

## 第六步：开 Pages

1. 浏览器打开 `https://github.com/你的用户名/shuati/settings/pages`
2. **Source** 选 **Deploy from a branch**
3. **Branch** 选 **`main`**，目录选 **`/ (root)`**
4. 点 **Save**
5. 等 1～3 分钟（首次构建要排队），刷新页面，顶部会出现：

```
Your site is live at https://你的用户名.github.io/shuati/
```

点开就是你的刷题总台。

> 手机打不开先别急，多半是 `github.io` 在国内不通。换 WiFi / 换时段再试，或者在电脑上打开确认页面本身是好的。

---

## 以后更新（日常三连）

```bash
git add .
git commit -m "更新：加了新题"
git push github main
```

**GitHub Pages 会自动重新构建**，等一分钟刷新就是新版——这点比 Gitee 省事（Gitee 要手动点「重新部署」）。

如果还想同步推 Gitee：

```bash
git push origin main
```

一个仓库，两个平台，两条命令。

---

## 常见坑

| 现象 | 原因 / 解决 |
|---|---|
| `remote: Permission denied` / `403` | 令牌没勾 `repo`，或用户名写错。重新生成令牌 |
| `remote github already exists` | 已经加过了，改用 `git remote set-url github ...` |
| `src refspec main does not match any` | 本地没这个分支，`git branch -M main` 后再推 |
| Pages 一直 404 | 等 3～5 分钟；确认 Branch 是 main、目录是 root；确认 `index.html` 在仓库根目录 |
| 网页空白 | 仓库根目录没有 `index.html`，或文件名大小写不对 |
| `github.io` 打不开 | 国内网络问题，不是你的错。换网络/时段，或直接用资料库链接 |
| 想删掉存进 `.git/config` 的令牌 | `git remote set-url github https://github.com/你的用户名/shuati.git` |

---

## Git 命令速查（GitHub / Gitee / 公司 GitLab 全通用）

| 命令 | 作用 |
|---|---|
| `git status` | 看改了哪些文件 |
| `git add .` | 把改动加入暂存区 |
| `git commit -m "说明"` | 提交一次 |
| `git push github main` | 推到 GitHub |
| `git push origin main` | 推到 Gitee |
| `git remote -v` | 看有几个远程、地址对不对 |
| `git log --oneline` | 看提交历史 |
| `git pull` | 拉远程最新（换设备改过时用） |

---

## 文件说明

| 文件 | 内容 |
|---|---|
| `index.html` | 刷题总台网页本体，**零外部依赖**，16 个题库 1662 张卡 |

---

## 云同步怎么配（v7 新增，平板 ⇄ 手机）

**一次配置，以后全自动。**

1. 平板/手机打开刷题总台 → **设置** → 找到「☁️ 云同步（GitHub 私有仓库）」
2. **令牌**：填你的 GitHub 令牌（`ghp_` 开头，勾了 `repo` 权限那个）；**仓库**可以留空
3. 点 **连接并同步** —— 会自动创建私有仓库 `你的用户名/shuati-data` 并上传
4. 勾上 **自动同步**（每 60 秒静默同步，切后台也会补一次）
5. 另一台设备重复 1-3 步，进度和笔迹就对齐了

> 数据存在**你自己的私有仓库**里，别人看不到；令牌只存在本机浏览器，**不会上传、不会写进同步文件**（这点做了测试验证）。
> 不想用了点「断开」，本机数据不删。

**不联网的备选**：设置页「📁 手动互传」——导出成一个 `.json` 文件发微信给自己，另一台设备「选择文件导入」，自动合并。适合 GitHub 连不上的时候。

---

## 当前版本功能（v6）

**16 个题库 1662 张卡**：生化半期 280 · 脂肪酸β氧化 41 · 遗传学课后 86 · 遗传期中选择 88 · 重组率计算 6 · 遗传考点速刷 55 · 834名解 114 · 834简答论述 115 · 期中官方答案 105 · 834判断 215 · 834选择 53 · 834填空 110 · CET-6核心词 249 · **CET-6听力场景词 60 · CET-6写作句型 45 · CET-6翻译高频 40**

功能：搜索 / 收藏★ / 间隔重复（艾宾浩斯）/ 统计页 / 快捷键 / 错题重刷 / 进度跨设备导码同步
**✏️ 手写笔作答（v6 新增）**：简答·名词·填空·计算·论述题都能用平板手写笔（或手指）直接写答案——
- 支持压感（越用力越粗），手掌误触可开「仅笔模式」
- 笔迹自动保存在本机，可**回放整个书写过程**（1×/2×/4×）
- 可导出 PNG 图片 / JSON 数据；设置页有「笔迹库」统一管理（最多存 80 份）

**☁️ 云同步（v7 新增）**：GitHub 私有仓库当云盘，进度 + 笔迹自动对齐；另一台设备只传笔迹数据，缩略图本地重建（省流量）；合并冲突按「谁更新更晚」仲裁，两边都不会丢。
| `README.md` | 就是本教程 |

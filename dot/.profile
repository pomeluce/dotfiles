# dev root dir
export DEVROOT=~/devroot

# setting jetBrains ide runtime
JBR_HOME=$DEVROOT/env/jdk/jbr
export IDEA_JDK=$JBR_HOME
export PYCHARM_JDK=$JBR_HOME
export GOLAND_JDK=$JBR_HOME
export CLION_JDK=$JBR_HOME
export WEBIDE_JDK=$JBR_HOME
export DATAGRIP_JDK=$JBR_HOME

# setting java environment
export JAVA_HOME8=/usr/lib/jvm/zulu-8
export JAVA_HOME21=/usr/lib/jvm/zulu-21
export JAVA_HOME=$JAVA_HOME21
export PATH=$JAVA_HOME/bin:$PATH

# setting python environment
export PYTHON=$(which python3)

# setting gradle repostiory
export GRADLE_USER_HOME=$DEVROOT/env/gradle

# setting golang environment
export GOPATH=$DEVROOT/env/golib
export GOBIN=~/.cache/go-bin

# setting pnpm environment
export PNPM_HOME=$DEVROOT/env/node/pnpm/bin
export PATH=$PNPM_HOME:$PATH

# setting nvm environment
export NVM_DIR=$DEVROOT/env/node/nvm

# setting rust environment
export RUSTUP_HOME=$DEVROOT/env/rust/rustup
export CARGO_HOME=$DEVROOT/env/rust/cargo

# setting user bin environment
export PATH=~/.local/bin:$PATH

# setting jetBrains ide runtime
export IDEA_JDK=/env/jdk/jbr
export PYCHARM_JDK=/env/jdk/jbr
export GOLAND_JDK=/env/jdk/jbr
export CLION_JDK=/env/jdk/jbr
export WEBIDE_JDK=/env/jdk/jbr
export DATAGRIP_JDK=/env/jdk/jbr

# setting java environment
export JAVA_HOME8=/usr/lib/jvm/zulu-8
export JAVA_HOME21=/usr/lib/jvm/zulu-21
export JAVA_HOME=$JAVA_HOME21
export PATH=$JAVA_HOME/bin:$PATH

# setting python environment
export PYTHON=$(which python3)

# setting gradle repostiory
export GRADLE_USER_HOME=/env/gradle

# setting golang environment
export GOPATH=/env/golib
export GOBIN=~/.cache/go-bin

# setting pnpm environment
export PNPM_HOME=/env/node/pnpm/bin
export PATH=$PNPM_HOME:$PATH

# setting nvm environment
export NVM_DIR=/env/node/nvm

# setting rust environment
export RUSTUP_HOME=/env/rust/rustup
export CARGO_HOME=/env/rust/cargo

# setting user bin environment
export PATH=~/.local/bin:$PATH

FROM mcr.microsoft.com/devcontainers/typescript-node:1-22-bookworm

# Install tslint, typescript. eslint is installed by javascript image
ARG NODE_MODULES="@angular/cli"
RUN su node -c "umask 0002 && npm install -g ${NODE_MODULES}" \
    && npm cache clean --force > /dev/null 2>&1

# Set `DEVCONTAINER` environment variable to help with orientation
#ENV DEVCONTAINER=true

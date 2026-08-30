# Stage 1: Build the Vue app
FROM node:20-alpine AS build

WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json* ./
RUN npm ci || npm install

# Copy source code and build
COPY . .
RUN npm run build

# Stage 2: Serve with lightweight Node server
FROM node:20-alpine AS production

RUN npm install -g serve

WORKDIR /app

# Copy built files from build stage
COPY --from=build /app/dist ./dist

# Expose port 3000
EXPOSE 3000

# serve -s enables SPA fallback (all routes → index.html)
CMD ["serve", "-s", "dist", "-l", "3000"]

#!/bin/bash
# Netlify build script with error handling

echo "Starting build process..."

# Check Node version
echo "Node version: $(node --version)"
echo "NPM version: $(npm --version)"

# Clear npm cache to avoid conflicts
npm cache clean --force

# Install dependencies with clean install
echo "Installing dependencies..."
npm ci || npm install

# Check if build succeeds
echo "Building project..."
npm run build

# Verify dist folder exists
if [ -d "dist" ]; then
  echo "Build successful - dist folder created"
  ls -la dist/
else
  echo "Build failed - dist folder not found"
  exit 1
fi

echo "Build completed successfully!"
#!/bin/bash
# Enhanced Netlify build script with error handling

echo "🚀 Starting Bug Queen Flow Studios build process..."

# Check Node version
echo "📋 Node version: $(node --version)"
echo "📋 NPM version: $(npm --version)"

# Ensure we're using the right Node version
echo "🔍 Checking Node version compatibility..."
NODE_VERSION=$(node --version | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 20 ]; then
    echo "❌ Warning: Node version $NODE_VERSION detected. Vite plugins require Node 20+."
fi

# Clear any cached data that might cause issues
echo "🧹 Cleaning npm cache..."
npm cache clean --force

# Install dependencies with explicit dev dependency inclusion
echo "📦 Installing dependencies (including devDependencies)..."
if ! npm ci --include=dev; then
    echo "⚠️  npm ci failed, trying npm install..."
    npm install --include=dev
fi

# Verify vite is available
echo "🔍 Verifying Vite installation..."
if ! npx vite --version; then
    echo "❌ Vite not found! Installing..."
    npm install --save-dev vite
fi

# Run the build
echo "🏗️  Building project..."
if npm run build; then
    echo "✅ Build successful!"
    
    # Verify dist folder exists and has content
    if [ -d "dist" ] && [ "$(ls -A dist)" ]; then
        echo "✅ dist folder created with content:"
        ls -la dist/ | head -10
    else
        echo "❌ dist folder is missing or empty!"
        exit 1
    fi
else
    echo "❌ Build failed!"
    exit 1
fi

echo "🎉 Bug Queen Flow Studios build completed successfully!"
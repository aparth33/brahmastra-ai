#!/bin/bash

echo "=== BRAHMASTRA CLI DEMO ==="
echo ""

echo "🚀 Testing Mobile App Planning..."
echo ""
echo "n" | npm run dev plan "Build a Flutter mobile app for food delivery"
echo ""

echo "🌐 Testing API Planning..."
echo ""
echo "n" | npm run dev plan "Create a REST API for user management with authentication"
echo ""

echo "🧪 Testing DevOps Planning..."
echo ""
echo "n" | npm run dev plan "Setup CI/CD pipeline with Docker and AWS deployment"
echo ""

echo "🔍 Testing Drift Detection..."
echo ""
npm run dev verify
echo ""

echo "🤖 Testing Agent Registry..."
echo ""
npm run dev agents
echo ""

echo "Demo complete! 🎉"
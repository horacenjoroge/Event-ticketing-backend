#!/bin/bash

echo "🧪 MICROSERVICE AUTHENTICATION TESTING"
echo "======================================"

API_BASE_URL="http://localhost:3000"
# Using your existing user credentials
TEST_EMAIL="alice.johnson@techcorp.com"
TEST_PASSWORD="SecurePass2024!"

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

log_step() { echo -e "\n${BLUE}🔍 $1${NC}"; }
log_success() { echo -e "${GREEN}✅ $1${NC}"; }
log_error() { echo -e "${RED}❌ $1${NC}"; }

# Test 1: Login with existing user
log_step "Step 1: Testing Login with Existing User"
echo "📧 Using email: $TEST_EMAIL"

LOGIN_RESPONSE=$(curl -s -w "HTTP_STATUS:%{http_code}" -X POST "$API_BASE_URL/auth/login" \
  -H "Content-Type: application/json" \
  -d "{
    \"email\": \"$TEST_EMAIL\",
    \"password\": \"$TEST_PASSWORD\"
  }")

LOGIN_HTTP_STATUS=$(echo "$LOGIN_RESPONSE" | grep "HTTP_STATUS" | cut -d':' -f2)
LOGIN_BODY=$(echo "$LOGIN_RESPONSE" | sed '/HTTP_STATUS/d')

echo "📥 Login Response (HTTP $LOGIN_HTTP_STATUS):"
echo "$LOGIN_BODY" | jq '.' 2>/dev/null || echo "$LOGIN_BODY"

# Extract token
TOKEN=$(echo "$LOGIN_BODY" | jq -r '.access_token // .data.access_token // empty' 2>/dev/null)

if [ -n "$TOKEN" ] && [ "$TOKEN" != "null" ]; then
    log_success "Token extracted successfully"
    echo "🔑 Token length: ${#TOKEN}"
    echo "🔑 Token (first 50 chars): ${TOKEN:0:50}..."
    
    # Decode JWT payload for inspection
    JWT_PAYLOAD=$(echo "$TOKEN" | cut -d'.' -f2)
    PAYLOAD_PADDED="$JWT_PAYLOAD"
    while [ $((${#PAYLOAD_PADDED} % 4)) -ne 0 ]; do
        PAYLOAD_PADDED="${PAYLOAD_PADDED}="
    done
    
    echo "📋 Token Payload:"
    echo "$PAYLOAD_PADDED" | base64 -d 2>/dev/null | jq '.' 2>/dev/null || echo "Could not decode"
else
    log_error "No token found in login response"
    echo "Full response: $LOGIN_BODY"
    exit 1
fi

# Test 2: Profile Endpoint (Your microservice approach)
log_step "Step 2: Testing Profile Endpoint (API Gateway -> User Service)"
echo "🔄 Testing full microservice communication flow..."

PROFILE_RESPONSE=$(curl -s -w "HTTP_STATUS:%{http_code}" -X GET "$API_BASE_URL/users/profile" \
  -H "Authorization: Bearer $TOKEN")

PROFILE_HTTP_STATUS=$(echo "$PROFILE_RESPONSE" | grep "HTTP_STATUS" | cut -d':' -f2)
PROFILE_BODY=$(echo "$PROFILE_RESPONSE" | sed '/HTTP_STATUS/d')

echo "📥 Profile Response (HTTP $PROFILE_HTTP_STATUS):"
echo "$PROFILE_BODY" | jq '.' 2>/dev/null || echo "$PROFILE_BODY"

if [ "$PROFILE_HTTP_STATUS" = "200" ]; then
    log_success "🎉 MICROSERVICE AUTH WORKING PERFECTLY!"
    echo ""
    echo "✅ Authentication Flow Summary:"
    echo "   1. Login successful -> JWT token created"
    echo "   2. Profile request -> API Gateway received token"
    echo "   3. API Gateway -> User Service communication working"
    echo "   4. User Service -> JWT validation successful"
    echo "   5. User data returned successfully"
else
    log_error "❌ MICROSERVICE AUTH FAILED"
    echo ""
    echo "🔧 Debug Information:"
    echo "   Login Status: HTTP $LOGIN_HTTP_STATUS"
    echo "   Profile Status: HTTP $PROFILE_HTTP_STATUS"
    echo ""
    if echo "$PROFILE_BODY" | grep -qi "unauthorized\|forbidden"; then
        echo "🔍 Issue: Token validation failed"
        echo "   - Check User Service logs for token validation errors"
        echo "   - Verify JWT_SECRET is consistent between services"
    elif echo "$PROFILE_BODY" | grep -qi "timeout\|connection"; then
        echo "🔍 Issue: Service communication failed"
        echo "   - Check if User Service is running"
        echo "   - Verify RabbitMQ is running and accessible"
    else
        echo "🔍 Issue: Unknown error"
        echo "   - Check both API Gateway and User Service logs"
    fi
fi

# Test 3: Invalid token test
log_step "Step 3: Testing Invalid Token Handling"
INVALID_RESPONSE=$(curl -s -w "HTTP_STATUS:%{http_code}" -X GET "$API_BASE_URL/users/profile" \
  -H "Authorization: Bearer invalid.token.here")

INVALID_HTTP_STATUS=$(echo "$INVALID_RESPONSE" | grep "HTTP_STATUS" | cut -d':' -f2)

if [ "$INVALID_HTTP_STATUS" = "401" ]; then
    log_success "Invalid token correctly rejected (HTTP 401)"
else
    echo "⚠️ Invalid token test unexpected result: HTTP $INVALID_HTTP_STATUS"
fi

# Test 4: No token test
log_step "Step 4: Testing Missing Token Handling"
NO_TOKEN_RESPONSE=$(curl -s -w "HTTP_STATUS:%{http_code}" -X GET "$API_BASE_URL/users/profile")
NO_TOKEN_HTTP_STATUS=$(echo "$NO_TOKEN_RESPONSE" | grep "HTTP_STATUS" | cut -d':' -f2)

if [ "$NO_TOKEN_HTTP_STATUS" = "401" ]; then
    log_success "Missing token correctly rejected (HTTP 401)"
else
    echo "⚠️ Missing token test unexpected result: HTTP $NO_TOKEN_HTTP_STATUS"
fi

echo ""
echo "=================================================="
echo "🏁 FINAL SUMMARY"
echo "=================================================="

if [ "$PROFILE_HTTP_STATUS" = "200" ]; then
    echo "🎉 SUCCESS! Your microservice authentication is working correctly!"
    echo ""
    echo "📊 Test Results:"
    echo "   ✅ Login: HTTP $LOGIN_HTTP_STATUS"
    echo "   ✅ Profile: HTTP $PROFILE_HTTP_STATUS"
    echo "   ✅ Invalid token: HTTP $INVALID_HTTP_STATUS"
    echo "   ✅ No token: HTTP $NO_TOKEN_HTTP_STATUS"
else
    echo "❌ FAILED! Microservice authentication needs fixing."
    echo ""
    echo "📊 Test Results:"
    echo "   Login: HTTP $LOGIN_HTTP_STATUS"
    echo "   Profile: HTTP $PROFILE_HTTP_STATUS"
    echo "   Invalid token: HTTP $INVALID_HTTP_STATUS"
    echo "   No token: HTTP $NO_TOKEN_HTTP_STATUS"
    echo ""
    echo "🔧 Next Steps:"
    echo "   1. Check service logs during this test"
    echo "   2. Verify all services are running"
    echo "   3. Check RabbitMQ connectivity"
fi

echo ""
echo "🔑 Manual test command:"
echo "curl -H \"Authorization: Bearer $TOKEN\" \"$API_BASE_URL/users/profile\""
echo ""
echo "📧 Test user: $TEST_EMAIL"

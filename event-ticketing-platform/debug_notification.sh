#!/bin/bash
echo "🔍 DEBUGGING NOTIFICATION SERVICE"
echo "=================================="

echo "1. Service Status:"
docker-compose ps | grep notification

echo -e "\n2. Database Connection Test:"
docker-compose exec postgres-notification psql -U postgres -d notification_service_db -c "SELECT 'Database is accessible' as status;"

echo -e "\n3. Check Environment Variables:"
docker-compose exec notification-service env | grep -E "NOTIFICATION_DATABASE_URL|BREVO_API_KEY"

echo -e "\n4. Check Recent Logs:"
docker-compose logs --tail=10 notification-service

echo -e "\n5. Health Endpoint Test:"
curl -s -H "Authorization: Bearer $TOKEN" http://localhost:3000/notifications/health | jq '.' 2>/dev/null || echo "❌ Health endpoint failed"

echo -e "\n🔍 Debug completed."

#!/bin/bash
echo "🔍 Event Ticketing Platform - Port Safety Check"
echo "================================================"

PROD_PORTS=(80 3000 3001 3002 3003 3004 3005 3006 3010 5432 5433 5434 5435 5436 5437 6379 5672 15672 9090 9093 8080 8090)
STAGING_PORTS=(8081 4000 4001 4002 4003 4004 4005 4006 3011 5438 6380 9091)
TEST_PORTS=(5100 5101 5102 5103 5104 5105 5106 3012 5440 6381 9092)

echo "🟢 PRODUCTION PORTS (Currently Used):"
for port in "${PROD_PORTS[@]}"; do
    if lsof -i :$port >/dev/null 2>&1; then
        process=$(lsof -i :$port | tail -1 | awk '{print $1}')
        echo "   ✅ Port $port - $process (RUNNING)"
    else
        echo "   ❌ Port $port - NOT RUNNING"
    fi
done

echo -e "\n🟡 STAGING PORTS (Safe for CI/CD):"
for port in "${STAGING_PORTS[@]}"; do
    if lsof -i :$port >/dev/null 2>&1; then
        process=$(lsof -i :$port | tail -1 | awk '{print $1}')
        echo "   ⚠️  Port $port - OCCUPIED by $process"
    else
        echo "   ✅ Port $port - AVAILABLE"
    fi
done

echo -e "\n🔵 TEST PORTS (For GitHub Actions):"
for port in "${TEST_PORTS[@]}"; do
    if lsof -i :$port >/dev/null 2>&1; then
        process=$(lsof -i :$port | tail -1 | awk '{print $1}')
        echo "   ⚠️  Port $port - OCCUPIED by $process"
    else
        echo "   ✅ Port $port - AVAILABLE"
    fi
done

echo -e "\n📊 SUMMARY:"
echo "   Production:  80, 3000-3010, 5432-5437, 6379, 8080, 8090, 9090, 9093, 15672"
echo "   Staging:     8081, 4000-4006, 5438, 6380, 9091, 3011"  
echo "   Testing:     5100-5106, 5440, 6381, 3012"

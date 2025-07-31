// scripts/health-check.js
const axios = require('axios');

const services = [
  { name: 'Load Balancer', url: 'http://localhost/health' },
  { name: 'Nginx Status', url: 'http://localhost:8080/health' },
  { name: 'API Gateway via LB', url: 'http://localhost/health' },
  { name: 'Prometheus', url: 'http://localhost:9090/-/healthy' },
  { name: 'Grafana', url: 'http://localhost:3010/api/health' },
  { name: 'RabbitMQ', url: 'http://localhost:15672/api/overview' },
];

const directServices = [
  { name: 'Order Service 1', url: 'http://localhost/direct/orders/health' },
  { name: 'Order Service 2', url: 'http://localhost/direct/orders/health' },
  { name: 'Payment Service 1', url: 'http://localhost/direct/payments/health' },
  { name: 'Payment Service 2', url: 'http://localhost/direct/payments/health' },
  { name: 'Ticket Service 1', url: 'http://localhost/direct/tickets/health' },
  { name: 'Ticket Service 2', url: 'http://localhost/direct/tickets/health' },
];

async function checkHealth(service) {
  try {
    const response = await axios.get(service.url, { 
      timeout: 5000,
      validateStatus: (status) => status < 500 // Accept 4xx as "up"
    });
    return {
      name: service.name,
      status: 'UP',
      statusCode: response.status,
      responseTime: response.headers['x-response-time'] || 'N/A'
    };
  } catch (error) {
    return {
      name: service.name,
      status: 'DOWN',
      error: error.message,
      statusCode: error.response?.status || 'TIMEOUT'
    };
  }
}

async function runHealthChecks() {
  console.log('🏥 Running Health Checks...\n');
  
  // Check main services
  console.log('📊 Main Services:');
  const mainResults = await Promise.all(services.map(checkHealth));
  
  mainResults.forEach(result => {
    const status = result.status === 'UP' ? '✅' : '❌';
    console.log(`${status} ${result.name.padEnd(20)} - ${result.status} (${result.statusCode})`);
    if (result.error) {
      console.log(`   Error: ${result.error}`);
    }
  });

  console.log('\n🔄 Load Balanced Services:');
  const directResults = await Promise.all(directServices.map(checkHealth));
  
  directResults.forEach(result => {
    const status = result.status === 'UP' ? '✅' : '❌';
    console.log(`${status} ${result.name.padEnd(20)} - ${result.status} (${result.statusCode})`);
  });

  // Summary
  const allResults = [...mainResults, ...directResults];
  const upCount = allResults.filter(r => r.status === 'UP').length;
  const totalCount = allResults.length;
  
  console.log(`\n📈 Summary: ${upCount}/${totalCount} services are healthy`);
  
  if (upCount === totalCount) {
    console.log('🎉 All services are running properly!');
    process.exit(0);
  } else {
    console.log('⚠️  Some services are down. Check the logs above.');
    process.exit(1);
  }
}

// Run the health checks
runHealthChecks().catch(error => {
  console.error('❌ Health check failed:', error.message);
  process.exit(1);
});
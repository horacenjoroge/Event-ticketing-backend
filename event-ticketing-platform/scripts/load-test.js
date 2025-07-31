// scripts/load-test.js
const axios = require('axios');

// Parse command line arguments
const args = process.argv.slice(2);
const totalRequests = parseInt(args.find(arg => arg.startsWith('--requests='))?.split('=')[1]) || 100;
const concurrent = parseInt(args.find(arg => arg.startsWith('--concurrent='))?.split('=')[1]) || 10;

const baseURL = 'http://localhost';
const endpoints = [
  '/health',
  '/direct/orders/health',
  '/direct/payments/health',
  '/direct/tickets/health',
  '/direct/users/health',
  '/direct/events/health',
  '/direct/notifications/health'
];

class LoadTester {
  constructor() {
    this.results = [];
    this.startTime = null;
    this.endTime = null;
  }

  async makeRequest(endpoint) {
    const start = Date.now();
    try {
      const response = await axios.get(`${baseURL}${endpoint}`, {
        timeout: 10000,
        validateStatus: (status) => status < 500
      });
      
      const duration = Date.now() - start;
      return {
        endpoint,
        status: response.status,
        duration,
        success: true,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      const duration = Date.now() - start;
      return {
        endpoint,
        status: error.response?.status || 'TIMEOUT',
        duration,
        success: false,
        error: error.message,
        timestamp: new Date().toISOString()
      };
    }
  }

  async runBatch(batchSize) {
    const promises = [];
    
    for (let i = 0; i < batchSize; i++) {
      const endpoint = endpoints[Math.floor(Math.random() * endpoints.length)];
      promises.push(this.makeRequest(endpoint));
    }
    
    return Promise.all(promises);
  }

  async run() {
    console.log(`🚀 Starting Load Test`);
    console.log(`📊 Total Requests: ${totalRequests}`);
    console.log(`⚡ Concurrent: ${concurrent}`);
    console.log(`🎯 Target: ${baseURL}`);
    console.log('━'.repeat(50));

    this.startTime = Date.now();
    
    const batches = Math.ceil(totalRequests / concurrent);
    let completedRequests = 0;

    for (let batch = 0; batch < batches; batch++) {
      const batchSize = Math.min(concurrent, totalRequests - completedRequests);
      
      console.log(`📦 Batch ${batch + 1}/${batches} - ${batchSize} requests`);
      
      const batchResults = await this.runBatch(batchSize);
      this.results.push(...batchResults);
      completedRequests += batchSize;

      // Show progress
      const progress = Math.round((completedRequests / totalRequests) * 100);
      const successful = batchResults.filter(r => r.success).length;
      const failed = batchResults.length - successful;
      
      console.log(`   ✅ ${successful} success, ❌ ${failed} failed (${progress}% complete)`);
      
      // Small delay between batches
      if (batch < batches - 1) {
        await new Promise(resolve => setTimeout(resolve, 100));
      }
    }

    this.endTime = Date.now();
    this.printResults();
  }

  printResults() {
    const totalDuration = this.endTime - this.startTime;
    const successful = this.results.filter(r => r.success);
    const failed = this.results.filter(r => !r.success);
    
    console.log('\n' + '━'.repeat(50));
    console.log('📈 LOAD TEST RESULTS');
    console.log('━'.repeat(50));
    
    // Basic stats
    console.log(`⏱️  Total Duration: ${totalDuration}ms`);
    console.log(`📊 Total Requests: ${this.results.length}`);
    console.log(`✅ Successful: ${successful.length} (${Math.round(successful.length/this.results.length*100)}%)`);
    console.log(`❌ Failed: ${failed.length} (${Math.round(failed.length/this.results.length*100)}%)`);
    console.log(`🚀 Requests/sec: ${Math.round((this.results.length / totalDuration) * 1000)}`);

    if (successful.length > 0) {
      // Response time stats
      const durations = successful.map(r => r.duration).sort((a, b) => a - b);
      const avg = durations.reduce((a, b) => a + b, 0) / durations.length;
      const median = durations[Math.floor(durations.length / 2)];
      const p95 = durations[Math.floor(durations.length * 0.95)];
      const p99 = durations[Math.floor(durations.length * 0.99)];
      
      console.log('\n📊 Response Times:');
      console.log(`   Average: ${Math.round(avg)}ms`);
      console.log(`   Median:  ${median}ms`);
      console.log(`   95th %:  ${p95}ms`);
      console.log(`   99th %:  ${p99}ms`);
      console.log(`   Min:     ${Math.min(...durations)}ms`);
      console.log(`   Max:     ${Math.max(...durations)}ms`);
    }

    // Status code breakdown
    const statusCodes = {};
    this.results.forEach(r => {
      statusCodes[r.status] = (statusCodes[r.status] || 0) + 1;
    });

    console.log('\n📋 Status Codes:');
    Object.entries(statusCodes).forEach(([code, count]) => {
      console.log(`   ${code}: ${count} requests`);
    });

    // Endpoint breakdown
    const endpointStats = {};
    this.results.forEach(r => {
      if (!endpointStats[r.endpoint]) {
        endpointStats[r.endpoint] = { total: 0, success: 0, avgDuration: 0 };
      }
      endpointStats[r.endpoint].total++;
      if (r.success) {
        endpointStats[r.endpoint].success++;
        endpointStats[r.endpoint].avgDuration += r.duration;
      }
    });

    console.log('\n🎯 Endpoint Performance:');
    Object.entries(endpointStats).forEach(([endpoint, stats]) => {
      const successRate = Math.round((stats.success / stats.total) * 100);
      const avgDuration = stats.success > 0 ? Math.round(stats.avgDuration / stats.success) : 0;
      console.log(`   ${endpoint.padEnd(25)} ${successRate}% success, ${avgDuration}ms avg`);
    });

    // Final assessment
    console.log('\n🏆 Assessment:');
    const overallSuccessRate = (successful.length / this.results.length) * 100;
    if (overallSuccessRate >= 99) {
      console.log('🎉 Excellent! System handled load very well.');
    } else if (overallSuccessRate >= 95) {
      console.log('✅ Good! System performed well under load.');
    } else if (overallSuccessRate >= 90) {
      console.log('⚠️  Fair. Some issues under load, consider optimization.');
    } else {
      console.log('❌ Poor. System struggled under load, needs attention.');
    }

    // Exit with appropriate code
    process.exit(overallSuccessRate >= 95 ? 0 : 1);
  }
}

// Run the load test
const loadTester = new LoadTester();
loadTester.run().catch(error => {
  console.error('❌ Load test failed:', error.message);
  process.exit(1);
});
/**
 * AI Claims Processing MVP Demo - Manual Control Version
 * Each agent runs individually when triggered
 */

class ClaimsDemo {
    constructor() {
        this.currentAgent = 0;
        this.isProcessing = false;
        this.agents = [
            {
                id: 1,
                name: "Document Analysis",
                icon: "📄",
                duration: 3000,
                description: "Analyzing police report and extracting complexity indicators...",
                result: {
                    title: "🤖 AGENT 1: Document Analysis Complete",
                    content: `
                        <div class="result-card">
                            <h4>📊 Complexity Assessment</h4>
                            <p>Overall Score: <span class="complexity-critical">9.1/10 CRITICAL</span></p>
                            <p><strong>Key Extractions:</strong></p>
                            <div class="flag-item">🔴 Minor involvement: 8-year-old Sofia with facial lacerations</div>
                            <div class="flag-item">🔴 Elderly unconscious: 69-year-old Roberto, diabetic</div>
                            <div class="flag-item">🔴 High-speed impact: 55mph in 35mph zone</div>
                            <div class="flag-item">🔴 Multi-party family: Complex dynamics detected</div>
                            <div class="flag-item">🔴 High-value property: Tesla Model S extensive damage</div>
                            <p><strong>Routing Recommendation:</strong> Bodily Injury + Minor Specialty Required</p>
                        </div>
                    `
                }
            },
            {
                id: 2,
                name: "Context & History",
                icon: "🔗",
                duration: 4000,
                description: "Cross-referencing historical patterns and building prediction models...",
                result: {
                    title: "🤖 AGENT 2: Historical Pattern Analysis Complete",
                    content: `
                        <div class="result-card">
                            <h4>🔍 Database Pattern Matching</h4>
                            <p><strong>Similar Cases Found:</strong> 3 high-confidence matches</p>
                            <ul style="margin: 10px 0; padding-left: 20px;">
                                <li>2023 Minor-facial-elderly-family: $890K final payout</li>
                                <li>2024 Unconscious-elderly-diabetic: $340K final payout</li>
                                <li>2022 Facial-scarring-minor: $485K final payout</li>
                            </ul>
                            
                            <h4>📈 Predictive Model Results</h4>
                            <div class="flag-item">📊 91% probability of multiple reserve increases</div>
                            <div class="flag-item">⚖️ 76% probability of legal representation within 90 days</div>
                            <div class="flag-item">🏥 88% probability of plastic surgery requirements</div>
                            <div class="flag-item">❤️ 65% probability of cardiac complications (elderly diabetic)</div>
                            
                            <p><strong>Expected Final Range:</strong> $380K - $950K</p>
                            <p><strong>Estimated Timeline:</strong> 18-24 months</p>
                        </div>
                    `
                }
            },
            {
                id: 3,
                name: "Intelligent Routing",
                icon: "👤",
                duration: 2000,
                description: "Matching claim complexity with optimal adjuster expertise...",
                result: {
                    title: "🤖 AGENT 3: Optimal Assignment Complete",
                    content: `
                        <div class="result-card">
                            <h4>👥 Adjuster Analysis</h4>
                            <p><strong>Assigned To:</strong> <span style="color: #28a745; font-weight: bold;">Jennifer Torres</span></p>
                            <p><strong>Match Score:</strong> 9.6/10 (Optimal)</p>
                            <p><strong>Specialization:</strong> Senior + Minor Specialist (15 years experience)</p>
                            
                            <h4>✅ Qualification Verification</h4>
                            <div class="flag-item success-item">✅ Minor certification: QUALIFIED</div>
                            <div class="flag-item success-item">✅ Facial trauma expertise: HIGH</div>
                            <div class="flag-item success-item">✅ Family dynamics experience: EXTENSIVE</div>
                            <div class="flag-item success-item">✅ Medical complexity: ADVANCED</div>
                            <div class="flag-item success-item">✅ Current capacity: AVAILABLE</div>
                            
                            <h4>📋 Case Brief for Jennifer</h4>
                            <p><em>"URGENT: Martinez family T-bone collision. 8yr Sofia facial lacerations, 69yr Roberto unconscious/diabetic, 67yr Maria neck/back. Expect pediatric plastic surgery, elderly cardiac complications, family attorney likely. Priority: Document minor consent immediately."</em></p>
                        </div>
                    `
                }
            },
            {
                id: 4,
                name: "Reserve Calculation",
                icon: "💰",
                duration: 3500,
                description: "Calculating AI-enhanced reserves using complexity factors...",
                result: {
                    title: "🤖 AGENT 4: AI-Enhanced Reserve Setting Complete",
                    content: `
                        <div class="result-card">
                            <h4>💰 Reserve Comparison</h4>
                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 15px 0;">
                                <div style="padding: 15px; background: #f8d7da; border-radius: 8px; border-left: 4px solid #dc3545;">
                                    <strong>Traditional Method</strong><br>
                                    <span style="font-size: 1.5rem; color: #721c24;">$115,000</span><br>
                                    <small>Basic injury assessment</small>
                                </div>
                                <div style="padding: 15px; background: #d4edda; border-radius: 8px; border-left: 4px solid #28a745;">
                                    <strong>AI-Enhanced</strong><br>
                                    <span style="font-size: 1.5rem; color: #155724; font-weight: bold;">$612,500</span><br>
                                    <small>Complexity-adjusted prediction</small>
                                </div>
                            </div>
                            
                            <h4>🧮 Detailed Breakdown</h4>
                            <div class="flag-item">👴 Roberto: $84,000 (elderly/diabetic/unconscious multiplier: 2.8x)</div>
                            <div class="flag-item">👵 Maria: $28,500 (elderly trauma multiplier: 1.9x)</div>
                            <div class="flag-item">👧 Sofia: $155,000 (minor facial/growth factor: 6.2x)</div>
                            <div class="flag-item">🏥 Future surgeries: $95,000 (revision procedures through age 18)</div>
                            <div class="flag-item">😢 Pain & suffering: $180,000 (family unit trauma multiplier)</div>
                            <div class="flag-item">⚖️ Legal/administrative: $25,000</div>
                            
                            <p><strong>Confidence Level:</strong> 84%</p>
                            <p><strong>Monitoring Triggers:</strong> Days 7, 21, 45, 90, 180</p>
                        </div>
                    `
                }
            },
            {
                id: 5,
                name: "System Learning",
                icon: "📊",
                duration: 2500,
                description: "Analyzing claim evolution and updating prediction models...",
                result: {
                    title: "🤖 AGENT 5: System Learning Loop Complete",
                    content: `
                        <div class="result-card">
                            <h4>📋 Claim Analysis: Martinez Family (2025-0423-187)</h4>
                            <p>T-bone collision with multi-generational family. 69-year-old unconscious diabetic driver, 67-year-old passenger, 8-year-old with facial trauma. High-speed impact (55mph in 35mph zone). Clear liability to at-fault driver.</p>
                            
                            <h4>⏱️ Timeline with Reserve Adjustments</h4>
                            <div class="timeline-container">
                                <div class="timeline-item timeline-incident">
                                    <div class="timeline-header">
                                        <div class="timeline-date">April 23, 2025: Incident</div>
                                    </div>
                                    <div class="timeline-description">
                                        T-bone collision, unconscious elderly driver (Roberto, 69, diabetic)<br>
                                        8-year-old Sofia facial lacerations from Tesla glass breakage
                                    </div>
                                    <div class="timeline-insight">
                                        <span class="insight-label">Early Predictors:</span>
                                        <span class="insight-text">Minor facial trauma + elderly unconscious + family dynamics</span>
                                    </div>
                                </div>

                                <div class="timeline-item timeline-reserve">
                                    <div class="timeline-header">
                                        <div class="timeline-date">April 24, 2025: Initial AI Reserve</div>
                                        <div class="timeline-amount">$612,500</div>
                                    </div>
                                    <div class="timeline-description">
                                        Based on complexity multipliers and historical patterns
                                    </div>
                                    <div class="timeline-insight">
                                        <span class="insight-label">Key Insight:</span>
                                        <span class="insight-text">Minor facial trauma requires 6.2x multiplier for growth-related surgeries</span>
                                    </div>
                                </div>

                                <div class="timeline-item timeline-adjustment">
                                    <div class="timeline-header">
                                        <div class="timeline-date">May 15, 2025: First Adjustment</div>
                                        <div class="timeline-amount">$645,000 <span style="font-size: 0.8rem;">(+$32,500)</span></div>
                                    </div>
                                    <div class="timeline-description">
                                        Sofia's second surgery due to growth changes<br>
                                        Roberto cardiac complications from diabetes
                                    </div>
                                    <div class="timeline-insight">
                                        <span class="insight-label">Predictable:</span>
                                        <span class="insight-text">73% of elderly unconscious diabetics develop cardiac issues</span>
                                    </div>
                                </div>

                                <div class="timeline-item timeline-adjustment">
                                    <div class="timeline-header">
                                        <div class="timeline-date">July 8, 2025: Second Adjustment</div>
                                        <div class="timeline-amount">$685,000 <span style="font-size: 0.8rem;">(+$40,000)</span></div>
                                    </div>
                                    <div class="timeline-description">
                                        Family attorney retained (as predicted 76% probability)<br>
                                        Sofia requires psychological counseling
                                    </div>
                                    <div class="timeline-insight">
                                        <span class="insight-label">Complex Element:</span>
                                        <span class="insight-text">Family unit trauma multiplier in effect</span>
                                    </div>
                                </div>

                                <div class="timeline-item timeline-settlement">
                                    <div class="timeline-header">
                                        <div class="timeline-date">October 22, 2025: Final Settlement</div>
                                        <div class="timeline-amount">$674,280</div>
                                    </div>
                                    <div class="timeline-description">
                                        18-month resolution as predicted
                                    </div>
                                    <div class="timeline-insight">
                                        <span class="insight-label">Reserve Accuracy:</span>
                                        <span class="insight-text">98.4% ($685K vs $674K) <span class="accuracy-badge">✅ 98.4%</span></span>
                                    </div>
                                </div>
                            </div>
                            
                            <h4>🎯 Case Conclusion for Analytics</h4>
                            <div class="success-item">
                                <strong>Reserve Accuracy:</strong> 98.4% final alignment ($685,000 vs $674,280)
                            </div>
                            
                            <h4>🔍 Key Predictive Elements Validated:</h4>
                            <div class="flag-item">1. Tesla glass breakage pattern → facial injury severity (92% correlation)</div>
                            <div class="flag-item">2. Unconscious elderly diabetic → cardiac complications within 60 days</div>
                            <div class="flag-item">3. Minor facial trauma → average 2.6 surgeries through age 18</div>
                            <div class="flag-item">4. Family unit dynamics → 2.1x settlement multiplier confirmed</div>
                            <div class="flag-item">5. Multi-generational claims → 89% attorney involvement rate</div>
                            
                            <h4>📈 Reserve Setting Improvement Opportunities:</h4>
                            <div class="success-item">✅ Minor + elderly combination warrants immediate specialist routing</div>
                            <div class="success-item">✅ Tesla Model S impact physics predict specific injury patterns</div>
                            <div class="success-item">✅ Family attorney involvement timeline now refined to 90-day average</div>
                            <div class="success-item">✅ Diabetic trauma protocols updated with cardiac risk modeling</div>
                            
                            <p style="margin-top: 15px; padding: 10px; background: #f0f9ff; border-radius: 6px; border-left: 3px solid #0ea5e9; color: #0c4a6e;"><strong>🏆 Competitive Intelligence:</strong> This case refined our multi-generational claim prediction model. The system now has 47 similar cases in database, creating industry-leading accuracy in family unit dynamics and minor facial trauma progression.</p>
                        </div>
                    `
                }
            }
        ];
        
        this.init();
    }

    init() {
        this.bindEvents();
        this.setupInitialState();
    }

    bindEvents() {
        // Bind individual agent buttons
        for (let i = 1; i <= 5; i++) {
            const button = document.getElementById(`startAgent${i}`);
            if (button) {
                button.addEventListener('click', () => this.startAgent(i - 1));
            }
        }
        
        document.getElementById('resetDemo').addEventListener('click', () => this.resetDemo());
    }

    setupInitialState() {
        // Set initial states
        this.agents.forEach((agent, index) => {
            const statusElement = document.getElementById(`agent${agent.id}-status`);
            if (index === 0) {
                statusElement.textContent = 'Ready';
            } else {
                statusElement.textContent = 'Waiting';
            }
        });

        // Update demo controls
        this.updateDemoControls();
    }

    updateDemoControls() {
        const controlsContainer = document.querySelector('.demo-controls');
        controlsContainer.innerHTML = '';

        // Add individual agent buttons
        this.agents.forEach((agent, index) => {
            const isCompleted = document.getElementById(`agent${agent.id}`).classList.contains('complete');
            const isNext = index === this.currentAgent;
            const isDisabled = index > this.currentAgent;

            const button = document.createElement('button');
            button.id = `startAgent${agent.id}`;
            button.className = isCompleted ? 'agent-btn completed' : 
                              isNext ? 'agent-btn ready' : 
                              'agent-btn disabled';
            button.disabled = isDisabled;
            
            if (isCompleted) {
                button.innerHTML = `✅ Agent ${agent.id}`;
            } else if (isNext) {
                button.innerHTML = `▶️ Start Agent ${agent.id}`;
            } else {
                button.innerHTML = `⏳ Agent ${agent.id}`;
            }
            
            controlsContainer.appendChild(button);
        });

        // Add reset button if any agents are complete
        if (this.currentAgent > 0) {
            const resetBtn = document.createElement('button');
            resetBtn.id = 'resetDemo';
            resetBtn.className = 'reset-btn';
            resetBtn.innerHTML = '🔄 RESET DEMO';
            controlsContainer.appendChild(resetBtn);
            resetBtn.addEventListener('click', () => this.resetDemo());
        }
    }

    async startAgent(agentIndex) {
        if (agentIndex !== this.currentAgent || this.isProcessing) return;
        
        this.isProcessing = true;
        const agent = this.agents[agentIndex];
        
        // Update button to show processing
        const button = document.getElementById(`startAgent${agent.id}`);
        button.innerHTML = `⏳ Processing...`;
        button.disabled = true;
        
        await this.processAgent(agentIndex);
        
        this.currentAgent++;
        this.isProcessing = false;
        this.updateDemoControls();
    }

    async processAgent(agentIndex) {
        const agent = this.agents[agentIndex];
        const agentElement = document.getElementById(`agent${agent.id}`);
        const statusElement = document.getElementById(`agent${agent.id}-status`);
        const progressElement = document.getElementById(`progress${agent.id}`);
        
        // Set agent to working state
        agentElement.className = 'agent working';
        statusElement.textContent = 'Processing...';
        
        // Animate progress bar
        let progress = 0;
        const progressInterval = setInterval(() => {
            progress += 100 / (agent.duration / 50);
            if (progress <= 100) {
                progressElement.style.width = Math.min(progress, 100) + '%';
            }
        }, 50);
        
        // Simulate processing time
        await this.delay(agent.duration);
        
        // Complete the progress bar
        clearInterval(progressInterval);
        progressElement.style.width = '100%';
        
        // Mark as complete
        agentElement.className = 'agent complete';
        statusElement.textContent = 'Complete ✅';
        
        // Add result to live results
        this.addResult(agent.result);
        
        // Set next agent to ready if available
        if (agentIndex < this.agents.length - 1) {
            const nextAgent = this.agents[agentIndex + 1];
            const nextStatusElement = document.getElementById(`agent${nextAgent.id}-status`);
            nextStatusElement.textContent = 'Ready';
        }
    }

    addResult(result) {
        const resultsContainer = document.getElementById('liveResults');
        const resultDiv = document.createElement('div');
        resultDiv.innerHTML = `
            <h3 style="margin-bottom: 15px; color: #333;">${result.title}</h3>
            ${result.content}
        `;
        
        // Clear waiting message if it exists
        if (resultsContainer.querySelector('.waiting-message')) {
            resultsContainer.innerHTML = '';
        }
        
        resultsContainer.appendChild(resultDiv);
        resultsContainer.scrollTop = resultsContainer.scrollHeight;
    }

    resetDemo() {
        this.currentAgent = 0;
        this.isProcessing = false;
        
        // Reset all agents to waiting state
        this.agents.forEach((agent, index) => {
            const agentElement = document.getElementById(`agent${agent.id}`);
            const statusElement = document.getElementById(`agent${agent.id}-status`);
            const progressElement = document.getElementById(`progress${agent.id}`);
            
            agentElement.className = 'agent waiting';
            progressElement.style.width = '0%';
            
            if (index === 0) {
                statusElement.textContent = 'Ready';
            } else {
                statusElement.textContent = 'Waiting';
            }
        });
        
        // Reset results area
        document.getElementById('liveResults').innerHTML = `
            <div class="waiting-message">
                <div class="waiting-icon">⏳</div>
                <h3>Ready to Process</h3>
                <p>Start with Agent 1 to begin the analysis</p>
            </div>
        `;
        
        this.updateDemoControls();
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// Initialize demo when page loads
document.addEventListener('DOMContentLoaded', () => {
    new ClaimsDemo();
});

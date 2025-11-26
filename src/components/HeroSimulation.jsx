import React from 'react';

const HeroSimulation = () => {
    return (
        <div className="simulation-container glass-panel">
            <div className="simulation-content side-by-side">
                {/* Elchi Simulation */}
                <div className="sim-scene active">
                    <div className="node central-node elchi-node" style={{ width: 'auto', padding: '0.5rem 1rem', background: 'transparent', border: 'none', boxShadow: 'none' }}>
                        <img src="https://www.elchi.io/logo.png" alt="elchi.io" style={{ height: '40px', objectFit: 'contain' }} />
                        <div className="traffic-emitter"></div>
                    </div>

                    <div className="target-nodes">
                        <div className="node target-node">
                            <div className="node-icon">📱</div>
                            <div className="node-label">Mobile</div>
                            <div className="connection-line"></div>
                            <div className="traffic-particle p1"></div>
                        </div>
                        <div className="node target-node">
                            <div className="node-icon">💻</div>
                            <div className="node-label">Web</div>
                            <div className="connection-line"></div>
                            <div className="traffic-particle p2"></div>
                        </div>
                        <div className="node target-node">
                            <div className="node-icon">⚙️</div>
                            <div className="node-label">Service</div>
                            <div className="connection-line"></div>
                            <div className="traffic-particle p3"></div>
                        </div>
                    </div>
                    <div className="sim-description">
                        Intelligent Traffic Distribution
                    </div>
                </div>

                <div className="divider"></div>

                {/* Clustereye Simulation */}
                <div className="sim-scene active">
                    <div className="node central-node clustereye-node" style={{ width: 'auto', padding: '0.5rem 1rem', background: 'transparent', border: 'none', boxShadow: 'none' }}>
                        <img src="/clustereye-logo.png" alt="clustereye" style={{ height: '40px', objectFit: 'contain' }} />
                        <div className="scan-beam"></div>
                    </div>

                    <div className="target-nodes db-nodes">
                        <div className="node target-node" style={{ padding: '0.3rem', width: '80px', height: '80px', minWidth: '80px', minHeight: '80px' }}>
                            <img src="/mongodb-logo.png" alt="MongoDB" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                            <div className="status-indicator ok"></div>
                        </div>
                        <div className="node target-node" style={{ padding: '0.3rem', width: '80px', height: '80px', minWidth: '80px', minHeight: '80px' }}>
                            <img src="/postgresql-logo.png" alt="PostgreSQL" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                            <div className="status-indicator warning"></div>
                        </div>
                        <div className="node target-node" style={{ padding: '0.3rem', background: 'white', width: '80px', height: '80px', minWidth: '80px', minHeight: '80px' }}>
                            <img src="/mssql-logo.png" alt="MSSQL" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                            <div className="status-indicator ok"></div>
                        </div>
                    </div>

                    <div className="sim-description">
                        AI-Powered Observability
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSimulation;

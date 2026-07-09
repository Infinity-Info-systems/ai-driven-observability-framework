export type ObservabilityLayer = 'Data' | 'Signal' | 'Action' | 'Learning' | 'Business';

export type SignalStatus = 'Informational' | 'Active' | 'Predictive' | 'Needs Review';

export interface ObservabilitySignal {
  name: string;
  source: string;
  owner: string;
  status: SignalStatus;
  nextStep: string;
}

export interface ObservabilityLayerEntry {
  layer: ObservabilityLayer;
  question: string;
  artifact: string;
}

export interface ObservabilityRegistry {
  repository: string;
  purpose: string;
  layers: ObservabilityLayerEntry[];
  signals: ObservabilitySignal[];
  operatingPrinciples: string[];
  decisionRule: string;
  governanceQuestions: string[];
}

export const observabilityRegistry: ObservabilityRegistry = {
  repository: 'AI-Driven Observability Framework',
  purpose:
    'Turn telemetry into earlier action and better reliability decisions through predictive observability and learning loops.',
  layers: [
    {
      layer: 'Data',
      question: 'What was captured?',
      artifact: 'Telemetry inventory',
    },
    {
      layer: 'Signal',
      question: 'What changed?',
      artifact: 'Predictive signal map',
    },
    {
      layer: 'Action',
      question: 'What happens next?',
      artifact: 'Incident learning template',
    },
    {
      layer: 'Learning',
      question: 'What should improve?',
      artifact: 'Maturity model',
    },
    {
      layer: 'Business',
      question: 'Why does it matter?',
      artifact: 'Financial platform use case',
    },
  ],
  signals: [
    {
      name: 'Error rate spike',
      source: 'Service telemetry',
      owner: 'SRE team',
      status: 'Predictive',
      nextStep: 'Trigger incident review',
    },
    {
      name: 'Latency drift',
      source: 'Tracing and metrics',
      owner: 'Platform engineering',
      status: 'Active',
      nextStep: 'Check saturation and dependency health',
    },
    {
      name: 'Cost anomaly',
      source: 'FinOps and usage telemetry',
      owner: 'FinOps lead',
      status: 'Needs Review',
      nextStep: 'Validate service and spend correlation',
    },
    {
      name: 'Model confidence drop',
      source: 'AI anomaly detection',
      owner: 'Observability analytics',
      status: 'Predictive',
      nextStep: 'Escalate for validation',
    },
  ],
  operatingPrinciples: [
    'Observability should improve decision timing.',
    'Each signal should connect to an owner and a next step.',
    'More signals are not better unless they are actionable.',
    'Business impact should stay visible alongside technical metrics.',
  ],
  governanceQuestions: [
    'What changed first?',
    'Which signals are predictive rather than noisy?',
    'What should we do next?',
    'How do we prove the signal mattered?',
    'Which signals support business and financial outcomes?',
  ],
  decisionRule:
    'If a signal cannot be tied to a service outcome, an owner, and a next step, it should remain informational.',
};

export function getObservabilityOverview() {
  return {
    repository: observabilityRegistry.repository,
    purpose: observabilityRegistry.purpose,
    layerCount: observabilityRegistry.layers.length,
    signalCount: observabilityRegistry.signals.length,
    predictiveSignals: observabilityRegistry.signals.filter((signal) => signal.status === 'Predictive').length,
  };
}

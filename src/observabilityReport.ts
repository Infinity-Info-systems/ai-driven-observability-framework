import { observabilityRegistry } from './observabilityRegistry';

export interface ObservabilityReportRow {
  signal: string;
  source: string;
  owner: string;
  status: string;
  nextStep: string;
}

export function buildObservabilityReport() {
  const rows: ObservabilityReportRow[] = observabilityRegistry.signals.map((signal) => ({
    signal: signal.name,
    source: signal.source,
    owner: signal.owner,
    status: signal.status,
    nextStep: signal.nextStep,
  }));

  return {
    title: observabilityRegistry.repository,
    purpose: observabilityRegistry.purpose,
    layers: observabilityRegistry.layers,
    operatingPrinciples: observabilityRegistry.operatingPrinciples,
    governanceQuestions: observabilityRegistry.governanceQuestions,
    decisionRule: observabilityRegistry.decisionRule,
    reportRows: rows,
  };
}

export function buildObservabilitySummary() {
  return {
    totalSignals: observabilityRegistry.signals.length,
    predictiveSignals: observabilityRegistry.signals.filter((signal) => signal.status === 'Predictive').length,
    activeSignals: observabilityRegistry.signals.filter((signal) => signal.status === 'Active').length,
    reviewNeeded: observabilityRegistry.signals.filter((signal) => signal.status === 'Needs Review').length,
  };
}

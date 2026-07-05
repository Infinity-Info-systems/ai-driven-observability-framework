# Predictive Signal Map

This map connects observability signals to operational decisions before incidents become outages.

## Purpose

Use this map to identify the signals that matter most, assign action thresholds, and keep incident response tied to measurable indicators.

## Signal Domains

### 1. Service Health

- latency trend
- error rate trend
- saturation trend
- availability trend

### 2. Dependency Health

- upstream failure rate
- downstream timeout rate
- third-party latency
- integration retry rate

### 3. Capacity Risk

- CPU pressure
- memory pressure
- queue depth
- storage growth

### 4. User Experience

- page load timing
- transaction completion rate
- checkout or workflow failure rate
- abandonment spikes

### 5. Financial Impact

- cost spike per service
- cost per transaction
- waste indicators
- forecast variance

## Example Signal-to-Action Matrix

| Signal | Warning Threshold | Action |
| --- | --- | --- |
| P95 latency | > 300 ms for 15 min | Investigate dependency or scale issue |
| Error rate | > 1% for 10 min | Trigger incident review |
| Queue depth | Above safe capacity | Scale or rebalance workload |
| Cost spike | > 20% weekly variance | Review allocation and usage |

## Operating Rhythm

Recommended cadence:

1. Daily anomaly review
2. Weekly reliability signal review
3. Monthly signal threshold calibration
4. Quarterly executive reliability and cost review

## Recommended Actions

- define a named owner for each signal domain
- tie signal thresholds to SLOs where possible
- suppress noisy indicators that do not drive action
- keep a review log for threshold changes

## Related Artifacts

- [Reliability Signals](./reliability-signals.md)
- [Observability Assessment](../templates/observability-assessment.md)
- [SLO/SLI Template](../templates/slo-sli-template.md)
- [Incident Learning Template](../templates/incident-learning-template.md)

export type PtQueryDigestOutputJson = {
  classes: Classes[];
  global: {
    files: {
      name: string;
      size: number | null;
    }[];
    metrics: {
      Lock_time: Metric;
      Query_length: Metric;
      Query_time: Metric;
      Rows_examined: Metric;
      Rows_sent: Metric;
    };
    query_count: number;
    unique_query_count: number;
  };
};

type Classes = {
  attribute: string;
  checksum: string;
  distillate: string | null;
  example: {
    Query_time: string; // stringified number
    query: string;
    ts: string; // 'YYYY-MM-DD HH:mm:ss'
  };
  fingerprint: string | null;
  histograms: {
    Query_time: [
      number, // for 1us
      number, // for 10us
      number, // for 100us
      number, // for 1ms
      number, // for 10ms
      number, // for 100ms
      number, // for 1s
      number, // for 10s+
    ];
  };
  metrics: {
    Lock_time: Metric;
    Query_length: Metric;
    Query_time: Metric;
    Rows_examined: Metric;
    Rows_sent: Metric;
    db: {
      value: string;
    };
    host: {
      value: string;
    };
    user: {
      value: string;
    };
  };
  query_count: number;
  tables: {
    create: string;
    status: string;
  }[];
  ts_max: string; // 'YYYY-MM-DD HH:mm:ss'
  ts_min: string; // 'YYYY-MM-DD HH:mm:ss'
};

type Metric = {
  avg: string; // stringified number
  max: string; // stringified number
  median: string; // stringified number
  min: string; // stringified number
  pct_95: string; // stringified number
  stddev: string; // stringified number
  sum: string; // stringified number
};

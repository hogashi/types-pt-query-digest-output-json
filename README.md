# types-pt-query-digest-output-json

type definition of `pt-query-digest --output json` (experimental)

## usage

```typescript
import type { PtQueryDigestOutputJson } from "types-pt-query-digest-output-json";

// `pt-query-digest --output json`
const json = `{
  "classes": [
    {
      "attribute": "fingerprint",
      // ...
    },
    // ...
  ],
  "global": {
    // ...
  }
}`;

const a: PtQueryDigestOutputJson = JSON.parse(json);
```

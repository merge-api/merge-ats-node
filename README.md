## Deprecation Notice

Merge has released a new version of our [Typescript SDK](https://github.com/merge-api/merge-node-client/). As part of that release, we are providing a deprecation notice of our legacy SDKs.

To help give you time to plan your migration to our latest SDK:

- August 2023: SDK deprecation notice on our legacy Typescript SDKs.
- Until February 2024: we’ll support updates as needed and address bugs in priority order
- After February 2024: we’ll no longer make updates or bug fixes to the deprecated SDKs

For information about the deprecation notice see our [help center](https://help.merge.dev/en/collections/4258952-sdks) and for information about migrating to the Typescript SDK, see the [Typescript Migration Guide](https://help.merge.dev/en/articles/8229417-advanced-node-sdk-migration-guide).

# Merge ATS API TypeScript SDK

The unified API for building rich integrations with multiple Applicant Tracking System platforms.

This TypeScript package is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

* API version: 1.0
* Package version: 1.0.9
* Build package: org.openapitools.codegen.languages.TypeScriptNodeClientCodegen For more information, please visit https://www.merge.dev/

<a name="requirements"></a>
## Requirements

### Dependencies

* bluebird: ^3.5.0
* request: ^2.81.0
* @types/bluebird: *
* @types/request: *
* rewire: ^3.0.2

### Dev Dependencies
* typescript: ^4.3.3
* @types/node: ^15.12.2

<a name="getting-started"></a>
## Getting Started

Here is an example auth configuration for calling a Merge API:


```
import { AccountDetailsApi, HttpBearerAuth } from "@mergeapi/merge-ats-node";

const auth = new HttpBearerAuth();
auth.accessToken = "YOUR_API_KEY";

// Substitute AccountDetailsApi with the API you're trying to use
const apiInstance = new AccountDetailsApi();
apiInstance.setDefaultAuthentication(auth);
```


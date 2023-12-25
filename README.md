# Test of CJS vs ES6

## CJS

To compile with cjs (no errors):

```sh
cp cjs.tsconfig.json tsconfig.json
yarn tsc --noEmit
```

## ES6

To compile with es6:

```sh
cp es6.tsconfig.json tsconfig.json
yarn tsc --noEmit

[1 ~/git/aws4-axios-tst] yarn tsc --noEmit
yarn run v1.22.21
$ /Users/stbaldwin/git/aws4-axios-tst/node_modules/.bin/tsc --noEmit
src/main.ts:5:32 - error TS2345: Argument of type '(config: InternalAxiosRequestConfig<any>) => Promise<InternalAxiosRequestConfig<any>>' is not assignable to parameter of type '(value: InternalAxiosRequestConfig<any>) => InternalAxiosRequestConfig<any> | Promise<InternalAxiosRequestConfig<any>>'.
  Types of parameters 'config' and 'value' are incompatible.
    Type 'import("/Users/stbaldwin/git/aws4-axios-tst/node_modules/axios/index", { with: { "resolution-mode": "import" } }).InternalAxiosRequestConfig<any>' is not assignable to type 'import("/Users/stbaldwin/git/aws4-axios-tst/node_modules/axios/index").InternalAxiosRequestConfig<any>'.
      Types of property 'headers' are incompatible.
        Type 'import("/Users/stbaldwin/git/aws4-axios-tst/node_modules/axios/index", { with: { "resolution-mode": "import" } }).AxiosRequestHeaders' is not assignable to type 'import("/Users/stbaldwin/git/aws4-axios-tst/node_modules/axios/index").AxiosRequestHeaders'.
          Type 'AxiosRequestHeaders' is not assignable to type 'Partial<RawAxiosHeaders & { Accept: AxiosHeaderValue; "Content-Length": AxiosHeaderValue; "User-Agent": AxiosHeaderValue; "Content-Encoding": AxiosHeaderValue; Authorization: AxiosHeaderValue; } & { ...; }>'.
            Types of property 'Accept' are incompatible.
              Type 'import("/Users/stbaldwin/git/aws4-axios-tst/node_modules/axios/index", { with: { "resolution-mode": "import" } }).AxiosHeaderValue | undefined' is not assignable to type 'import("/Users/stbaldwin/git/aws4-axios-tst/node_modules/axios/index").AxiosHeaderValue | undefined'.
                Type 'AxiosHeaders' is not assignable to type 'AxiosHeaderValue | undefined'.
                  Type 'AxiosHeaders' is missing the following properties from type 'string[]': length, pop, push, join, and 33 more.

5 axios.interceptors.request.use(interceptor);
                                 ~~~~~~~~~~~


Found 1 error in src/main.ts:5
```

## Workaround

Making this change resolves the compilation error.

from:

```typescript
axios.interceptors.request.use(interceptor);
```

to:

```typescript
axios.interceptors.request.use(<any>interceptor);
```

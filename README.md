# Symbol-DNS

A tool for Symbol namespace owners to create decentralized Internet domains, using root namespace create top-level domain.

All DNS will store on namespace metadata.

Scope metadata key : D9766DB9BFCFF27C / symbol-dns-record-1

You can use it in Testnet right now, will continue improve the code.

## Format for DNS record.

1. That is `Name` and `Value` when you add the new DNS record.
2. `Name` can be any name you like, and it can't be repeat such as `hello`, if you like to setup root namespace as domain, please use `@`.
3. `Value` will be the link, it support `siasky` and `ipfs` website.

Example

| Name   | Value                           |
| ------ | ------------------------------- |
| @      | https://docs.symbolplatform.com |
| siasky | sia://file_hash                 |
| ipfs   | ipfs://file_hash                |

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Run your unit tests

```
yarn test:unit
```

### Run your end-to-end tests

```
yarn test:e2e
```

### Lints and fixes files

```
yarn lint
```

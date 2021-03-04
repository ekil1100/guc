# guc-proxy

`githubusercontent.com` 域名被墙了，用 vercel 的 serverless 来做转发。

## API

`GET /api`

### query

- `domain`: domain you want to proxy, default: `raw.githubusercontent.com`
- `path`: path after domain
- `ssl`: whether to using `https`, default: `true`

#### examples

```
/api?path=/DivineEngine/Profiles/master/Clash/RuleSet/China.yaml
/api?domain=google.com
/api?ssl=false
```

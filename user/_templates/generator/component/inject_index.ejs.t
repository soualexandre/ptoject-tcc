---
inject: true
to: src/components/index.ts
append: true
unless_exists: true
---
export { default as <%= h.changeCase.pascal(name) %> } from './<%= h.changeCase.pascal(name) %>';